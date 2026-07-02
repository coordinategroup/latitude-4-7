// Patch: remove em dashes from the Legal Billing Gap case study
// Run: node scripts/patch-case-study-legal-billing-gap.mjs

const PROJECT_ID = '0b2a8zw5'
const DATASET = 'production'
const TOKEN = 'skvosRmzfP5MhG5Cmfrauq8TtINVZ8ImV6CSUxLL9dKfEl9J005PuO9FGH9MESNqTCAqRELlwTtenMK0jaNnu1wABgz9Rg6nGy2dJHDQvdbiX230FHmRFb1p6tsjiVnVei7hXyCMJ7cn1yeo6DPN2TBOGzayPwwoKi2ZpQLVDEvccydbHXyw'
const API = `https://${PROJECT_ID}.api.sanity.io`

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

const patch = {
  challenge: [
    para("The managing partner had a hypothesis. Revenue was not tracking with headcount. More fee earners, same billings, for the second year running. His initial ask was straightforward: help us evaluate a new practice management system."),
    para("What the firm actually needed was someone to look at how it worked before reaching for technology."),
    para("We spent the first three weeks observing before making any recommendations. We sat with fee earners across all four offices. We shadowed the billing team. We asked to see time-recording logs. What emerged was not a system problem."),
    para("A detailed write-off analysis, covering 24 months of closed matters, put unrecovered time at £214,000 annually. Not time that had been challenged and written off after negotiation. Time that had never been recorded at all. Hours that existed somewhere in a working day and evaporated before anyone typed them into the system."),
  ],

  approach: [
    para('Three failure points emerged clearly from the audit.'),
    para('The first was time recording. Fee earners across the firm were recording time at the end of the working day at best, and at the end of the week at worst. Reconstructing six billable hours from an email thread and a calendar is imprecise work. The losses accumulated in the gaps.'),
    para('The second was the bill approval process. Partners reviewed every invoice before it left the firm, regardless of value. A straightforward £800 disbursement for a will amendment sat in the same queue as a £40,000 commercial transaction review. The queue was long. Invoices sat.'),
    para('The third was the absence of profitability data. Nobody in the firm could tell you whether a fixed-fee conveyancing matter had made money until the matter closed, if they asked. Most did not ask.'),
    para('Rather than replace the practice management system, which was capable of more than the firm was using it for, we ran a co-design workshop with fee earners to redesign the time-recording workflow from the ground up. The tool was not the problem. The behaviour around it was.'),
  ],

  solution: [
    para('The programme ran in three phases over nine months.'),
    para('Phase one addressed time recording through mobile capture. Fee earners were given access to a light-touch time entry tool on their phones, integrated with the existing practice management system, that took less than thirty seconds per entry. The nudge was small. The habit changed.'),
    para('Phase two restructured bill approval. A value threshold was introduced: invoices below £2,000 could be issued by the responsible associate without partner review. Partners retained oversight of high-value and sensitive matters. The approval queue collapsed from 47 days to 11.'),
    para('Phase three delivered the data the partnership had never had. Matter profitability dashboards went live across all four offices, updated in real time and visible by fee earner, by team, and by practice area. For the first time, the firm could see which work was making money and which was not.'),
  ],
}

async function main() {
  console.log('\n── Patching document ─────────────────────────────────────────')
  const res = await fetch(
    `${API}/v2024-01-01/data/mutate/${DATASET}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mutations: [{
          patch: {
            id: 'case-study-legal-billing-gap',
            set: patch,
          }
        }]
      }),
    }
  )
  const result = await res.json()
  if (!res.ok) throw new Error(`Mutation failed: ${JSON.stringify(result)}`)

  console.log('\nPatched:', JSON.stringify(result.results))
  console.log('Preview: http://localhost:3000/case-studies/the-billing-gap\n')
}

main().catch(e => { console.error('\nError:', e.message); process.exit(1) })
