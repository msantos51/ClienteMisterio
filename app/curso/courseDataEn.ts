/*
 * FILE DESCRIPTION: Complete course data for Mystery Shopper Course, theoretical content and quizzes for each module.
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
 animationType?: "pharmacy" | "none";
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
   incorrectApproach: "Record: 'Forgot to give the leaflet' (lacks context, may seem like your error, not the brand's)",
   animationType: "pharmacy"
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
 {
 id: 4,
 title: "Module 4. Evaluation Methodology and Quality Criteria",
 description: "What to evaluate, common indicators and how to avoid bias.",
 keywords: ["Evaluation", "Criteria", "Indicators", "Objectivity", "Checklist"],
 practicalTip: "Forget personal opinion. If the criterion is 'greeting within 30 seconds', it's yes or no, never 'almost'!",
 warning: "Watch out for biases: first impression, rating everything as average, or focusing only on the end. Observe EVERYTHING!",
 benefit: "By following it to the letter, your reports are impeccable and the approval rate rises dramatically.",
 content: [
  "**What is evaluated:** five main dimensions of service.",
  "**Service**: does the employee approach you? How? How quickly?",
  "**Processes**: do they follow the procedures defined by the brand?",
  "**Product/Service**: is quality good? Is it available?",
  "**Compliance**: are legal rules followed? Correct signage?",
  "**Experience**: cleanliness, atmosphere, temperature, signage and other elements.",
  "All together result in a **holistic evaluation** of the visit.",
  "**Standard indicators you always encounter:**",
  "Time until approached (timed mentally).",
  "Total duration of interaction.",
  "Employee presentation (uniform, hygiene, behaviour).",
  "Offering of complementary products.",
  "Product knowledge (answers questions?).",
  "Payment process (quick? secure?).",
  "General cleanliness (floor, counter, surfaces).",
  "Regulatory compliance (placards, mandatory signage?).",
  "**Golden rule**: follow the checklist like an exact GPS map.",
  "If it says 'greeting within 30 seconds': it is **YES or NO** based on fact.",
  "There is no 'almost met', 'met with reservations' or 'partially'.",
  "It's black or white.",
  "If you waited 35 seconds and the criterion was 30: **did NOT meet.**",
  "**Cognitive biases:** mental traps that distort evaluations.",
  "**Halo effect**: first impression taints everything (e.g., they were polite greeting, so I rate everything well).",
  "**Central tendency**: everything comes out 'average' to avoid committing (e.g., I give 3/5 for everything).",
  "**Confirmation bias**: looking for evidence that confirms what you already think.",
  "**Recency bias**: the end carries more weight than everything else (focus only on the close).",
  "**Fight against these biases constantly.**",
  "**How to avoid biases:**",
  "Observe in a structured way: follow checklist item by item.",
  "Don't form conclusions until the end of the visit.",
  "Record exact times (not 'waited a long time' vaguely).",
  "Compare only with the defined criterion, not with experience in other stores.",
  "**Calibration between evaluators:**",
  "If two evaluators enter the same place, **same time, same situation:**",
  "They should leave with similar evaluations (about 90% match).",
  "This proves that the criterion is clear and well defined.",
  "If one says 'excellent' and another 'terrible': criterion is vague.",
 ],
 pages: [
  {
   title: "Page 1. What is Evaluated: The Five Dimensions",
   blocks: [
    "Each Mystery Shopping mission evaluates the customer experience across five main dimensions. (1) **Service**: does the employee approach the customer? How and how quickly? Are they polite and attentive? (2) **Processes**: are the procedures defined by the brand being followed? (3) **Product or service**: is it available, in good condition and of expected quality? (4) **Compliance**: are legal rules, mandatory signage and internal standards being respected? (5) **Overall experience**: cleanliness, temperature, lighting and space organisation.",
    "Together, these five dimensions form a holistic evaluation of the visit. It's not just about 'was the service good', but about measuring each component independently and objectively.",
    "The most common **standard indicators** are: (1) Time until approached (measured precisely). (2) Total duration of interaction. (3) Employee presentation: uniform, hygiene, behaviour. (4) Offering of complementary products. (5) Product knowledge: do they answer technical questions? (6) Payment process: speed and correctness. (7) General cleanliness: floor, counter, surfaces. (8) Regulatory compliance: placards and mandatory signage.",
   ],
  },
  {
   title: "Page 2. Evaluation Scales and the Golden Rule",
   blocks: [
    "Each brand defines its own evaluation scale. The most common are: (1) **Binary YES/NO**: the most objective and frequent; no room for interpretation. (2) **YES / PARTIALLY / NO**: allows recording intermediate situations. (3) **Scale 1 to 5**: where 1 = never and 5 = always. (4) **N/A (not applicable)**: for criteria that don't apply to the specific situation. (5) **Priority classification**: critical, important or minor.",
    "The **golden rule** of all evaluation is this: follow the criterion like a GPS map. If the criterion says 'the employee greeted within 30 seconds', the answer is YES or NO: based only on the observed fact. There is no 'almost met' or 'met with reservations'. If you waited 35 seconds and the criterion was 30: **did NOT meet**.",
    "Regardless of the scale, the rule is always the same: record exactly what was observed, without inflating or deflating, without letting sympathy or antipathy influence. What is not observable is not recorded.",
   ],
  },
  {
   title: "Page 3. Cognitive Biases and How to Avoid Them",
   blocks: [
    "**Cognitive biases** are mental traps that distort the evaluation without the evaluator noticing. Knowing them is the best way to fight them.",
    "The four most frequent biases are: (1) **Halo effect**: a very good first impression taints the whole evaluation; example: the employee was friendly at greeting, so everything is rated well, ignoring that they couldn't answer technical questions. (2) **Central tendency**: giving average scores for everything to 'avoid committing'; result: useless data. (3) **Confirmation bias**: looking for evidence that confirms what you already think about the place. (4) **Recency bias**: the end of the visit has more weight than everything else.",
    "To combat these biases: (1) Follow the checklist item by item, instead of evaluating globally. (2) Don't form conclusions until the end of the visit. (3) Record exact times, not 'waited a long time', but '4 minutes and 20 seconds'. (4) Compare only with the defined criterion, not with experiences in other stores or personal expectations.",
   ],
  },
  {
   title: "Page 4. Stage Evaluation and Multiple Sections",
   blocks: [
    "Many brands structure the evaluation into **stages of the customer journey**, evaluated separately. (1) **Welcome**: did they acknowledge the presence, greet, offer help? (2) **Needs diagnosis**: did they ask questions, listen attentively? (3) **Presentation and advice**: did they suggest products, explain differences? (4) **Complementary sale**: did they offer add-ons, warranties or accessories? (5) **Close and farewell**: did they thank, say goodbye, invite to return?",
    "This structure allows the brand to identify exactly where the strengths and improvement points are, not just 'was service good or bad', but 'we failed at complementary selling'.",
    "In large stores, supermarkets, DIY stores, electronics (it's common) to evaluate **2 to 4 sections in a single visit**. Each section is completely independent: you cannot be served by the same employee in two sections, you don't mention one interaction in another, and you don't leave the store without completing all assigned sections. Mixing up scenarios between sections invalidates the visit.",
    "**Calibration between evaluators** is essential for data quality: if two evaluators visit the same location under the same conditions, their evaluations should be very similar (above 90% match). When that doesn't happen, the criterion is poorly defined or there's a training problem.",
   ],
  },
 ],
 evaluationExamples: [
  {
   title: "Example 1: Avoiding the Halo Effect",
   scenario: "You enter a pharmacy. The employee greets you with a big smile and perfect politeness. Then, when you ask about medicines, she can't answer 2 of 5 questions.",
   correctApproach: "Separate evaluations: 'Greeting: 10/10, politeness: excellent. Product knowledge: 3/5 (answered correctly only 3 of 5 questions about medicines). Don't let the excellent first impression contaminate the knowledge evaluation.'",
   incorrectApproach: "'Excellent employee, very attentive, everything perfect.' (first impression contaminated everything, you ignored that she couldn't answer questions)"
  },
  {
   title: "Example 2: Avoiding Central Tendency",
   scenario: "You evaluate 10 criteria. Some were excellent (greeting, atmosphere), some failed (didn't offer complements, product unavailable). You feel like giving 3/5 for everything to 'not commit'.",
   correctApproach: "Evaluate each item individually, honestly: 'Greeting: YES (in 25 sec). Offering complements: NO. Cleanliness: YES. Unavailability: product A was not in stock. Each gets exact evaluation.'",
   incorrectApproach: "Give 3/5 for everything because 'overall it was ok'. Agency receives useless data, doesn't know where to improve."
  },
  {
   title: "Example 3: Being Objective About Times",
   scenario: "You enter the store. You wait. You don't have a watch, so 'I think I waited about 3-4 minutes'.",
   correctApproach: "Use phone discreetly: note entry time (10:15), approach time (10:18). Difference = exactly 3min. Record: 'Time to approach: 3 minutes.' Factual.",
   incorrectApproach: "'Waited some time' or 'waited more than 5 minutes' (vague, based on feeling)"
  }
 ],
 quiz: [
 {
 id: "m4q1",
 question: "What are the main dimensions evaluated in Mystery Shopping?",
 options: [
 "Price, location and brand",
 "Service, processes, product/service, compliance and overall experience",
 "Sales volume, margin and stock rotation",
 "Store design, background music and temperature",
 ],
 correctIndex: 1,
 },
 {
 id: "m4q2",
 question: "What is the 'halo effect' in an evaluation?",
 options: [
 "When the evaluator is recognised by the employee",
 "When a first impression influences the entire evaluation",
 "When the establishment has good lighting",
 "When the evaluator repeats the same visit multiple times",
 ],
 correctIndex: 1,
 },
 {
 id: "m4q3",
 question: "How should the evaluator record if 'the employee greeted within the first 30 seconds'?",
 options: [
 "Evaluate the quality and enthusiasm of the greeting",
 "Record factually whether it happened or not, according to the defined criterion",
 "Give a rating from 1 to 5 based on their perception",
 "Ignore it if the employee was busy with another customer",
 ],
 correctIndex: 1,
 },
 {
 id: "m4q4",
 question: "What is 'central tendency' as a bias?",
 options: [
 "Giving more weight to the experience in the central area of the store",
 "Rating everything as 'average', avoiding extremes",
 "Focusing only on counter service",
 "Evaluating only the most important aspects",
 ],
 correctIndex: 1,
 },
 {
 id: "m4q5",
 question: "What ensures calibration between evaluators?",
 options: [
 "That all evaluate on the same day and time",
 "That clear criteria, good training and specific guides minimise ambiguity",
 "That they use the same device for recording",
 "That they all have the same opinion about the service",
 ],
 correctIndex: 1,
 },
 ],
 },
 {
 id: 5,
 title: "Module 5. Mission Preparation",
 description: "Briefing analysis, logistical planning and risk management.",
 keywords: ["Briefing", "Planning", "Logistics", "Risks", "Preparation"],
 practicalTip: "30 minutes preparing = avoids 30 hours of problems. Prepare well and everything goes smoothly!",
 warning: "Don't check opening hours? They might be closed. Don't bring money? You can't make the required purchase. Plan!",
 benefit: "Excellent preparation = smooth mission, no stress, and a top-notch report that gets approved first time.",
 content: [
  "**The briefing:** your treasure map with all essential information.",
  "**Briefing elements:**",
  "**Objectives:** e.g., 'we want to know if they greet within 30 seconds' or 'measure waiting time'.",
  "**Persona:** e.g., 'male 30-40 years buying casual clothing'.",
  "**Checklist:** exact list of items to observe and evaluate.",
  "**Evidence:** e.g., 'receipt + exterior photo + interior selfie' or just receipt.",
  "**Deadlines:** e.g., 'execute 15-20 March' and 'submit by the 25th'.",
  "**Special instructions:** e.g., 'manager is on sick leave, evaluate only who's there' or 'photograph signage'.",
  "**Smart briefing reading:**",
  "**First reading:** understand the complete big picture.",
  "**Second reading:** memorise persona (name, age, behaviour, typical purchases, language).",
  "**Third reading:** maximum detail (checklist item by item, exact deadlines, evidence, instructions).",
  "If something doesn't make sense: **ask the agency BEFORE going out**, not after.",
  "Don't improvise in the field: it inevitably creates errors.",
  "**Logistical planning:**",
  "**Ideal time:** peak or quiet period? Product might be out of stock?",
  "**Route:** Google Maps, transport, estimated duration.",
  "**Parking:** cost? Free? Far from the location?",
  "**Total time:** prep (30min) + travel (30min) + execution (45min) + report (30min) = 2h15.",
  "**Costs:** fuel/transport + parking + mandatory consumption.",
  "**Equipment:** phone 100%, cash, card, documentation.",
 ],
 pages: [
  {
   title: "Page 1. The Briefing: Your Mission Map",
   blocks: [
    "The **briefing** is the central document of each mission. It contains all the information needed to execute the evaluation correctly. A mission should never be started without reading it completely.",
    "The essential elements of a briefing are: (1) **Objectives**: what the brand wants to measure (e.g., 'verify if employees greet within 30 seconds'). (2) **Persona**: the profile to represent (e.g., 'male between 30 and 40 looking for casual clothing'). (3) **Checklist**: exact list of items to observe and evaluate. (4) **Evidence**: what to collect: receipt, photos, time records. (5) **Deadlines**: execution window and submission deadline. (6) **Special instructions**: specific conditions of the project.",
    "The ideal briefing reading is done in three passes: **first reading** to understand the overall objective; **second reading** to memorise the persona and scenario; **third reading** to retain each detail of the checklist, exact deadlines and evidence requirements.",
    "If something doesn't make sense, ask the agency **before going out**: never after. Improvising in the field is the most common cause of invalid missions.",
   ],
  },
  {
   title: "Page 2. Logistical Planning",
   blocks: [
    "A well-executed mission starts with good planning. Before going out, there are four areas to consider: (1) **Schedule**: is the store open? Is there product available at that time? Is it peak or quiet hour? (2) **Route**: route, estimated time, available transport, parking (cost and location). (3) **Total time**: preparation (30 min) + travel + execution + report; knowing the real total is essential for assessing profitability. (4) **Costs**: fuel, parking, mandatory consumption.",
    "**Mandatory equipment** for each mission includes: phone with 100% battery and active data; cash and card for any purchases; documentation or credentials if required by the briefing; and, where relevant, voucher activated in advance.",
    "Anticipate the most common problems: (1) **Store closed**: check hours on Google Maps or by phone before going out. (2) **Product unavailable**: define a plan B with a similar alternative. (3) **Personal unforeseen event**: contact the agency immediately. (4) **Traffic**: leave earlier than estimated.",
   ],
  },
  {
   title: "Page 3. Preparation Checklist and Plan B",
   blocks: [
    "In the 30 minutes before the mission, go through this checklist: (1) Briefing re-read and understood. (2) Doubts clarified with the agency. (3) Store hours verified. (4) Route planned with time, cost and parking. (5) Cash and card available. (6) Clothing appropriate to the persona. (7) Phone at 100% with active data. (8) Necessary documents gathered. (9) Plan B defined for unforeseen events. If all OK: execute.",
    "For the most common situations, there's always a solution: (1) **Store closed**: reschedule for the next day within the deadline. (2) **Product unavailable**: adapt with a similar alternative or report. (3) **Very busy store**: continue evaluating and record the context (the agency wants to know how they function under pressure). (4) **Employee absent**: evaluate whoever is present. (5) **Receipt damaged**: photograph the screen or ask for an alternative receipt.",
    "**Managing anxiety** on the first missions is completely normal. Start with something simple, close to home, of low complexity. From the fifth or tenth mission, the process becomes automatic and naturalness builds with practice.",
   ],
  },
  {
   title: "Page 4. Apps, Vouchers and Training Questions",
   blocks: [
    "Many projects use digital reporting platforms like **Mobiaudit** or **Shopmetrics**. These apps should be downloaded, configured and tested **before the day of the mission**: never in the field. Check the login, project access and familiarise yourself with navigation. Some require filling in part of the report during the visit, so prior practice is essential.",
    "In food service and services projects, it's common to receive a **voucher** to cover mandatory consumption. The voucher must be activated at home, before the visit. Don't present it proactively, wait for the employee to ask about the payment method. Without an activated voucher, the consumption comes out of your pocket without guarantee of reimbursement.",
    "Many agencies require a **training questionnaire** before approving the evaluator for the mission. This test checks if you understood the scenarios, the checklist, required evidence and deadlines. Only after approval can you execute. Take these tests seriously, they are the 'licence to operate' in each project and protect you from avoidable errors in the field.",
   ],
  },
 ],
 quiz: [
 {
 id: "m5q1",
 question: "What is the most critical phase of a Mystery Shopping mission?",
 options: [
 "Report submission",
 "Prior mission preparation",
 "Contact with the agency after the visit",
 "Choosing the establishment to evaluate",
 ],
 correctIndex: 1,
 },
 {
 id: "m5q2",
 question: "What should the evaluator do if they have doubts about the briefing?",
 options: [
 "Interpret as best they can and proceed with the mission",
 "Ask other evaluators in online forums",
 "Clarify doubts with the agency before the visit",
 "Ignore the confusing points and focus on the rest",
 ],
 correctIndex: 2,
 },
 {
 id: "m5q3",
 question: "Which of the following is NOT a typical briefing element?",
 options: [
 "Checklist of items to evaluate",
 "Profile/persona to represent",
 "List of salaries of establishment employees",
 "Execution and delivery deadlines",
 ],
 correctIndex: 2,
 },
 {
 id: "m5q4",
 question: "What should the evaluator do if the establishment is closed on the planned day?",
 options: [
 "Submit the report as 'location closed'",
 "Visit another establishment of the same brand without authorisation",
 "Reschedule within the deadline and communicate with the agency if necessary",
 "Cancel the mission and wait for new assignment",
 ],
 correctIndex: 2,
 },
 {
 id: "m5q5",
 question: "Why is it important to calculate costs before the mission?",
 options: [
 "To negotiate higher pay with the agency",
 "To assess mission profitability (travel, consumptions, parking)",
 "To request reimbursement of all personal expenses",
 "It's not necessary, all costs are covered by the agency",
 ],
 correctIndex: 1,
 },
 ],
 },
 {
 id: 6,
 title: "Module 6. Field Execution",
 description: "Natural approach, observation techniques and handling unexpected events.",
 keywords: ["Naturalness", "Observation", "Discretion", "Improvisation", "Execution"],
 practicalTip: "Be a normal customer. Don't show up with an investigator's notebook or asking strange questions!",
 warning: "If you identify yourself as an evaluator, the mission becomes completely useless. Never reveal yourself!",
 benefit: "Natural and well-executed evaluation = real and honest data = a report that genuinely helps the brand.",
 content: [
  "**Naturalness is everything:** behave as a completely common customer.",
  "Normal pace, natural voice, relaxed body language.",
  "If you do something strange, suspicions arise immediately.",
  "Imagine it's you yourself in that place making a normal purchase.",
  "**Tip:** watch how other customers behave and imitate.",
  "**Ideal visit sequence:**",
  "**Entry:** look around naturally (observe atmosphere, cleanliness).",
  "**Exploration:** walk through the store as a regular customer (products, signage, layout).",
  "**Seeking the employee:** natural approach ('Hello, I'm looking for...' or wait).",
  "**Interaction:** natural conversation, questions a customer would ask (product? price? availability?).",
  "**Transaction:** purchase (if required) or thank naturally.",
  "**Exit:** leave normally, without rushing.",
  "**How to observe without being obvious:**",
  "**Corner of the eye:** don't stare directly at people or details (it's suspicious).",
  "**Pattern memorisation:** associate details with checklist items.",
  "Example: uniform = blue (YES), greeting = 20sec (YES), dust on floor = (NO).",
  "**Time anchoring:** mentally mark exact times.",
  "Example: entry 10:15, approached 10:18, exit 10:35.",
  "**Total observation:** see the whole store (not just counter), other customers, sounds, temperature.",
 ],
 pages: [
  {
   title: "Page 1. Naturalness in Action: Being a Normal Customer",
   blocks: [
    "The central principle of field execution is simple: **behave as a completely normal customer**. Natural pace, common voice, relaxed body language. Any behaviour different from expected immediately raises suspicion and compromises the mission.",
    "The ideal sequence of an in-person visit follows this logic: (1) **Entry**: look around naturally (observe atmosphere, cleanliness, organisation). (2) **Exploration**: walk through the store as a customer with an objective (products, prices, signage). (3) **Contact with employee**: natural approach, ask as any customer would. (4) **Interaction**: flowing conversation, questions related to the product or service. (5) **Transaction**: purchase, if required, or natural thanks. (6) **Exit**: without rushing, without repeatedly looking back.",
    "Before entering, observe how other customers behave at the location and align your behaviour. Each space has its own rhythm: a cafeteria is different from a car dealership.",
   ],
  },
  {
   title: "Page 2. Discrete Observation Techniques",
   blocks: [
    "Observing without being obvious is a skill that is trained. Some effective techniques: (1) **Corner of the eye**: never stare directly at people or details; use peripheral vision. (2) **Pattern memorisation**: associate each observed detail with a checklist item (uniform = yes, greeting = 20 seconds, cleanliness = yes). (3) **Time anchoring**: mentally record the exact times of key moments: entry, approach, end of interaction, exit.",
    "To record discreetly during the visit, use the phone as any customer would: check hours, send a message, look something up. If you need to photograph, do it as if taking a selfie. **Never take out a notebook or paper during the visit**: it is immediately suspicious.",
    "After leaving, sit down somewhere nearby for 10 minutes and mentally review the visit chronologically. Reinforce the memory of each moment before starting to write. Expand to the full report within a maximum of 24 hours: memory degrades quickly and details are lost.",
   ],
  },
  {
   title: "Page 3. Managing Unexpected Events and Red Lines",
   blocks: [
    "Unexpected situations happen in missions. Knowing how to react is part of professionalism: (1) **Product out of stock**: adapt with a similar alternative or report unavailability. (2) **Very busy store**: continue; record the context (the agency wants to know how it functions under pressure). (3) **Employee absent**: evaluate whoever is present. (4) **Receipt damaged**: photograph the screen or ask for an alternative receipt. In any real blockage situation, contact the agency immediately.",
    "There are behaviours that are **never** done in a mission: (1) Reveal your identity as an evaluator: completely invalidates the mission. (2) Artificially prolong the visit: an hour in a fast-food store is immediately suspicious. (3) Create false situations to test employee reactions. (4) Lose composure: even with poor service, always maintain politeness and calm. (5) Act alone in sensitive situations: when in doubt, always contact the agency.",
    "**If they suspect you:** Maintain composure. Deny naturally, say you don't know that methodology. After leaving, inform the agency immediately. Never confirm, never flee abruptly, never appear nervous.",
   ],
  },
  {
   title: "Page 4. Proactive Approach, Scenarios and Post-Visit Follow-up",
   blocks: [
    "One of the most common metrics is the **proactive approach**: evaluating whether the employee approaches you spontaneously, without you needing to ask for help. The procedure: you go to the section and show interest (touch the products, observe). Wait 5 minutes. If no employee is available, wait another 5 minutes. Only then can you seek help. **Never ask for help before the defined time**: the objective is to measure if they come to you.",
    "The **assigned scenario** in the briefing must be followed to the letter: never choose another, never improvise. The scenario defines the comparison protocol. Its presentation should be natural, with your own words, without releasing all information at once, create space for the employee to ask questions.",
    "Some projects include **post-visit follow-up evaluation**: after the visit, the company contacts you (call, SMS, WhatsApp or email) normally within 24 hours. You evaluate if the contact was made on time, the professionalism of the approach and if they tried to close a sale or schedule a meeting. Keep the phone active. If they ask if you want to proceed, say you're thinking. **Never commit to a real purchase.**",
   ],
  },
 ],
 evaluationExamples: [
  {
   title: "Example 1: How to Be Natural While Observing",
   scenario: "You're in a clothing store. You need to observe: cleanliness, service, employee knowledge. But you don't want to be obvious.",
   correctApproach: "Enter normally, observe while 'browsing' the store (see dust? organisation? clear prices?) without stopping and staring at anything. Approach employee naturally ('Hello, I'm looking for an XL t-shirt'). While interacting, observe: greeting? offers help? knows stock? It's natural because it's part of normal conversation.",
   incorrectApproach: "Enter with a notebook, take visible notes, photograph dust on the floor, stare at an employee to 'observe', ask strange questions like 'how long has that dust been there?' = Very obvious, raises suspicions."
  },
  {
   title: "Example 2: Adapting to an Unexpected Event",
   scenario: "You come to evaluate how long it takes to be served. When you arrive, the store is EXTREMELY busy, huge queues. You feel like leaving.",
   correctApproach: "Stay! Join the queue as a normal customer. Observe: how many employees are active? Are they rushing? What is the REAL waiting time? Record everything. The context 'busy store' is IMPORTANT for the agency, they want to know if they serve well even under pressure. Report: 'Location with ~30 customers, 2 active checkouts. Wait: 8min. Employees: hurried but polite.'",
   incorrectApproach: "Leave the store because 'can't do the evaluation' or because 'it's not normal peak time'. Miss the opportunity to collect valuable data (agency wants to know how they function during peaks!)."
  },
  {
   title: "Example 3: Managing When You're Recognised",
   scenario: "You're in a store evaluating. An employee (whom you know personally) recognises you and says 'Hello! Long time no see!'",
   correctApproach: "Respond naturally, politely: 'Hello! All good? Yes, it's been a while!' Behave as a regular customer. Continue evaluating. Afterwards, INFORM AGENCY in the report: 'Note: recognised by [name]. Was not communicated that it was an evaluation, behaviour was natural'. Agency decides whether to discard.",
   incorrectApproach: "Leave discreetly to avoid being seen, or try to pretend you don't know them (becomes awkward), or worse, confess 'I'm doing an evaluation'. The evaluation becomes useless if the person knows."
  }
 ],
 quiz: [
 {
 id: "m6q1",
 question: "What is the key factor during field execution?",
 options: [
 "Speed of information collection",
 "Naturalness: behaving as a regular customer",
 "Confronting employees with difficult situations",
 "Taking as many photographs as possible",
 ],
 correctIndex: 1,
 },
 {
 id: "m6q2",
 question: "What is 'time anchoring' in observation?",
 options: [
 "Always visiting the location at the same time",
 "Mentally recording the exact times of events (entry, approach, etc.)",
 "Limiting the visit to a defined maximum time",
 "Comparing waiting time with previous visits",
 ],
 correctIndex: 1,
 },
 {
 id: "m6q3",
 question: "How should the evaluator take notes during the visit?",
 options: [
 "In a discreet notebook inside the pocket",
 "On a printed form taken to the store",
 "Take no visible notes, memorise and record after leaving",
 "Record audio on the phone throughout the visit",
 ],
 correctIndex: 2,
 },
 {
 id: "m6q4",
 question: "If the product to evaluate is out of stock, the evaluator should:",
 options: [
 "Cancel the mission immediately",
 "Adapt the interaction while maintaining the evaluation objectives",
 "Complain to the manager to test their response",
 "Buy an alternative product and report it as if it were the original",
 ],
 correctIndex: 1,
 },
 {
 id: "m6q5",
 question: "If the evaluator suspects they've been identified as a mystery shopper, they should:",
 options: [
 "Confirm their identity and apologise",
 "Leave the location immediately",
 "Never reveal their identity and maintain naturalness",
 "Ask to speak to the manager",
 ],
 correctIndex: 2,
 },
 ],
 },
 {
 id: 7,
 title: "Module 7. Evidence Collection and Management",
 description: "Types of evidence, organisation and post-visit checklist.",
 keywords: ["Evidence", "Documentation", "Photos", "Receipts", "Organisation"],
 practicalTip: "Keep a legible receipt, take clear photos and organise everything within 15 minutes after the visit. It gets harder later!",
 warning: "Blurry photos, torn receipt or no date = guaranteed rejection. Evidence quality is critical!",
 benefit: "Excellent evidence = report approved quickly = top reputation = more missions for you!",
 content: [
  "**Types of evidence you collect:**",
  "**Receipts and bills:** essential proof (CRITICAL) with date, time, value.",
  "**Photographs:** exterior, interior (layout, cleanliness, signage), product, employees, signage.",
  "**Time records:** entry, approach, duration, exit.",
  "**Written notes:** observations and recorded behaviours.",
  "**Audio recording:** only if briefing allows (rare).",
  "**The briefing dictates the rules, follow to the letter:**",
  "What exact evidence: receipt + photos or just receipt?",
  "Mandatory format: JPG, PDF, scanned?",
  "Visible data: date, time, value?",
  "Deadlines: 24h or 5 days?",
  "**Not complying = automatic rejection, no exceptions.**",
  "**Organise evidence immediately:**",
  "Maximum 15 minutes after leaving the location.",
  "Name files with a pattern: '20250320_Starbucks_Lisbon_receipt.jpg'.",
  "Check photos: legible, well focused, without involuntary people.",
  "Receipt: protect from water and tearing, keep original + scan.",
  "Time data: place in a secure file.",
  "Make backup: copy to computer.",
  "Folder per mission: 'M001_Starbucks_20250320'.",
 ],
 pages: [
  {
   title: "Page 1. Types of Evidence and Briefing Rules",
   blocks: [
    "**Evidence** is the proof that the mission was carried out and that the observations are true. Without adequate evidence, the report is not accepted, regardless of the quality of the narrative.",
    "The most common types of evidence are: (1) **Receipt or bill**: essential proof of the transaction, with visible date, time and value. (2) **Photographs**: exterior of the location, interior (cleanliness, layout, signage), product and non-conformities. (3) **Time records**: entry time, approach, payment and exit. (4) **Written notes**: observations and behaviours recorded after leaving. (5) **Screenshots**: for online evaluations, with visible date and time. (6) **Audio recording**: only when the briefing allows, which is rare.",
    "The briefing defines exactly what evidence is needed: format (JPG, PDF), what data must be visible (date, time, value, location) and the submission deadline. **Not complying with these specifications results in automatic rejection, no exceptions.** Never improvise regarding type or format of evidence.",
   ],
  },
  {
   title: "Page 2. Organisation and Quality of Evidence",
   blocks: [
    "In the first 15 minutes after leaving the location, organise all collected evidence. Create a clear and consistent folder per mission, with standardised naming: for example, '20250320_Starbucks_Lisbon_receipt.jpg' or '20250320_Carrefour_Alvalade_exterior.jpg'.",
    "Before submitting, validate by cross-referencing with the briefing: (1) Do I have all mandatory evidence? (2) Is the data consistent: does the receipt time match the time notes? (3) Are the photos sharp, well framed and without involuntary faces? (4) Is the receipt legible: date, time, value and location visible? (5) Is there no personal data of third parties exposed?",
    "For **quality photographs**: use natural light or white LED (no flash that creates reflections). Position the phone perpendicularly to the object. Take 3 or 4 safety photos and keep the best. For the receipt: place it on a flat surface with good lighting, without folds. If the value is not legible, don't submit.",
    "Always **back up evidence**: copy to the computer and keep the folder organised by mission. On days with 2 or 3 missions, immediate organisation by folder avoids confusion and submission errors.",
   ],
  },
  {
   title: "Page 3. Receipt, Digital Evidence and Food Photos",
   blocks: [
    "The **receipt** is the most critical evidence in most missions. To be valid, it must show: date and time of transaction, amount paid, list of products (aligned with the persona and briefing), location or branch identification, and payment method. Always keep the physical original and scan or photograph immediately after the visit.",
    "For **online evaluations**, screenshots are the equivalent of the receipt: they must have the computer's date and time visible in the corner of the screen, all form fields legible, and confirmation emails or SMS saved as proof. The agency uses these timestamps to calculate exact response times.",
    "In **food service evaluations**, the photograph of the meal is mandatory in almost all projects. It should be taken from above (aerial view), before starting to eat, with all components of the dish visible. In takeaway, open the containers before photographing. A meal photographed incorrectly is equivalent to missing evidence.",
    "Special situations: (1) **No receipt**: ask for an alternative receipt or document the situation in the report. (2) **Multiple purchases**: ensure the receipt reflects all items. (3) **Sensitive data in photo**: remove or pixelate before submitting. (4) **Fitness or services evaluations**: record calls, screenshot the voucher and photograph the facade.",
   ],
  },
 ],
 evaluationExamples: [
  {
   title: "Example 1: Perfect Evidence Organisation",
   scenario: "You did 3 missions in one day. 3 receipts, multiple photos, notes. How to avoid chaos?",
   correctApproach: "For each mission: folder 'Mission1_Carrefour_20250320' with 'receipt.jpg', 'exterior.jpg', 'interior_cleanliness.jpg', 'product.jpg', 'notes.txt' (times + observations). Same for Mission 2 and 3. After submitting, archive. Result: zero confusion, easy to review.",
   incorrectApproach: "All photos in 'Images', generic names 'IMG_001'. Receipts loose on the desk. Notes in 3 blocks. When submitting: which photo is from which store? Where are the receipts? CHAOS."
  },
  {
   title: "Example 2: Ensuring Photo Quality",
   scenario: "Photo of the receipt is blurry, value illegible. Next one has a light reflection. How to solve?",
   correctApproach: "Receipt on flat surface. Phone perpendicular (not tilted). Natural light by window or white LED. Take 3-4 safety photos. Choose best. If value still can't be read, macro mode with zoom. Result: legible receipt, documented.",
   incorrectApproach: "Take 1 quick, bad photo, submit anyway. Agency rejects: 'illegible'. Report comes back to you."
  },
  {
   title: "Example 3: Cross Validation",
   scenario: "Receipt shows 10:15, you recorded 'approach 10:20', but receipt marks 10:18. Which is right?",
   correctApproach: "Receipt records payment (10:18), not approach. You're right, approached at 10:20 (2min later). Correct record: 'Entry 10:15. Approach 10:18 (per receipt). Exit 10:22.'",
   incorrectApproach: "Ignore discrepancy. Agency questions integrity. Report rejected. Reputation affected."
  }
 ],
 quiz: [
 {
 id: "m7q1",
 question: "What is the main function of evidence in Mystery Shopping?",
 options: [
 "Serve as a personal souvenir of the visit",
 "Prove that the mission was carried out and observations are truthful",
 "Decorate the report with images",
 "Demonstrate the evaluator's photography skills",
 ],
 correctIndex: 1,
 },
 {
 id: "m7q2",
 question: "What is one of the main causes of report rejection?",
 options: [
 "Report too long",
 "Use of informal language",
 "Not complying with evidence requirements",
 "Evaluation with very low scores",
 ],
 correctIndex: 2,
 },
 {
 id: "m7q3",
 question: "When should the evaluator record observations in writing?",
 options: [
 "The next day, at leisure",
 "Ideally in the first 15 minutes after leaving the location",
 "A week before the submission deadline",
 "During the visit, on the phone",
 ],
 correctIndex: 1,
 },
 {
 id: "m7q4",
 question: "What should the evaluator check in collected photographs?",
 options: [
 "That they have artistic filters applied",
 "That they are legible, well framed and without exposed personal information",
 "That they include employees' faces",
 "That they have the agency's watermark",
 ],
 correctIndex: 1,
 },
 {
 id: "m7q5",
 question: "The post-visit checklist serves to:",
 options: [
 "Plan the next mission",
 "Calculate total time spent on the mission",
 "Ensure all evidence and data were collected before submitting",
 "Communicate the result directly to the evaluated brand",
 ],
 correctIndex: 2,
 },
 ],
 },
 {
 id: 8,
 title: "Module 8. Report Writing and Submission",
 description: "Report structure, objective answers and quality requirements.",
 keywords: ["Report", "Writing", "Objectivity", "Quality", "Submission"],
 practicalTip: "Write like a journalist: facts, context, evidence. No personal opinion. Dry and clear!",
 warning: "Contradictory report (checklist says one thing, text says another) = rejection. Consistency is essential!",
 benefit: "Quality reports = approval rate >95% = invited for better and better-paid missions.",
 content: [
  "The report is your **final product**: it's what the brand receives and uses to make decisions. It must be PERFECT.",
  "3 pillars of a report: **Facts**: what I observed exactly, not interpretations.",
  "**Context**: circumstances of the visit: busy store? specific day? event?",
  "**Evidence**: proofs I collected: photos, receipt, times.",
  "Structure: **Header** with date, time, exact location, address, mission no., persona used.",
  "**Visit data**: total time in store, entry time, exit time, location characterisation (busy/quiet?).",
  "**Closed answers**: YES/NO checklist, 1-5 scales, N/A. One by one, without interpretation.",
  "**Open answers**: detailed chronological description, observed behaviours, relevant dialogues.",
  "**Overall rating**: final score if applicable.",
  "**Attachments**: photos, receipt, documentation.",
  "Closed answers: BINARY, WITHOUT AMBIGUITY. Criterion 'Employee greeted within 30 seconds' deserves YES or NO.",
  "There's no 'almost': 32 seconds is NOT YES. Weak greeting is YES if verbal.",
  "It's ABSOLUTE FACTUAL: If waited 35 seconds, did NOT meet. Simple.",
  "Open answers: **Chronological and objective**. Example: '10:15 I enter, 10:18 approached by Maria, she says \"Hello, how can I help?\", I ask about XL t-shirt, she shows 3 options, offers colours, takes 8 minutes, I pay at 10:26'.",
  "No personal opinions: don't write 'terrible service' (opinion), write 'employee answered only 2 of 5 technical questions' (fact).",
  "Observable, not subjective: don't write 'friendly', write 'smiled during interaction'.",
  "Only measurable: **times, descriptions, behaviours, words** spoken, not interpretations.",
  "Clear and professional language: 'Employee approached customer in 3 minutes. Question: do you know the differences? Answer: couldn't detail it. Result: criterion not met.'",
 ],
 pages: [
  {
   title: "Page 1. The Three Pillars of the Report",
   blocks: [
    "The report is the **final product** of the mission. It's what the brand receives, analyses and uses to make decisions. Its quality directly reflects your professional reputation.",
    "Every report rests on three pillars: (1) **Facts**: what was observed exactly, without interpretations or opinions. (2) **Context**: the circumstances of the visit: was it busy? Was it a special day? Was there an event? (3) **Evidence**: the proof that supports the reported content: photos, receipt, time records.",
    "The structure of a complete report includes: **Header** with date, time, exact location, address, mission number and persona used. **Visit data**: total duration, entry and exit time, atmosphere characterisation. **Closed answers**: YES/NO checklist, scales, N/A, one by one, without interpretation. **Open answers**: detailed chronological description, observed behaviours, relevant dialogues. **Overall rating** if applicable. **Attachments**: photos, receipt and remaining documentation.",
   ],
  },
  {
   title: "Page 2. Closed and Open Answers: How to Write",
   blocks: [
    "In **closed answers**, the rule is binary and absolute: follow exactly the defined criterion. If the criterion is 'greeted within 30 seconds', the answer is YES or NO, based on the recorded time. Thirty-two seconds is NO. There is no 'almost' or 'with reservations'. If you waited 35 seconds: did NOT meet.",
    "In **open answers**, the narrative should be chronological, objective and verifiable. An example of a good answer: '10:15. Entry. Store with about 20 customers. 10:18. Approached by Carlos: \"Hello, welcome.\" I asked the difference between model A and B. Answer: \"Model A has a better processor, B is more economical.\" Did not mention battery life or warranty. Purchase: model A for €299. Payment: 10:28. Exit: 10:30. Total in store: 15 minutes.'",
    "**Professional language** means: always use first person in past tense ('I went to the section', 'the employee greeted me'); avoid slang, abbreviations and emojis; replace vague adjectives with observable facts, not 'friendly', but 'smiled throughout the interaction'; not 'incompetent', but 'answered correctly only 1 of 4 technical questions'.",
    "**Mandatory justification of penalties**: when evaluating negatively, you must justify with a specific fact. Correct example: 'The employee did not suggest additional products during the 8-minute interaction.' Unacceptable example: 'The employee didn't make an effort.' The brand needs to know exactly what happened to be able to act.",
   ],
  },
  {
   title: "Page 3. Errors to Avoid and Submission Checklist",
   blocks: [
    "The **fatal error** in the report is contradiction: when the checklist says 'Criterion X: YES' but the narrative text says it didn't happen. This type of inconsistency leads to immediate rejection and questions the integrity of the entire report. Before submitting, verify that checklist and text are aligned. If you discover an error, correct in both places.",
    "Other common errors: (1) Opinionated language instead of factual. (2) Vague time data: 'waited a long time' instead of '4 minutes and 20 seconds'. (3) Missing or illegible evidence. (4) Delivery outside the deadline: memory loses detail and late reports lose credibility.",
    "Many platforms **don't automatically save progress**. Save the report at each completed section. On mobile apps, click 'save' before exiting. Losing a complete report due to internet failure is one of the most common frustrations, and completely avoidable.",
    "**Submission checklist**: (1) Precise date, time and location. (2) All closed answers filled. (3) Open text consistent with the checklist, no contradictions. (4) Clear and professional language, no opinions. (5) All mandatory evidence attached and legible. (6) Files correctly named. (7) Acceptable image sizes (normally up to 5 MB). If all OK: submit.",
   ],
  },
 ],
 evaluationExamples: [
  {
   title: "Example 1: Excellent Open Answer",
   scenario: "Briefing asks for a chronological description of service. How to write well?",
   correctApproach: "'Arrival 10:15. Store with ~20 customers, 1 busy checkout. Approach: 10:18 by employee Carlos, said \"Hello! Welcome\". I asked: \"What's the difference between model A and B?\" Answer: \"Model A is faster in processing, B is cheaper\". Incomplete answer (did not mention battery or warranty, per expected training). Transaction: bought model A for €299, 10% discount offered. Payment: 10:28. Exit: 10:30. Total in store: 15min.'",
   incorrectApproach: "'Good service. Knowledgeable employee. Resolved the question well. Pleasant atmosphere. Liked it.' (Vague, opinion, no concrete fact)"
  },
  {
   title: "Example 2: Avoiding Contradictions",
   scenario: "In the checklist you mark 'Offering complements: YES'. In the text you write 'Employee didn't offer any additional products'.",
   correctApproach: "Correct BEFORE submitting! Decision: did you observe they offered or not? If YES offered, write in text: 'Employee offered complement, protective case, customer declined.' If NO didn't offer, change checklist to NO. One or the other, synchronised.",
   incorrectApproach: "Submit with contradiction. Agency discovers, rejects, questions credibility. Time wasted."
  },
  {
   title: "Example 3: Remove Opinion, Keep Fact",
   scenario: "You wrote: 'Friendly but incompetent employee.' How to correct?",
   correctApproach: "Replace with: 'Employee maintained eye contact during conversation and smiled (positive behaviour). Answered correctly only 1 of 4 technical questions (limited knowledge).'. Facts, not opinions.",
   incorrectApproach: "Leave as is. Agency may view as subjective/biased."
  }
 ],
 quiz: [
 {
 id: "m8q1",
 question: "What are the three pillars of an effective report?",
 options: [
 "Opinion, suggestion and recommendation",
 "Facts, context and evidence",
 "Introduction, development and conclusion",
 "Data, charts and tables",
 ],
 correctIndex: 1,
 },
 {
 id: "m8q2",
 question: "In answers to closed questions, the evaluator should:",
 options: [
 "Use their personal interpretation of the criterion",
 "Strictly base on the factual criterion defined in the briefing",
 "Always choose the most favourable answer to the establishment",
 "Include nuances like 'almost met' or 'partially met'",
 ],
 correctIndex: 1,
 },
 {
 id: "m8q3",
 question: "What is the typical deadline for report submission?",
 options: [
 "One week after the visit",
 "The following month",
 "12 to 48 hours after the visit",
 "Immediately during the visit",
 ],
 correctIndex: 2,
 },
 {
 id: "m8q4",
 question: "In open answers, the evaluator should avoid:",
 options: [
 "Details about what was said",
 "Chronological description of events",
 "Unsolicited personal opinions",
 "References to times and duration",
 ],
 correctIndex: 2,
 },
 {
 id: "m8q5",
 question: "What are the three main reasons for report rejection?",
 options: [
 "Spelling errors, incorrect formatting and lack of images",
 "Late reports, incomplete or with contradictory information",
 "Very negative evaluations, lack of praise and aggressive tone",
 "Old phone, low-resolution photos and large files",
 ],
 correctIndex: 1,
 },
 ],
 },
 {
 id: 9,
 title: "Module 9. Remuneration, Reimbursements and Profitability",
 description: "Payments, profitability calculation and income strategies.",
 keywords: ["Remuneration", "Profitability", "Payments", "Costs", "Profit"],
 practicalTip: "Calculate profitability: (remuneration - costs) / total hours. If <€6/hour, it may not be worth it.",
 warning: "Not all expenses are reimbursed. Read the briefing. Non-mandatory consumption = comes out of your pocket!",
 benefit: "Well managed, this is a legitimate and flexible extra income. From pocket money to significant income!",
 content: [
  "How much do you earn per mission? Varies A LOT: €5-20 (simple retail), €20-50 (telecoms/pharmacy), €50-100 (banking/hospitality), €100-200+ (complex audits).",
  "Depends on: **Complexity**: simple observation vs demanding audit.",
  "**Sector**: retail vs banking represents a big difference.",
  "**Requirements**: just observe vs purchase+photo+report.",
  "**Time required** and **Location**. Lisbon pays more than rural areas.",
  "Reimbursements: **mandatory** purchases (receipt included), **mandatory consumptions** (coffee if briefing requires), **parking** (documented).",
  "Personal purchases or non-mandatory consumptions: YOU pay!",
  "Payment: varies by platform. **Bank transfer** monthly (agencies like BMS).",
  "**Per project** after validation (platforms like Spotec).",
  "**Digital wallets**: PayPal, Wise.",
  "Deadline: 15-60 days after agency validates report. Yes, it takes time.",
  "Don't count on money immediately: **plan cash flow**!",
  "The faster you submit the report, the sooner the countdown starts.",
 ],
 pages: [
  {
   title: "Page 1. How Remuneration Works",
   blocks: [
    "Remuneration in Mystery Shopping works **per mission**: there's no fixed salary or hourly pay. Each mission has a pre-defined value that must be accepted before executing. As a general reference: (1) Simple retail and food service: **€5 to €20 per mission**. (2) Telecommunications, pharmacies and insurance: **€20 to €50**. (3) Banking and hospitality: **€50 to €100**. (4) Complex audits and automotive: **€100 to €200 or more**.",
    "**Reimbursements** cover mandatory mission costs: mandatory purchase (the receipt is proof), mandatory consumption if defined in the briefing, and parking documented with receipt. What is NOT reimbursed: transport not provided for in the briefing, personal meals, clothing and personal expenses. **Always read the briefing before accepting**: each project has different rules.",
    "The **payment deadline** varies between 15 to 60 days after the agency validates the report. Don't count on the money immediately. Plan cash flow taking this delay into account. The faster you submit the report, the sooner the payment deadline countdown starts.",
   ],
  },
  {
   title: "Page 2. Real Profitability Calculation",
   blocks: [
    "Before accepting any mission, calculate the **real profitability** with this formula: **(Remuneration − Real costs) ÷ Total hours = € per hour.**",
    "Practical example: mission with remuneration of €25. Costs: fuel €8 + parking €3 + non-reimbursed coffee €2 = €13 total. Real profit: 25 − 13 = **€12**. Total time: preparation 30 min + travel 25 min + execution 40 min + report 1 h = **2 h 35 min**. Profitability: €12 ÷ 2.58 h = **€4.65/hour**: below the recommended minimum.",
    "As a reference for decision: (1) **Below €4/hour**: reject; not worth it. (2) **Between €4 and €6/hour**: consider only if useful for experience or portfolio. (3) **Between €6 and €10/hour**: accept; it's a normal and acceptable mission. (4) **Above €10/hour**: priority; accept whenever possible.",
    "At the start of a career, it's normal to accept missions with lower profitability to build portfolio and ratings. But from the second or third month, the calculation should be done before each acceptance.",
   ],
  },
  {
   title: "Page 3. Strategies to Maximise Income",
   blocks: [
    "Increasing income doesn't mean doing more missions, it means doing more profitable missions and doing them more efficiently. The most effective strategies are: (1) **Geographic grouping**: accept 2 or 3 missions in the same area on the same day; one trip, multiple incomes. (2) **Sector specialisation**: become an expert in banking, hospitality or automotive; these sectors pay 3 to 5 times more than simple retail. (3) **Regularity**: agencies prefer reliable and recurring evaluators, who receive invitations for premium projects first. (4) **Multiple platforms**: don't depend on a single source.",
    "In projects with employee name, **getting the name can be worth more money**: it's common to pay €0.50 to €1 more per section. In 4 sections, that represents €2 to €4 additional. The name is important for the brand, it allows personalised feedback and specific training. Observe the badge or ask naturally at the end of the interaction.",
    "To receive all reimbursements correctly: always keep the original receipt and a digital scan. Photograph the parking receipt immediately. **Visit invalidated by wrong parameter = zero remuneration and possible reimbursement return.** Verify all parameters before executing.",
   ],
  },
  {
   title: "Page 4. Tax, Financial Management and Professionalism",
   blocks: [
    "In Portugal, Mystery Shopping income must be declared to the tax authorities. As reference: (1) **Below €20,000/year**: occasional activity; simplified tax return, no VAT. (2) **Between €20,000 and €75,000**: actual regime; self-employment receipts, possibility to deduct expenses. (3) **Above €75,000**: consider opening a company. The recommendation is to consult an accountant once: the cost (€50 to €100) is negligible compared to the errors it prevents.",
    "For **financial management**: define a minimum monthly objective ('I need €150/month, how many missions?'). Keep 30% of earnings to cover taxes. Gradually reinvest in equipment (camera, phone) that improves evidence quality.",
    "Some projects require **dedicated SIM cards**: different numbers for different phone evaluations, so the evaluated company doesn't recognise the number in future visits. You can request prepaid cards free of charge from operators. The more cards available, the more phone projects you can accept.",
   ],
  },
 ],
 quiz: [
 {
 id: "m9q1",
 question: "How does remuneration typically work in Mystery Shopping?",
 options: [
 "Fixed monthly salary",
 "Per mission or project, with a fixed pre-defined value",
 "Commission on sales of the evaluated establishment",
 "Hourly pay",
 ],
 correctIndex: 1,
 },
 {
 id: "m9q2",
 question: "What costs should the evaluator consider in the profitability calculation?",
 options: [
 "Only the execution time on location",
 "Remuneration vs. total time, travel, consumptions and taxes",
 "Only the travel cost",
 "The price of the products they bought to evaluate",
 ],
 correctIndex: 1,
 },
 {
 id: "m9q3",
 question: "Which of these is a strategy to increase income?",
 options: [
 "Accept only missions above €50",
 "Work exclusively on weekends",
 "Optimise routes by grouping several missions in the same area/day",
 "Negotiate discounts at evaluated establishments",
 ],
 correctIndex: 2,
 },
 {
 id: "m9q4",
 question: "What is the typical payment deadline after validation?",
 options: [
 "Immediate",
 "15 to 60 days",
 "6 months",
 "At the end of the tax year",
 ],
 correctIndex: 1,
 },
 {
 id: "m9q5",
 question: "In tax terms, Mystery Shopping income in Portugal:",
 options: [
 "Is exempt from declaration",
 "Is automatically taxed by the agency",
 "Must be declared by the evaluator",
 "Is only taxable above €10,000 annually",
 ],
 correctIndex: 2,
 },
 ],
 },
 {
 id: 10,
 title: "Module 10. Professional Development and Action Plan",
 description: "Building reputation, career progression and a practical 30-day plan.",
 keywords: ["Career", "Reputation", "Development", "Action Plan", "Growth"],
 practicalTip: "Keep a history of all missions and feedback. This is gold, it shows your evolution!",
 warning: "Without a clear strategy, you get stuck in simple and poorly-paid missions. Set clear objectives!",
 benefit: "With an excellent reputation, you're invited to better projects, earn more and have job security.",
 content: [
  "Pillars of a GOLD reputation: **CONSISTENCY**: always the same quality, never inconsistencies.",
  "**QUALITY**: detailed, accurate reports with perfect evidence (approval rate >95%).",
  "**MEETING DEADLINES**: deliver ALWAYS on time, ideally early, never late.",
  "Result: agencies contact you first, you receive exclusive invitations for premium projects (paying 3-5x more).",
  "Typical career progression: **Months 1-2**. Simple retail or fast-food.",
  "Learn the process, gain confidence, build portfolio. €5-15/mission.",
  "**Months 3-4**. Telecommunications, Pharmacies, Insurance. More complex, more detailed, better paid. €15-40/mission.",
  "**Month 5+**. Banking, Luxury hospitality, Certified audits. Demand excellence, remuneration €75-200+/mission.",
 ],
 pages: [
  {
   title: "Page 1. The Pillars of Professional Reputation",
   blocks: [
    "Reputation is the most important asset of an evaluator. It's built over time and difficult to recover once lost. It rests on three pillars: (1) **Consistency**: the same quality from mission to mission, without highs and lows. (2) **Quality**: detailed, accurate reports with perfect evidence; approval rate above 95%. (3) **Meeting deadlines**: always deliver within the deadline, ideally early. Those who meet these three pillars are contacted first for premium projects.",
    "The typical career trajectory follows this path: **Months 1-2**. Simple retail and fast food; objective: gain confidence, learn the process and build portfolio (€5 to €15/mission). **Months 3-4**. Telecommunications, pharmacies, insurance; more complexity, more detail (€15 to €40/mission). **Month 5 onwards**. Banking, luxury hospitality, certified audits; demand excellence (€75 to €200+/mission).",
    "To accelerate progression: (1) **Ask for feedback** when a report is rejected: 'why wasn't it approved? what can I improve?'. (2) **Keep an error log**: what went wrong, how to correct. (3) **Diversify sectors**: work in several to gain versatility. (4) **Network**: forums and evaluator communities are sources of practical tips. (5) **Invest in training**: writing techniques, observation and specificities of each sector.",
   ],
  },
  {
   title: "Page 2. Practical 30-Day Plan",
   blocks: [
    "**Week 1. Start with structure.** Register on 3 to 5 platforms (BMS, Spotec, Teseo, NasoQ). Complete profiles to 100%: photo, descriptive CV, areas of interest. Do the first mission: choose something simple, close to home and low pressure. The objective of this week is simply to gain confidence in the process.",
    "**Week 2. Quality first.** Do 2 to 3 missions. Prioritise quality over quantity: each report should go through a triple review before submitting. Note all errors and what you could have done better.",
    "**Week 3. Feedback and expansion.** Ask for explicit feedback from agencies by email: 'How can I improve?'. Try 3 to 4 missions and explore a different sector from what you've already done. Each mission is a learning opportunity.",
    "**Week 4. Consolidation and planning.** Define your routine: what's the ideal schedule, what's the preferred geographic area, which platforms are most active. Calculate the real profitability of everything you did this month. Set a concrete objective for month 2: for example, '10 missions with approval rate above 97%, at least 2 in a new sector'.",
   ],
  },
  {
   title: "Page 3. Success Metrics and Career Progression",
   blocks: [
    "Progress is measured with concrete indicators: (1) **Number of missions per week**: start with 1-2, then 3-5, then 10+. (2) **Report approval rate**: aim for above 95%; essential for reputation. (3) **Monthly net income** after costs: the only number that matters, not the gross value. (4) **Average time per mission**: reduce from 2 hours to 1.5 with experience. (5) **Number of agencies that contact you proactively**: a clear sign of good reputation.",
    "The **ratings** progression normally follows this curve: month 1: 4.5/5 (normal for beginner); months 2-3: 4.7/5 (visible improvement, agencies start to notice); month 4 onwards: 4.9/5 (access to premium projects). A rating above 4.7 already opens important doors. 5/5 is rare, requires absolute and consistent perfection.",
    "The **signs of readiness for premium projects** are: more than 100 missions with approval rate above 95%; agencies that request you by name for specific projects; technical mastery of 2 or 3 sectors; ability to carry out 2 to 3 missions per day without compromising quality. When these signs are present, **negotiate**: ask for higher remuneration and premium missions.",
    "For experienced evaluators, the next step may be **specialisation as a quality consultant**: guiding agencies and brands, with earnings of €200+/day. This level results from years of consistent work, solid portfolio and proven reputation. Mystery Shopping is not quick enrichment; it's building a flexible career with real and progressive growth.",
   ],
  },
 ],
 evaluationExamples: [
  {
   title: "Example 1: How to Ask for Feedback to Improve",
   scenario: "The agency rejected your report. How to use it to grow?",
   correctApproach: "Email: 'Hello, I saw that the Starbucks report was rejected. I'd like to understand why to not repeat the mistake. Could you give specific feedback? (e.g., lack of detail? inconsistent data? inappropriate language?). I appreciate the investment in my development.' Result: you receive feedback, improve, next report is better.",
   incorrectApproach: "Ignore the rejection, submit another similar report, gets rejected again. Negative cycle, frustration, abandonment."
  },
  {
   title: "Example 2: Decision to Accept or Reject a Mission",
   scenario: "Agency offers a mission: €18, 1h30min of total execution, 35km travel. Would you accept?",
   correctApproach: "Calculate: €18 - (fuel ~€7 + parking €2 + coffee €1) = €8 profit. 1.5h execution. But travel 35km = 1h total (there and back). Total 2h30min. Profitability: €8/2.5h = €3.2/hour. REJECT: below the recommended minimum of €6/hour.",
   incorrectApproach: "Accept because 'I need experience'. After doing it, realise it was poor value. Better: in month 1 accept to learn, month 2+ learn to say 'no'."
  },
  {
   title: "Example 3: Real Progression Plan",
   scenario: "You're at the end of month 1. You have 8 missions done, approval rate 92%. How do you proceed in month 2?",
   correctApproach: "Analysis: 92% is good, but needs >95%. Next month: (1) Focus on quality, not quantity: 5 missions but PERFECT. (2) Ask specific feedback from 2 agencies. (3) Try 1 new sector (telecommunications, pharmacy) to diversify. (4) Review each rejected report (understand error pattern). (5) Month 2 objectives: 10 missions with 97%+ approval, at least 2 from new sectors.",
   incorrectApproach: "Want to 'earn faster', try 20 missions in month 2, quality drops to 85% approval rate and reputation is destroyed. Repairing that damage can take 3-4 months."
  }
 ],
 quiz: [
 {
 id: "m10q1",
 question: "What are the three pillars of an evaluator's reputation?",
 options: [
 "Speed, volume and availability",
 "Consistency, quality and meeting deadlines",
 "Experience, training and networking",
 "Discretion, friendliness and professional appearance",
 ],
 correctIndex: 1,
 },
 {
 id: "m10q2",
 question: "What is the typical career progression in Mystery Shopping?",
 options: [
 "Online missions → in-person missions → audits",
 "Simple missions (retail) → medium complexity → premium (banking, luxury hospitality)",
 "National missions → international → global",
 "Individual missions → team → as coordinator",
 ],
 correctIndex: 1,
 },
 {
 id: "m10q3",
 question: "In the first week of the 30-day plan, the evaluator should:",
 options: [
 "Carry out as many missions as possible",
 "Register on 3 to 5 platforms, complete profiles and do the first mission",
 "Focus only on theoretical training",
 "Contact brands directly to offer services",
 ],
 correctIndex: 1,
 },
 {
 id: "m10q4",
 question: "What report acceptance rate should an evaluator aim for?",
 options: [
 "Above 50%",
 "Above 75%",
 "Above 95%",
 "100% in all circumstances",
 ],
 correctIndex: 2,
 },
 {
 id: "m10q5",
 question: "Which metric is NOT mentioned as a progress indicator?",
 options: [
 "Number of missions per week/month",
 "Number of social media followers",
 "Report acceptance rate",
 "Monthly net income after costs",
 ],
 correctIndex: 1,
 },
 ],
 },
 {
 id: 11,
 title: "Module 11. Completion Certificate",
 description: "Issuance of the final certificate with the learner's name.",
 keywords: ["Certificate", "Completion", "PDF", "Personalised Name"],
 practicalTip: "Download the certificate and keep a copy in your professional portfolio.",
 warning: "The certificate is only available after completing modules 1 to 10.",
 benefit: "Formally certify the completion of the Mystery Shopping training.",
 content: [
  "This final module exists only to provide the official course certificate.",
  "After completing the previous modules, you can generate and download your certificate in PDF with your name.",
  "Keep the document to share on your CV, LinkedIn and premium mission applications.",
 ],
 pages: [
  {
   title: "Page 1. Certificate Issuance",
   blocks: [
    "Congratulations on reaching the end of the course. In this final module, the objective is simple: generate your official completion certificate.",
    "Click the download button to get a PDF with your name, issue date and design aligned with the platform's colours.",
   ],
  },
 ],
 quiz: [],
 },
];
