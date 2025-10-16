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
  languages: Languages;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  domain: string;
  projectLink?: string; // optional for projects without a repo link
  demoLink?: string;    // optional for projects without a demo
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

}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string[]; 
}

export interface Skill {
  name: string;
  level: number;
}
export type Language = {
  name: string;
  level: string;
};

export type Languages = Language[];

