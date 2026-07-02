// Replaces portrait image1 and image2 in the hotel case study draft with landscape images
// Run: node scripts/replace-portrait-images.mjs

const PROJECT_ID = '0b2a8zw5'
const DATASET = 'production'
const TOKEN = 'skvosRmzfP5MhG5Cmfrauq8TtINVZ8ImV6CSUxLL9dKfEl9J005PuO9FGH9MESNqTCAqRELlwTtenMK0jaNnu1wABgz9Rg6nGy2dJHDQvdbiX230FHmRFb1p6tsjiVnVei7hXyCMJ7cn1yeo6DPN2TBOGzayPwwoKi2ZpQLVDEvccydbHXyw'
const API = `https://${PROJECT_ID}.api.sanity.io`
const DOC_ID = 'drafts.case-study-hotel-revenue-management'

async function uploadFromUrl(url, filename) {
  console.log(`  Downloading: ${filename}`)
  const img = await fetch(url)
  if (!img.ok) throw new Error(`Failed to fetch ${url}: ${img.status}`)
  const buffer = await img.arrayBuffer()
  console.log(`  Uploading:   ${filename}`)
  const res = await fetch(
    `${API}/v2024-01-01/assets/images/${DATASET}?filename=${filename}`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'image/jpeg' },
      body: buffer,
    }
  )
  const data = await res.json()
  if (!res.ok) throw new Error(`Upload failed: ${JSON.stringify(data)}`)
  console.log(`  Done:        ${data.document._id} (${data.document.metadata?.dimensions?.width}x${data.document.metadata?.dimensions?.height})`)
  return data.document._id
}

async function main() {
  console.log('\n── Uploading landscape replacement images ─────────────────────')

  const [img1Ref, img2Ref] = await Promise.all([
    // Curved wooden ceiling, warm ambient lighting — hotel interior feel
    uploadFromUrl(
      'https://images.unsplash.com/photo-1766445318570-1dc4bf3f5d79?w=1920&q=85&fm=jpg',
      'hotel-interior-ceiling.jpg'
    ),
    // London city skyline at night — unmistakably UK
    uploadFromUrl(
      'https://images.unsplash.com/photo-1625728068394-083138dd2f7a?w=1920&q=85&fm=jpg',
      'london-skyline-night.jpg'
    ),
  ])

  console.log('\n── Patching draft ─────────────────────────────────────────────')
  const res = await fetch(
    `${API}/v2024-01-01/data/mutate/${DATASET}`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        mutations: [{
          patch: {
            id: DOC_ID,
            set: {
              image1: { _type: 'image', asset: { _type: 'reference', _ref: img1Ref }, alt: 'Curved wooden ceiling with warm ambient lighting in a hotel interior' },
              image2: { _type: 'image', asset: { _type: 'reference', _ref: img2Ref }, alt: 'London city skyline at night' },
            },
          },
        }],
      }),
    }
  )
  const result = await res.json()
  if (!res.ok) throw new Error(`Patch failed: ${JSON.stringify(result)}`)

  console.log('\nImages replaced. Both are now landscape.')
  console.log('Preview: http://localhost:3000/case-studies/what-forty-spreadsheets-cost-one-hotel-group\n')
}

main().catch(e => { console.error('\nError:', e.message); process.exit(1) })
