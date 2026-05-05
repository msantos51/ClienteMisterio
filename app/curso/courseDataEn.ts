/*
 * FILE DESCRIPTION: Complete course data for Mystery Shopper Course, theoretical content and quizzes for each module.
 */

export type QuizQuestion = {
 id: string;
 question: string;
 options: string[];
 correctIndex: number;
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
 {
 id: 1,
 title: "Module 1. Mystery Shopper Framework",
 description: "Concepts, objectives and stakeholders in Mystery Shopping.",
 keywords: ["Mystery Shopping", "Service Evaluation", "Anonymous Customer", "Quality", "Standards"],
 practicalTip: "Think of Mystery Shopping as an 'invisible inspector' helping brands improve. You're that inspector!",
 warning: "Confidentiality is SACRED. Never comment on your evaluations on social media or casual conversations.",
 benefit: "You gain total flexibility, earn per mission and help brands improve their service.",
 content: [
  "**What is Mystery Shopping:** it's a modern profession on the rise. You act as a normal customer to evaluate the real quality of a service.",
  "You observe, record and report everything without revealing you're evaluating. It's like a game where you have a secret mission.",
  "Its origins date back to the 1940s in the USA, but it only became mainstream in the 2000s.",
  "**Why it's different from surveys:** because you experience it firsthand, it's not just a theoretical question.",
  "It's the **real customer experience**, and companies love it because they get honest and concrete data.",
  "No bias from email surveys.",
  "**Who benefits:** for companies, they discover real problems, measure if procedures work and compare stores. For you: **mission-based payment**, work when you want and gain valuable experience.",
  "**The three stakeholders:** the brand defines what they want to know (e.g., 'do staff greet customers?'). The **agency** coordinates the process, finds evaluators and validates reports. **You, the evaluator**, execute the mission in the field and produce valuable information.",
  "**Main mission types:**",
  "In-store mystery shopping: you enter as a customer and evaluate service and processes.",
  "Mystery calling: contact by phone and evaluate service quality and protocol compliance.",
  "Online evaluations: evaluate websites, apps and forms, including response time.",
  "Image audits: evaluate cleanliness, uniforms and signage.",
  "Compliance inspections: verify if they follow legal rules.",
  "Delivery evaluations: evaluate how products arrive.",
  "**Participating companies:** retail (Carrefour, Continente), food service (Burger King, McDonald's), banking (Caixa, BPI), telecommunications (MEO, Vodafone), pharmacies, hotels, travel agencies. Basically any sector with customer contact.",
  "**How the mechanics work:**",
  "Brand submits briefing ('we want 50 evaluations in Lisbon').",
  "Agency publishes the mission on the platform.",
  "You apply for the mission.",
  "Agency approves your profile.",
  "You execute the mission in the field.",
  "You submit report with evidence.",
  "Agency validates and processes payment.",
  "**Examples of questions brands want answered:**",
  "Does the staff offer additional products? (e.g., does the telemarketer mention the product has extended warranty?)",
  "How long does the customer wait to be served? (e.g., I enter at 10:00, approached at 10:03 = 3 minutes)",
  "Is the location clean? (observe if there's dust, trash, disorganization)",
  "Does the staff know the products? (ask: what's the difference between these two models?)",
  "**Real impact of evaluations:** a store discovers only 40% of customers are greeted (should be 100%). After staff training, in 3 months it rises to 95%. Sales increase 15%. **Mystery Shopping changes companies!**",
  "**The responsibility is huge:** you're evaluating real people. Your report directly influences employees' careers. Incorrect information can cause: no promotion, lost bonuses, contract non-renewal or even dismissal. Every data point must be rigorously true and verifiable. Brands verify everything: many have cameras cross-referenced with your report. If you write they didn't greet but cameras show they did, you lose credibility.",
  "**Multi-phase evaluations:** some projects involve several sequential steps.",
  "Phase 1: submit an online form and wait for contact.",
  "Phase 2: receive and evaluate the response call.",
  "Phase 3: visit the location physically and evaluate in-person service.",
  "Phase 4: wait and evaluate post-visit follow-up (call, SMS, email).",
  "Each phase is evaluated separately but is part of the same project.",
  "This allows brands to map **the entire customer journey**, from first contact to after-sales.",
  "**Specialized sector evaluations:** each sector has unique characteristics.",
  "Electronics retail: evaluate staff technical knowledge.",
  "Automotive sector: evaluate response time to online requests (typically 3 hours) and follow-up quality.",
  "Food service: evaluate from plating to food temperature.",
  "Fitness: evaluate from initial contact to class experience.",
  "Bricolage: evaluate needs diagnosis and complementary service suggestions (installation, delivery).",
  "**Each sector requires specific training** and knowledge of its characteristics.",
 ],
 pages: [
  {
   title: "Page 1. What is Mystery Shopping",
   blocks: [
    "**Mystery Shopping**: also called *Mystery Shopper*, is an evaluation methodology where a person acts as a normal customer to measure the real quality of a service. The evaluator observes, records and reports everything that happens during the visit, without revealing they are evaluating.",
    "Its origins date back to the 1940s in the United States, but it only became widely used in the 2000s. Today, it's one of the most used quality management tools worldwide.",
    "**What distinguishes Mystery Shopping from traditional surveys?** Satisfaction surveys depend on customer memory and subjective perception. Mystery Shopping records the experience in real time, with objective and defined criteria. It's the difference between asking 'were you well served?' and measuring 'did the staff greet within 30 seconds?'.",
    "**Who benefits?** Companies discover real service failures, measure if procedures are being followed and compare results across locations. The evaluator earns payment per mission, works with total flexibility and gains valuable professional experience.",
   ],
  },
  {
   title: "Page 2. The Three Stakeholders and Process Mechanics",
   blocks: [
    "In a Mystery Shopping project there are always three main stakeholders. (1) **The brand or company**: defines what they want to measure (e.g., 'do staff greet customers?'). (2) **The agency or platform**: coordinates the project, recruits evaluators, validates reports and delivers results to the brand. (3) **The evaluator**: executes the mission in the field and produces valuable information.",
    "**The mechanics work like this:** The brand submits a briefing with objectives. The agency publishes the mission and selects suitable evaluators. The evaluator accepts, prepares and executes the visit. Then submits the report with evidence within the deadline. The agency validates and processes payment.",
    "This chain is simple, but requires rigor at each step. A field failure, not keeping the receipt, revealing your identity, invalidates the entire mission and compromises payment.",
   ],
  },
  {
   title: "Page 3. Mission Types: From In-Store to Digital",
   blocks: [
    "There are several mission formats, each with specific characteristics. The most common is **in-store mystery shopping**: the evaluator visits a store as a normal customer and evaluates service, processes and environment.",
    "The main mission types are: (1) **In-store**: physical visit to shop, restaurant, bank, pharmacy, etc. (2) **Mystery calling**: phone contact to evaluate service and protocol compliance. (3) **Online evaluation**: submit forms, use apps, evaluating response time and digital experience. (4) **Image audit**: evaluate cleanliness, uniforms and signage. (5) **Compliance inspection**: verify compliance with legal or internal rules. (6) **Delivery evaluation**: evaluate how ordered products arrive.",
    "The market is vast. Sectors with highest mission volume are: retail (supermarkets, fashion, electronics), food service, banking, telecommunications, pharmacies, hospitality, automotive and insurance. Basically any sector with direct customer contact.",
   ],
  },
  {
   title: "Page 4. Real Impact and Evaluator Responsibility",
   blocks: [
    "The impact of Mystery Shopping is concrete and measurable. A store that discovers only 40% of customers are greeted when protocol requires 100% can, after staff training, rise to 95% in three months. That change directly reflects in sales and customer satisfaction.",
    "Some projects involve **multi-phase evaluations**, which map the entire customer journey: phase 1: submit online form; phase 2: evaluate response call; phase 3: visit location; phase 4: evaluate post-visit follow-up. Each phase is recorded separately but is part of the same project.",
    "Each sector has its particularities. In electronics retail, technical knowledge is evaluated. In automotive, response time to online requests (typically up to 3 hours). In food service, from plating to food temperature. Knowing these specificities is part of professional work.",
    "**The evaluator's responsibility is enormous.** Your report directly influences evaluated employees' careers, it can affect promotions, bonuses or contract renewals. Every recorded data must be rigorously true and verifiable. Brands cross-reference reports with cameras and other records. Integrity isn't optional: it's the foundation of everything.",
   ],
  },
 ],
 evaluationExamples: [
  {
   title: "Example 1: Identify Lost Opportunity",
   scenario: "You're in a clothing store. You enter, looking for a specific brand t-shirt. The staff member approaches, shows the product, but doesn't suggest complementary items (pants, belts, accessories).",
   correctApproach: "Record: 'Customer approached in 2min, presented requested product, DID NOT offer complements or additional suggestions. Sales opportunity not taken.'",
   incorrectApproach: "Record: 'Terrible service, the staff member should have offered more things. Didn't like it much.' (opinion, not fact)"
  },
  {
   title: "Example 2: Evaluate Protocol Compliance",
   scenario: "You enter a pharmacy. According to the briefing, each customer should receive an informational leaflet about current promotions. You receive nothing.",
   correctApproach: "Record: 'I requested recommendation for headache. Pharmacist offered medicine and explained usage, BUT DID NOT hand out promotion leaflet. Did not comply with protocol item 5.'",
   incorrectApproach: "Record: 'Forgot to give the leaflet' (lacks context, may seem like your error, not the brand's)"
  },
  {
   title: "Example 3: Multiple Chronological Observations",
   scenario: "Pharmacy evaluation. You enter at 09:15. Lines at registers. You observe hygiene, service, staff appearance.",
   correctApproach: "Record: '09:15 - Entry. Store with ~12 customers, 2 lines. Uniform clean? YES. Staff A (register) - neat, attentive, face visible (mask at chin). Wait time: 4min. Greeting: YES. Product: fresh (bread still warm). Environment: clean but windows needed cleaning (visible dust).'",
   incorrectApproach: "Record: 'All good. Liked it. Quick service and fresh products.' (too vague, no metrics)"
  }
 ],
 quiz: [
 {
 id: "m1q1",
 question: "What is the main objective of Mystery Shopping?",
 options: [
 "Make purchases at discount",
 "Measure compliance with service standards defined by the brand",
 "Replace customer satisfaction surveys",
 "Evaluate prices charged by competitors",
 ],
 correctIndex: 1,
 },
 {
 id: "m1q2",
 question: "What are the three main stakeholders in a Mystery Shopping project?",
 options: [
 "End customer, supplier and distributor",
 "Brand/company, agency/platform and evaluator",
 "Store manager, staff and customer",
 "Sales director, marketing and human resources",
 ],
 correctIndex: 1,
 },
 {
 id: "m1q3",
 question: "Which of the following is NOT an advantage of Mystery Shopping for companies?",
 options: [
 "Identification of service failures",
 "Benchmarking between units",
 "Direct reduction of operational costs",
 "Data collection for staff training",
 ],
 correctIndex: 2,
 },
 {
 id: "m1q4",
 question: "What distinguishes Mystery Shopping from traditional satisfaction surveys?",
 options: [
 "It's cheaper to implement",
 "It offers an objective and standardized view of real experience",
 "It doesn't require any prior preparation",
 "It's conducted exclusively online",
 ],
 correctIndex: 1,
 },
 {
 id: "m1q5",
 question: "Which of these is a valid type of Mystery Shopping project?",
 options: [
 "Mystery calling (phone contact)",
 "Mystery pricing (price comparison)",
 "Mystery recruiting (candidate evaluation)",
 "Mystery advertising (advertising evaluation)",
 ],
 correctIndex: 0,
 },
 ],
 },
 {
 id: 2,
 title: "Module 2. Market and Opportunities",
 description: "Sectors with highest demand, collaboration models and selection criteria.",
 keywords: ["Retail", "Food Service", "Banking", "Platforms", "Agencies", "Opportunities"],
 practicalTip: "Start with accessible sectors like retail and food service. Then advance to banking and hospitality when you have experience!",
 warning: "Not all platforms pay well. Compare conditions and payment BEFORE registering.",
 benefit: "The market is growing, there are MANY opportunities and demand for quality evaluators.",
 content: [
  "**Market on fire:** the mystery shopping sector is growing rapidly. Sectors participating: retail (Carrefour, Continente, Intermarché), food service (Burger King, Telepizza), banking (Caixa, Millennium), telecommunications (Vodafone, MEO, NOS), pharmacies, hospitality (3-5 stars), automotive, insurance.",
  "**Everyone wants to know what customers think.** There's constant demand for evaluators in expansion.",
  "**Three ways to work:**",
  "**Agencies:** intermediaries like Teseo or BMS Mystery Shopping that coordinate everything. They offer security and mission volume.",
  "**Digital platforms:** apps like Spotec or Streev function as 'Uber of mystery shopping'. More variety but higher competition.",
  "**Direct with brands:** contact the brand directly for better profit, but requires negotiation and your own network.",
  "**Model comparison:**",
  "Agencies offer: security, mission volume, professional support. Disadvantage: stricter rules and commissions.",
  "Platforms offer: variety, flexibility, autonomy. Disadvantage: high competition and lower payment.",
  "Direct work offers: maximum profit. Disadvantage: you negotiate and need an established network.",
  "**Payment by sector:**",
  "Simple retail and food service: €5 to €15 per mission.",
  "Telecommunications and banking: €15 to €40 per mission.",
  "Hospitality: €30 to €75 per mission.",
  "Complex audits: €75 to €150 or more.",
  "**Everything depends on complexity and time required for execution.**",
  "**Criteria agencies use to select evaluators:**",
  "Geographic location: do they need someone in Braga? If you're in Lisbon you'll be less useful for that area.",
  "Availability: when can you do missions.",
  "Previous experience: do you have a history of completed evaluations.",
  "Specialization: do you know specific sectors.",
  "Reliability: you have good ratings and positive feedback.",
  "**How to unlock your potential:**",
  "**Complete profile:** clear photo, descriptive CV, relevant experience.",
  "**Updated profile:** keep information always fresh.",
  "**Quick responses:** respond within 4 hours to opportunities.",
  "**Impeccable quality:** approval rate above 95% on reports.",
  "Result: more missions for you. It's a simple cause-effect machine.",
  "**Typical evolution path:**",
  "Months 1-2: quick retail or food service (easy, less paid, builds experience and ratings).",
  "Months 3-4: telecommunications and pharmacy (intermediate, better paid, requires more detail).",
  "Months 5+: luxury hospitality, banking, certified audits (premium, very well paid, demand perfection).",
  "**How to maximize:**",
  "**Specialization:** learn everything about automotive, banking or hospitality sectors.",
  "**Multiple platforms:** work with several simultaneously to not depend on just one.",
  "**Geographic clusters:** accept several missions in same area same day (lower costs).",
  "**Excellent history:** takes 3-6 months but then invitations come naturally.",
  "**Variety of mission formats:** adaptability is key for more opportunities.",
  "The market isn't limited to in-store visits.",
  "**Online evaluations:** submit forms on websites and evaluate responses.",
  "**Phone evaluations:** call and evaluate service quality.",
  "**App evaluations:** use the mobile app and evaluate experience.",
  "**Follow-up evaluations:** check if the company does post-sale follow-up.",
  "Each format pays differently and requires **distinct skills.**",
  "Versatile evaluators master multiple formats and access many more opportunities.",
  "**Projects by packs and multiple evaluations:**",
  "Many agencies organize projects in grouped 'packs'.",
  "Example: evaluate several sections of a large store in a single visit.",
  "Or evaluate multiple stores of the same brand in a defined period.",
  "**Payment per section:** typically €4-5 per evaluated section.",
  "The more sections you evaluate correctly in one visit, the more you earn.",
  "This encourages **efficiency and planning.**",
  "You can turn a trip to a shopping center into several profitable evaluations.",
  "**The automotive sector:** a growing opportunity for experienced evaluators.",
  "One of the most interesting and well-paid markets.",
  "Includes: dealership evaluations (buying experience), workshops (maintenance quality).",
  "Also includes: online leads (response time and quality to requests).",
  "These evaluations pay well because they require **specific knowledge** and complex scenarios.",
  "It's common to use fictitious data (name, email, vehicle data) provided by the agency to simulate a real customer.",
 ],
 pages: [
  {
   title: "Page 1. The Market: Sectors and Opportunities",
   blocks: [
    "The mystery shopping market is growing rapidly in Portugal and Europe. Demand for qualified evaluators is constant, and there are opportunities for those entering with the right profile.",
    "Sectors with highest mission volume are: (1) **Retail food and specialty**: supermarkets, fashion stores, electronics, DIY. (2) **Food service**: fast-food chains, restaurants, cafés. (3) **Telecommunications**. MEO, Vodafone, NOS stores and customer support services. (4) **Banking and insurance**: branches, online services and loan processes. (5) **Hospitality**: 3 to 5 star hotels. (6) **Pharmacies and health**: service, pharmaceutical advice and compliance. (7) **Automotive**: dealerships, workshops and online leads.",
    "The diversity of sectors means there are missions for all profiles. Evaluators with geographic mobility, schedule flexibility and good history have constant access to new opportunities.",
   ],
  },
  {
   title: "Page 2. Three Collaboration Models",
   blocks: [
    "There are three main ways to work as an evaluator. Each has specific advantages and limitations.",
    "**Specialized agencies**: like BMS Mystery Shopping or Teseo, coordinate everything: briefing, selection, validation and payment. They offer security, mission volume and support. In return, they apply stricter rules and retain a commission.",
    "**Digital platforms**: like Spotec or Streev, function as a mission marketplace, where the evaluator autonomously accepts available work. They offer flexibility and variety, but competition is greater and values tend to be lower.",
    "**Direct work with brands**: the most profitable option, as it eliminates intermediaries. Requires your own network and negotiation skills, usually reserved for experienced evaluators.",
    "The smartest strategy for beginners is starting with agencies, to gain experience and ratings, and adding digital platforms as confidence and portfolio grow.",
   ],
  },
  {
   title: "Page 3. Payment by Sector and Selection Criteria",
   blocks: [
    "Payment varies according to sector and mission complexity. As general reference: (1) Simple retail and food service: **€5 to €15 per mission**. (2) Telecommunications, pharmacies and insurance: **€15 to €40**. (3) Hospitality: **€30 to €75**. (4) Complex audits, banking and automotive: **€75 to €150 or more**. Everything depends on time required, detail level and specialization needed.",
    "Agencies select evaluators based on: (1) **Geographic location**: they need someone in the right area. (2) **Schedule availability**: flexibility for missions at varying days and times. (3) **History and ratings**: evaluators with good approval rates are chosen first. (4) **Sector specialization**: those who know the sector deeply are preferred for complex missions. (5) **Reliability**: quick response to invites and deadline compliance.",
    "To maximize opportunities: keep your profile 100% filled and updated, respond to invites within the first 4 hours and deliver reports with approval rate above 95%. These three habits create natural growth momentum.",
   ],
  },
  {
   title: "Page 4. How to Grow in the Profession",
   blocks: [
    "Career evolution as an evaluator follows a gradual path. **Months 1-2:** Simple retail or quick food service: €5 to €15 payment, but the goal is gaining confidence, learning the process and building a portfolio. **Months 3-4:** Telecommunications, pharmacies and insurance, more complexity, more detail, €15 to €40. **Month 5 onwards:** Banking, luxury hospitality and certified audits: €75 to €200 payment, but demand perfection and flawless history.",
    "To grow faster: (1) **Specialize in 1 or 2 sectors**: become the specialist agencies call first. (2) **Work with multiple platforms**: to not depend on a single source. (3) **Geographic clustering**: accept several missions in same area same day to reduce costs and increase profitability. (4) **Excellent history**: takes 3 to 6 months to build, but then invites come without searching.",
    "Some projects are organized in **section packs**: evaluate several areas of a store in one visit, with payment per section (typically €4 to €5 each). A trip to a shopping center can become multiple profitable evaluations. In the automotive sector, it's common to use fictitious data provided by the agency to simulate a real customer, and the rates are among the most competitive in the market.",
   ],
  },
 ],
 quiz: [
 {
 id: "m2q1",
 question: "Which of the following sectors typically has the highest volume of Mystery Shopping missions?",
 options: [
 "Civil construction",
 "Retail and food service",
 "Agriculture",
 "Heavy industry",
 ],
 correctIndex: 1,
 },
 {
 id: "m2q2",
 question: "What are the three main collaboration models for evaluators?",
 options: [
 "Freelancer, part-time and full-time",
 "Agencies, digital platforms and direct client",
 "Online, in-store and phone",
 "National, regional and local",
 ],
 correctIndex: 1,
 },
 {
 id: "m2q3",
 question: "What should an evaluator do to increase mission acceptance rate?",
 options: [
 "Accept only well-paid missions",
 "Work exclusively with one agency",
 "Keep profile complete, respond fast and deliver quality",
 "Avoid missions in sectors you don't know",
 ],
 correctIndex: 2,
 },
 {
 id: "m2q4",
 question: "What is the main advantage of digital mystery shopping platforms?",
 options: [
 "Higher payment per mission",
 "Flexibility and variety of available missions",
 "Free training included",
 "Guarantee of monthly missions",
 ],
 correctIndex: 1,
 },
 {
 id: "m2q5",
 question: "For a beginner evaluator, which areas are more accessible?",
 options: [
 "Banking audits and luxury hotel evaluations",
 "Retail food, quick food service and telecommunications",
 "Pharmaceutical industry and medical devices",
 "Strategic consulting and legal services",
 ],
 correctIndex: 1,
 },
 ],
 },
 {
 id: 3,
 title: "Module 3. Profile, Conduct and Professional Ethics",
 description: "Evaluator requirements, confidentiality and best practices.",
 keywords: ["Discretion", "Confidentiality", "Integrity", "Ethics", "Professionalism"],
 practicalTip: "Imagine you're a good spy, but instead of saving the world, you're helping brands improve!",
 warning: "Confidentiality is INVIOLABLE. If you reveal an evaluation, you'll be permanently banned. It's not worth it!",
 benefit: "By maintaining high ethical standards, you build an excellent reputation and receive better missions.",
 content: [
  "**The ideal evaluator profile:** total discretion, nobody can know you're evaluating. **Rigor:** record everything precisely, never invent data. **Impartiality:** without letting personal opinions contaminate the evaluation. **Consistency:** apply the same criteria in all missions. Basically, you're an **invisible observer**.",
  "Good psychology helps: ability to listen, observe without being obvious.",
  "**Confidentiality: profession intact:** never tell your friend you evaluate Starbucks. Don't comment on Instagram, WhatsApp, family or work. This is inviolable.",
  "Examples of violations leading to permanent ban: talking about missions, describing problems identified to third parties. A ban can bring legal action against you.",
  "**Conflicts of interest:** declare before accepting any mission. Do you work at that store? Do you have a family member there? Friendship with the manager? Are you obsessively loyal to a brand? Declare it to the agency. Agencies have rigorous verification systems.",
  "**During mission execution:** Behave as a completely normal customer. Natural pace, common voice, relaxed body language. Without creating artificial or forced situations. Don't request product tests to evaluate the team. Don't complain without reason to see how they react. Don't take visible notes: it's very suspicious to have a notebook. It's like being undercover in a real context.",
  "**Non-negotiable professional values:** Being on time: always, no delays in missions. Being professional: appropriate clothes, civil attitude. Being honest: fraud means instant end of career. **Report observed facts,** don't invent data. Correct: 'Product A was not in stock.' Incorrect: 'Product A should be but the manager probably hid it.'",
  "**Presence management:** Don't appear 'too well dressed' in a fast-food store (seems odd). Don't constantly look at your phone during evaluation. Don't walk through the store 10 times looking for details. Behave as a customer who enters, buys, leaves naturally.",
  "**Sensitive situations that may occur:** If you see something illegal: report to the agency, don't report it immediately. If you feel in danger: contact agency and you can abandon. If you're identified: maintain composure, never confirm nor deny. **Feedback versus criticism:** it's not your job to advise the brand. You observe and report facts. Don't write: 'they should improve this.' Write: 'I observed this, the protocol asked for that, it didn't happen.'",
  "**Non-negotiable exclusion criteria:** you cannot evaluate if... You work or worked for the company being evaluated. You have a close family member or friend working there. You personally know a staff member of the location. You work for a direct competitor. You're a recognizable regular customer at that location. You go accompanied: you must always **go alone**. If you discover any situation after accepting: **declare immediately to the agency.** Never proceed with a compromised evaluation.",
  "**And if they ask: 'Are you a mystery shopper?'** Some more attentive staff may suspect. **Response:** always deny naturally and convincingly. Say you don't know that methodology. Behave as if you never heard of Mystery Shopping. After leaving, **inform the agency immediately** by email. The agency will decide if the evaluation remains valid. Never confirm you're an evaluator: that completely invalidates the mission.",
  "**Neutral and impartial posture:** mental reset is essential. Before each visit, reset to a neutral state. No prior opinions or expectations based on your experience. Sympathetic customers influence staff positively. Unsympathetic customers provoke the opposite effect. Your posture: polite, discreet, kind. Neither too enthusiastic nor cold. The goal: **your behavior doesn't influence the staff member.** Evaluate what happens naturally, not what you provoke."
 ],
 pages: [
  {
   title: "Page 1. The Professional Evaluator Profile",
   blocks: [
    "Being a Mystery Shopper evaluator requires a specific set of qualities. **Discretion** is the most critical: nobody should realize an evaluation is taking place. **Rigor** is equally essential: only what was observed is recorded, never are data invented. **Impartiality** means leaving personal opinions out and evaluating only based on defined criteria. **Consistency** ensures the same criteria are applied in all missions.",
    "A good evaluator has the ability to observe discreetly, can notice details without fixating the gaze, good short-term memory, to retain times, phrases and sequences, and emotional balance, to not react visibly to poor service.",
    "Before each mission, it's essential to do a **mental reset**: clear prior expectations, previous experiences at that location and any opinions about the brand. The ideal state is neutral, neither enthusiastic nor critical. The evaluator's posture should not influence staff behavior."
   ],
  },
  {
   title: "Page 2. Confidentiality and Conflicts of Interest",
   blocks: [
    "Confidentiality is the most important rule of the profession. **Never comment**: with friends, family, colleagues or on social media, which brand was evaluated, the result, problems found or any detail about the mission. This rule has no exceptions.",
    "The consequences of breaking confidentiality are severe: permanent ban from all platforms and possibility of legal action for contract violation. Information shared 'only with someone trustworthy' can easily reach the wrong person.",
    "**Conflicts of interest** must be declared before accepting any mission. There's a conflict if: you work or worked in the company being evaluated; you have a close family member or friend there; you personally know a staff member; you're a recognizable regular customer; or you work for a direct competitor.",
    "Exclusion criteria are non-negotiable. If you discover a conflict situation after accepting the mission, declare to the agency immediately, never proceed with a compromised evaluation. Agencies have verification systems and cross-reference data from multiple sources."
   ],
  },
  {
   title: "Page 3. Behavior in the Field",
   blocks: [
    "During the mission, the goal is to be a completely normal customer: normal pace, natural voice, relaxed body language, behavior aligned with the persona defined in the briefing. Naturalness is not optional, any abnormal behavior raises suspicions immediately.",
    "What to do: enter with a concrete objective, observe throughout the visit without fixating the gaze, memorize times and phrases instead of taking visible notes, and leave naturally.",
    "What never to do: (1) Take out a notebook or paper during the visit. (2) Photograph obviously. (3) Ask artificial questions to 'test' the team. (4) Create complaints without real reason. (5) Stay at the location for a disproportionate time. (6) Walk through the store repeatedly in a suspicious manner.",
    "**If someone asks if you're a mystery shopper:** Deny naturally, say you don't know that methodology. After leaving, inform the agency immediately by email. The agency decides if the evaluation remains valid. **Never confirm your identity**: that completely invalidates the mission."
   ],
  },
  {
   title: "Page 4. Professional Values and Sensitive Situations",
   blocks: [
    "Professional values are the foundation of everything. **Punctuality**: missions have defined time windows. **Honesty**: fraud means instant end of career. **Professionalism**: civil behavior and presentation appropriate to the context. These are not details: they are the pillars of reputation.",
    "The report should reflect observed facts, not interpretations. The difference is clear: **correct**: 'product A was not in stock'; **incorrect**: 'the manager probably hid product A'. The evaluator's job is to observe and record, not advise or judge intentions.",
    "Sensitive situations that may occur: (1) **Observe something illegal**: report to the agency, don't act on your own. (2) **Feel in danger**: contact the agency and abandon the location if necessary. (3) **Be recognized**: maintain composure, don't confirm nor deny, inform the agency later. (4) **Someone wants to chat**: respond politely and maintain naturalness.",
    "Remember: the evaluator is not a inspector nor a critic. They're a professional observer who helps brands improve. This perspective makes each mission simpler and more effective."
   ],
  },
 ],
 quiz: [
 {
 id: "m3q1",
 question: "What is the most important quality of an evaluator during a mission?",
 options: [
 "Negotiation ability",
 "Discretion: behave as a normal customer",
 "Technical product knowledge",
 "Leadership ability",
 ],
 correctIndex: 1,
 },
 {
 id: "m3q2",
 question: "What should an evaluator do if a family member works at the establishment being evaluated?",
 options: [
 "Perform the evaluation but don't evaluate that family member",
 "Declare the conflict of interest and don't accept the mission",
 "Ask the family member to leave during the visit",
 "Perform the evaluation normally without communicating",
 ],
 correctIndex: 1,
 },
 {
 id: "m3q3",
 question: "Confidentiality in Mystery Shopping means:",
 options: [
 "Not revealing results for the first 30 days",
 "Sharing information only with close family members",
 "Never revealing the identity, projects, brands or results to third parties",
 "Using a pseudonym on social media when discussing missions",
 ],
 correctIndex: 2,
 },
 {
 id: "m3q4",
 question: "During an evaluation, the evaluator should:",
 options: [
 "Test the limits of staff with difficult questions",
 "Act naturally and coherently with the briefing profile",
 "Complain to check how the team reacts",
 "Identify themselves as an evaluator if questioned",
 ],
 correctIndex: 1,
 },
 {
 id: "m3q5",
 question: "What happens in case of fraudulent report submission?",
 options: [
 "The report is simply rejected without consequences",
 "The evaluator receives an informal warning",
 "It compromises system integrity and can lead to permanent exclusion",
 "The agency automatically corrects the data",
 ],
 correctIndex: 2,
 },
 ],
 },
];

export const getCourseModules = (language: 'pt' | 'en') => courseModules;
