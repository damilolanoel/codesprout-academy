// ─── Site Meta ──────────────────────────────────────────────────────────────

export const SITE = {
  name: 'CodeSprout Academy',
  tagline: "Growing Tomorrow's Builders, Today.",
  shortTagline: 'Lagos\'s #1 Kids Coding Academy',
  description:
    'Hands-on coding & technology education for Nigerian children aged 7–17. Real skills. Real confidence. Real future.',
  email: 'hello@codesproutacademy.com',
  phone: '+234 800 000 0000',
  whatsapp: '2348000000000',
  whatsappMessage:
    "Hello CodeSprout Academy! I'd like to find out more about your programmes for my child.",
  address: 'Victoria Island, Lagos, Nigeria',
  social: {
    instagram: '#',
    facebook: '#',
    twitter: '#',
    linkedin: '#',
  },
};

// ─── Colours ────────────────────────────────────────────────────────────────

export const COLORS = {
  brand: '#1D9E75',
  brandDark: '#0f6e56',
  brandDeep: '#0a1a12',
  brandLight: '#e1f5ee',
  brandBg: '#f0faf5',
  juniors: '#1D9E75',
  builders: '#2563EB',
  innovators: '#b45309',
};

// ─── Navigation ─────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  {
    label: 'Programmes',
    to: '/programmes',
    children: [
      { label: 'CodeSprout Juniors', to: '/programmes#juniors', age: '7–10' },
      { label: 'CodeSprout Builders', to: '/programmes#builders', age: '11–14' },
      { label: 'CodeSprout Innovators', to: '/programmes#innovators', age: '14–17' },
    ],
  },
  { label: 'Summer Camp', to: '/summer-camp' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

// ─── Stats ───────────────────────────────────────────────────────────────────

export const STATS = [
  { value: 450, suffix: '+', label: 'Students Taught' },
  { value: 3, suffix: '', label: 'Programmes' },
  { value: 15, suffix: '', label: 'Max Class Size' },
  { value: 98, suffix: '%', label: 'Parent Satisfaction' },
];

// ─── Why CodeSprout ──────────────────────────────────────────────────────────

export const WHY_CARDS = [
  {
    icon: '🌱',
    title: 'Learn by Doing',
    body:
      'No lectures. No passive learning. Every 90-minute session ends with something built, tested, and presented — from Week 1.',
  },
  {
    icon: '🌍',
    title: 'Built for Nigeria',
    body:
      'Our curriculum references Nigerian tech startups, Lagos problems, and African digital entrepreneurs — not just Silicon Valley.',
  },
  {
    icon: '👩‍🏫',
    title: 'Small Classes, Real Attention',
    body:
      'Maximum 15 students per class. Every instructor knows your child\'s pace, strengths, and learning style by Week 2.',
  },
  {
    icon: '🏆',
    title: 'Real Projects, Real Pride',
    body:
      'Every programme ends with a public project showcase. Students present to family and peers — and they are proud of what they\'ve built.',
  },
];

// ─── Programmes ──────────────────────────────────────────────────────────────

export const PROGRAMMES = [
  {
    id: 'juniors',
    ageRange: '7–10',
    name: 'CodeSprout Juniors',
    tagline: "Where every child's coding journey begins",
    tool: 'Scratch',
    duration: '8 Weeks',
    sessionsPerWeek: '2× per week',
    color: COLORS.juniors,
    bgColor: COLORS.brandBg,
    emoji: '🌱',
    overview:
      'Designed for complete beginners, Juniors uses Scratch — a visual, block-based programming language from MIT — to introduce children to the core ideas of coding through storytelling, games, and animations. No prior experience needed, and no keyboards to be afraid of.',
    whatTheyLearn: [
      'Block-based coding fundamentals with Scratch',
      'Animations, interactive stories, and simple games',
      'Computational thinking and sequencing',
      'Debugging and problem-solving strategies',
      'Presenting and explaining their work to peers',
    ],
    finalProject:
      'A fully interactive Scratch game or animated adventure story — with characters, scenes, sound effects, and score-keeping.',
    price: '₦15,000',
    priceNote: 'per term',
    enrolCta: 'Enrol in Juniors',
  },
  {
    id: 'builders',
    ageRange: '11–14',
    name: 'CodeSprout Builders',
    tagline: 'From screen to real world — build things you can touch and share',
    tool: 'HTML/CSS + Robotics',
    duration: '10 Weeks',
    sessionsPerWeek: '2× per week',
    color: COLORS.builders,
    bgColor: '#eff6ff',
    emoji: '🔧',
    overview:
      'Builders bridges visual coding and text-based programming. Students write their first real HTML and CSS, publish a personal website the world can see, and then build a physical robot in our hands-on robotics module. Two kinds of making in one term.',
    whatTheyLearn: [
      'HTML structure and CSS styling fundamentals',
      'Building and publishing a live personal website',
      'Introduction to physical computing and robotics',
      'Working in teams on shared projects',
      'Responsive design and mobile-friendly layouts',
    ],
    finalProject:
      'A published personal portfolio website AND a working robotic vehicle they assemble and programme — both to take home.',
    price: '₦18,000',
    priceNote: 'per term',
    enrolCta: 'Enrol in Builders',
  },
  {
    id: 'innovators',
    ageRange: '14–17',
    name: 'CodeSprout Innovators',
    tagline: 'Idea to launch — build and ship a real product',
    tool: 'JavaScript + No-Code',
    duration: '12 Weeks',
    sessionsPerWeek: '2× per week',
    color: COLORS.innovators,
    bgColor: '#fffbeb',
    emoji: '🚀',
    overview:
      'Our most advanced track takes teenagers from concept to shipped product. Students learn JavaScript, work with real APIs, and use no-code tools to move fast. The programme ends with a deployed application with a live URL — something they can put in a university application or show a future employer.',
    whatTheyLearn: [
      'JavaScript fundamentals and DOM manipulation',
      'Building interactive web applications',
      'APIs, data, and connecting to the internet',
      'No-code tools for rapid product development',
      'Product thinking, user research, and MVP design',
    ],
    finalProject:
      'A fully deployed web or no-code application with a live URL — ready for a portfolio, university application, or pitch.',
    price: '₦20,000',
    priceNote: 'per term',
    enrolCta: 'Enrol in Innovators',
  },
];

// ─── Summer Camp ─────────────────────────────────────────────────────────────

export const CAMP = {
  year: 2026,
  displayStart: 'August 4',
  displayEnd: 'August 29, 2026',
  displayRange: 'August 4 – August 29, 2026',
  startDateISO: '2026-08-04T09:00:00',
  schedule: '9am – 2pm, Monday to Friday',
  price: '₦25,000',
  earlyBirdPrice: '₦22,000',
  earlyBirdDeadline: 'June 30, 2026',
  maxStudents: 15,
  features: [
    'Daily hands-on coding sessions',
    'Expert instructor ratio (1:7)',
    'Project showcase on final day',
    'Certificate of completion',
    'All materials provided',
    'Small class sizes (max 15)',
    'Structured 9am–2pm schedule',
    'Fortnightly parent updates',
  ],
  dailySchedule: [
    { time: '9:00 – 9:30', activity: 'Morning check-in & warm-up challenges' },
    { time: '9:30 – 11:00', activity: 'Main coding session with instructor' },
    { time: '11:00 – 11:15', activity: 'Break & snacks' },
    { time: '11:15 – 12:30', activity: 'Project workshop: building time' },
    { time: '12:30 – 1:00', activity: 'Lunch' },
    { time: '1:00 – 2:00', activity: 'Show & Tell, peer review, wrap-up' },
  ],
};

// ─── How It Works ────────────────────────────────────────────────────────────

export const HOW_IT_WORKS = [
  {
    n: '01',
    title: 'Register Online',
    body: "Fill in your child's details and choose a programme. We confirm your spot and call you within 24 hours.",
  },
  {
    n: '02',
    title: 'Free Demo Class',
    body: 'Before any commitment, your child attends a free 45-minute taster session. No pressure — just a taste of how we teach.',
  },
  {
    n: '03',
    title: 'Learn & Build',
    body: 'Weekly sessions begin. Projects evolve. Progress reports go to parents every fortnight.',
  },
  {
    n: '04',
    title: 'Showcase & Graduate',
    body: 'Every programme ends with a project showcase. Students present their work to family and the CodeSprout community.',
  },
];

// ─── Student Projects Gallery ────────────────────────────────────────────────

export const STUDENT_PROJECTS = [
  {
    title: 'My Adventure Game',
    student: 'Oluwaseun, Age 9',
    programme: 'Juniors',
    programmeColor: COLORS.juniors,
    type: 'game',
    description: 'A Scratch platformer with custom sprites and 3 levels',
  },
  {
    title: 'Temi\'s Portfolio',
    student: 'Temitope, Age 13',
    programme: 'Builders',
    programmeColor: COLORS.builders,
    type: 'website',
    description: 'A live personal website with projects, bio, and contact form',
  },
  {
    title: 'Lagos Weather App',
    student: 'Chidi, Age 16',
    programme: 'Innovators',
    programmeColor: COLORS.innovators,
    type: 'app',
    description: 'JavaScript app fetching live weather data from an API',
  },
  {
    title: 'Space Animation',
    student: 'Adaeze, Age 8',
    programme: 'Juniors',
    programmeColor: COLORS.juniors,
    type: 'animation',
    description: 'An animated space scene with rocket, stars, and sound',
  },
  {
    title: 'Robot Navigator',
    student: 'Bolu, Age 12',
    programme: 'Builders',
    programmeColor: COLORS.builders,
    type: 'robot',
    description: 'A line-following robot built and programmed from scratch',
  },
  {
    title: 'Budget Tracker',
    student: 'Seun, Age 15',
    programme: 'Innovators',
    programmeColor: COLORS.innovators,
    type: 'dashboard',
    description: 'A no-code expense tracker with charts and categories',
  },
];

// ─── Testimonials ────────────────────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    name: 'Mrs. Adaobi Nwosu',
    role: 'Parent of Chukwuemeka, 9',
    programme: 'CodeSprout Juniors',
    quote:
      "My son was shy before CodeSprout. After 4 weeks he was explaining Scratch animations to me with so much confidence. The instructors speak to kids in a way that actually makes sense to them.",
    initials: 'AN',
    color: COLORS.juniors,
  },
  {
    name: 'Mr. Segun Adeleke',
    role: 'Parent of Toluwalope, 13',
    programme: 'CodeSprout Builders',
    quote:
      "Toluwalope built her first website in Week 6 and showed it to her school. Her teachers were impressed. This programme gave her a skill she'll use for life. Money very well spent.",
    initials: 'SA',
    color: COLORS.builders,
  },
  {
    name: 'Mrs. Folake Balogun',
    role: 'Parent of Femi & Tobi',
    programme: 'Summer Camp 2025',
    quote:
      "Both my children attended the summer camp. The structure was fantastic — engaged from 9am to 2pm every day. No screen rot, just productive building. We already registered for 2026.",
    initials: 'FB',
    color: COLORS.innovators,
  },
  {
    name: 'David Okonkwo',
    role: 'Student, Age 16',
    programme: 'CodeSprout Innovators',
    quote:
      "I didn't think I could build a real app but I did. My portfolio project is live and I already have classmates asking me for tech help. CodeSprout changed what I think is possible for me.",
    initials: 'DO',
    color: COLORS.juniors,
  },
  {
    name: 'Mrs. Blessing Eze',
    role: 'Parent of Chisom, 11',
    programme: 'CodeSprout Builders',
    quote:
      "The small class sizes make all the difference. The instructor knew my daughter's name and learning style by week two. She finished with a robotics project she still plays with at home.",
    initials: 'BE',
    color: COLORS.builders,
  },
];

