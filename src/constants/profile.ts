export const PROFILE = {
  name: "Hakob Hakobyan",

  title: "Senior Fullstack Engineer",

  // Specialization line, mirrors the CV headline.
  specialty: "Node.js · NestJS · React · Next.js · AWS — FinTech & Web3 platforms",

  tagline:
    "I architect and scale the systems behind FinTech, SaaS, and real-time platforms — backend-first, full-stack when it counts.",

  location: "Remote",

  timezone: "UTC+4",

  availability: "Open to senior fullstack & backend roles (remote)",

  experience: "6+ years",

  description:
    "Senior Full-Stack Engineer with 6+ years building scalable FinTech, SaaS, and Web3 platforms. Specialized in TypeScript, Node.js, NestJS, React, Next.js, and AWS — with deep work in microservices, event-driven architectures, real-time trading systems, and multi-tenant platforms serving enterprise customers.",

  // Inline stack shown under the hero headline.
  coreStack: [
    "TypeScript",
    "Node.js",
    "NestJS",
    "React",
    "Next.js",
    "AWS",
    "RabbitMQ",
  ],

  // Hero metric strip — value / label / context. All drawn from the CV.
  heroMetrics: [
    { value: "40+", label: "Enterprise partners", context: "multi-tenant platform" },
    { value: "<200ms", label: "Real-time latency", context: "WebSocket pricing" },
    { value: "1M+", label: "Events / month", context: "event-driven pipelines" },
    { value: "6+ yrs", label: "Senior delivery", context: "FinTech · SaaS · Web3" },
  ],

  highlights: [
    "Architected a multi-tenant crypto trading platform",
    "Built event-driven pipelines processing 1M+ events/month",
    "Cut report generation from 6s → 1s",
    "Automated containerized AWS deployments",
  ],

  links: {
    email: "devhakob@gmail.com",
    github: "https://github.com/hakob-yan",
    linkedin: "https://www.linkedin.com/in/hakob-yan",
    recommendations:
      "https://www.linkedin.com/in/hakob-yan/details/recommendations/",
    resume: "/Hakob_CV.pdf",
  },

  contact: {
    phone: "+374 93 102 122",
  },

  avatar: {
    src: "/me.webp",
    alt: "Portrait of Hakob Hakobyan",
  },
} as const;

// ── About section ──
export const ABOUT = {
  lead:
    "I've spent 6+ years building the FinTech, SaaS, and Web3 platforms that enterprises run on — from multi-tenant trading systems to event-driven data pipelines.",
  body: [
    "My core is backend and systems: Node.js and NestJS microservices, event-driven RabbitMQ pipelines processing 1M+ events a month, and PostgreSQL tuned from 6-second reports down to 1 second. I containerize and ship it on AWS (Lambda, ECS, EC2, S3, RDS) through automated CI/CD.",
    "I'm equally at home across the full stack — React and Next.js partner dashboards, real-time WebSocket market data under 200ms, and a widget-based integration system that onboarded 40+ enterprise partners. I lead with testing standards, security hardening, and trade-offs made deliberately and written down.",
  ],
  facts: [
    { label: "Experience", value: "6+ years" },
    { label: "Focus", value: "Backend & Distributed Systems" },
    { label: "Location", value: "Remote" },
    { label: "Timezone", value: "UTC+4" },
    { label: "Languages", value: "EN C1 · RU C1 · HY Native" },
    { label: "Education", value: "Telecommunications Engineering — National Polytechnic University of Armenia" },
  ],
} as const;
