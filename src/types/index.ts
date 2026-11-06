export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  repoUrl: string;
  note?: string;
}

export interface CareerRole {
  title: string;
  subtitle: string;
  peekLabel: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  copyable?: boolean;
}

export interface PortfolioData {
  identity: {
    name: string;
    shortName: string;
    location: string;
    role: string;
    bioStatement: string;
    aboutSummary: string;
    educationSummary: string;
  };
  navigation: NavItem[];
  technologies: {
    marqueeRows: string[][];
    orbitRingText: string;
    additionalSkills: string[];
  };
  projects: ProjectItem[];
  careerRoles: CareerRole[];
  riseQuotes: string[];
  stats: StatItem[];
  internship: {
    role: string;
    period: string;
    company: string;
    details: string;
    note: string;
  };
  certifications: CertificationItem[];
  contact: {
    heading: string;
    email: string;
    channels: ContactChannel[];
  };
}

