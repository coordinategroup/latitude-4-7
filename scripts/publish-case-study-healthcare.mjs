// Run: node scripts/publish-case-study-healthcare.mjs
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
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=85&fm=jpg',
      'healthcare-cover.jpg'
    ),
    uploadFromUrl(
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1920&q=85&fm=jpg',
      'healthcare-image1.jpg'
    ),
    uploadFromUrl(
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=85&fm=jpg',
      'healthcare-image2.jpg'
    ),
    uploadFromUrl(
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=85&fm=jpg',
      'healthcare-image3.jpg'
    ),
  ])

  console.log('Building document...')

  const doc = {
    _id: 'case-study-healthcare-referral',
    _type: 'caseStudy',
    title: 'The Referral That Never Arrived',
    industry: 'Healthcare',
    slug: { _type: 'slug', current: 'the-referral-that-never-arrived' },
    publishedAt: '2026-06-30',
    coverImage: imgField(coverRef, 'A stethoscope resting beside a laptop on a clinical desk, representing the intersection of medical practice and digital administration'),

    overview: [
      para('A private orthopaedic clinic in central London was losing new patients before they had ever spoken to anyone. General practitioners were sending referrals by letter and fax, which arrived in a shared inbox managed by two receptionists handling every other front-of-house responsibility simultaneously. Some patients heard back within a day. Others waited a fortnight. Many gave up and asked their general practitioner for a referral somewhere else.'),
      para('The clinic\'s management team knew their new patient conversion rate was soft, but the prevailing explanation was competitive pressure. A single patient journey mapping engagement dismantled that assumption and pointed directly at the intake process as the source of the problem.'),
    ],

    observations: [
      bullet({ text: 'Referral letters and faxes were arriving into a single shared email inbox with no triage, no ownership, and no visibility for clinical staff' }),
      bullet({ text: 'Acknowledgement times ranged from same-day to fourteen days, with no pattern the team could identify or explain' }),
      bullet({ text: 'Patients were calling to chase their own referrals, creating additional workload for the same receptionists responsible for clearing the backlog' }),
      bullet({ text: 'Some general practitioners had informally stopped referring to the clinic after patients reported poor communication' }),
      bullet({ text: 'There was no system-level record of how many referrals had been received, how many had converted, or how many had lapsed' }),
      bullet({ text: 'The clinic had no mechanism to alert clinical staff when referral volumes spiked, such as during school holidays or after media coverage of orthopaedic conditions' }),
    ],

    image1: imgField(img1Ref, 'A stethoscope resting on a clinical surface in black and white, evoking the weight of patient care and the moments that fall through the gaps in administrative process'),

    challenge: [
      para('The clinic had operated this way for years, and nobody had deliberately designed the intake process. It had simply accumulated. A receptionist had been given responsibility for the shared inbox when the clinic opened, and the arrangement had never been revisited as patient volumes grew. By the time we were engaged, two receptionists were managing referral intake alongside appointment scheduling, telephone enquiries, insurance authorisation requests, and front-desk check-ins.'),
      para('The clinical director suspected the problem was somewhere in the handover between a patient being referred and that patient booking their first appointment. What nobody knew was where, or why it happened to some patients and not others. The brief was deliberately open: map what actually happens when a general practitioner refers a patient to this clinic, and tell us where it breaks.'),
    ],

    methodology: [
      bullet({ text: 'Patient journey mapping across three referral pathways: letter, fax, and email, tracing each from the moment of general practitioner dispatch to first confirmed appointment' }),
      bullet({ text: 'On-site observation across two full working days, sitting with reception staff during peak morning hours to understand real task-switching patterns and interruption frequency' }),
      bullet({ text: 'Interviews with four general practitioners from local practices who referred to the clinic, to understand what they expected to happen after sending a referral and how their expectations compared to reality' }),
      bullet({ text: 'Heuristic evaluation of the clinic\'s existing administrative tools, including their patient management system and the shared email inbox configuration' }),
      bullet({ text: 'Co-design workshops with reception staff and the clinical director to map the ideal referral journey and identify which failure points were process failures versus tool failures' }),
      bullet({ text: 'Digital product audit of available referral management platforms and integration options with the clinic\'s existing patient management system' }),
    ],

    image2: imgField(img2Ref, 'Two people working at laptops with handwritten notes and sketches between them, representing a co-design workshop session mapping the ideal patient referral journey'),

    approach: [
      para('The on-site observation sessions were the most instructive part of the engagement. Within the first two hours it became clear that the inbox was not being ignored out of negligence. The receptionists were managing it as best they could given everything else competing for their attention. A referral letter would arrive, they would open it, realise they needed the clinical director to review it before they could confirm an appointment slot, and set it aside to ask later. Later rarely came the same day. On busy mornings it sometimes didn\'t come for three or four days.'),
      para('The general practitioner interviews added another layer. Several assumed the clinic had a dedicated referral coordinator. One had been referring patients to the clinic for six years and had no idea letters were going into a general inbox. Another had stopped referring entirely after two patients called to say they had heard nothing. She had assumed the clinic was full and started referring to a competitor instead.'),
      para('The co-design workshops helped the team distinguish between the problems that needed new tools and the problems that simply needed different rules. Some of the failures were structural: no dedicated inbox owner, no acknowledgement template, no escalation trigger when a referral hadn\'t been actioned after 48 hours. Others pointed toward a genuine product gap: the patient management system had no referral tracking module, and there was no way to report on intake conversion without manually cross-referencing two separate systems.'),
    ],

    solution: [
      para('The immediate recommendation was process-level and required no new technology. One receptionist was assigned as the named owner of referral intake on a rotating weekly basis, with a clear protocol: every referral acknowledged within four working hours, a holding message sent to the general practitioner if clinical review was required before booking, and a follow-up if no appointment had been confirmed within five working days. Simple, but it had never been written down.'),
      para('The second phase addressed the tooling. Working with the clinic\'s patient management system supplier, we scoped an integration with a referral tracking module that would allow incoming referrals to be logged, assigned, and monitored in a single view accessible to both receptionists and the clinical director. This replaced the shared inbox as the primary intake channel and created, for the first time, a reliable record of referral volume and conversion rate.'),
      para('The wireframing work focused on the internal dashboard rather than any patient-facing interface. The clinical director needed to see referral volume by week, average time to first contact, and the number of referrals still open beyond the five-day threshold. These three metrics gave the team a working definition of what good intake performance looked like, something they had not had before.'),
    ],

    image3: imgField(img3Ref, 'An analytics dashboard showing referral and conversion metrics on a laptop screen, representing the reporting visibility the clinic gained after implementing the new intake process'),

    outcomes: [
      bullet({ text: 'Average time from referral receipt to first patient contact reduced from ' }, { text: '8.4 days to 1.2 days', strong: true }, { text: ' within eight weeks of the new protocol going live' }),
      bullet({ text: 'New patient conversion rate from referral to booked appointment increased from ' }, { text: '54% to 79%', strong: true }, { text: ' over the first quarter following implementation' }),
      bullet({ text: 'Referral volume from local general practitioners increased by ' }, { text: '31%', strong: true }, { text: ' in the six months after the new process launched, as the clinic\'s responsiveness improved and general practitioners resumed referring' }),
      bullet({ text: 'The clinic identified ' }, { text: '23 lapsed referrals', strong: true }, { text: ' from the preceding six months that had never been acknowledged. Twelve of those patients were contacted, and seven subsequently booked appointments' }),
      bullet({ text: 'Reception staff reported a measurable reduction in inbound chasing calls from patients, freeing an estimated ' }, { text: '40 minutes per day', strong: true }, { text: ' previously spent managing referral-related enquiries' }),
      bullet({ text: 'The referral tracking dashboard was adopted across two additional clinic sites within four months of the initial rollout' }),
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
