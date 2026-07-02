import { writeFileSync, readFileSync } from 'fs'
import { tmpdir } from 'os'
import { join } from 'path'

const candidates = {
  'VRzUyuHy8p0': 'Modern interior hallway warm lighting',
  'sV9buaOKUQI': 'Modern building facade night lighting',
  'UZVSGO89ibA': 'London city skyline at night',
  'wLq5GwNWx5w': 'City skyline night time (Travel)',
  'bGWu7lcoZqY': 'City skyline night time (London)',
  'JS3BH31COQg': 'Curved wooden ceiling ambient lighting',
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
  const orient = dims ? (dims.w > dims.h ? 'LANDSCAPE ✓' : 'PORTRAIT  ✗') : 'ERROR'
  const size = dims ? `${dims.w}x${dims.h}` : '?'
  console.log(`${orient}  ${size.padEnd(12)} ${id}  ${desc}`)
}
