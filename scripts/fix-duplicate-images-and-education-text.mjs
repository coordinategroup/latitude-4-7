// Fix duplicate images in Healthcare and Education case studies
// Also removes Souvren mentions from Education case study
// Run: node scripts/fix-duplicate-images-and-education-text.mjs

const PROJECT_ID = '0b2a8zw5'
const DATASET = 'production'
const TOKEN = 'skvosRmzfP5MhG5Cmfrauq8TtINVZ8ImV6CSUxLL9dKfEl9J005PuO9FGH9MESNqTCAqRELlwTtenMK0jaNnu1wABgz9Rg6nGy2dJHDQvdbiX230FHmRFb1p6tsjiVnVei7hXyCMJ7cn1yeo6DPN2TBOGzayPwwoKi2ZpQLVDEvccydbHXyw'
const API = `https://${PROJECT_ID}.api.sanity.io`

// Image sources — all landscape, all unique across case studies
const IMAGES = {
  // Healthcare: stethoscope + laptop, B&W stethoscope
  healthcareImage2: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=85&fm=jpg',
  healthcareImage3: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1920&q=85&fm=jpg',
  // Education: two women reviewing laptop together, overhead desk with notebook and tablet
  educationImage2: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=1920&q=85&fm=jpg',
  educationImage3: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1920&q=85&fm=jpg',
}

async function uploadImage(url, label) {
  console.log(`  Downloading ${label}...`)
  const imgRes = await fetch(url)
  if (!imgRes.ok) throw new Error(`Failed to download ${label}: ${imgRes.status}`)
  const bytes = await imgRes.arrayBuffer()

  console.log(`  Uploading ${label} to Sanity (${Math.round(bytes.byteLength / 1024)}kb)...`)
  const uploadRes = await fetch(`${API}/v2024-01-01/assets/images/${DATASET}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'image/jpeg',
    },
    body: bytes,
  })
  const result = await uploadRes.json()
  if (!uploadRes.ok) throw new Error(`Upload failed for ${label}: ${JSON.stringify(result)}`)
  const assetId = result.document._id
  console.log(`  Uploaded ${label}: ${assetId}`)
  return assetId
}

function imageRef(assetId) {
  return { _type: 'image', asset: { _type: 'reference', _ref: assetId } }
}

async function fetchEducationContent() {
  const query = encodeURIComponent('*[_id == "case-study-education-parents"][0] { challenge, approach, solution }')
  const res = await fetch(`${API}/v2024-01-01/data/query/${DATASET}?query=${query}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  })
  const data = await res.json()
  return data.result
}

function fixSouvrenInBlocks(blocks) {
  return blocks.map(block => {
    if (!block.children) return block
    const children = block.children.map(span => {
      if (!span.text) return span
      let text = span.text
      // Replace all Souvren mentions with appropriate alternatives
      text = text.replace(/When Souvren was brought in/g, 'When the team was brought in')
      text = text.replace(/From there, Souvren mapped/g, 'From there, the team mapped')
      text = text.replace(/Souvren brought parents/g, 'the team brought parents')
      text = text.replace(/Souvren produced/g, 'The work produced')
      // Catch any remaining mentions
      text = text.replace(/Souvren/g, 'the team')
      return { ...span, text }
    })
    return { ...block, children }
  })
}

async function mutate(mutations) {
  const res = await fetch(`${API}/v2024-01-01/data/mutate/${DATASET}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ mutations }),
  })
  const result = await res.json()
  if (!res.ok) throw new Error(`Mutation failed: ${JSON.stringify(result)}`)
  return result
}

async function main() {
  console.log('\n── Uploading images ────────────────────────────────────────────')

  const [hcImg2, hcImg3, edImg2, edImg3] = await Promise.all([
    uploadImage(IMAGES.healthcareImage2, 'Healthcare image2'),
    uploadImage(IMAGES.healthcareImage3, 'Healthcare image3'),
    uploadImage(IMAGES.educationImage2, 'Education image2'),
    uploadImage(IMAGES.educationImage3, 'Education image3'),
  ])

  console.log('\n── Fetching Education content ───────────────────────────────────')
  const edContent = await fetchEducationContent()
  const fixedChallenge = fixSouvrenInBlocks(edContent.challenge || [])
  const fixedApproach = fixSouvrenInBlocks(edContent.approach || [])
  const fixedSolution = fixSouvrenInBlocks(edContent.solution || [])

  // Verify fixes
  const combined = [...fixedChallenge, ...fixedApproach, ...fixedSolution]
    .map(b => b.children?.map(c => c.text).join('') || '')
    .join(' ')
  if (combined.toLowerCase().includes('souvren')) {
    throw new Error('Souvren mention still found after fix — check replacement logic')
  }
  console.log('  Souvren mentions removed from challenge, approach, solution')

  console.log('\n── Patching Healthcare ─────────────────────────────────────────')
  const hcResult = await mutate([{
    patch: {
      id: 'case-study-healthcare-referral',
      set: {
        image2: imageRef(hcImg2),
        image3: imageRef(hcImg3),
      },
    },
  }])
  console.log('  Patched:', JSON.stringify(hcResult.results))

  console.log('\n── Patching Education ──────────────────────────────────────────')
  const edResult = await mutate([{
    patch: {
      id: 'case-study-education-parents',
      set: {
        image2: imageRef(edImg2),
        image3: imageRef(edImg3),
        challenge: fixedChallenge,
        approach: fixedApproach,
        solution: fixedSolution,
      },
    },
  }])
  console.log('  Patched:', JSON.stringify(edResult.results))

  console.log('\n── Done ────────────────────────────────────────────────────────')
  console.log('Healthcare: http://localhost:3000/case-studies/the-referral-that-never-arrived')
  console.log('Education:  http://localhost:3000/case-studies/the-parents-never-logged-in\n')
}

main().catch(e => { console.error('\nError:', e.message); process.exit(1) })
