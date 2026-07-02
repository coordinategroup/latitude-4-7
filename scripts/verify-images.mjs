const PROJECT_ID = '0b2a8zw5'
const DATASET = 'production'
const TOKEN = 'skvosRmzfP5MhG5Cmfrauq8TtINVZ8ImV6CSUxLL9dKfEl9J005PuO9FGH9MESNqTCAqRELlwTtenMK0jaNnu1wABgz9Rg6nGy2dJHDQvdbiX230FHmRFb1p6tsjiVnVei7hXyCMJ7cn1yeo6DPN2TBOGzayPwwoKi2ZpQLVDEvccydbHXyw'

const QUERY = encodeURIComponent('*[_type == "caseStudy"] | order(title asc) { _id, title, "img1": image1.asset->_id, "img2": image2.asset->_id, "img3": image3.asset->_id }')
const url = `https://${PROJECT_ID}.api.sanity.io/v2024-01-01/data/query/${DATASET}?query=${QUERY}`

const res = await fetch(url, { headers: { Authorization: `Bearer ${TOKEN}` } })
const d = await res.json()
const all = d.result

const seen = {}
all.forEach(cs => {
  [cs.img1, cs.img2, cs.img3].filter(Boolean).forEach(id => {
    const short = id.substring(6, 14)
    if (!seen[short]) seen[short] = []
    seen[short].push(cs.title.substring(0, 25))
  })
})

console.log('\n=== Image usage per case study ===')
all.forEach(cs => {
  const imgs = [cs.img1, cs.img2, cs.img3].map(i => i ? i.substring(6, 14) : 'null')
  console.log(cs.title.substring(0, 40).padEnd(41), imgs.join(' | '))
})

console.log('\n=== Cross-study duplicates ===')
let hasDupes = false
Object.entries(seen).forEach(([id, sources]) => {
  if (sources.length > 1) {
    hasDupes = true
    console.log('DUPLICATE', id, '->', sources.join(', '))
  }
})
if (!hasDupes) console.log('None. All images are unique across case studies.')

console.log('\n=== Within-study duplicates ===')
let hasInternalDupes = false
all.forEach(cs => {
  const imgs = [cs.img1, cs.img2, cs.img3].filter(Boolean).map(i => i.substring(6, 14))
  const uniq = new Set(imgs)
  if (uniq.size < imgs.length) {
    hasInternalDupes = true
    console.log('INTERNAL DUPLICATE in', cs.title.substring(0, 40), '->', imgs.join(' | '))
  }
})
if (!hasInternalDupes) console.log('None.')
