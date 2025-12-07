// src/types/index.ts
export interface User {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  avatarUrl: string;
  cvLink: string;
  socialLinks: {
    linkedin: string;
    github: string;
    twitter: string;
  };
  about: string;
  projects: Project[];
  experience: Experience[];
  certifications: Certification[];
  education: Education[];
  languages: Language[];
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  domain: string;
  projectLink?: string;
  demoLink?: string;
  image: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string[];
  sartexlogo: string;
  skills?: string[];
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  logo?: string;
  link: string;
  pdf?: string;
}

export interface Education {
  id: number;
  type: 'University' | 'Course';
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  logo: string;
  description?: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface Language {
  name: string;
  level: string;
}