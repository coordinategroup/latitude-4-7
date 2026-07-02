// Run: node scripts/publish-case-study-property-hk.mjs
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
    children: [{ _type: 'span', _key: k(), text, marks: [] }],
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
      marks: s.strong ? ['strong'] : [],
    })),
  }
}

async function uploadFromUrl(url, filename) {
  console.log(`  Uploading: ${filename}`)
  const img = await fetch(url)
  const buffer = await img.arrayBuffer()
  const res = await fetch(
    `${API}/v2024-01-01/assets/images/${DATASET}?filename=${filename}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'image/jpeg',
      },
      body: buffer,
    }
  )
  const data = await res.json()
  if (!res.ok) throw new Error(`Upload failed: ${JSON.stringify(data)}`)
  console.log(`  Done: ${data.document._id}`)
  return data.document._id
}

function imgField(ref, alt) {
  return {
    _type: 'image',
    asset: { _type: 'reference', _ref: ref },
    alt,
  }
}

async function main() {
  console.log('Uploading images...')

  // Cover: meeting room with team (gMsnXqILjp4 / photo-1542744173)
  // image1: wireframes on UX board (qWwpHwip31M / photo-1531403009284)
  // image2: two people working at desk with notes (5fNmWej4tAA / photo-1454165804606)
  // image3: analytics dashboard on laptop (hpjSkU2UYSU / photo-1460925895917)

  const [coverRef, img1Ref, img2Ref, img3Ref] = await Promise.all([
    uploadFromUrl(
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=85&fm=jpg',
      'property-hk-cover.jpg'
    ),
    uploadFromUrl(
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1920&q=85&fm=jpg',
      'property-hk-image1.jpg'
    ),
    uploadFromUrl(
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=85&fm=jpg',
      'property-hk-image2.jpg'
    ),
    uploadFromUrl(
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=85&fm=jpg',
      'property-hk-image3.jpg'
    ),
  ])

  console.log('Building document...')

  const doc = {
    _id: 'case-study-property-hk-tenants',
    _type: 'caseStudy',
    title: 'What Tenants Actually Want',
    industry: 'Property',
    slug: { _type: 'slug', current: 'what-tenants-actually-want' },
    publishedAt: '2026-06-30',

    coverImage: imgField(coverRef, 'A team meeting in a modern conference room, laptops open, discussing a shared presentation'),

    overview: [
      para('A commercial landlord managing three Grade A office buildings across Hong Kong Central and Kowloon had watched lease renewal rates fall below the market average for two consecutive years. The assumption, held quietly and never tested, was that rent was the problem. Rates were held flat. Nothing changed.'),
      para('We ran a co-design programme with existing tenants across all three buildings. What came back was not a complaint about money. It was a list of daily irritations that had quietly eroded any sense of goodwill between tenant and landlord. The relationship had been reduced to a bill and a broken app.'),
      para('A digital concierge product resolved the operational failures, created a channel for tenant communication that had not existed before, and gave the landlord visibility into how their buildings were actually being used. Renewal rates recovered within eighteen months.'),
    ],

    observations: [
      bullet({ text: 'Tenants across all three buildings reported that the existing building management application was slow to load and difficult to navigate, and that most had simply stopped using it after the first month.' }),
      bullet({ text: 'Maintenance requests required calling a facilities management number that was staffed only during standard business hours. Tenants submitting requests outside those hours had no confirmation, no tracking, and no indication of when work would be completed.' }),
      bullet({ text: 'There was no mechanism for tenants in the same building to connect with one another. Several tenants noted they had been unaware of events or networking opportunities happening on other floors.' }),
      bullet({ text: 'The landlord had no real-time data on common area usage, lift demand patterns, or peak occupancy periods across the portfolio.' }),
      bullet({ text: 'Despite flat rental rates, tenants described feeling that the buildings were not being invested in. The operational friction was read as indifference.' }),
    ],

    image1: imgField(img1Ref, 'Wireframe sketches pinned to a board during a UX planning session'),

    challenge: [
      para('The landlord came to us focused on pricing strategy. Two years of held rates had not moved renewal figures, and the next assumption was that rates needed to come down. Before committing to that, they wanted an independent view on why tenants were leaving.'),
      para('What the data could not tell them was whether the problem was financial or relational. Rent rolls and occupancy figures are lagging indicators. By the time they signal distress, the decision to leave has already been made.'),
      para('The brief became: find out what tenants actually want, and determine whether it can be delivered without a rent reduction.'),
    ],

    methodology: [
      bullet({ text: 'On-site observation across all three buildings over four days, covering morning arrival, lunchtime common area use, and end-of-day egress patterns.' }),
      bullet({ text: 'Structured interviews with facilities managers, front desk staff, and building management representatives to map the current service delivery model.' }),
      bullet({ text: 'Digital product audit of the existing building management application, assessing load performance, navigation structure, feature coverage, and mobile responsiveness.' }),
      bullet({ text: 'Heuristic evaluation of the maintenance request flow against established usability principles, identifying the specific points at which tenants abandoned the process.' }),
      bullet({ text: 'Co-design workshops with tenant representatives from fourteen companies across the three buildings, using journey mapping to surface pain points across the full tenancy lifecycle.' }),
      bullet({ text: 'Wireframing and rapid prototyping of a consolidated digital concierge product, with two rounds of tenant feedback before the design was handed to the development team.' }),
    ],

    image2: imgField(img2Ref, 'Two people working together at a desk, reviewing handwritten notes alongside laptops'),

    approach: [
      para('The co-design workshops were structured around the tenant journey rather than the landlord\'s service categories. We wanted tenants to describe their experience in their own terms, not map it onto the landlord\'s internal taxonomy. The result was a much clearer picture of where the relationship broke down.'),
      para('Three themes appeared consistently across all fourteen companies: that getting help when something went wrong felt harder than it should; that the building felt anonymous even after years of occupation; and that the tools provided to manage their tenancy were worse than the tools they used for everything else in their working lives.'),
      para('The digital product audit confirmed what the tenants described. The existing application had been built by the facilities management contractor and had never been designed with the tenant experience in mind. It was slow, visually cluttered, and structured around the contractor\'s workflow rather than the tenant\'s need. It had a two-star rating in the app stores and had not been updated in fourteen months.'),
      para('We proposed replacing it with a single digital concierge product covering four functions: maintenance requests with real-time tracking and out-of-hours submission; building announcements and event listings; a tenant directory with opt-in visibility; and a common area booking tool for meeting rooms and event spaces. The scope was deliberately constrained. We had seen enough over-engineered tenant platforms to know that feature volume does not drive adoption.'),
    ],

    solution: [
      para('The digital concierge launched first in the Central building, with a phased rollout to Kowloon over the following eight weeks. The maintenance request module went live before anything else, because that was the friction point tenants felt most acutely. Within the first two weeks, the facilities team was receiving and resolving requests at a rate that had previously required a full working day of phone calls to generate.'),
      para('The tenant directory and event listings were slower to gain traction, as expected. Building community does not happen because a tool exists. The landlord\'s building management teams were briefed to use the platform actively, posting monthly updates and coordinating two cross-tenant networking events in the first quarter. Attendance at the first event was modest. The second sold out.'),
      para('The landlord also gained something they had not had before: structured data on how the buildings were being used. Common area booking patterns, maintenance request volumes by floor and building, and engagement rates across the tenant base gave the asset management team a basis for capital planning decisions that had previously been made on instinct.'),
    ],

    image3: imgField(img3Ref, 'An analytics dashboard displayed on a laptop screen, showing building usage and engagement metrics'),

    outcomes: [
      bullet(
        { text: 'Lease renewal rate rose from ', strong: false },
        { text: '54% to 73%', strong: true },
        { text: ' across the three-building portfolio within eighteen months of the digital concierge launch.', strong: false }
      ),
      bullet(
        { text: 'Maintenance requests submitted outside business hours increased by ', strong: false },
        { text: '340%', strong: true },
        { text: ' in the first quarter, indicating that demand had existed but the previous channel had suppressed it.', strong: false }
      ),
      bullet(
        { text: 'Average resolution time for maintenance requests fell from ', strong: false },
        { text: '3.8 days to 1.2 days', strong: true },
        { text: ', driven by the removal of the telephone bottleneck and the introduction of direct technician assignment through the platform.', strong: false }
      ),
      bullet(
        { text: 'Application monthly active users reached ', strong: false },
        { text: '68% of the total tenant population', strong: true },
        { text: ' by month four, against an internal benchmark of 40% set at project outset.', strong: false }
      ),
      bullet(
        { text: 'The landlord avoided a projected ', strong: false },
        { text: '12% rent reduction', strong: true },
        { text: ' that had been under consideration before the research programme was commissioned.', strong: false }
      ),
      bullet(
        { text: 'Two tenants who had served notice to vacate during the research phase ', strong: false },
        { text: 'reversed their decision', strong: true },
        { text: ' and renewed for a further three years following the co-design workshops.', strong: false }
      ),
    ],
  }

  console.log('Publishing document...')
  const res = await fetch(`${API}/v2024-01-01/data/mutate/${DATASET}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ mutations: [{ createOrReplace: doc }] }),
  })
  const result = await res.json()
  if (!res.ok) throw new Error(`Mutation failed: ${JSON.stringify(result)}`)
  console.log('Published:', JSON.stringify(result.results))
}

main().catch(e => {
  console.error(e.message)
  process.exit(1)
})
