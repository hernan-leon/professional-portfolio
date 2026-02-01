// Type definitions for CV data structure

export interface Personal {
  name: string;
  title: string;
  headline: string;
  summary: string;
  email: string;
  phone?: string;
  location: string;
  linkedIn: string;
  github?: string;
  website?: string;
  photo?: string;
}

export interface InternationalCountry {
  name: string;
  role: string;
  years: string;
  description: string;
  flag?: string;
}

export interface International {
  headline: string;
  countries: InternationalCountry[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  technologies?: string[];
  type: 'full-time' | 'contract' | 'freelance';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string[];
  description?: string;
}

export interface Skill {
  name: string;
  proficiency?: 'expert' | 'advanced' | 'intermediate' | 'beginner';
  yearsOfExperience?: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skills {
  categories: SkillCategory[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  role: string;
  technologies: string[];
  startDate: string;
  endDate: string | null;
  url?: string;
  github?: string;
  highlights: string[];
  featured: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string | null;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Language {
  language: string;
  proficiency: 'native' | 'fluent' | 'professional' | 'intermediate' | 'basic';
}

export interface CVData {
  personal: Personal;
  international: International;
  highlights: string[];
  experience: Experience[];
  education: Education[];
  skills: Skills;
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
}