// ─── Team ─────────────────────────────────────────────────────────────────────

export const TEAM = [
  {
    name: 'Amara Okonkwo',
    role: 'Founder & Director',
    initials: 'AO',
    color: COLORS.juniors,
    bio: 'Former software engineer at Interswitch with 8 years of industry experience. Amara founded CodeSprout in 2023 after noticing the absence of structured tech education for Lagos children.',
  },
  {
    name: 'Chidi Nwosu',
    role: 'Lead Instructor',
    initials: 'CN',
    color: COLORS.builders,
    bio: 'Computer Science graduate from University of Lagos with 4 years of teaching experience. Chidi leads the Builders and Innovators programmes and is obsessed with making coding fun.',
  },
  {
    name: 'Fatima Bello',
    role: 'Junior Instructor',
    initials: 'FB',
    color: COLORS.innovators,
    bio: 'Education specialist with a background in early childhood development. Fatima runs the Juniors programme and has a gift for making 7-year-olds feel like real engineers.',
  },
  {
    name: 'Tunde Adeyemi',
    role: 'Operations & Community',
    initials: 'TA',
    color: '#6B7280',
    bio: 'Tunde ensures families feel welcome from first enquiry to graduation day. He manages scheduling, partnerships, and the parent communication that keeps our community tight.',
  },
];

