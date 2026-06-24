export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Swaps.app",
    role: "Senior Fullstack Engineer",
    period: "Sep 2023 – Present · Estonia (Remote)",
    summary:
      "Architected and scaled a multi-tenant crypto trading platform serving enterprise partners through a widget-based integration system.",
    highlights: [
      "Architected a multi-tenant platform integrating 40+ enterprise partners via a widget-based system built with Node.js and PostgreSQL.",
      "Led frontend architecture of customizable partner dashboards with React, Ant Design, and Tailwind CSS, scaling onboarding across 40+ integrations.",
      "Implemented real-time price updates over WebSockets with <200ms latency, and optimized core pages to 90+ Chrome Lighthouse scores.",
      "Established Jest/RTL testing practices to improve coverage and resolved frontend bottlenecks to enhance UX.",
    ],
  },
  {
    company: "BigBI",
    role: "Senior Fullstack Developer (Contract)",
    period: "Jan 2024 – Dec 2025 · Israel (Remote)",
    summary:
      "Designed a microservices-based data processing architecture for financial reporting with event-driven pipelines.",
    highlights: [
      "Designed and implemented a microservices data-processing architecture using Node.js, NestJS, and RabbitMQ.",
      "Built event-driven RabbitMQ pipelines processing 1M+ monthly events, critical for financial reporting accuracy.",
      "Delivered production-ready security solutions for data privacy and isolation, mitigating XSS and clickjacking vulnerabilities.",
      "Designed and automated containerized AWS deployments, improving CI/CD reliability and eliminating environment inconsistencies.",
    ],
  },
  {
    company: "Cretrix",
    role: "Fullstack Developer",
    period: "Aug 2022 – Sep 2023 · Armenia",
    summary:
      "Built high-throughput report delivery pipelines and a dynamic data-visualization system.",
    highlights: [
      "Designed a high-throughput report delivery pipeline with Node.js/NestJS, RabbitMQ, and AWS, automating report generation and delivery.",
      "Containerized the app with Docker and built CI/CD via custom GitLab runners, significantly cutting development and deployment cycle times.",
      "Optimized PostgreSQL queries and isolation levels, reducing report generation time from 6s to 1s.",
      "Added 20+ dynamic chart types with D3.js and a client-side chart customization system, enabling redesign instead of rebuild.",
    ],
  },
  {
    company: "NWSLAB",
    role: "Frontend Developer",
    period: "Feb 2020 – Aug 2022 · Armenia",
    summary:
      "Built and optimized React frontends, improving performance and reducing technical debt.",
    highlights: [
      "Optimized React rendering with memoization and lazy loading, improving Lighthouse performance from 60 to 90+.",
      "Integrated REST APIs with Redux state management and Tailwind CSS responsive design, improving UX across devices.",
      "Migrated legacy class components to a hooks-based architecture, reducing technical debt and improving maintainability.",
    ],
  },
];
