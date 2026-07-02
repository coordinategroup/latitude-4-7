// Run: node scripts/publish-case-study-education.mjs
const PROJECT_ID = '0b2a8zw5'
const DATASET = 'production'
const TOKEN = 'skvosRmzfP5MhG5Cmfrauq8TtINVZ8ImV6CSUxLL9dKfEl9J005PuO9FGH9MESNqTCAqRELlwTtenMK0jaNnu1wABgz9Rg6nGy2dJHDQvdbiX230FHmRFb1p6tsjiVnVei7hXyCMJ7cn1yeo6DPN2TBOGzayPwwoKi2ZpQLVDEvccydbHXyw'
const API = `https://${PROJECT_ID}.api.sanity.io`

let _k = 0
const k = () => `k${++_k}`

function para(text) {
  return { _type: 'block', _key: k(), style: 'normal', markDefs: [], children: [{ _type: 'span', _key: k(), text, marks: [] }] }
}

function bullet(...spans) {
  return { _type: 'block', _key: k(), style: 'normal', listItem: 'bullet', level: 1, markDefs: [], children: spans.map(s => ({ _type: 'span', _key: k(), text: s.text, marks: s.strong ? ['strong'] : [] })) }
}

async function uploadFromUrl(url, filename) {
  console.log(`  Uploading: ${filename}`)
  const img = await fetch(url)
  const buffer = await img.arrayBuffer()
  const res = await fetch(`${API}/v2024-01-01/assets/images/${DATASET}?filename=${filename}`, {
    method: 'POST', headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'image/jpeg' }, body: buffer
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
    uploadFromUrl('https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=1920&q=85&fm=jpg', 'education-cover.jpg'),
    uploadFromUrl('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=85&fm=jpg', 'education-image1.jpg'),
    uploadFromUrl('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=85&fm=jpg', 'education-image2.jpg'),
    uploadFromUrl('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=85&fm=jpg', 'education-image3.jpg'),
  ])

  const doc = {
    _id: 'case-study-education-parents',
    _type: 'caseStudy',
    title: 'The Parents Never Logged In',
    industry: 'Education',
    slug: { _type: 'slug', current: 'the-parents-never-logged-in' },
    publishedAt: '2026-06-30',
    coverImage: imgField(coverRef, 'A stack of well-worn books on a pale surface, suggesting an academic setting'),
    overview: [
      para('An independent secondary school in the south of England had spent £80,000 on a parent engagement platform. It covered homework tracking, school communications, fee payments, academic reports, and absence notifications. Eighteen months after launch, active monthly users represented 23% of the parent body.'),
      para('The school\'s IT director believed the problem was parents not being sufficiently comfortable with technology. A user experience (UX) audit found something different. The platform required three separate login credentials across two distinct interfaces. It sent an average of 11 push notifications per week. And it placed fee account information and pastoral welfare notes side by side on the same screen.'),
      para('Parents had not failed to engage. The product had failed them.'),
    ],
    observations: [
      bullet({ text: '77% of the parent body had not logged in during the previous month, despite the school sending three reminder emails', strong: false }),
      bullet({ text: 'Three separate login credentials were required to access the platform\'s full functionality across its two interfaces', strong: false }),
      bullet({ text: 'Parents received an average of 11 push notifications per week, many duplicated across email and the in-app message centre', strong: false }),
      bullet({ text: 'Fee account statements and pastoral welfare notes appeared in the same section of the same screen, with no visual or structural separation', strong: false }),
      bullet({ text: 'The platform had no mobile-optimised view; 68% of parent login attempts came from mobile devices', strong: false }),
      bullet({ text: 'First-time login required parents to complete a 14-step verification process before accessing any content', strong: false }),
    ],
    image1: imgField(img1Ref, 'A person writing notes by hand at a wooden desk, with a laptop and notebook nearby'),
    challenge: [
      para('The school had procured a widely-used platform without conducting structured research into how its parent community actually used digital tools in daily life. The assumption was that because the platform was feature-complete, adoption would follow. It did not.'),
      para('When Souvren was brought in, the brief was framed as a communications problem. Parents were not reading school updates. They were missing fee deadlines. Absence alerts were being ignored. The school wanted to know whether it needed a stronger enforcement policy or a new email strategy.'),
      para('But the data told a different story. Parents who did log in did so infrequently and for a narrow set of tasks, typically checking a specific report or paying a term\'s fees. They were not disengaged from school life. They were responding rationally to a product that made even simple tasks unnecessarily effortful.'),
    ],
    methodology: [
      bullet({ text: 'Digital product audit: end-to-end review of the platform\'s onboarding flow, navigation architecture, information hierarchy, and notification logic', strong: false }),
      bullet({ text: 'Heuristic evaluation: assessment of the platform against established usability principles, identifying 31 distinct friction points across the two interfaces', strong: false }),
      bullet({ text: 'On-site observation: accompanied parents through first-time and return login sessions in a controlled environment, capturing where and why they stopped', strong: false }),
      bullet({ text: 'Parent journey mapping: constructed journey maps for four distinct parent personas, covering a range of digital confidence levels, household structures, and school engagement patterns', strong: false }),
      bullet({ text: 'Contextual interviews: 22 depth interviews with parents across year groups, exploring attitudes to school communication, notification fatigue, and privacy concerns around financial and pastoral data', strong: false }),
      bullet({ text: 'Co-design workshops: two half-day sessions with mixed groups of parents, school administrative staff, and the IT director, generating and pressure-testing design concepts for a simplified experience', strong: false }),
      bullet({ text: 'Wireframing: low-fidelity prototype of a proposed unified interface, tested with 14 parents across two rounds of structured feedback', strong: false }),
    ],
    image2: imgField(img2Ref, 'Two people working collaboratively at a table with laptops and handwritten notes, representing a co-design workshop'),
    approach: [
      para('The audit began with the first screen a new parent would ever see: the registration email. From there, Souvren mapped every step required before a parent could read a single piece of school content. The process involved 14 distinct interactions, two separate email confirmations, and required parents to set up credentials for a secondary portal before the primary one would unlock. Several parents in the observation sessions gave up before reaching the home screen.'),
      para('The heuristic evaluation identified issues across consistency, error recovery, cognitive load, and trust. Financial information and sensitive pastoral notes shared a single view with no clear demarcation, which several parents described as unsettling. The notification volume had been configured by the school\'s administrative team with no understanding of how the platform\'s alert system worked. As a result, many parents were receiving the same message three times across different channels.'),
      para('The journey mapping work was particularly revealing. The four parent personas ranged from a working single parent checking updates on a commute, to a parent of a child with additional learning needs who needed reliable access to detailed welfare information. None of the four personas were well-served by the current structure. For each, the platform added friction where it should have removed it.'),
      para('The co-design workshops shifted the conversation. Rather than presenting findings and recommendations to the school leadership team, Souvren brought parents and school staff into the same room to work on solutions together. Administrative staff who had built the notification schedule were surprised to learn that parents experienced it as overwhelming. Parents were surprised to learn that some of the most useful data in the system was buried three levels deep.'),
    ],
    solution: [
      para('Souvren produced a set of design recommendations and a tested wireframe prototype for a restructured parent experience. The recommendations did not require the school to replace its existing platform. They required the school to reconfigure it, working within the tools already available, and to address the structural decisions that had been made at the point of set-up.'),
      para('The core change was consolidation. The two-interface model was collapsed into a single entry point with a unified login. The 14-step onboarding process was reduced to five steps, with verification deferred until a parent attempted to access fee or pastoral information rather than demanded upfront before they could see the school calendar. Notification frequency was restructured around weekly digests by default, with real-time alerts reserved for genuine urgency, such as same-day absence notifications.'),
      para('Financial and pastoral information was separated into distinct sections with clear labelling and a visible explanation of who within the school could see each type of record. This addressed a concern raised in every interview with parents who had children receiving learning support or pastoral care. They had not realised their welfare notes were visible in the same view as their account balance. Several described feeling that boundary as blurred in a way they were not comfortable with.'),
      para('The wireframe prototype was tested with 14 parents across two rounds. Task completion rates for the five most common actions improved from 41% to 89% in testing. Parents who had previously described the platform as confusing or off-putting completed the same tasks without assistance and without prompting.'),
    ],
    image3: imgField(img3Ref, 'An analytics dashboard displayed on a laptop screen, showing engagement metrics and user activity data'),
    outcomes: [
      bullet({ text: 'Active monthly users increased from ' }, { text: '23% to 71%', strong: true }, { text: ' of the parent body within six months of the redesign going live' }),
      bullet({ text: 'First-time registration completion rate rose from ' }, { text: '38% to 84%', strong: true }, { text: ' following the reduction in onboarding steps from 14 to 5' }),
      bullet({ text: 'Weekly notification volume reduced from an average of ' }, { text: '11 to 3 per parent', strong: true }, { text: ', with opt-out rates for notifications falling from 34% to 9%' }),
      bullet({ text: 'Fee payment on-time rates improved by ' }, { text: '22 percentage points', strong: true }, { text: ', attributed in part to clearer access to account information and a simplified payment flow' }),
      bullet({ text: 'Support requests to the school\'s administrative team relating to platform access dropped by ' }, { text: '61%', strong: true }, { text: ' in the first full term after implementation' }),
      bullet({ text: 'Parent satisfaction with school communication, measured in the school\'s annual survey, rose from ' }, { text: '52% to 79%', strong: true }, { text: ' approval' }),
    ],
  }

  console.log('Publishing document...')
  const res = await fetch(`${API}/v2024-01-01/data/mutate/${DATASET}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ mutations: [{ createOrReplace: doc }] }),
  })
  const result = await res.json()
  if (!res.ok) throw new Error(`Mutation failed: ${JSON.stringify(result)}`)
  console.log('Published:', JSON.stringify(result.results))
}

main().catch(e => { console.error(e.message); process.exit(1) })