// ─── Values ──────────────────────────────────────────────────────────────────

export const VALUES = [
  {
    icon: '🛠',
    title: 'Hands-On Always',
    body: "We never teach technology through lectures. Every session ends with something built. If a child hasn't made something, the lesson isn't over.",
  },
  {
    icon: '🌍',
    title: 'Africa-Centred Curriculum',
    body: 'Our examples, case studies, and project prompts come from the Nigerian and African context — not from textbooks written for American classrooms.',
  },
  {
    icon: '💡',
    title: 'Every Child Can Code',
    body: "We don't select by perceived talent. We believe any child who wants to learn can learn. Our pedagogy has proven this hundreds of times.",
  },
  {
    icon: '👥',
    title: 'Small Classes, Real Attention',
    body: "Maximum 15 students. Every instructor knows every student's name, pace, and goal. No child gets left behind or held back.",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const FAQS = [
  {
    q: 'What age range does CodeSprout cater to?',
    a: 'We accept children aged 7 to 17. Our programmes are split into three age-matched tracks — Juniors (7–10), Builders (11–14), and Innovators (14–17) — so every child learns at the right pace with peers at a similar level.',
  },
  {
    q: 'Does my child need any prior coding experience?',
    a: 'Absolutely not. All programmes start from zero. The Juniors track uses visual, block-based coding (Scratch) designed specifically for complete beginners. Even the Innovators track begins with fundamentals before advancing.',
  },
  {
    q: 'What does my child actually build by the end of the programme?',
    a: 'Juniors complete animated stories and simple games. Builders finish a published personal website and a working robotics project. Innovators deploy a live web or no-code application they can add to their portfolio. Every child leaves with something real.',
  },
  {
    q: 'What are the class sizes and how often do sessions run?',
    a: 'We cap every class at 15 students so each child gets individual attention. Regular term programmes run twice a week. Summer Camp runs Monday–Friday, 9am–2pm, for the full month of August.',
  },
  {
    q: 'How does payment work? Are there instalment options?',
    a: 'Full payment secures a spot. We accept bank transfer and card payments. Early-bird registrations before June 30 receive a discount on the Summer Camp fee. Contact us to discuss payment arrangements for multi-sibling families.',
  },
  {
    q: 'What happens at the free demo class?',
    a: 'After registering, we invite your child to a free 45-minute taster session. They work through a mini project alongside our instructor so you can see exactly how we teach — before committing to the full programme.',
  },
  {
    q: 'Where are classes held?',
    a: 'Our learning centre is based in Victoria Island, Lagos. All regular term classes are in-person. We do not currently offer online-only programmes — we believe hands-on, in-room learning produces better outcomes for children.',
  },
  {
    q: "Will I receive updates on my child's progress?",
    a: 'Yes. We send parents a brief progress update every fortnight during term programmes. Summer Camp parents receive daily WhatsApp check-ins. The final project showcase is a family event where children present their work.',
  },
];
