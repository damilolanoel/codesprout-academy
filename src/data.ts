import { ContentData } from './types';

export const defaultContent: ContentData = {
  nav: { logo: "CodeSprout Academy", cta: "Register Now" },
  hero: {
    badge: "Lagos's #1 Kids Coding Academy",
    headline: "Growing Tomorrow's\nBuilders, Today",
    sub: "Hands-on coding & technology education for Nigerian children aged 7–17. Real skills. Real confidence. Real future.",
    cta1: "Join Summer Camp 2026",
    cta2: "Learn More",
    stats: [
      { value: "3", label: "Programmes" },
      { value: "7–17", label: "Age Range" },
      { value: "Aug 4", label: "Camp Starts" },
    ],
  },
  why: {
    title: "Why CodeSprout?",
    sub: "We don't just teach coding. We build confident, creative problem-solvers ready for a digital Africa.",
    cards: [
      { icon: "🌱", title: "Learn by Doing", body: "Every session is hands-on. Children build real projects — games, websites, and apps — not just watch lectures." },
      { icon: "🌍", title: "Built for Nigeria", body: "Our curriculum is grounded in the Lagos context. We teach tools and skills relevant to Africa's growing tech scene." },
      { icon: "👩‍🏫", title: "Expert Instructors", body: "Taught by passionate educators who understand how children learn and how to make technology exciting." },
      { icon: "🏆", title: "Real Outcomes", body: "By the end of each programme, every child has a completed project they can show, share, and be proud of." },
    ],
  },
  programmes: {
    title: "Our Programmes",
    sub: "Three age-matched tracks designed to take kids from curious beginners to confident builders.",
    list: [
      { tag: "Ages 7–10", name: "CodeSprout Juniors", tool: "Scratch", duration: "8 Weeks", focus: "Storytelling through code, animations & simple games. Perfect first step into the world of technology.", price: "₦15,000/term", color: "#1D9E75" },
      { tag: "Ages 11–14", name: "CodeSprout Builders", tool: "HTML/CSS + Robotics", duration: "10 Weeks", focus: "First websites and physical builds. Children learn to create things they can see, touch, and share online.", price: "₦18,000/term", color: "#2563EB" },
      { tag: "Ages 14–17", name: "CodeSprout Innovators", tool: "JavaScript + No-Code", duration: "12 Weeks", focus: "Build and deploy a real app. Students finish the programme with a live project in their portfolio.", price: "₦20,000/term", color: "#D97706" },
    ],
  },
  camp: {
    title: "Summer Camp 2026",
    date: "August 4 – August 29, 2026",
    sub: "A full month of coding, building, and creating. Limited spots available — secure your child's place today.",
    features: ["Daily hands-on coding sessions", "Project showcase on final day", "Certificate of completion", "Structured schedule 9am–2pm", "All materials provided", "Small class sizes (max 15 kids)"],
    cta: "Secure a Spot — ₦25,000",
    note: "Early-bird discount available for registrations before June 30",
  },
  process: {
    title: "How It Works",
    steps: [
      { n: "01", title: "Register Online", body: "Fill in your child's details and choose a programme. We confirm your spot within 24 hours." },
      { n: "02", title: "Attend Demo Class", body: "Your child attends a free 45-minute taster session so they can experience the learning before committing." },
      { n: "03", title: "Start Building", body: "Classes begin. Weekly sessions, real projects, and progress updates sent to parents every fortnight." },
      { n: "04", title: "Showcase & Graduate", body: "Each programme ends with a project showcase where children present their work to family and peers." },
    ],
  },
  contact: {
    title: "Ready to Get Started?",
    sub: "Register your child today or reach out with any questions. We're based in Lagos and happy to talk.",
    phone: "Call / WhatsApp: 0800 000 0000",
    email: "hello@codesproutacademy.com",
    address: "Lagos, Nigeria",
    cta: "Register Now",
  },
  footer: {
    copy: "© 2026 CodeSprout Academy. All rights reserved.",
    tagline: "Growing Tomorrow's Builders, Today.",
  },
};