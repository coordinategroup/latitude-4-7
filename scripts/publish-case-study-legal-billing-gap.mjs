// Publish case study: "The Billing Gap"
// Run: node scripts/publish-case-study-legal-billing-gap.mjs

const PROJECT_ID = '0b2a8zw5'
const DATASET = 'production'
const TOKEN = 'skvosRmzfP5MhG5Cmfrauq8TtINVZ8ImV6CSUxLL9dKfEl9J005PuO9FGH9MESNqTCAqRELlwTtenMK0jaNnu1wABgz9Rg6nGy2dJHDQvdbiX230FHmRFb1p6tsjiVnVei7hXyCMJ7cn1yeo6DPN2TBOGzayPwwoKi2ZpQLVDEvccydbHXyw'
const API = `https://${PROJECT_ID}.api.sanity.io`

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
  console.log('\n── Uploading images ──────────────────────────────────────────')
  const [coverRef, img1Ref, img2Ref, img3Ref] = await Promise.all([
    uploadFromUrl('https://images.unsplash.com/photo-1589216532372-1c2a367900d9?w=1920&q=85&fm=jpg', 'law-gavel-cover.jpg'),
    uploadFromUrl('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=85&fm=jpg', 'law-signing-documents.jpg'),
    uploadFromUrl('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=85&fm=jpg', 'law-two-people-working.jpg'),
    uploadFromUrl('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=85&fm=jpg', 'law-analytics-dashboard.jpg'),
  ])

  console.log('\n── Building document ─────────────────────────────────────────')

  const doc = {
    _id: 'case-study-legal-billing-gap',
    _type: 'caseStudy',
    title: 'The Billing Gap: How a Mid-Size Law Firm Lost £200k a Year to Its Own Processes',
    industry: 'Legal',
    slug: { _type: 'slug', current: 'the-billing-gap' },
    publishedAt: '2026-06-30',
    coverImage: imgField(coverRef, 'A wooden gavel resting on a dark surface'),

    // ── Overview (left col) ──────────────────────────────────────────────────
    overview: [
      para('The firm had been growing steadily for years. Four offices across the East Midlands. Forty-three fee earners. A managing partner who had built the practice from a two-person outfit and could still name every client. By every outward measure, the firm was doing well.'),
      para('The billing figures told a different story.'),
    ],

    // ── Observations (right col) ─────────────────────────────────────────────
    observations: [
      bullet({ text: '4 offices across the East Midlands with no unified practice management workflow' }),
      bullet({ text: 'Time recording completed end-of-day or end-of-week, frequently reconstructed from email trails' }),
      bullet({ text: 'Average write-off rate of 24% against a partnership estimate of 8-10%' }),
      bullet({ text: 'Bill approval queue averaging 47 days from work completion to invoice issue' }),
      bullet({ text: 'No matter profitability data available at fee earner, team, or practice area level' }),
      bullet({ text: 'Work in progress and debtor days averaging 127 combined lock-up days' }),
    ],

    image1: imgField(img1Ref, 'A person signing a legal document at a desk'),

    // ── The Brief ────────────────────────────────────────────────────────────
    challenge: [
      para("The managing partner had a hypothesis. Revenue was not tracking with headcount — more fee earners, same billings, for the second year running. His initial ask was straightforward: help us evaluate a new practice management system."),
      para("What the firm actually needed was someone to look at how it worked before reaching for technology."),
      para("We spent the first three weeks observing before making any recommendations. We sat with fee earners across all four offices. We shadowed the billing team. We asked to see time-recording logs. What emerged was not a system problem."),
      para("A detailed write-off analysis — looking back across 24 months of closed matters — put unrecovered time at £214,000 annually. Not time that had been challenged and written off after negotiation. Time that had never been recorded at all. Hours that existed somewhere in a working day and evaporated before anyone typed them into the system."),
    ],

    // ── Methodology ──────────────────────────────────────────────────────────
    methodology: [
      bullet({ text: 'Digital product audit of the existing practice management system and associated workflows across all four offices' }),
      bullet({ text: 'On-site observation sessions with fee earners, the billing team, and the central accounts function' }),
      bullet({ text: 'Journey mapping of the full matter lifecycle from client instruction through to bill payment' }),
      bullet({ text: 'Heuristic evaluation of the time-recording interface and billing approval process' }),
      bullet({ text: 'Financial analysis of write-off patterns, billing cycle length, and lock-up position over a 24-month period' }),
      bullet({ text: 'Stakeholder interviews with six partners, twelve associates, and the firm\'s Office Manager' }),
      bullet({ text: 'Co-design workshop with fee earners from each office to surface friction points and explore alternative workflow patterns' }),
    ],

    image2: imgField(img2Ref, 'Two people collaborating over laptops and handwritten notes'),

    // ── The Approach ─────────────────────────────────────────────────────────
    approach: [
      para('Three failure points emerged clearly from the audit.'),
      para('The first was time recording. Fee earners across the firm were recording time at the end of the working day at best, and at the end of the week at worst. Reconstructing six billable hours from an email thread and a calendar is imprecise work. The losses accumulated in the gaps.'),
      para('The second was the bill approval process. Partners reviewed every invoice before it left the firm, regardless of value. A straightforward £800 disbursement for a will amendment sat in the same queue as a £40,000 commercial transaction review. The queue was long. Invoices sat.'),
      para('The third was the absence of profitability data. Nobody in the firm could tell you whether a fixed-fee conveyancing matter had made money until the matter closed, if they asked. Most did not ask.'),
      para('Rather than replace the practice management system — which was capable of more than the firm was using it for — we ran a co-design workshop with fee earners to redesign the time-recording workflow from the ground up. The tool was not the problem. The behaviour around it was.'),
    ],

    // ── The Solution ─────────────────────────────────────────────────────────
    solution: [
      para('The programme ran in three phases over nine months.'),
      para('Phase one addressed time recording through mobile capture. Fee earners were given access to a light-touch time entry tool on their phones, integrated with the existing practice management system, that took less than thirty seconds per entry. The nudge was small. The habit changed.'),
      para('Phase two restructured bill approval. A value threshold was introduced: invoices below £2,000 could be issued by the responsible associate without partner review. Partners retained oversight of high-value and sensitive matters. The approval queue collapsed from 47 days to 11.'),
      para('Phase three delivered the data the partnership had never had. Matter profitability dashboards — live, by fee earner, by team, and by practice area — went live across all four offices. For the first time, the firm could see which work was making money and which was not.'),
    ],

    image3: imgField(img3Ref, 'A laptop screen showing an analytics dashboard with charts and metrics'),

    // ── The Outcomes ─────────────────────────────────────────────────────────
    outcomes: [
      bullet({ text: 'Write-off rate fell from 24% to 11%', strong: true }, { text: ' within the first six months of go-live' }),
      bullet({ text: 'Average billing cycle reduced from 47 days to 11', strong: false }, { text: ' following the introduction of tiered approval thresholds', strong: false }),
      bullet({ text: 'Combined lock-up days fell from 127 to 89', strong: true }, { text: ', releasing approximately £190,000 in working capital' }),
      bullet({ text: '£215,000 in additional revenue', strong: true }, { text: ' recovered in the first full year through improved time capture alone' }),
      bullet({ text: 'Matter profitability reporting identified two practice areas running below cost; both were restructured before the end of the financial year' }),
    ],
  }

  console.log('\n── Publishing to Sanity ──────────────────────────────────────')
  const res = await fetch(
    `${API}/v2024-01-01/data/mutate/${DATASET}`,
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

  console.log('\nPublished:', result.results?.[0]?.id)
  console.log('View in Studio: http://localhost:3000/studio/desk/caseStudy')
  console.log('Preview:        http://localhost:3000/case-studies/the-billing-gap\n')
}

main().catch(e => { console.error('\nError:', e.message); process.exit(1) })
