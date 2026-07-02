// Run: node scripts/publish-case-study-insurance.mjs
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
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'image/jpeg' },
    body: buffer
  })
  const data = await res.json()
  if (!res.ok) throw new Error(`Upload failed: ${JSON.stringify(data)}`)
  console.log(`  Done: ${data.document._id}`)
  return data.document._id
}

function imgField(ref, alt) {
  return { _type: 'image', asset: { _type: 'reference', _ref: ref }, alt }
}

async function main() {
  console.log('Uploading images...')
  const [coverRef, img1Ref, img2Ref, img3Ref] = await Promise.all([
    uploadFromUrl('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=85&fm=jpg', 'insurance-cover.jpg'),
    uploadFromUrl('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=85&fm=jpg', 'insurance-image1.jpg'),
    uploadFromUrl('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=85&fm=jpg', 'insurance-image2.jpg'),
    uploadFromUrl('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=85&fm=jpg', 'insurance-image3.jpg'),
  ])

  console.log('Building document...')

  const doc = {
    _id: 'case-study-insurance-underwriting',
    _type: 'caseStudy',
    title: 'Underwriting by Spreadsheet',
    industry: 'Insurance',
    slug: { _type: 'slug', current: 'underwriting-by-spreadsheet' },
    publishedAt: '2026-06-30',

    coverImage: imgField(coverRef, 'Analytics dashboard showing risk data on a screen, representing the complexity of underwriting data systems'),

    overview: [
      para('A specialist London market insurer writing professional indemnity and directors and officers liability policies was losing more than half its working day before underwriters had assessed a single risk. Six separate systems, no single point of entry, and a compliance checklist buried on an intranet nobody could find.'),
      para('We ran a discovery engagement to map the full workflow before any product design began. What we found was not a technology problem. It was a process problem that technology had made worse over time.'),
    ],

    observations: [
      bullet({ text: 'Underwriters averaged ', strong: false }, { text: '61% of their working day', strong: true }, { text: ' on data gathering and formatting before assessment could begin', strong: false }),
      bullet({ text: 'Six separate systems', strong: true }, { text: ' required to process a single submission: an email inbox, a shared drive, a third-party credit database, a broking platform, an Excel pricing model, and an intranet compliance checklist', strong: false }),
      bullet({ text: 'The intranet compliance checklist', strong: true }, { text: ' was so poorly structured that most underwriters had saved a personal copy to their desktop rather than locate it each time', strong: false }),
      bullet({ text: 'No single system held a complete view', strong: true }, { text: ' of a submission at any stage in its lifecycle', strong: false }),
      bullet({ text: 'The team had grown', strong: true }, { text: ' from four to eleven underwriters over three years, but throughput had not scaled at the same rate', strong: false }),
      bullet({ text: 'Informal workarounds', strong: true }, { text: ' had proliferated, meaning two underwriters assessing similar risks might follow entirely different processes', strong: false }),
    ],

    image1: imgField(img1Ref, 'Laptop displaying an analytics dashboard in a professional office environment'),

    challenge: [
      para('The insurer had been writing specialist lines for over a decade. Professional indemnity (PI) and directors and officers (D&O) liability policies are complex instruments. Each submission can involve company accounts, sector risk assessments, credit checks, claims history, and regulatory standing. The underwriter\'s job is to synthesise all of that into a pricing decision.'),
      para('That job had not changed. But the infrastructure around it had accumulated over years without any coherent plan. A submissions inbox that received PDFs, Word documents, and the occasional fax. A shared network drive organised by no discernible logic. A third-party credit database accessed through a separate browser login with its own username and password. A broking platform that held relationship data but not risk data. A pricing model in Excel that was considered the authoritative record, despite being saved in multiple versions across multiple machines. And a compliance checklist that existed on an intranet built in 2014 and not meaningfully updated since.'),
      para('When capacity pressure grew, the answer had always been to hire another underwriter. But the onboarding time for a new underwriter to reach full productivity was long, because the process itself was opaque. There was no written process. Knowledge lived in the heads of the senior team.'),
    ],

    methodology: [
      bullet({ text: 'Stakeholder interviews', strong: true }, { text: ' with all eleven underwriters, the head of underwriting, the compliance lead, and two broking relationship managers', strong: false }),
      bullet({ text: 'On-site observation', strong: true }, { text: ' across three full working days, shadowing underwriters as they worked through live submissions from receipt to decision', strong: false }),
      bullet({ text: 'Time and motion audit', strong: true }, { text: ' tracking how each minute of the working day was allocated across system access, data formatting, decision-making, and communication', strong: false }),
      bullet({ text: 'End-to-end journey mapping', strong: true }, { text: ' of the submission lifecycle, from broker email receipt through to policy binding, surfacing every handoff, delay, and duplication point', strong: false }),
      bullet({ text: 'Digital product audit', strong: true }, { text: ' assessing each of the six systems in use, including data model, user interface quality, integration capability, and contract terms', strong: false }),
      bullet({ text: 'Heuristic evaluation', strong: true }, { text: ' of the intranet compliance tool against established usability principles', strong: false }),
      bullet({ text: 'Co-design workshops', strong: true }, { text: ' with underwriters and the compliance lead to validate findings and generate ideas for a consolidated workflow', strong: false }),
      bullet({ text: 'Wireframing', strong: true }, { text: ' of a unified submission workspace, tested with underwriters before any build decisions were made', strong: false }),
    ],

    image2: imgField(img2Ref, 'Two professionals collaborating at a desk with laptops and handwritten notes during a working session'),

    approach: [
      para('The discovery phase took four weeks. We started with observation rather than interviews, because people describe what they think they do, not what they actually do. Sitting alongside underwriters as they worked through real submissions surfaced things no interview would have caught: the moment someone switched browser tabs fifteen times in six minutes, or the way a senior underwriter had built a private Excel tracker to compensate for the absence of a proper pipeline view.'),
      para('The journey mapping sessions were run with small groups, never the full team. Mixed groups produce consensus. Small groups produce honesty. We ran three separate sessions with different cohorts and then compared outputs, looking for patterns that appeared across all three and anomalies that appeared in only one.'),
      para('The digital product audit was deliberately unsentimental. Two of the six systems were well-designed tools being used poorly because they had never been properly configured for this team\'s workflow. Two were legacy tools that had long since passed their useful life. One, the third-party credit database, was genuinely valuable and had no viable replacement. The Excel pricing model was the most sensitive item: it had been built by a single senior underwriter who had since moved on, and nobody was entirely confident they understood all of its logic.'),
      para('From this we produced a findings report and a set of wireframes for a unified submission workspace. The workspace was not a new system. It was a configured view across existing data, pulling information from the broking platform and the credit database into a single interface, with the compliance checklist embedded directly rather than linked to an external page.'),
    ],

    solution: [
      para('The recommendation was to phase the work in two stages. The first stage addressed the immediate friction: a configured workspace within the existing broking platform that consolidated the most-accessed data fields, embedded the compliance checklist, and created a structured submission log to replace the informal Excel trackers. This required no new software procurement and could be deployed within the existing contract.'),
      para('The second stage addressed the pricing model. Rather than rebuilding it as a standalone tool, we recommended integrating its logic into the broking platform\'s native pricing module, with the outgoing model\'s author brought in as a consultant to document the methodology before anything was migrated. This protected institutional knowledge that had previously existed only in one person\'s memory.'),
      para('The co-design workshops had surfaced one finding that shaped both recommendations: underwriters did not want less complexity in their work. They wanted the complexity to be in the risk, not in the tooling. The solution had to make the assessment work harder, not easier. Easier would have felt like deskilling. What they needed was clarity: a clear submission state, a clear compliance position, a clear pricing rationale. Everything else was noise that the workspace could absorb.'),
    ],

    image3: imgField(img3Ref, 'Two professionals shaking hands in a modern office setting, representing a successful client engagement'),

    outcomes: [
      bullet({ text: 'Average time spent on data gathering reduced from 61% to 28%', strong: true }, { text: ' of the working day within three months of the new workspace going live', strong: false }),
      bullet({ text: 'Submission-to-decision cycle time cut from an average of ', strong: false }, { text: '9.2 days to 4.7 days', strong: true }, { text: ' for standard professional indemnity risks', strong: false }),
      bullet({ text: 'Compliance checklist completion rate', strong: true }, { text: ' rose from an estimated 64% (based on audit sampling) to 97% within six weeks of it being embedded in the workspace', strong: false }),
      bullet({ text: 'New underwriter onboarding time', strong: true }, { text: ' reduced from an average of fourteen weeks to reach full productivity, to eight weeks, because the workflow was now documented and consistent', strong: false }),
      bullet({ text: 'The pricing model migration', strong: true }, { text: ' was completed over eight weeks with zero pricing errors identified in the parallel-running validation period', strong: false }),
      bullet({ text: 'Throughput increased by ', strong: false }, { text: '34%', strong: true }, { text: ' in the six months following implementation, without adding headcount', strong: false }),
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
  console.log('Published:', JSON.stringify(result.results))
}

main().catch(e => { console.error(e.message); process.exit(1) })
