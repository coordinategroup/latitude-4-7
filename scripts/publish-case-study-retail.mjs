// Run: node scripts/publish-case-study-retail.mjs
const PROJECT_ID = '0b2a8zw5'
const DATASET = 'production'
const TOKEN = 'skvosRmzfP5MhG5Cmfrauq8TtINVZ8ImV6CSUxLL9dKfEl9J005PuO9FGH9MESNqTCAqRELlwTtenMK0jaNnu1wABgz9Rg6nGy2dJHDQvdbiX230FHmRFb1p6tsjiVnVei7hXyCMJ7cn1yeo6DPN2TBOGzayPwwoKi2ZpQLVDEvccydbHXyw'
const API = `https://${PROJECT_ID}.api.sanity.io`

let _k = 0
const k = () => `k${++_k}`

function para(text) {
  return {
    _type: 'block',
    _key: k(),
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: k(), text, marks: [] }]
  }
}

function bullet(...spans) {
  return {
    _type: 'block',
    _key: k(),
    style: 'normal',
    listItem: 'bullet',
    level: 1,
    markDefs: [],
    children: spans.map(s => ({
      _type: 'span',
      _key: k(),
      text: s.text,
      marks: s.strong ? ['strong'] : []
    }))
  }
}

async function uploadFromUrl(url, filename) {
  console.log(`  Uploading: ${filename}`)
  const img = await fetch(url)
  const buffer = await img.arrayBuffer()
  const res = await fetch(`${API}/v2024-01-01/assets/images/${DATASET}?filename=${filename}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'image/jpeg'
    },
    body: buffer
  })
  const data = await res.json()
  if (!res.ok) throw new Error(`Upload failed: ${JSON.stringify(data)}`)
  console.log(`  Done: ${data.document._id}`)
  return data.document._id
}

function imgField(ref, alt) {
  return {
    _type: 'image',
    asset: { _type: 'reference', _ref: ref },
    alt
  }
}

async function main() {
  console.log('Uploading images...')

  const [coverRef, img1Ref, img2Ref, img3Ref] = await Promise.all([
    uploadFromUrl(
      'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1920&q=85&fm=jpg',
      'retail-cover.jpg'
    ),
    uploadFromUrl(
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=85&fm=jpg',
      'retail-image1.jpg'
    ),
    uploadFromUrl(
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=85&fm=jpg',
      'retail-image2.jpg'
    ),
    uploadFromUrl(
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=85&fm=jpg',
      'retail-image3.jpg'
    ),
  ])

  console.log('Building document...')

  const doc = {
    _id: 'case-study-retail-forty-stores',
    _type: 'caseStudy',
    title: 'Forty Stores, One Login',
    industry: 'Retail',
    slug: { _type: 'slug', current: 'forty-stores-one-login' },
    publishedAt: '2026-06-30',

    coverImage: imgField(coverRef, 'Customers browsing in a UK fashion retail environment'),

    overview: [
      para('A 40-store UK fashion retailer came to us with a brief that said "build us an app." What they actually needed was someone to ask why the shop floor had been cut off from its own inventory system for two years.'),
      para('We ran a focused product discovery engagement across five stores, mapped how staff were actually solving the problem, and designed a lightweight internal tool that gave every team member real-time stock visibility without changing the back-end infrastructure they had already paid for.'),
    ],

    observations: [
      bullet({ text: 'Staff across all 40 stores were using personal phones to check stock on the company\'s wholesale portal, which was not built for that purpose and required individual login credentials nobody shared', strong: false }),
      bullet({ text: 'WhatsApp groups between stores had become the de facto stock-transfer and size-query system, with no audit trail and no guarantee of accuracy', strong: false }),
      bullet({ text: 'Promotional information was distributed as a laminated sheet updated weekly, meaning staff were regularly quoting offers that had expired or had not yet started', strong: false }),
      bullet({ text: 'The company had invested in a back-end inventory management system two years earlier. Not one person on the shop floor had been given access to it', strong: false }),
      bullet({ text: 'Customers asking whether a size was available at a nearby branch were routinely told "I\'m not sure" because there was no fast way to find out', strong: false }),
      bullet({ text: 'Store managers were spending an average of 45 minutes per day fielding size and stock queries from other stores via WhatsApp', strong: false }),
    ],

    image1: imgField(img1Ref, 'A retail manager reviewing documents and store briefings before the product discovery engagement'),

    challenge: [
      para('The brief arrived as a request for a customer-facing app. The retailer wanted something shoppers could use to check stock across nearby branches, reasoning that this would reduce the number of times staff had to say they didn\'t know.'),
      para('It was a reasonable instinct, but it had the problem backwards. Before you can tell a customer what stock exists elsewhere, someone in the business needs to know. The staff didn\'t. And building a public-facing product on top of an information gap that wide would mean exposing that gap to every customer who used it.'),
      para('We pushed back on the app brief early. Not to be difficult, but because the evidence pointed somewhere else. The real brief was this: give the people closest to the customer the information they need to do their job. Everything else, including whether a customer-facing feature ever made sense, could wait.'),
    ],

    methodology: [
      bullet({ text: 'On-site observation across five stores in different regions, shadowing staff through full trading shifts to understand how stock queries actually happened in practice', strong: false }),
      bullet({ text: 'Journey mapping of the end-to-end experience for a customer asking about stock availability in a different store, from the moment they asked to the moment they got an answer', strong: false }),
      bullet({ text: 'Heuristic evaluation of the existing wholesale portal and internal inventory system to assess whether either could be adapted for shop-floor use without rebuilding', strong: false }),
      bullet({ text: 'Digital product audit covering all existing tools, login systems, and data flows to understand what information existed, where it lived, and who could access it', strong: false }),
      bullet({ text: 'Co-design workshops with store managers and sales assistants at two pilot locations to understand what a useful tool would need to do and what it absolutely did not need to do', strong: false }),
      bullet({ text: 'Wireframing and rapid prototyping of a role-based internal interface, tested with staff in-store before any development began', strong: false }),
    ],

    image2: imgField(img2Ref, 'Two consultants working through product discovery notes and wireframes during a co-design session'),

    approach: [
      para('The discovery phase took four weeks. We spent the first two in stores, watching and asking questions. What we found was that staff had built workarounds that mostly worked. The WhatsApp groups were well organised. The laminated sheet got consulted constantly. The wholesale portal, however badly suited for the task, was being used dozens of times a day. People had adapted to the friction because no alternative existed.'),
      para('That told us two things. First, the need was real and the demand was high. Second, any solution had to be faster and simpler than the workarounds already in place, or staff would not use it. A new tool that required more steps than a WhatsApp message would fail, regardless of how well built it was.'),
      para('The co-design workshops surfaced a short list of what staff actually needed: current stock levels for any store, active promotions with correct dates, and a way to check whether a transfer request was in progress. That was it. No customer accounts, no loyalty integration, no app store presence. Three pieces of information, reliably accessible, from any device already in the building.'),
      para('We also established early that the inventory management system the retailer had already bought contained all the data required. The problem was access, not infrastructure. The solution did not need to move any data. It needed to surface data that already existed to people who currently had no way of seeing it.'),
    ],

    solution: [
      para('We designed a progressive web application (PWA) that sat in front of the existing inventory system through a read-only application programming interface (API) integration. Staff logged in once with a shared store credential, saw their own store\'s current stock, and could search any other store by postcode or name. Live promotional schedules replaced the laminated sheet. Transfer requests raised in the tool were logged and visible to the receiving store in real time.'),
      para('The interface was built for a phone held in one hand while a customer stood two feet away. That constraint shaped every decision. No navigation menus. No dashboards. A search bar, a result, and a clear call to action. The whole flow from opening the tool to answering a customer\'s question took under 20 seconds in user testing.'),
      para('Rollout happened in phases across eight weeks, starting with ten pilot stores. Training consisted of a single 15-minute briefing per store and a one-page reference card. By week three of the pilot, usage in pilot stores had exceeded the team\'s projections by a factor of two. The WhatsApp groups did not disappear entirely, but their volume dropped sharply. The promotional sheet was retired after the first full week.'),
    ],

    image3: imgField(img3Ref, 'Analytics dashboard showing adoption and performance data across retail store locations'),

    outcomes: [
      bullet({ text: 'Stock query time reduced from an average of ' }, { text: '4 minutes 20 seconds', strong: true }, { text: ' per query to under ' }, { text: '25 seconds', strong: true }, { text: ' across pilot stores' }),
      bullet({ text: 'Store manager time spent handling cross-store WhatsApp queries fell by ' }, { text: '73%', strong: true }, { text: ' in pilot locations within three weeks of launch' }),
      bullet({ text: 'Cross-store stock transfers increased by ' }, { text: '38%', strong: true }, { text: ' in the eight weeks following full rollout, recovering sales that had previously been lost to "out of stock" conversations with no follow-through' }),
      bullet({ text: 'Promotional accuracy improved to ' }, { text: '100%', strong: true }, { text: ' in participating stores, eliminating customer complaints related to incorrect or expired offers quoted by staff' }),
      bullet({ text: 'The tool was adopted by ' }, { text: 'all 40 stores', strong: true }, { text: ' within six weeks of full rollout, with no escalations or support requests logged after the first ten days' }),
      bullet({ text: 'Total project cost came in at ' }, { text: '34% below', strong: true }, { text: ' the original budget quoted for the customer-facing app the retailer had initially requested' }),
    ],
  }

  console.log('Publishing to Sanity...')

  const res = await fetch(`${API}/v2024-01-01/data/mutate/${DATASET}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ mutations: [{ createOrReplace: doc }] }),
  })

  const result = await res.json()
  if (!res.ok) throw new Error(`Mutation failed: ${JSON.stringify(result)}`)
  console.log('Published successfully:', JSON.stringify(result.results, null, 2))
}

main().catch(e => { console.error(e.message); process.exit(1) })
