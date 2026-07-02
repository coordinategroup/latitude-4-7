// Patches the existing hotel case study draft with:
// 1. Abbreviations spelled out (OTA, RevPAR)
// 2. Replacement UK city street image for image2
// 3. Expanded methodology with UX/product toolkit activities
// Run: node scripts/update-draft-case-study.mjs

const PROJECT_ID = '0b2a8zw5'
const DATASET = 'production'
const TOKEN = 'skvosRmzfP5MhG5Cmfrauq8TtINVZ8ImV6CSUxLL9dKfEl9J005PuO9FGH9MESNqTCAqRELlwTtenMK0jaNnu1wABgz9Rg6nGy2dJHDQvdbiX230FHmRFb1p6tsjiVnVei7hXyCMJ7cn1yeo6DPN2TBOGzayPwwoKi2ZpQLVDEvccydbHXyw'
const API = `https://${PROJECT_ID}.api.sanity.io`
const DOC_ID = 'drafts.case-study-hotel-revenue-management'

// ── Portable Text helpers ──────────────────────────────────────────────────────

let _k = 0
const k = () => `k${++_k}`

function para(text) {
  return {
    _type: 'block', _key: k(), style: 'normal', markDefs: [],
    children: [{ _type: 'span', _key: k(), text, marks: [] }],
  }
}

function bullet(...spans) {
  return {
    _type: 'block', _key: k(), style: 'normal', listItem: 'bullet', level: 1, markDefs: [],
    children: spans.map(s => ({ _type: 'span', _key: k(), text: s.text, marks: s.strong ? ['strong'] : [] })),
  }
}

// ── Image upload ───────────────────────────────────────────────────────────────

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
  console.log(`  Done:        ${data.document._id}`)
  return data.document._id
}

function imgField(ref, alt) {
  return { _type: 'image', asset: { _type: 'reference', _ref: ref }, alt }
}

// ── Main ───────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n── Uploading replacement image ───────────────────────────────')
  // City street scene on a rainy night — UK city feel, no branded signage
  const img2Ref = await uploadFromUrl(
    'https://images.unsplash.com/photo-1741034793665-64c8afcf6c23?w=1920&q=85&fm=jpg',
    'uk-city-street-night.jpg'
  )

  console.log('\n── Patching draft document ───────────────────────────────────')

  const patch = {
    // ── Observations: spell out "online travel agent" ──────────────────────
    observations: [
      bullet({ text: '18 properties across the UK with no centralised revenue data or shared reporting' }),
      bullet({ text: 'Room pricing set at property level with no common methodology or rate governance' }),
      bullet({ text: 'Online travel agent commissions averaging 18% per booking across the portfolio' }),
      bullet({ text: 'No demand forecasting, rate fencing, or length-of-stay controls in place' }),
      bullet({ text: 'Revenue audit revealed consistent underselling during peak periods and overselling during predictably quiet ones' }),
    ],

    // ── Replacement image2 ─────────────────────────────────────────────────
    image2: imgField(img2Ref, 'A rainy city street at night, UK'),

    // ── Methodology: expanded with UX/product toolkit activities ──────────
    methodology: [
      bullet({ text: 'Revenue audit across all 18 properties covering a 90-day trailing period' }),
      bullet({ text: 'Competitive rate benchmarking per property and regional cluster' }),
      bullet({ text: 'Online travel agent dependency and channel cost analysis' }),
      bullet({ text: 'Demand pattern analysis using historical occupancy, rate, and booking window data' }),
      bullet({ text: 'Stakeholder interviews with General Managers, the central reservations team, and the Finance Director' }),
      bullet({ text: 'Customer journey mapping across the booking, check-in, and in-stay experience' }),
      bullet({ text: 'Digital product audit of the group website, booking engine, and rate display' }),
      bullet({ text: 'On-site service observation sessions across five properties' }),
      bullet({ text: 'Co-design workshops with General Managers to define rate governance rules and pricing ownership' }),
      bullet({ text: 'Heuristic evaluation of the existing property management reporting interface' }),
      bullet({ text: 'Wireframing and prototyping for the central revenue dashboard prior to build' }),
      bullet({ text: 'Gap analysis against revenue management best practice' }),
    ],

    // ── Solution: spell out "online travel agent" ──────────────────────────
    solution: [
      para("A single cloud-based revenue management system was deployed across all 18 properties, integrated with the group's existing property management software. The rollout ran in three waves over four months, starting with the two highest-revenue properties to prove the model before scaling."),
      para('A central reporting dashboard gave the incoming Revenue Director visibility across the full portfolio for the first time. Daily pickup reports, weekly rate review sessions, and monthly performance meetings replaced the ad-hoc calls that had previously passed for revenue management.'),
      para('Online travel agent channel mix was restructured to reduce reliance on third-party booking platforms. Direct booking incentives were introduced across the website, and a loyalty rate for returning guests was built into the rate architecture from the start.'),
    ],

    // ── Outcomes: spell out RevPAR and OTA ────────────────────────────────
    outcomes: [
      bullet({ text: '31% increase ', strong: true }, { text: 'in revenue per available room across the portfolio in the first full trading year after go-live' }),
      bullet({ text: 'Mid-week city-centre occupancy ', strong: false }, { text: 'up from 51% to 68%', strong: true }, { text: ', driven by length-of-stay promotions and a direct booking rate that undercut third-party platform pricing without eroding margin' }),
      bullet({ text: '£890,000 uplift ', strong: true }, { text: 'in August bank holiday revenue at coastal properties, closing a gap with the competitive set that had persisted unnoticed for three years' }),
      bullet({ text: 'Commission spend to third-party booking platforms fell by ', strong: false }, { text: '£340,000 annually', strong: true }, { text: ' as direct channel bookings grew' }),
      bullet({ text: 'Two loss-making properties returned to profitability within 14 months of go-live' }),
    ],
  }

  const res = await fetch(
    `${API}/v2024-01-01/data/mutate/${DATASET}`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        mutations: [{
          patch: {
            id: DOC_ID,
            set: patch,
          },
        }],
      }),
    }
  )

  const result = await res.json()
  if (!res.ok) throw new Error(`Patch failed: ${JSON.stringify(result)}`)

  console.log('\nDraft updated successfully.')
  console.log('View in Studio: http://localhost:3000/studio/desk/caseStudy')
  console.log('Preview:        http://localhost:3000/case-studies/what-forty-spreadsheets-cost-one-hotel-group\n')
}

main().catch(e => { console.error('\nError:', e.message); process.exit(1) })
