// Update slugs to match new outcome-focused titles
// Run: node scripts/update-case-study-slugs.mjs

const PROJECT_ID = '0b2a8zw5'
const DATASET = 'production'
const TOKEN = 'skvosRmzfP5MhG5Cmfrauq8TtINVZ8ImV6CSUxLL9dKfEl9J005PuO9FGH9MESNqTCAqRELlwTtenMK0jaNnu1wABgz9Rg6nGy2dJHDQvdbiX230FHmRFb1p6tsjiVnVei7hXyCMJ7cn1yeo6DPN2TBOGzayPwwoKi2ZpQLVDEvccydbHXyw'
const API = `https://${PROJECT_ID}.api.sanity.io`

const SLUGS = [
  {
    id: '5cc59de7-18fb-4209-8c8e-040ce4de9b0d',
    slug: 'accelerating-investor-onboarding-for-a-london-based-venture-capital-trust-manager',
  },
  {
    id: 'case-study-education-parents',
    slug: 'improving-parent-engagement-and-platform-adoption-for-an-independent-school',
  },
  {
    id: 'case-study-healthcare-referral',
    slug: 'reducing-referral-delays-and-improving-care-pathway-visibility-for-an-nhs-trust',
  },
  {
    id: 'case-study-hotel-revenue-management',
    slug: 'streamlining-revenue-management-across-a-uk-boutique-hotel-group',
  },
  {
    id: 'case-study-insurance-underwriting',
    slug: 'modernising-underwriting-operations-for-a-london-specialist-insurer',
  },
  {
    id: 'case-study-legal-billing-gap',
    slug: 'recovering-200k-in-lost-annual-revenue-for-a-mid-size-uk-law-firm',
  },
  {
    id: 'case-study-property-hk-tenants',
    slug: 'improving-tenant-satisfaction-and-service-delivery-for-a-hong-kong-residential-property-manager',
  },
  {
    id: 'case-study-retail-forty-stores',
    slug: 'unifying-digital-operations-across-40-stores-for-a-uk-fashion-retailer',
  },
]

const mutations = SLUGS.map(({ id, slug }) => ({
  patch: { id, set: { slug: { _type: 'slug', current: slug } } },
}))

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

SLUGS.forEach(({ id, slug }) => {
  console.log(`✓ ${id.substring(0, 30).padEnd(31)} → /${slug}`)
})
console.log(`\nAll ${SLUGS.length} slugs updated.`)
