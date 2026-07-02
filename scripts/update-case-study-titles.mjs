// Update all case study titles to be outcome-focused
// Run: node scripts/update-case-study-titles.mjs

const PROJECT_ID = '0b2a8zw5'
const DATASET = 'production'
const TOKEN = 'skvosRmzfP5MhG5Cmfrauq8TtINVZ8ImV6CSUxLL9dKfEl9J005PuO9FGH9MESNqTCAqRELlwTtenMK0jaNnu1wABgz9Rg6nGy2dJHDQvdbiX230FHmRFb1p6tsjiVnVei7hXyCMJ7cn1yeo6DPN2TBOGzayPwwoKi2ZpQLVDEvccydbHXyw'
const API = `https://${PROJECT_ID}.api.sanity.io`

const TITLES = [
  {
    id: '5cc59de7-18fb-4209-8c8e-040ce4de9b0d',
    title: 'Accelerating investor onboarding for a London-based venture capital trust manager',
  },
  {
    id: 'case-study-education-parents',
    title: 'Improving parent engagement and platform adoption for an independent school',
  },
  {
    id: 'case-study-healthcare-referral',
    title: 'Reducing referral delays and improving care pathway visibility for an NHS trust',
  },
  {
    id: 'case-study-hotel-revenue-management',
    title: 'Streamlining revenue management across a UK boutique hotel group',
  },
  {
    id: 'case-study-insurance-underwriting',
    title: 'Modernising underwriting operations for a London specialist insurer',
  },
  {
    id: 'case-study-legal-billing-gap',
    title: 'Recovering £200k in lost annual revenue for a mid-size UK law firm',
  },
  {
    id: 'case-study-property-hk-tenants',
    title: 'Improving tenant satisfaction and service delivery for a Hong Kong residential property manager',
  },
  {
    id: 'case-study-retail-forty-stores',
    title: 'Unifying digital operations across 40 stores for a UK fashion retailer',
  },
]

const mutations = TITLES.map(({ id, title }) => ({
  patch: { id, set: { title } },
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

TITLES.forEach(({ id, title }) => {
  console.log(`✓ ${id.substring(0, 30).padEnd(31)} → ${title}`)
})
console.log(`\nAll ${TITLES.length} titles updated.`)
