export type ExpertiseArea = {
  key: "systems" | "cloud" | "fullstack";
  title: string;
  description: string;
  tags: string[];
};

// Three outcome-oriented pillars — what I own, not a tool dump.
export const CORE_EXPERTISE: ExpertiseArea[] = [
  {
    key: "systems",
    title: "Backend & Distributed Systems",
    description:
      "Node.js and NestJS microservices with clear domain boundaries and event-driven RabbitMQ pipelines — built to stay reliable as traffic and teams scale.",
    tags: ["Node.js", "NestJS", "Microservices", "Event-Driven", "RabbitMQ", "GraphQL"],
  },
  {
    key: "cloud",
    title: "Cloud & DevOps",
    description:
      "Containerized services shipped through automated CI/CD on AWS — Lambda, ECS, EC2, S3, and RDS — with reliable, repeatable deployments across environments.",
    tags: ["AWS", "Docker", "CI/CD", "GitLab CI", "CloudWatch"],
  },
  {
    key: "fullstack",
    title: "Frontend & Real-Time UI",
    description:
      "React and Next.js apps with SSR and SEO, real-time WebSocket dashboards, and performance tuned to 90+ Lighthouse — built on clean state architecture and reusable component systems.",
    tags: [
      "React",
      "Next.js",
      "WebSockets",
      "Redux / Zustand",
      "Tailwind CSS",
      "Lighthouse 90+",
    ],
  },
];
