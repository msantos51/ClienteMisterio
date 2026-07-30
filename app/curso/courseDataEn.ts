/*
 * FILE DESCRIPTION: Complete Mystery Shopper course content (EN).
 * Each module has paginated theory, decision examples and a final quiz.
 * Tone: direct, with humour, but rigorous. Golden rule: no filler.
 */

export type QuizQuestion = {
 id: string;
 question: string;
 options: string[];
 correctIndex: number;
 videoUrl?: string;
};

export type EvaluationExample = {
 title: string;
 scenario: string;
 correctApproach: string;
 incorrectApproach: string;
};

export type CoursePage = {
 title: string;
 blocks: string[];
};

export type CourseModule = {
 id: number;
 title: string;
 description: string;
 content: string[];
 pages?: CoursePage[];
 quiz: QuizQuestion[];
 keywords?: string[];
 practicalTip?: string;
 warning?: string;
 benefit?: string;
 evaluationExamples?: EvaluationExample[];
};

export const courseModules: CourseModule[] = [
 /* ==========================================================
    MODULE 1
    ========================================================== */
 {
  id: 1,
  title: "The invisible side of service",
  description:
   "What a mystery shopper really is, who pays the bill, and why your well-written opinion is worth money.",
  keywords: ["Mystery Shopping", "Service standards", "Brand", "Agency", "Evaluator"],
  practicalTip:
   "From today, turn any café into a lesson: time how long it takes to be served. You'll notice things you never saw before.",
  warning:
   "Confidentiality is sacred. One screenshot in a group chat is enough to get you removed from a platform — with no way back.",
  benefit:
   "You understand the whole business before you step into it. Knowing who pays and why means better missions and better reports.",
  content: [
   "Mystery shopping means measuring a real customer experience against defined criteria, without revealing that you are evaluating.",
   "Three stakeholders: the brand defines what it wants to know, the agency coordinates and validates, the evaluator executes and documents.",
   "Formats: in person, by phone, digital, image audits, compliance checks, deliveries and multi-phase missions.",
   "Your report has real consequences for real people: rigour isn't politeness, it's an obligation.",
  ],
  pages: [
   {
    title: "Page 1 — What it is (and what it isn't)",
    blocks: [
     "Bad news: there's no trench coat and no magnifying glass. Good news: you get paid to walk into a shop, a café or a hotel like any other customer — and walk out with information the brand cannot obtain any other way.",
     "**Mystery shopping** is a measurement method. Someone behaves like an ordinary customer and records, against defined criteria, what actually happened: how long they waited, whether they were greeted, whether the product was explained, whether the toilets were clean. Without revealing they are evaluating.",
     "The difference from a satisfaction survey is huge. A survey asks *\"were you satisfied?\"* three days later, when memory has already invented half of it. Mystery shopping measures *\"did the employee greet the customer within 30 seconds: yes or no\"*, in the moment. One produces opinions; the other produces facts.",
     "And no, you're not the police. You're not there to catch anyone out. You're there to check whether what the brand promised its own team is actually happening at the counter — which is a very different thing.",
    ],
   },
   {
    title: "Page 2 — Who's who in this game",
    blocks: [
     "There are always three parties. **The brand** defines what it wants to know and pays the bill: \"we want to know whether our staff offer the loyalty card\". **The agency or platform** turns that into a questionnaire, recruits evaluators, validates reports and delivers results. **You, the evaluator**, run the visit and produce the information.",
     "This chain explains nearly everything that will happen to you. If a report is returned, it's because the agency can't defend it to the brand. If a mission pays more, it's because it demands more time, more discretion or more expense. None of it is arbitrary.",
     "The typical cycle: brand sends the brief → agency publishes the mission → you apply → you're approved → you execute → you submit the report with evidence → the agency validates → you get paid. Between visit and payment, expect 15 to 45 days depending on the platform.",
     "Keep this in mind: **the agency is your client**. It's the agency that rates you. A met deadline, a clean report and an attached receipt are worth more to your career than any elegant prose.",
    ],
   },
   {
    title: "Page 3 — The mission formats",
    blocks: [
     "**In person.** The classic. You enter a shop, restaurant, bank, pharmacy or dealership and evaluate service, process and environment. It's the most common format and the best paid per hour when it goes well.",
     "**Mystery calling.** You call a support line or a store and evaluate waiting time, script, courtesy and information given. Can be done in pyjamas, pays less, but adds up quickly.",
     "**Digital.** You submit a form on the brand's website, use an app or request a quote, and response time and quality are measured. In the automotive sector, for instance, a reply within three hours is often required.",
     "**Image audits, compliance and deliveries.** Here you check window displays, signage, uniforms, legal compliance or the condition of a parcel delivered to your door. And then there are **multi-phase missions**: you fill in a form, evaluate the callback, visit the store and evaluate the follow-up — the whole customer journey, measured step by step.",
    ],
   },
   {
    title: "Page 4 — The weight of what you write",
    blocks: [
     "An 80-store chain discovers only 40% of customers are greeted when the standard demands 100%. It trains the teams. Three months later it's at 95% and sales are up. That change started with a report written by someone like you, in a café, phone in pocket.",
     "That's why the responsibility is real. On the other side there are people whose bonus, promotion or contract renewal may depend on what you wrote. A hastily written \"did not greet\", when they actually did, is unfair and untrue.",
     "Brands do check. Many cross-reference reports with cameras, till records and shift rosters. If you say you were there at 2:30pm and the receipt says 3:10pm, your report collapses — and your reputation with it.",
     "The rule that's worth the whole course: **if you can't prove it, don't write it**. Everything else — style, vocabulary, speed — comes later.",
    ],
   },
  ],
  evaluationExamples: [
   {
    title: "Example 1 — Missed sales opportunity",
    scenario:
     "In a clothing store you ask for a specific shirt. The employee takes you to the product but doesn't suggest anything complementary.",
    correctApproach:
     "\"Approached 2 min after entry. Presented the requested item. Did NOT suggest complementary items or alternatives (script item 7 not met).\"",
    incorrectApproach:
     "\"Poor service, he should have offered more. Didn't like it.\" — that's an opinion, not an observation.",
   },
   {
    title: "Example 2 — Protocol not followed",
    scenario:
     "In a pharmacy, the brief states every customer must receive the promotions leaflet. You receive nothing.",
    correctApproach:
     "\"Asked for a headache recommendation. Assistant suggested a product and explained dosage. Did NOT hand over the promotions leaflet (protocol item 5).\"",
    incorrectApproach:
     "\"She forgot the leaflet.\" — with no reference to the protocol, it reads like your oversight rather than a measured failure.",
   },
  ],
  quiz: [
   {
    id: "m1q1",
    question: "What is the main objective of a mystery shopping mission?",
    options: [
     "To shop at a discount",
     "To measure compliance with service standards defined by the brand",
     "To replace customer satisfaction surveys",
     "To compare prices with competitors",
    ],
    correctIndex: 1,
   },
   {
    id: "m1q2",
    question: "Who are the three parties in a mystery shopping project?",
    options: [
     "End customer, supplier and distributor",
     "Brand, agency/platform and evaluator",
     "Store manager, employee and customer",
     "Marketing, HR and commercial management",
    ],
    correctIndex: 1,
   },
   {
    id: "m1q3",
    question: "What distinguishes mystery shopping from a satisfaction survey?",
    options: [
     "It's cheaper for the brand",
     "It records the experience in the moment, against objective, defined criteria",
     "It requires no preparation",
     "It is always done by phone",
    ],
    correctIndex: 1,
   },
   {
    id: "m1q4",
    question: "What typically happens in a multi-phase mission?",
    options: [
     "You visit the same store several times in one day",
     "You evaluate sequential steps of the journey: digital contact, call, visit and follow-up",
     "You evaluate several competing brands at once",
     "You repeat the mission until the result is positive",
    ],
    correctIndex: 1,
   },
   {
    id: "m1q5",
    question: "Why is report accuracy non-negotiable?",
    options: [
     "Because agencies pay by word count",
     "Because conclusions affect real people and are often cross-checked against other records",
     "Because the brand only reads the first line",
     "Because the report is published online",
    ],
    correctIndex: 1,
   },
  ],
 },

 /* ==========================================================
    MODULE 2
    ========================================================== */
 {
  id: 2,
  title: "The market and where the missions are",
  description:
   "Who operates in Portugal, which sectors pay best, and how to pick missions that are actually worth it.",
  keywords: ["Platforms", "Sectors", "Fee", "Reimbursement", "Real cost"],
  practicalTip:
   "Register on 5 to 8 platforms, not one. Missions come in waves: people on a single platform wait weeks.",
  warning:
   "A €12 mission 40 km away isn't a mission, it's a drive funded by your fuel tank. Always run the real-cost maths first.",
  benefit:
   "You learn to filter. Instead of accepting everything, you pick the three missions a week that genuinely pay.",
  content: [
   "The Portuguese market is served by international platforms and local agencies; registering on several is standard practice.",
   "Highest-volume sectors: food retail, restaurants, fashion, banking, telecoms, pharmacy, automotive and hospitality.",
   "Pay splits into fee (your work) and reimbursement (expense returned) — they are not the same thing.",
   "Real cost = travel + visit time + report time. Only then do you know whether a mission is worth it.",
  ],
  pages: [
   {
    title: "Page 1 — Who operates in Portugal",
    blocks: [
     "The Portuguese market is small but very active. It's served by two types of operator: **international platforms**, which run projects for global brands across dozens of countries, and **local agencies**, smaller, with direct contracts with national chains.",
     "The international ones bring volume, better portals and more predictable payments; they tend to use long forms. Local agencies sometimes pay more and are more flexible, but publish fewer missions and communicate heavily by email.",
     "There's no exclusivity. **Being registered on several platforms is normal practice** and it's what separates one mission a month from eight. Missions appear in waves: when a brand launches a project, 200 visits go live at once and are gone within days.",
     "A sanity check: a serious platform **never** charges you to register, never charges a \"certification\" fee, and never makes you pay for training to unlock missions. If it does, it isn't a platform — it's a scam.",
    ],
   },
   {
    title: "Page 2 — Sectors, rhythms and rates",
    blocks: [
     "**Retail and fashion (€10–40).** High volume, short visits of 20 to 45 minutes, often with a reimbursed purchase. This is where almost everyone starts.",
     "**Restaurants and cafés (€20–60).** Meal reimbursed up to a cap. Demands attention to timings, temperature, plating and hygiene — and an available stomach.",
     "**Banking, insurance and telecoms (€15–50).** You simulate opening an account, requesting credit or switching tariffs. Long forms, heavy on legal compliance. Pays well if you write well.",
     "**Pharmacy and health (€10–30).** Quick visits, tight scripts. **Automotive (€20–70).** Test drive, quote and follow-up, often multi-phase. **Hospitality (€80–150).** Paid stay, 60-item checklists and a report that takes hours — the experienced league, and worth getting to.",
    ],
   },
   {
    title: "Page 3 — The maths that decides everything",
    blocks: [
     "Here's beginner mistake number one: looking only at the advertised amount. A mission isn't worth what it pays; it's worth what's **left** after costs and time.",
     "Always separate two things. The **fee** pays for your work — that's what you earn. The **reimbursement** returns a mandatory expense (the coffee, the shirt, the lunch) and is not profit: it's money that left and came back. A \"€45 mission\" with €30 of reimbursement is really a €15 fee.",
     "The formula you'll use for the rest of your career: **(fee − non-reimbursed costs) ÷ (travel time + visit time + report time)**. If the result falls below what you consider acceptable per hour, decline without drama. Declining is management, not unprofessionalism.",
     "A real example: €25 mission, 40 minutes driving round trip, 30 minutes on site, 40 minutes writing. That's almost two hours and about €6 of fuel: roughly €10/hour. Now group three missions in the same area on the same day and the hourly rate almost doubles — the secret was never the mission, it was the **route**.",
    ],
   },
  ],
  quiz: [
   {
    id: "m2q1",
    question: "What is standard practice regarding platform registration?",
    options: [
     "Choose only one, for exclusivity",
     "Register on several, because missions appear in waves",
     "Register only with local agencies",
     "Wait for an invitation before registering",
    ],
    correctIndex: 1,
   },
   {
    id: "m2q2",
    question: "What is the difference between fee and reimbursement?",
    options: [
     "They are synonyms used by different platforms",
     "The fee pays your work; the reimbursement returns a mandatory expense",
     "The reimbursement is always higher than the fee",
     "The fee only exists in in-person missions",
    ],
    correctIndex: 1,
   },
   {
    id: "m2q3",
    question: "How do you correctly assess whether a mission is worth it?",
    options: [
     "By the amount advertised on the platform",
     "By the net amount divided by total time, including travel and report writing",
     "By the prestige of the brand being evaluated",
     "By the number of questions in the form",
    ],
    correctIndex: 1,
   },
   {
    id: "m2q4",
    question: "Which sign clearly indicates a \"platform\" is not trustworthy?",
    options: [
     "Requesting ID to validate payment",
     "Charging money to register or to unlock missions",
     "Having long forms",
     "Paying 30 days after validation",
    ],
    correctIndex: 1,
   },
   {
    id: "m2q5",
    question: "What is the most effective way to increase your hourly rate?",
    options: [
     "Accept only hospitality missions",
     "Group several missions in the same area on the same day",
     "Write longer reports",
     "Apply for every available mission",
    ],
    correctIndex: 1,
   },
  ],
 },

 /* ==========================================================
    MODULE 3
    ========================================================== */
 {
  id: 3,
  title: "Profile, conduct and ethics",
  description:
   "Discretion, impartiality and confidentiality: the three rules that keep you in the game (and the lines you never cross).",
  keywords: ["Discretion", "Impartiality", "Confidentiality", "Conflict of interest", "GDPR"],
  practicalTip:
   "Rehearse a short answer to \"are you doing a survey?\": \"No, just browsing, thanks.\" Said naturally, it closes the subject.",
  warning:
   "Never evaluate a store where you work, used to work, or have family. A conflict of interest voids the mission and burns your account.",
  benefit:
   "Reputation is your asset. Discreet, reliable evaluators get direct invitations to the best-paying missions.",
  content: [
   "A good evaluator is invisible: behaves like an ordinary customer, without drawing attention or interfering with service.",
   "Impartiality means evaluating performance against the standard, not the person's charm.",
   "Confidentiality covers the brand, the brief, the form and the very existence of the project.",
   "Conflicts of interest, fraud and mishandled personal data are the three fastest ways to end a career.",
  ],
  pages: [
   {
    title: "Page 1 — The art of being invisible",
    blocks: [
     "The best compliment you can get is none at all. If nobody noticed you, you did the job perfectly. The evaluator is an ordinary customer: walks in, looks around, asks what anyone would ask, pays and leaves.",
     "What gives amateurs away: a visible notepad, a phone pointed at the employee, overly technical questions, constant clock-watching, spending 40 minutes in a shop where nobody stays more than 10. And the all-time classic — obviously asking the employee's name, when the badge or the receipt would have told you.",
     "Adapt to context. In a DIY store you can wander the aisles for five minutes without suspicion; in a jeweller's, you can't. In a café, sitting by the window and lingering is natural; in a bank, it isn't.",
     "If someone asks directly, don't invent elaborate stories — complicated stories collapse on their own. A short, friendly sentence solves it: *\"No, just browsing, thanks.\"* And on you go.",
    ],
   },
   {
    title: "Page 2 — The three golden rules",
    blocks: [
     "**1. Discretion.** Never reveal that you're evaluating, during or after. Not to the friendly waiter, not to the friend who works there, not on social media. Entire projects have been cancelled by a post captioned \"today I was a mystery shopper 😎\".",
     "**2. Impartiality.** You evaluate performance against the defined standard, not the person. An employee can be charming and still miss six script items. They can be curt and meet every one. Your job is to record what happened, not to hand out sympathy.",
     "**3. Confidentiality.** The brief, the form, the end client's name and even the project's existence are restricted information. You sign up to that when you accept a mission — and yes, it is legally binding.",
     "These rules aren't bureaucracy. They're what keeps brands paying for this service. If staff know when they're being evaluated, the data becomes worthless — and the whole market disappears.",
    ],
   },
   {
    title: "Page 3 — Red lines",
    blocks: [
     "**Conflict of interest.** Don't evaluate where you work, used to work, or have family or close friends. That's not excessive caution: it's the minimum. Platforms cross-check addresses and history and close accounts when they find out.",
     "**Fraud.** Inventing a visit, reusing an old receipt, copying a previous report or asking someone else to run the mission for you all mean immediate exclusion and, in some cases, civil liability. It's always worth less than the mission you were trying to save.",
     "**Personal data.** You may record the first name shown on a badge and a functional description (\"counter assistant, around 30, blue shirt\"). Don't collect health data, political opinions, addresses or facial photographs without a basis for it. GDPR applies to you like any other professional.",
     "**Entrapment.** Don't build artificial scenarios to catch people out: don't request illegal discounts, don't stage conflicts, don't push after a no. You're evaluating normal service — not a trap you set yourself.",
    ],
   },
  ],
  evaluationExamples: [
   {
    title: "Example — Friendly employee, script not followed",
    scenario:
     "The employee was extremely friendly, chatted for five minutes, but didn't mention the current promotion or offer the loyalty card.",
    correctApproach:
     "\"Courteous and available service. Did NOT present the current promotion (item 4) or offer the loyalty card (item 9).\" — separates attitude from compliance.",
    incorrectApproach:
     "\"He was so nice I marked everything positive.\" — friendliness doesn't replace script items and distorts the brand's data.",
   },
  ],
  quiz: [
   {
    id: "m3q1",
    question: "What's the right response if an employee asks whether you're doing a survey?",
    options: [
     "Confirm it, to stay honest",
     "Deny it simply and naturally, without inventing elaborate stories",
     "Leave the store immediately",
     "Show them the mission brief",
    ],
    correctIndex: 1,
   },
   {
    id: "m3q2",
    question: "What does impartiality mean in an evaluation?",
    options: [
     "Always marking positively so nobody gets hurt",
     "Evaluating performance against the defined standard, regardless of friendliness",
     "Only evaluating the items that went well",
     "Giving the same score to every store of a brand",
    ],
    correctIndex: 1,
   },
   {
    id: "m3q3",
    question: "Can you evaluate a store where a close relative used to work?",
    options: [
     "Yes, as long as they aren't on shift that day",
     "No — it's a conflict of interest and voids the mission",
     "Yes, if you declare it later in the report",
     "Yes, if the platform is international",
    ],
    correctIndex: 1,
   },
   {
    id: "m3q4",
    question: "What kind of information about an employee is appropriate to record?",
    options: [
     "Badge name and observable functional description",
     "Home address and phone number",
     "Health status and family situation",
     "A close-up photograph of their face",
    ],
    correctIndex: 0,
   },
   {
    id: "m3q5",
    question: "Why does confidentiality underpin the entire market?",
    options: [
     "Because it reduces agency costs",
     "Because if teams know when they're evaluated, the data stops being real",
     "Because brands demand secrecy as a fashion",
     "Because it stops other evaluators competing",
    ],
    correctIndex: 1,
   },
  ],
 },

 /* ==========================================================
    MODULE 4
    ========================================================== */
 {
  id: 4,
  title: "Evaluating without opinionating",
  description:
   "Turning what you saw into objective data: facts, timings and criteria instead of \"I liked it\" and \"they were nice\".",
  keywords: ["Fact vs opinion", "Timing", "Criteria", "Scales", "Bias"],
  practicalTip:
   "Before writing a sentence, ask: \"would a video camera have captured this?\" If not, it's an opinion.",
  warning:
   "Never answer \"yes\" to an item you didn't directly observe. If you didn't see it, it didn't happen for reporting purposes.",
  benefit:
   "This is the skill that separates an approved report from a rejected one. Master it and you join the in-demand evaluators.",
  content: [
   "A fact is what a camera would capture; an opinion is your interpretation. Reports live on facts.",
   "Measure concrete timings: entry, approach, delivery, payment, exit.",
   "Scales must be read before the visit: with no defined criterion, the score is random.",
   "Watch for bias: halo effect, first impressions and selective memory.",
  ],
  pages: [
   {
    title: "Page 1 — Fact, opinion and the camera test",
    blocks: [
     "\"The service was bad.\" That isn't an evaluation; it's a mood. **\"Entered at 10:02, stood by the section for 7 minutes without being approached, with two employees free and chatting to each other.\"** That is an evaluation.",
     "Use the **camera test**: if a video camera had captured the scene, would what you wrote appear in the recording? Timings, gestures, sentences and objects appear. \"Disinterest\", \"bad attitude\" and \"unprofessional\" don't — those are your interpretations.",
     "This doesn't mean writing coldly. It means always giving the basis: instead of \"seemed disinterested\", write *\"kept his back to the customer during the explanation and made no eye contact\"*. The reader draws the conclusion — and that conclusion becomes defensible.",
     "There's one controlled exception: some forms explicitly ask for your **overall perception** (\"how did you feel as a customer?\"). There, opinion is the data requested. Everywhere else, facts.",
    ],
   },
   {
    title: "Page 2 — Measuring: timings, sequences and quantities",
    blocks: [
     "Numbers are your best weapon because they can't be argued with. The timings almost every mission asks for: **entry time**, time until approached, queue time, time between order and delivery, service duration and exit time.",
     "Time things discreetly. Phone clock on the way in, a quick glance at the card terminal, the time printed on the receipt. You don't need a stopwatch in your hand — you need two or three reliable time anchors that you can honestly round afterwards.",
     "Also record **quantities and sequences**: how many staff were on the floor, how many customers were waiting, in what order things happened. \"12 customers and 2 of 5 tills open\" says more about the operation than any adjective.",
     "And don't invent precision you don't have. If you didn't time it to the second, write \"about 4 minutes\". An honestly approximate figure beats a \"3 min 47 s\" you can't back up.",
    ],
   },
   {
    title: "Page 3 — Read the scale before you use it",
    blocks: [
     "Forms use mainly three answer types. **Binary** (yes/no/not applicable): the most common and least ambiguous. **Scale** (1–5 or 1–10): always accompanied by descriptors. **Free text**: where you justify, especially when answering negatively.",
     "The critical rule: **read the scale descriptors before the visit**. In one project, 3 may mean \"met the minimum\"; in another, \"below expectation\". Giving a 3 thinking it's neutral, when the brand reads it as a serious failure, is one of the most common ways to ruin a report without noticing.",
     "Careful with **\"not applicable\"**. Use it only when the item genuinely couldn't occur (evaluating the window display of an online-only store, for instance). If the item could have happened and didn't, the answer is **no** — and that's exactly what the brand needs to know.",
     "Whenever you answer negatively, justify with a fact, a time and, where possible, a functional identification of who served you. A bare \"no\" is an invitation for the report to come back.",
    ],
   },
   {
    title: "Page 4 — The biases that trip you up",
    blocks: [
     "**Halo effect.** The employee was friendly at the door, and from then on everything seemed fine. Antidote: answer item by item, in form order, with no mental \"overall score\" contaminating the rest.",
     "**First impression.** A messy window puts you on edge and you spend the visit hunting for faults. Antidote: write down what you observed at each moment before drawing conclusions.",
     "**Selective memory.** Two hours later you remember what annoyed you and forget the rest. Antidote: minimum notes within 10 minutes of leaving — three numbers and five keywords are enough.",
     "**Improper comparison.** You're comparing this store to yesterday's, not to the brief's standard. Antidote: the brief is the only ruler. Each visit is judged on its own.",
    ],
   },
  ],
  evaluationExamples: [
   {
    title: "Example 1 — Rewriting opinion as fact",
    scenario: "Your first sentence was: \"the employee was clearly bored and impatient\".",
    correctApproach:
     "\"Answered in monosyllables, made no eye contact and continued stocking shelves during the interaction (14:12).\"",
    incorrectApproach:
     "Keeping \"was bored and impatient\" — that interprets a state of mind rather than observing behaviour.",
   },
   {
    title: "Example 2 — Full chronology",
    scenario: "Evaluating a bakery at 09:15, with a queue, two staff and freshly baked bread.",
    correctApproach:
     "\"09:15 entry; ~12 customers, 2 tills open. 4 min wait. Greeting: yes. Hot bread on sale. Display clean; exterior glass visibly marked.\"",
    incorrectApproach: "\"Everything was fine, quick service and fresh products.\" — without metrics, it's unusable.",
   },
  ],
  quiz: [
   {
    id: "m4q1",
    question: "Which of the following is a usable fact in a report?",
    options: [
     "The employee was unprofessional",
     "I waited 7 minutes by the section without being approached, with two staff available",
     "The store atmosphere was unpleasant",
     "The team clearly lacked training",
    ],
    correctIndex: 1,
   },
   {
    id: "m4q2",
    question: "What is the \"camera test\"?",
    options: [
     "Filming the visit as evidence",
     "Checking whether what you wrote would have been captured by a camera — if not, it's opinion",
     "Confirming whether the store has CCTV",
     "Photographing every item on the form",
    ],
    correctIndex: 1,
   },
   {
    id: "m4q3",
    question: "When should the \"not applicable\" answer be used?",
    options: [
     "Whenever you're unsure",
     "Only when the item genuinely couldn't occur in the visit's context",
     "When the employee didn't meet the item",
     "When you can't remember what happened",
    ],
    correctIndex: 1,
   },
   {
    id: "m4q4",
    question: "Why must you read the scale descriptors before the visit?",
    options: [
     "To save time when filling in the form",
     "Because the same number means different things in different projects",
     "Because scales change during the visit",
     "Because the agency requires them to be read aloud",
    ],
    correctIndex: 1,
   },
   {
    id: "m4q5",
    question: "What is the antidote to the halo effect?",
    options: [
     "Always giving a middling score",
     "Answering item by item in form order, with no prior overall score",
     "Evaluating only at the end of the day",
     "Comparing with the previously visited store",
    ],
    correctIndex: 1,
   },
  ],
 },

 /* ==========================================================
    MODULE 5
    ========================================================== */
 {
  id: 5,
  title: "Preparing the mission",
  description:
   "Reading the brief like a professional, building your scenario and memorising the essentials without visible notes.",
  keywords: ["Brief", "Scenario", "Memorisation", "Checklist", "Time window"],
  practicalTip:
   "Reduce the brief to a mental card of 5 points. If it doesn't fit in 5 points, you haven't understood it yet.",
  warning:
   "Always confirm the required day and time window. A visit outside the window is a lost mission, however well executed.",
  benefit:
   "Twenty minutes of preparation prevent the biggest source of rejected reports: arriving and realising something was missed.",
  content: [
   "The brief defines objective, scenario, time window, mandatory purchase, evidence and deadline.",
   "The scenario is your credible reason for being there — it must fit your real profile.",
   "Memorising in blocks of three beats trying to learn 30 questions.",
   "Checklist before leaving home: battery, payment method, documents and form read.",
  ],
  pages: [
   {
    title: "Page 1 — Reading the brief like a professional",
    blocks: [
     "The brief is the mission's contract. Skim it and you'll pay in rejected reports. Read it twice: once to understand, once with a pencil in hand.",
     "Always look for six things: **objective** (what the brand wants to measure), **scenario** (which customer you must be), **day and time window**, **mandatory purchase and reimbursement cap**, **required evidence** (receipt, photos, employee name) and **submission deadline**.",
     "Then read the **entire form before leaving home**. It sounds obvious, but it's the step most people skip. That's where you find out you must record the till number, the door opening time, or whether product X was on display. Discovering that while writing the report three hours later is far too late.",
     "If anything is ambiguous, ask the agency **before** the visit. Agencies would a thousand times rather answer an email than reject a report — and they'll note that you're methodical, which helps with the next invitations.",
    ],
   },
   {
    title: "Page 2 — Your scenario",
    blocks: [
     "The **scenario** is your credible reason for being there. In simpler missions it's free; in demanding ones it's defined in detail: \"couple looking for a washing machine under €600, delivery next week\".",
     "Practical rule: build the scenario as close to your real life as possible. If you know bikes, be the customer looking for a bike. Comfortable half-truths are easy to sustain; invented characters collapse at the third \"and what do you need that for?\".",
     "Prepare **two or three natural questions** that test what the brand wants to measure. If the objective is product knowledge, a simple comparative question does it: *\"what's the difference between this one and that one?\"*. If the objective is upselling, just show interest and wait.",
     "And prepare your exit. \"I'll think about it and come back\" is the most natural sentence in the world and closes any visit without awkwardness. Bolting for the door isn't.",
    ],
   },
   {
    title: "Page 3 — Memorising without notes",
    blocks: [
     "Nobody memorises 40 questions. And you don't need to. You need to memorise the **structure** — the rest follows by association as you observe.",
     "Use the **3×3 method**: three moments (entry, interaction, exit) with three things to observe in each. Entry: time, cleanliness, was I greeted. Interaction: waiting time, questions asked, complementary offer. Exit: payment speed, farewell, receipt. Nine points you can learn in two minutes.",
     "During the visit, **memorise in numbers**. Numbers stick far better than impressions: 3 staff, 2 tills, 4 minutes, 09:15. If you really must write, use your phone's notes app like someone replying to a message — the most ordinary gesture there is.",
     "And the step that makes all the difference: **stop as soon as you leave**. The café next door, the car, a park bench — and dump everything into notes within 10 minutes. Detailed memory lasts minutes, not hours.",
    ],
   },
   {
    title: "Page 4 — Checklist before leaving home",
    blocks: [
     "**I've read the full brief and form.** I know the objective, scenario, time window and required evidence.",
     "**I have the right payment method.** Many missions require an itemised receipt; some require card payment so there's a trace. Check first.",
     "**Phone charged with free storage.** Running out of battery mid-mission with mandatory photos is an expensive way to learn this lesson.",
     "**I know my scenario and my questions.** Two or three, maximum. And I know how I'll leave.",
     "**I've confirmed the exact address and opening hours.** Big chains have stores 300 metres apart: evaluating the wrong one happens more often than you'd think.",
    ],
   },
  ],
  quiz: [
   {
    id: "m5q1",
    question: "What must be read in full before leaving home?",
    options: [
     "Only the mission objective",
     "The brief and also the complete form",
     "Only the reimbursement rules",
     "Other evaluators' reviews",
    ],
    correctIndex: 1,
   },
   {
    id: "m5q2",
    question: "What's the best approach to building your scenario?",
    options: [
     "Invent a detailed character unlike yourself",
     "Keep it as close to your reality as possible, so it's easy to sustain",
     "Prepare nothing and improvise",
     "Use the same scenario in every sector",
    ],
    correctIndex: 1,
   },
   {
    id: "m5q3",
    question: "What does the 3×3 memorisation method consist of?",
    options: [
     "Reading the brief three times over three days",
     "Three moments of the visit with three observation points in each",
     "Making three visits to three stores",
     "Three photographs from three angles",
    ],
    correctIndex: 1,
   },
   {
    id: "m5q4",
    question: "When should detailed notes from the visit be recorded?",
    options: [
     "The same day, in the evening",
     "Within the first minutes after leaving the location",
     "During the interaction with the employee",
     "Only when the agency asks for clarification",
    ],
    correctIndex: 1,
   },
   {
    id: "m5q5",
    question: "What happens if the visit is made outside the required time window?",
    options: [
     "Nothing, as long as the report is complete",
     "The mission may be invalidated, even if well executed",
     "Payment is halved",
     "The agency automatically reschedules",
    ],
    correctIndex: 1,
   },
  ],
 },

 /* ==========================================================
    MODULE 6
    ========================================================== */
 {
  id: 6,
  title: "Execution in the field",
  description:
   "Enter, observe, time and leave without being spotted — plus what changes per sector and what to do when things go wrong.",
  keywords: ["Observation", "Visit routine", "Sectors", "Contingencies", "Discretion"],
  practicalTip:
   "Note the time you enter and the time you leave. With those two anchors alone you can rebuild the whole chronology later.",
  warning:
   "If you're identified as an evaluator, don't carry on as if nothing happened: record what occurred and inform the agency.",
  benefit:
   "A consistent visit routine frees your mind to observe instead of trying to remember what came next.",
  content: [
   "The first 30 seconds cover a large share of the evaluated items: exterior, entry, greeting.",
   "Observe on the move: walk the space naturally and use mirrors, queues and displays as stopping points.",
   "Each sector has its specifics — restaurants, retail, banking, pharmacy, automotive and hospitality.",
   "Things go wrong; what matters is recording it honestly and telling the agency.",
  ],
  pages: [
   {
    title: "Page 1 — The first 30 seconds",
    blocks: [
     "Much of a form is decided before you speak to anyone. Before entering: **façade condition, window display, signage, opening hours notice, visible promotions**. A two-second pause looking at the window is the most natural gesture in the world.",
     "As you enter, note the time — then look. **Floor cleanliness, smell, temperature, music, lighting, tidiness, queues, number of staff on the floor and how many are busy.** That's the portrait of the operation and it explains almost everything that follows.",
     "And watch the **greeting**: was there eye contact? A verbal welcome? Within how long? Many scripts set 30 seconds for eye contact and 60 for a verbal approach. That's why your entry time is the single most valuable thing you record all day.",
     "If the mission requires exterior photos, take them **before entering**, from across the street, like someone photographing a window. After you leave, with staff watching, it's a very different picture.",
    ],
   },
   {
    title: "Page 2 — Observing on the move",
    blocks: [
     "Walking slowly and looking around is normal customer behaviour. What isn't normal is standing in one spot staring at the counter for three minutes.",
     "Use **natural stopping points**: a shelf, a display, the till queue, an interior window. From those points you'll see most of what you need without looking like a lookout. Mirrors and glass help you observe interactions that aren't in front of you.",
     "**Listen.** A large share of the information arrives through your ears: how the employee serves the previous customer, whether they greet, whether they suggest products, how they handle a complaint. You're in a queue — you're perfectly entitled to hear what's happening ahead of you.",
     "Control your total time on site. In a convenience store, 8 minutes is a lot; in a furniture showroom, 25 is little. Adjust to context and, if you need more time, leave and come back later — as long as the brief allows it.",
    ],
   },
   {
    title: "Page 3 — What changes per sector",
    blocks: [
     "**Restaurants.** Timings rule: wait for a table, time to order, time to starter and main, time to the bill. Record temperature, plating, uniforms, table and toilet hygiene. Keep the itemised receipt — it's almost always the main evidence.",
     "**Retail and fashion.** Focus on the sales process: approach, needs diagnosis, product knowledge, complementary suggestion, guidance to the till, loyalty card offer and farewell. Also note display, size availability, labelling and fitting rooms.",
     "**Banking, insurance and telecoms.** Compliance above all: employee identification, explanation of costs and fees, documentation handed over, confidentiality at the counter. Expect long forms and a 20 to 40 minute visit.",
     "**Pharmacy, automotive and hospitality.** In pharmacy, the advice and safety questions. In automotive, the test drive, the quote and above all the **follow-up** (the call that should have come and often doesn't). In hospitality, a long checklist covering check-in, room, dining and check-out — very well paid, but it demands method.",
    ],
   },
   {
    title: "Page 4 — When things go wrong",
    blocks: [
     "**Store closed, under refurbishment or out of stock.** Photograph the evidence (door, notice, opening hours), record the time and inform the agency the same day. There's almost always a reschedule or partial compensation. What you must never do is invent the visit.",
     "**You've been identified.** It happens to everyone once. Don't confirm, don't argue, finish the visit naturally and write in the report what happened and when. The agency decides whether the data is still usable — that call isn't yours, but the information must be given.",
     "**You lost the receipt.** Check for a duplicate by email or app, or ask the store for a copy. If there really isn't one, report it before submitting. Submitting without mandatory evidence and hoping it slips through is how reports come back.",
     "**You ran out of time.** A rushed visit produces a weak report. If the window allows, postpone. If it doesn't, do the visit and honestly flag the items you couldn't observe. Honesty is fixable; invention isn't.",
    ],
   },
  ],
  evaluationExamples: [
   {
    title: "Example — Chronological restaurant record",
    scenario: "A lunch evaluated at a shopping-centre restaurant during peak hours.",
    correctApproach:
     "\"13:04 entry, 6 people queuing, 3 tills open. 13:09 order placed. 13:16 tray delivered (7 min). Fries lukewarm; burger hot. No drink or meal upgrade suggested. 13:41 exit. Toilets: soap dispenser empty.\"",
    incorrectApproach:
     "\"It took a while and the food wasn't very hot, but the staff were nice.\" — no timings, no items, unusable.",
   },
  ],
  quiz: [
   {
    id: "m6q1",
    question: "Why is recording the exact entry time so important?",
    options: [
     "To prove the store was open",
     "Because it's the anchor that lets you rebuild the chronology and measure greeting times",
     "Because the agency pays by the hour",
     "To compare with other stores of the brand",
    ],
    correctIndex: 1,
   },
   {
    id: "m6q2",
    question: "When should exterior photographs be taken?",
    options: [
     "After leaving, next to the door",
     "Before entering, from a distance, like someone looking at the window",
     "During the service interaction",
     "Only if the agency asks afterwards",
    ],
    correctIndex: 1,
   },
   {
    id: "m6q3",
    question: "What is central in a banking or telecoms mission?",
    options: [
     "The décor of the space",
     "Compliance: identification, explanation of costs, documentation and confidentiality",
     "The speed of payment",
     "The room temperature",
    ],
    correctIndex: 1,
   },
   {
    id: "m6q4",
    question: "What should you do if you're identified as an evaluator during the visit?",
    options: [
     "Confirm it and ask the employee to cooperate",
     "Finish the visit naturally and report what happened to the agency",
     "Abandon the mission without any record",
     "Repeat the visit the next day without telling anyone",
    ],
    correctIndex: 1,
   },
   {
    id: "m6q5",
    question: "The store is closed for refurbishment on the mission day. What's the correct procedure?",
    options: [
     "Evaluate the nearest store of the same brand",
     "Photograph the evidence, record the time and inform the agency that day",
     "Submit the report with blank answers",
     "Estimate the answers based on a previous visit",
    ],
    correctIndex: 1,
   },
  ],
 },

 /* ==========================================================
    MODULE 7
    ========================================================== */
 {
  id: 7,
  title: "Evidence beyond doubt",
  description:
   "Receipts, photographs, recordings and names: what to collect, how to store it, and how far the law lets you go.",
  keywords: ["Receipt", "Photography", "Recording", "Retention period", "GDPR"],
  practicalTip:
   "Photograph the receipt while still in the car. Thermal receipts fade and your report won't wait for the ink's goodwill.",
  warning:
   "Recording image or sound of identifiable people without authorisation is not allowed in Portugal. Only record if the agency requires it and explains the legal basis.",
  benefit:
   "Solid evidence is what gets a report through without questions — and what protects you if anyone disputes the evaluation.",
  content: [
   "The receipt is the queen of evidence: it proves place, date, time and amount.",
   "Photographs should focus on spaces, products and signage, not faces.",
   "Recordings only with explicit instruction and legal basis from the agency.",
   "Keep evidence for the period the platform requires, usually 60 to 90 days.",
  ],
  pages: [
   {
    title: "Page 1 — What counts as evidence",
    blocks: [
     "**The receipt is the queen of evidence.** It proves you were at that location, on that day, at that time, and how much you spent. Many platforms automatically reject reports without a legible receipt, however good the text.",
     "Beware of thermal receipts: they fade with heat and light within days. **Photograph it as soon as you leave**, still in the car or by the door, in good light, on a flat surface, without shadows. Then keep the original in a folder until payment has been processed.",
     "Besides the receipt, evidence includes: **photographs** of the space, window and signage; **screenshots** of emails, texts and digital forms; **call logs** with date and duration; and your own **chronological record**, provided it's consistent with everything else.",
     "A note on the employee's name: use the badge, the receipt, the signature on a quote or the business card. Don't ask directly and artificially — it's one of the easiest ways to give yourself away.",
    ],
   },
   {
    title: "Page 2 — Photographing and recording without trouble",
    blocks: [
     "**Photograph spaces, not people.** Windows, displays, signage, products, cleanliness, toilets, a queue seen from behind. If someone appears accidentally and isn't identifiable, fine; framing an employee's face is not.",
     "Photograph naturally: phone at chest height, one quick gesture, no flash. A customer photographing a promotion is unremarkable. A customer photographing the counter for 20 seconds is not.",
     "**Audio or video recording:** in Portugal, recording identifiable people without their knowledge raises serious legal issues. Only do it if the agency explicitly requires it, states the purpose and takes on the legal basis — never on your own initiative \"just to be safe\".",
     "For phone missions, record the essentials: call time, duration, number dialled, who answered (name given), script compliance and information provided. A screenshot of the call log is usually enough as evidence.",
    ],
   },
   {
    title: "Page 3 — Organise, name and store",
    blocks: [
     "After three missions in a week, every receipt photo looks the same. Create one folder per mission with a name you'll still understand in two months: **`2026-03-14_BrandX_Braga_M4172`**.",
     "Inside it, clear filenames: `receipt.jpg`, `window.jpg`, `signage.jpg`, `notes.txt`. It feels excessive until the day the agency asks, five weeks later, whether you still have the entrance photo for that store.",
     "**Retention period:** keep everything at least until payment has cleared and, ideally, 60 to 90 days. Some platforms run later audits and request the original evidence.",
     "Respect the limits: evidence belongs to the mission and nothing else. Don't publish it, don't share it, don't reuse it in another mission. Once the retention period is over, delete anything containing personal data — it's the right thing to do and it's what GDPR expects of you.",
    ],
   },
  ],
  quiz: [
   {
    id: "m7q1",
    question: "Why should the receipt be photographed immediately after the visit?",
    options: [
     "To prove the purchase was made by card",
     "Because thermal receipts fade quickly and can become illegible",
     "Because the agency requires the photo within 5 minutes",
     "So the product can be returned",
    ],
    correctIndex: 1,
   },
   {
    id: "m7q2",
    question: "What should be avoided in mission photographs?",
    options: [
     "Photographing the window display",
     "Framing identifiable faces of employees",
     "Photographing promotional signage",
     "Photographing the cleanliness of the space",
    ],
    correctIndex: 1,
   },
   {
    id: "m7q3",
    question: "Under what conditions may you record audio or video during a mission?",
    options: [
     "Always, to secure the evidence",
     "Only when the agency explicitly requires it and takes on the legal basis",
     "Whenever the employee doesn't notice",
     "Only in outdoor public spaces",
    ],
    correctIndex: 1,
   },
   {
    id: "m7q4",
    question: "What's the correct way to obtain the employee's name?",
    options: [
     "Ask directly at the start of the interaction",
     "Read the badge, receipt, quote or business card",
     "Ask another customer",
     "Check the store's social media",
    ],
    correctIndex: 1,
   },
   {
    id: "m7q5",
    question: "How long should mission evidence be kept?",
    options: [
     "Until the report is submitted",
     "At least until payment and ideally 60 to 90 days",
     "Five years, for tax purposes",
     "Indefinitely, as a portfolio",
    ],
    correctIndex: 1,
   },
  ],
 },

 /* ==========================================================
    MODULE 8
    ========================================================== */
 {
  id: 8,
  title: "The report approved first time",
  description:
   "Structure, tone and level of detail — and the mistakes that sink reports from otherwise perfect missions.",
  keywords: ["Structure", "Justification", "Consistency", "Review", "Deadline"],
  practicalTip:
   "Write the report the same day. Text quality drops sharply after 24 hours — and memory invents the rest.",
  warning:
   "Inconsistencies between times, answers and receipt are the number one reason for rejection. Always check before submitting.",
  benefit:
   "Clean reports raise your platform rating, and a high rating is what unlocks the best-paying missions.",
  content: [
   "A report has three layers: closed answers, justifications and chronological narrative.",
   "Every negative answer needs a fact, a time and, where possible, a functional identification.",
   "Write in a neutral register, without vague adjectives or irony.",
   "Final review: consistent times, spelling, evidence attached, deadline met.",
  ],
  pages: [
   {
    title: "Page 1 — Anatomy of a good report",
    blocks: [
     "A report has three layers and all of them count. **Closed answers** (yes/no/scale) feed the brand's statistics. **Justifications** explain each negative answer. **The narrative** tells the visit in chronological order and gives context to the rest.",
     "The narrative always follows the order of events: arrival and exterior → entry and greeting → interaction and process → payment → exit → final observations. Always the same order, in every mission. Your brain will thank you and so will the reviewer.",
     "Level of detail: **enough for someone who wasn't there to picture it**, without turning into a novel. Two to four sentences per moment is plenty. If an item went wrong, then yes, go into detail — that's exactly the information the brand bought.",
     "A useful pattern for justifications: **what happened + when + who + what wasn't done**. Example: *\"At 15:12, the assistant at counter 2 processed the purchase and handed over the receipt but did not offer the loyalty card (item 9).\"* One sentence, everything in it.",
    ],
   },
   {
    title: "Page 2 — Writing with precision",
    blocks: [
     "**Neutral register.** No irony, no exclamation marks, no \"unfortunately\". The report isn't your diary or a complaint: it's a measuring instrument. Write like someone describing, not someone complaining.",
     "**Cut vague adjectives.** \"Good\", \"bad\", \"slow\", \"disorganised\" and \"unprofessional\" say little and can't be defended. Replace them with measurements: *\"slow\"* becomes *\"9-minute wait with two customers ahead\"*.",
     "**Don't play manager.** Your job is to report what happened, not to recommend hiring, training or dismissals. If the form has a suggestions field, keep it sober and factual.",
     "**Consistency above all.** If you wrote 14:30 for entry and 14:20 for the approach, the report contradicts itself. If you said you bought nothing but attached a receipt, it contradicts itself. One inconsistency casts doubt on everything else — and it's the first thing an experienced reviewer looks for.",
    ],
   },
   {
    title: "Page 3 — The final review (5 minutes that save the mission)",
    blocks: [
     "**1. Times.** Are all the times mentioned consistent with each other and with the time printed on the receipt?",
     "**2. Negative answers.** Does each one have a justification with a concrete fact? Did any bare \"no\" slip through?",
     "**3. Evidence.** Legible receipt, required photographs attached, files correctly named and in the requested format?",
     "**4. Language.** Spelling and punctuation checked. A report full of errors looks rushed — and suggests the observation was too.",
     "**5. Deadline.** Submitted on time. Many platforms require 12 to 24 hours after the visit and automatically cut payment for late submissions. If something comes up, warn them before the deadline, never after.",
    ],
   },
  ],
  evaluationExamples: [
   {
    title: "Example 1 — Weak vs solid justification",
    scenario: "You answered \"No\" to the item \"the employee presented the current promotion\".",
    correctApproach:
     "\"At 11:27 the employee (badge: Rui) processed the purchase and did not mention the 2nd-item-half-price promotion displayed in the window and on the entrance stand.\"",
    incorrectApproach: "\"Didn't mention the promotion.\" — no time, no who, no context. Not enough for the brand to act.",
   },
   {
    title: "Example 2 — Vague adjective rewritten",
    scenario: "You wrote in the narrative that \"the space was disorganised\".",
    correctApproach:
     "\"Three restocking crates in the central aisle partially blocking passage; two shelves in the drinks section unstocked at 18:40.\"",
    incorrectApproach: "Keeping \"the space was disorganised\" — a conclusion with no observation behind it.",
   },
  ],
  quiz: [
   {
    id: "m8q1",
    question: "What are the three layers of a complete report?",
    options: [
     "Introduction, body and conclusion",
     "Closed answers, justifications and chronological narrative",
     "Photographs, receipt and signature",
     "Summary, opinion and recommendation",
    ],
    correctIndex: 1,
   },
   {
    id: "m8q2",
    question: "What should the justification of a negative answer contain?",
    options: [
     "A suggested improvement for the store",
     "What happened, when, who and what wasn't done",
     "A comparison with another store of the brand",
     "Your opinion about the team",
    ],
    correctIndex: 1,
   },
   {
    id: "m8q3",
    question: "What is the most frequent reason for report rejection?",
    options: [
     "Texts that are too long",
     "Inconsistencies between times, answers and evidence",
     "Use of neutral language",
     "Attaching too many photographs",
    ],
    correctIndex: 1,
   },
   {
    id: "m8q4",
    question: "How should \"the service was slow\" be rewritten?",
    options: [
     "\"The service was quite slow\"",
     "\"9-minute wait with two customers ahead and one till open out of three\"",
     "\"The service did not meet expectations\"",
     "\"There was a delay in service\"",
    ],
    correctIndex: 1,
   },
   {
    id: "m8q5",
    question: "When should the report ideally be written?",
    options: [
     "The same day as the visit, while memory is fresh",
     "A week later, with some distance",
     "Only after the agency requests it",
     "After comparing with other evaluators",
    ],
    correctIndex: 0,
   },
  ],
 },

 /* ==========================================================
    MODULE 9
    ========================================================== */
 {
  id: 9,
  title: "What you earn and what's left",
  description:
   "Fees, reimbursements, costs and taxes: the real maths so you know what each mission actually returns.",
  keywords: ["Fee", "Reimbursement", "Profitability", "Self-employment", "Expenses"],
  practicalTip:
   "Keep a simple sheet with date, mission, fee, reimbursement, km and minutes. After one month you'll know exactly what pays.",
  warning:
   "Reimbursement isn't income, but the fee is. Declare what must be declared — the tax authority receives platform data.",
  benefit:
   "With numbers in hand you stop accepting missions on impulse and start building predictable income.",
  content: [
   "The fee is income; the reimbursement returns a mandatory expense.",
   "Typical costs: fuel, transport, parking, report time and non-reimbursed spending.",
   "In Portugal the activity is normally carried out as a self-employed worker (recibo verde).",
   "Profitability is measured in net euros per hour, not by the advertised amount.",
  ],
  pages: [
   {
    title: "Page 1 — The two amounts that never mix",
    blocks: [
     "**The fee** is what you earn for the work: observing, executing and writing. It's income and it's the number worth comparing between missions.",
     "**The reimbursement** returns an expense the mission forced you to make — the coffee, the shirt, the lunch, the ticket. It lands in your account but it isn't profit: it's money that left and came back. It only becomes an advantage if it's spending you'd have done anyway.",
     "See the difference: a mission paying \"€45\" with a €30 meal reimbursement is really a **€15 fee**. If you were eating out that day, great — you saved €30. If you weren't, you earned €15 and had lunch.",
     "Watch the **reimbursement caps and rules**. If the cap is €25 and you spent €34, the extra €9 comes out of your pocket. If the purchase had to be paid by card and you paid cash, you may lose the entire reimbursement. Always read this part of the brief twice.",
    ],
   },
   {
    title: "Page 2 — The maths almost nobody does",
    blocks: [
     "Costs that exist even when you don't see them: **fuel or transport**, **parking**, **tolls**, **non-reimbursed spending** and — the most forgotten of all — **your report-writing time**, which can be half the total time of the mission.",
     "Always use this formula: **net hourly rate = (fee − non-reimbursed costs) ÷ (travel time + visit time + report time)**.",
     "An honest simulation. Mission A: €20 fee, 15 km, 25 min visit, 30 min report, ~€4 fuel. Total ≈ 1h25 → about **€11/hour**. Mission B: €60 fee in hospitality, 2 h visit and 3 h report → **€12/hour**, despite looking three times better.",
     "Practical conclusion: big missions aren't automatically the best ones. What changes the game is **grouping** — three missions in the same area on the same day dilute travel and can double your hourly rate.",
    ],
   },
   {
    title: "Page 3 — Taxes without the panic",
    blocks: [
     "In Portugal this activity is normally carried out as a **self-employed worker**. That means registering your activity with the tax authority and issuing a green receipt (recibo verde) for each payment received. It isn't complicated and it's done online on the Portal das Finanças.",
     "What you declare is the **fee**, your income. Properly documented expense reimbursements are treated differently — worth confirming with an accountant early on, especially if missions become regular.",
     "There's a VAT exemption for low annual income (the threshold is revised periodically). While below it you issue receipts without VAT; once you exceed it you move to the standard regime. Always check the threshold in force for the year in question.",
     "**Keep everything.** Receipts issued, payment confirmations, fuel invoices and till receipts. If this ever moves from side income to profession, you'll want the last two years organised — and your future accountant will love you for it.",
    ],
   },
  ],
  quiz: [
   {
    id: "m9q1",
    question: "A mission pays €45, of which €30 is a meal reimbursement. What is your fee?",
    options: ["€45", "€30", "€15", "It depends on the platform"],
    correctIndex: 2,
   },
   {
    id: "m9q2",
    question: "Which cost is most often forgotten in profitability calculations?",
    options: [
     "Fuel",
     "The time spent writing the report",
     "Parking",
     "The value of the mandatory purchase",
    ],
    correctIndex: 1,
   },
   {
    id: "m9q3",
    question: "What is the most effective way to raise your net hourly rate?",
    options: [
     "Accept only missions above €50",
     "Group missions in the same area on the same day to dilute travel",
     "Write shorter reports",
     "Refuse missions with reimbursement",
    ],
    correctIndex: 1,
   },
   {
    id: "m9q4",
    question: "How is this activity normally carried out in Portugal?",
    options: [
     "As an employee of the platform",
     "As a self-employed worker, with registered activity and green receipts",
     "With no tax framework at all",
     "Only through an incorporated company",
    ],
    correctIndex: 1,
   },
   {
    id: "m9q5",
    question: "You spent €34 on a mission with a €25 reimbursement cap. What happens?",
    options: [
     "The platform always pays the full amount",
     "The €9 excess is at your own expense",
     "The reimbursement is cancelled entirely",
     "The excess is paid the following month",
    ],
    correctIndex: 1,
   },
  ],
 },

 /* ==========================================================
    MODULE 10
    ========================================================== */
 {
  id: 10,
  title: "Your 30-day action plan",
  description:
   "From platform registration to your first paid missions — and how to move up to the ones that pay better.",
  keywords: ["Registration", "Profile", "First missions", "Rating", "Specialisation"],
  practicalTip:
   "Reply to invitations within the hour whenever you can. Response speed weighs as much as quality on most platforms.",
  warning:
   "Don't accept five missions in your first week. Missing deadlines early marks your rating for months.",
  benefit:
   "In 30 days this plan takes you from zero to a complete profile, completed missions and a positive rating.",
  content: [
   "Week 1: register on 5 to 8 platforms and complete every profile.",
   "Week 2: first applications to simple missions close to home.",
   "Week 3: first executions, with reports submitted the same day.",
   "Week 4: review results, choose sectors and apply to better missions.",
  ],
  pages: [
   {
    title: "Page 1 — Week 1: exist in the system",
    blocks: [
     "**Register on 5 to 8 platforms.** Yes, it's tedious: similar forms, repeated documents, email confirmations. It takes an afternoon and it's the best-returning investment in this whole course.",
     "**Complete your profile 100%.** Geographic area, availability, mobility (car, public transport), languages, sectors of interest and experience. Many platforms filter automatically by profile: empty fields mean missions you'll never even see.",
     "**Write a short, concrete introduction.** Two or three sentences: who you are, your availability, the areas you cover, and one line about rigour and deadlines. No generic prose about \"a passion for customer service\".",
     "**Create a dedicated folder and email address.** A folder on your computer for evidence and, if you can, an email address just for this. You'll get dozens of notifications a week and you don't want to lose an invitation among supermarket offers.",
    ],
   },
   {
    title: "Page 2 — Weeks 2 and 3: the first missions",
    blocks: [
     "Start **small and close**. A café, a high-street shop, a pharmacy ten minutes from home. The goal of these first missions isn't the money: it's closing the full cycle — apply, execute, document, submit, get approved.",
     "**One mission at a time, at first.** Accepting five and failing two is the worst possible debut: platforms weigh deadline compliance heavily in early evaluations, and that mark takes months to clear.",
     "**Submit the same day.** No exceptions. It's the habit that most influences your rating and, as a result, the invitations you'll receive next.",
     "Wait for **feedback** and read it carefully. Almost every platform returns a quality score and reviewer comments. What looks like tedious criticism is, in practice, free training from the people who decide who gets the good missions.",
    ],
   },
   {
    title: "Page 3 — Week 4 and beyond",
    blocks: [
     "**Do the month's maths.** How many missions, how much in fees, how many kilometres, how many hours. You'll almost certainly find that two or three missions returned far more per hour than all the others. Those are your path.",
     "**Specialise in two or three sectors.** Repeating the same type of mission makes you faster, sharpens your reports and lifts your rating. Restaurants and retail are the entry doors; banking, automotive and hospitality are where the serious money is.",
     "**Build a relationship with agencies.** Reply quickly, meet deadlines, flag problems early and be courteous with whoever reviews your reports. After a few months, direct invitations start arriving — the missions that never get published.",
     "**A realistic target for the first three months:** 4 to 8 missions a month, €80 to €250 in monthly fees, and an above-average rating. From there it's your choice: keep it as side income or push it towards figures that pay bills.",
    ],
   },
  ],
  quiz: [
   {
    id: "m10q1",
    question: "What is the recommended first action in week 1?",
    options: [
     "Apply for the best-paid mission available",
     "Register on 5 to 8 platforms and complete every profile",
     "Buy recording equipment",
     "Contact brands directly",
    ],
    correctIndex: 1,
   },
   {
    id: "m10q2",
    question: "Why should the first missions be simple and nearby?",
    options: [
     "Because they pay more",
     "Because the goal is to close the full cycle successfully and build your rating",
     "Because platforms require it",
     "Because they need no report",
    ],
    correctIndex: 1,
   },
   {
    id: "m10q3",
    question: "Which habit has the biggest impact on your rating?",
    options: [
     "Writing long reports",
     "Submitting the same day and always meeting deadlines",
     "Applying to many missions at once",
     "Attaching more photographs than requested",
    ],
    correctIndex: 1,
   },
   {
    id: "m10q4",
    question: "What's the advantage of specialising in two or three sectors?",
    options: [
     "You automatically get paid more per mission",
     "You gain speed, consistency and better reports, which lifts your rating",
     "You no longer need to read briefs",
     "Platforms stop requiring evidence",
    ],
    correctIndex: 1,
   },
   {
    id: "m10q5",
    question: "What usually happens after a few months of good history?",
    options: [
     "Platforms automatically raise all fees",
     "Direct invitations start arriving for missions that aren't published",
     "You can no longer decline missions",
     "You become an employee of the agency",
    ],
    correctIndex: 1,
   },
  ],
 },

 /* ==========================================================
    MODULE 11 — CERTIFICATE
    ========================================================== */
 {
  id: 11,
  title: "Certificate of completion",
  description: "You've finished the course. Issue your personalised certificate and take it into your applications.",
  keywords: ["Certificate", "Portfolio", "Application", "Credibility"],
  practicalTip:
   "Attach the certificate to your profile on every platform. It signals method, which few applicants can show.",
  warning: "The certificate becomes available once you've completed modules 1 to 10 successfully.",
  benefit:
   "You now have a complete method: you know how to prepare, execute, document, report and pick missions worth doing.",
  content: [
   "The certificate is personalised and issued as a PDF with the completion date.",
   "It serves as proof of training when applying to platforms.",
   "From here, practice is what counts: the first missions consolidate everything.",
  ],
  pages: [
   {
    title: "Page 1 — You've reached the end (and the beginning)",
    blocks: [
     "Ten modules later, you no longer look at a shop the same way. You notice the time until you're greeted, the unstocked display, the sentence the employee didn't say. That doesn't switch off — and that was exactly the point.",
     "You're taking away the complete method: market **context**, **ethics** and conduct, **objective observation**, **preparation**, **execution**, **evidence**, **reporting**, **the maths**, and a **30-day plan** to get started.",
     "Your **personalised PDF certificate** is available from the button below. Attach it to your profile on every platform: it shows you know what a brief, a script item and a deadline are — things most applicants discover by getting them wrong.",
     "Now for the only part that can't be learned by reading: **the first mission**. Pick a small one, close to home, this week. The rest comes with mileage — and with well-photographed receipts.",
    ],
   },
  ],
  quiz: [],
 },
];
