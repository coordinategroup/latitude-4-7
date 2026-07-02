// Check orientations of candidate photos for the Legal case study
// Run: node scripts/check-legal-image-dims.mjs

const candidates = {
  // Law/legal content
  'nSpj-Z12lX0': 'Tingey - legal/law',
  'zeH-ljawHtg': 'Boscaro - legal document',
  'OQMZwNd3ThU': 'Scott Graham - signing documents',
  '5fNmWej4tAA': 'Scott Graham - office signing',
  '_H522lpuOAc': 'Tingey - scales of justice',
  'cokEmCez8Dk': 'Tingey - gavel',
  '7308PaLnRxQ': 'Tingey - law library',
  'AJqeO_-ifx0': 'lawyer working at desk',
  'EFi4Vo6QNXE': 'law books close up',
  'Txi_-He5GUY': 'law library shelves',
  // Office/professional UK
  'iOykDIkZLQw': 'modern open plan office',
  '0VGG7cqTwCo': 'conference room meeting',
  'bzqU01v-G54': 'professional office desk',
  'hpjSkU2UYSU': 'person at laptop in office',
  'QBpZGqEMsKg': 'boardroom glass table',
  'RLw-UC03Gwc': 'office corridor',
  // London / UK exterior
  'b3AYk8HKCl0': 'London buildings exterior',
  'ib5kVguVHxo': 'City of London skyline',
  'dE-3hBdSNMs': 'London street financial district',
  'jyhPMT0EFBw': 'London Canary Wharf',
}

function jpegDims(buf) {
  let i = 0
  while (i < buf.length - 9) {
    if (buf[i] !== 0xFF) { i++; continue }
    const marker = buf[i + 1]
    if (marker >= 0xC0 && marker <= 0xC3) {
      return { w: buf.readUInt16BE(i + 7), h: buf.readUInt16BE(i + 5) }
    }
    if (marker === 0xD8 || marker === 0xD9) { i += 2; continue }
    i += 2 + buf.readUInt16BE(i + 2)
  }
  return null
}

async function getDownloadUrl(photoId) {
  const res = await fetch(`https://unsplash.com/photos/${photoId}/download`, {
    redirect: 'manual',
    headers: { 'User-Agent': 'Mozilla/5.0' }
  })
  const loc = res.headers.get('location') || ''
  return loc.split('?')[0]
}

async function checkDims(photoId) {
  const baseUrl = await getDownloadUrl(photoId)
  if (!baseUrl) return null
  const res = await fetch(`${baseUrl}?w=400&fm=jpg`)
  const buf = Buffer.from(await res.arrayBuffer())
  return jpegDims(buf)
}

console.log('\nChecking image orientations...\n')
for (const [id, desc] of Object.entries(candidates)) {
  const dims = await checkDims(id)
  const orient = dims ? (dims.w > dims.h ? 'LANDSCAPE ✓' : 'PORTRAIT  ✗') : 'NO REDIRECT'
  const size = dims ? `${dims.w}x${dims.h}` : '?'
  console.log(`${orient}  ${size.padEnd(12)} ${id}  ${desc}`)
}
