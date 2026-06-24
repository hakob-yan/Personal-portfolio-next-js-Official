export const SECTION_IDS = {
  hero: "home",
  about: "about",
  expertise: "expertise",
  skills: "skills",
  projects: "projects",
  architecture: "architecture",
  experience: "experience",
  testimonials: "testimonials",
  contact: "contact",
} as const;

export type SectionKey = keyof typeof SECTION_IDS;

export type NavItem = {
  id: (typeof SECTION_IDS)[SectionKey];
  label: string;
};

// Curated nav — a focused subset keeps the bar scannable for recruiters.
export const NAV_ITEMS: NavItem[] = [
  { id: SECTION_IDS.about, label: "About" },
  { id: SECTION_IDS.expertise, label: "Expertise" },
  { id: SECTION_IDS.projects, label: "Projects" },
  { id: SECTION_IDS.architecture, label: "Architecture" },
  { id: SECTION_IDS.experience, label: "Experience" },
  { id: SECTION_IDS.contact, label: "Contact" },
];
