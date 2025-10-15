import React, { createContext, useContext, ReactNode } from 'react';
import { User, Project, Experience, Education, Certification, Skill, Languages } from '../types';
import myAvatar from "../assets/photo_profil.jpg";

// Sample data - replace with your own
const userData: User = {
  name: "Abd Rahim Mojbani",
  title: "Applied AI Student",
  email: "a.mojbani@pristini-international.tn",
  phone: "+216 96-957-283",
  location: "Monatir, Tunisia",
  avatarUrl: myAvatar,
  cvLink: "/CV_AbdRahim_Mojbani.pdf",
  socialLinks: {
    linkedin: "https://linkedin.com/in/abd-rahim-mojbani-708887296",
    github: "https://github.com/Abd-Rahim1",
    twitter: "https://twitter.com/Abd_Rahim1",
    },
  about: `
    I am a second-year student specializing in Applied Artificial Intelligence at Pristini School of AI in Tunisia. 
    My academic and project work reflect a strong interest in Machine Learning, Deep Learning, and the development of practical AI solutions. 
    I have experience designing and implementing projects in Python, managing relational databases,
    and completing internships focused on systems and network administration.
  `,
  projects: [
    {
      id: 1,
      title: "Cinema Management System",
      description: "Terminal-based app for managing cinema data including movies, bookings, and admin tools.",
      technologies: ["C Language"],
      domain: "Desktop Applications",
      link: "https://example.com/ecommerce",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Earthquake Detection System",
      description: "Predicts potential earthquake activity using ML models, integrated into a simple website for demo.",
      technologies: ["Python", " ML libraries", "HTML", "CSS", "JavaScript"],
      domain: "Machine Learning",
      link: "https://abd-rahim1.github.io/Earthquake-Detection-System/",
      image: "https://images.pexels.com/photos/1989820/pexels-photo-1989820.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Emotion Detection with CNN",
      description: "Real-time emotion detection system using webcam feed and convolutional neural networks.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
      domain: "Deep Learning",
      link: "https://example.com/imageclassifier",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      title: "Airline Booking System",
      description: "Admin and Passenger interfaces for managing flight bookings with full backend and database support.",
      technologies: ["Python", "Java", "MySQL", "QtDesigner"],
      domain: "Desktop Applications",
      link: "https://github.com/Abd-Rahim1/Airline-Management-Database-System.git",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A smart home system connecting various IoT devices for automated control and monitoring.",
      technologies: ["HTML", "CSS", "typeScript", "React","tailwindCSS"],
      domain: "Web Development",
      link: "https://example.com/homeautomation",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ],
  experience: [
    {
      id: 1,
      role: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      startDate: "Jan 2020",
      endDate: "Present",
      description: "Leading development of multiple web applications, mentoring junior developers, and implementing CI/CD pipelines."
    },
    {
      id: 2,
      role: "Web Developer",
      company: "Digital Solutions LLC",
      location: "Boston, MA",
      startDate: "Mar 2018",
      endDate: "Dec 2019",
      description: "Developed and maintained various client websites and web applications using modern JavaScript frameworks."
    },
    {
      id: 3,
      role: "Junior Developer",
      company: "StartUp Co.",
      location: "New York, NY",
      startDate: "Jun 2016",
      endDate: "Feb 2018",
      description: "Assisted in front-end development tasks and learned modern web development practices in an agile environment."
    }
  ],
  certifications: [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2021",
      link: "https://example.com/cert1"
    },
    {
      id: 2,
      title: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2020",
      link: "https://example.com/cert2"
    },
    {
      id: 3,
      title: "Google Cloud Professional Developer",
      issuer: "Google",
      date: "2019",
      link: "https://example.com/cert3"
    }
  ],
  education: [
    {
      id: 1,
      degree: "BSc in Applied Artificial Intelligence",
      institution: "Pristini School of AI",
      location: "Sousse , Tunisia",
      startDate: "2023",
      endDate: "Present"
    },
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "French", level: "Advanced" },
    { name: "Arabic", level: "Native" }
  ],
  skills: [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "AWS", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "Docker", level: 65 },
    { name: "GraphQL", level: 60 }
  ]
};

// Create the context
type UserDataContextType = {
  userData: User;
};

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

// Create a provider component
export const UserDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <UserDataContext.Provider value={{ userData }}>
      {children}
    </UserDataContext.Provider>
  );
};

// Create a hook to use the context
export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }
  return context;
};