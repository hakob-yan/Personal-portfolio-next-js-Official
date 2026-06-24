export const PROJECTS = [
  {
    id: "swaps-app",
    name: "Swaps.app",
    oneLiner:
      "Multi-tenant crypto trading platform integrating 40+ enterprise partners.",
    context:
      "Architected and scaled a production crypto trading platform with a widget-based partner integration system serving enterprise customers.",
    problem:
      "Onboarding enterprise partners required a scalable, customizable integration layer, with live market data delivered at minimal latency across every partner dashboard.",
    solution:
      "Built a widget-based multi-tenant integration system on Node.js and PostgreSQL, customizable partner dashboards in React, Ant Design, and Tailwind CSS, and real-time price updates over WebSockets. Optimized SEO and accessibility and established Jest/RTL testing practices.",
    outcome:
      "Onboarded 40+ enterprise integrations, delivered live market data at sub-200ms latency, and reached 90+ Chrome Lighthouse scores on core pages.",
    role: "Senior Fullstack Engineer",
    metrics: [
      "40+ enterprise partners integrated",
      "<200ms real-time price latency",
      "90+ Lighthouse scores",
      "Multi-tenant widget integration",
    ],
    challenges: [
      "Scaling onboarding across 40+ partner integrations",
      "Delivering <200ms real-time market data via WebSockets",
      "Customizable multi-tenant partner dashboards",
      "Raising SEO, accessibility, and test coverage",
    ],
    techStack: {
      backend: ["Node.js", "PostgreSQL", "WebSockets"],
      frontend: ["React", "Next.js", "Ant Design", "Tailwind CSS"],
      testing: ["Jest", "RTL"],
    },
    links: [{ label: "Visit App", href: "https://swaps.app" }],
  },
  {
    id: "bigbi",
    name: "BigBI",
    oneLiner:
      "Microservices data-processing platform handling 1M+ events monthly for financial reporting.",
    context:
      "Designed a microservices-based data processing architecture for a financial reporting product, on contract as a senior engineer.",
    problem:
      "Financial reporting needed reliable, isolated, high-volume event processing without coupling services or compromising data privacy.",
    solution:
      "Implemented Node.js and NestJS microservices with event-driven RabbitMQ pipelines, hardened security against XSS and clickjacking, and designed automated containerized AWS deployments through CI/CD.",
    outcome:
      "Processed 1M+ monthly events with reporting accuracy, stronger data isolation, and reliable, consistent deployments across development and production.",
    role: "Senior Fullstack Developer (Contract)",
    metrics: [
      "1M+ events processed monthly",
      "Event-driven microservices (RabbitMQ)",
      "XSS & clickjacking mitigated",
      "Automated containerized AWS CI/CD",
    ],
    challenges: [
      "High-volume event-driven processing",
      "Data privacy and tenant isolation",
      "Eliminating environment inconsistencies",
      "Reliable containerized deployments",
    ],
    techStack: {
      backend: ["Node.js", "NestJS", "RabbitMQ"],
      cloud: ["AWS", "Docker", "CI/CD"],
      security: ["XSS mitigation", "Clickjacking protection"],
    },
    links: [{ label: "Visit BigBI", href: "https://bigbi.io/" }],
  },
  {
    id: "w3are",
    name: "W3are",
    oneLiner:
      "Your bridge between crypto and fiat payments — global, zero-setup payment links.",
    context:
      "Led frontend architecture and development of a payment platform that lets anyone accept crypto and fiat worldwide through shareable links, invoicing, and embedded checkout.",
    problem:
      "Accepting international payments meant juggling multiple processors, currencies, and exchanges — complex setup that shut out freelancers, creators, and small businesses.",
    solution:
      "Architected a responsive, multilingual Next.js/TypeScript frontend with a streamlined smart-link system for universal payment collection, plus invoicing and embedded checkout. Built customizable, white-label payment pages and optimized for performance and global accessibility.",
    outcome:
      "Enabled seamless crypto-and-fiat payments globally with zero setup, simplifying onboarding and conversion for creators, startups, and enterprises.",
    role: "Lead Frontend Engineer",
    metrics: [
      "Crypto + fiat unified in one flow",
      "Zero-setup shareable payment links",
      "Multi-currency invoicing & checkout",
      "Responsive, sub-2s mobile load",
    ],
    challenges: [
      "Unifying crypto and fiat into a single payment flow",
      "Designing customizable, white-label payment pages",
      "Optimizing UX for global accessibility and mobile",
      "Coordinating compliant real-time payments (KYC/KYB) with backend teams",
    ],
    techStack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SSR"],
      backend: ["Node.js", "REST APIs", "WebSockets"],
      payments: ["Crypto", "Fiat", "Subscriptions"],
      devops: ["AWS", "CI/CD"],
    },
    links: [{ label: "Visit W3are", href: "https://www.w3are.com/" }],
  },
  {
    id: "origin-reports",
    name: "Origin Reports",
    oneLiner:
      "High-throughput reporting platform with a dynamic D3.js visualization system.",
    context:
      "Built report delivery pipelines and a dynamic data-visualization system for an analytics reporting product at Cretrix.",
    problem:
      "Report generation was slow, chart work was repetitive and manual, and deployment cycles were long.",
    solution:
      "Designed a high-throughput report pipeline with Node.js/NestJS, RabbitMQ, and AWS; containerized with Docker and automated GitLab CI/CD; optimized PostgreSQL queries and isolation levels; and added 20+ D3.js chart types with a client-side customization system.",
    outcome:
      "Cut report generation from 6s to 1s, reduced deployment cycle times, and let teams redesign charts instead of rebuilding them.",
    role: "Fullstack Developer",
    metrics: [
      "Report generation 6s → 1s",
      "20+ dynamic D3.js chart types",
      "Automated GitLab CI/CD",
      "Dockerized deployments",
    ],
    challenges: [
      "Throughput of report generation and delivery",
      "PostgreSQL query and isolation-level optimization",
      "Reusable, customizable D3 chart system",
      "Shortening deployment cycles",
    ],
    techStack: {
      backend: ["Node.js", "NestJS", "RabbitMQ", "PostgreSQL"],
      cloud: ["AWS", "Docker", "GitLab CI"],
      frontend: ["React", "D3.js", "Tailwind CSS"],
    },
    links: [{ label: "Visit Origin Reports", href: "https://originreports.org/" }],
  },
];
