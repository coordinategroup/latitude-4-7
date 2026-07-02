// One-time script to create a draft case study with uploaded images
// Run: node scripts/create-draft-case-study.mjs

const PROJECT_ID = '0b2a8zw5'
const DATASET = 'production'
const TOKEN = 'skvosRmzfP5MhG5Cmfrauq8TtINVZ8ImV6CSUxLL9dKfEl9J005PuO9FGH9MESNqTCAqRELlwTtenMK0jaNnu1wABgz9Rg6nGy2dJHDQvdbiX230FHmRFb1p6tsjiVnVei7hXyCMJ7cn1yeo6DPN2TBOGzayPwwoKi2ZpQLVDEvccydbHXyw'
const API = `https://${PROJECT_ID}.api.sanity.io`
const MUTATIONS_API = `https://${PROJECT_ID}.api.sanity.io`

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
  // spans: array of { text, strong? }
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
  console.log('\n── Uploading images ──────────────────────────────────────────')
  const [coverRef, img1Ref, img2Ref, img3Ref] = await Promise.all([
    uploadFromUrl('https://images.unsplash.com/photo-1758193783649-13371d7fb8dd?w=1920&q=85&fm=jpg', 'hotel-lobby-cover.jpg'),
    uploadFromUrl('https://images.unsplash.com/photo-1779727279604-19ebb58b8b83?w=1920&q=85&fm=jpg', 'hotel-corridor.jpg'),
    uploadFromUrl('https://images.unsplash.com/photo-1742183635135-4bcc93df7fb3?w=1920&q=85&fm=jpg', 'hotel-sign-rain.jpg'),
    uploadFromUrl('https://images.unsplash.com/photo-1686061593213-98dad7c599b9?w=1920&q=85&fm=jpg', 'data-dashboard.jpg'),
  ])

  console.log('\n── Building document ─────────────────────────────────────────')

  const doc = {
    _id: 'drafts.case-study-hotel-revenue-management',
    _type: 'caseStudy',
    title: 'What Forty Spreadsheets Cost One Hotel Group',
    industry: 'Hospitality',
    slug: { _type: 'slug', current: 'what-forty-spreadsheets-cost-one-hotel-group' },
    publishedAt: '2026-06-23',
    coverImage: imgField(coverRef, 'Modern UK hotel lobby with sleek reception desk and ambient lighting'),

    // ── Overview (left col) ──────────────────────────────────────────────────
    overview: [
      para('A regional UK hotel group with 18 properties had no shared view of its own performance. Each General Manager priced rooms independently. Some used the revenue tools bundled with their property management software. Others used spreadsheets passed down from whoever held the job before them. One GM had a standing Monday morning ritual: check the local Marriott on Booking.com and price accordingly.'),
      para('The group was not struggling. Occupancy looked reasonable on paper. But nobody had stopped to ask what "reasonable" was actually costing them.'),
    ],

    // ── Observations (right col) ─────────────────────────────────────────────
    observations: [
      bullet({ text: '18 properties across the UK with no centralised revenue data or shared reporting' }),
      bullet({ text: 'Room pricing set at property level with no common methodology or rate governance' }),
      bullet({ text: 'OTA channel commissions averaging 18% per booking across the portfolio' }),
      bullet({ text: 'No demand forecasting, rate fencing, or length-of-stay controls in place' }),
      bullet({ text: 'Revenue audit revealed consistent underselling during peak periods and overselling during predictably quiet ones' }),
    ],

    image1: imgField(img1Ref, 'A long dimly lit hotel corridor with receding doorways'),

    // ── The Brief ────────────────────────────────────────────────────────────
    challenge: [
      para("The group's CEO had a gut feeling the business was leaving money on the table but no data to prove it. The initial ask was simple: recommend a revenue management system."),
      para('What they needed first was an honest picture of what was actually happening.'),
      para("We spent two weeks auditing before any software conversation took place. What the audit found was harder to ignore than a dashboard: on August bank holiday weekends, four of the group's coastal properties were priced an average of 34% below their competitive set. Meanwhile, three city-centre properties were pricing above market rate on January mid-week nights, sitting at 51% occupancy while the hotels around them filled."),
      para("The problem was not the software. It was the absence of any shared framework for thinking about demand."),
    ],

    // ── Methodology ──────────────────────────────────────────────────────────
    methodology: [
      bullet({ text: 'Revenue audit across all 18 properties covering a 90-day trailing period' }),
      bullet({ text: 'Competitive rate benchmarking per property and regional cluster' }),
      bullet({ text: 'OTA dependency and channel cost analysis' }),
      bullet({ text: 'Demand pattern analysis using historical occupancy, rate, and booking window data' }),
      bullet({ text: 'Stakeholder interviews with General Managers, the central reservations team, and the Finance Director' }),
      bullet({ text: 'Gap analysis against revenue management best practice' }),
    ],

    image2: imgField(img2Ref, 'A hotel sign glows in a rainy night on a wet city street'),

    // ── The Approach ─────────────────────────────────────────────────────────
    approach: [
      para('Rather than arriving with a platform recommendation, the first six weeks were spent establishing a common revenue language across the group. General Managers needed to understand why their Monday morning competitor check was costing them before any system would stick.'),
      para('The portfolio was tiered into three clusters: leisure coastal, regional city, and commuter belt. Each had its own demand profile and competitive dynamics. Rate strategy, floor pricing, length-of-stay rules, and OTA rate parity policies were defined per cluster before a single line of configuration was written.'),
      para('The technology implementation followed the strategy. Not the other way around.'),
    ],

    // ── The Solution ─────────────────────────────────────────────────────────
    solution: [
      para("A single cloud-based revenue management system was deployed across all 18 properties, integrated with the group's existing property management software. The rollout ran in three waves over four months, starting with the two highest-revenue properties to prove the model before scaling."),
      para('A central reporting dashboard gave the incoming Revenue Director visibility across the full portfolio for the first time. Daily pickup reports, weekly rate review sessions, and monthly performance meetings replaced the ad-hoc calls that had previously passed for revenue management.'),
      para('OTA channel mix was restructured to reduce reliance on the major booking platforms. Direct booking incentives were introduced across the website, and a loyalty rate for returning guests was built into the rate architecture from the start.'),
    ],

    image3: imgField(img3Ref, 'Analytics and revenue data on a computer screen'),

    // ── The Outcomes ─────────────────────────────────────────────────────────
    outcomes: [
      bullet({ text: '31% increase ', strong: true }, { text: 'in RevPAR across the portfolio in the first full trading year after go-live' }),
      bullet({ text: 'Mid-week city-centre occupancy ', strong: false }, { text: 'up from 51% to 68%', strong: true }, { text: ', driven by length-of-stay promotions and a direct booking rate that undercut OTA pricing without eroding margin' }),
      bullet({ text: '£890,000 uplift ', strong: true }, { text: 'in August bank holiday revenue at coastal properties, closing a gap with the competitive set that had persisted unnoticed for three years' }),
      bullet({ text: 'OTA commission spend fell by ', strong: false }, { text: '£340,000 annually', strong: true }, { text: ' as direct channel bookings grew' }),
      bullet({ text: 'Two loss-making properties returned to profitability within 14 months of go-live' }),
    ],
  }

  console.log('\n── Creating draft in Sanity ──────────────────────────────────')
  const res = await fetch(
    `${MUTATIONS_API}/v2024-01-01/data/mutate/${DATASET}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mutations: [{ createOrReplace: doc }] }),
    }
  )
  const result = await res.json()
  if (!res.ok) throw new Error(`Mutation failed: ${JSON.stringify(result)}`)

  console.log('\nDraft created:', result.results?.[0]?.id)
  console.log('View in Studio: http://localhost:3000/studio/desk/caseStudy')
  console.log('Preview:        http://localhost:3000/case-studies/what-forty-spreadsheets-cost-one-hotel-group\n')
}

main().catch(e => { console.error('\nError:', e.message); process.exit(1) })
