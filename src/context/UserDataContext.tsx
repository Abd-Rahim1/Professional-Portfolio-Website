import React, { createContext, useContext, ReactNode } from 'react';
import { User } from '../types';
import myAvatar from "../assets/photo_profil.jpg";

// Sample data - replace with your own
const userData: User = {
  name: "Abd Rahim Mojbani",
  title: "Applied AI Student",
  email: "a.mojbani@pristini-international.tn",
  phone: "+216 96-957-283",
  location: "Monatir, Tunisia",
  avatarUrl: myAvatar,
  cvLink: "/CV_Rahim.pdf",
  socialLinks: {
    linkedin: "https://linkedin.com/in/abd-rahim-mojbani-708887296",
    github: "https://github.com/Abd-Rahim1",
    twitter: "https://twitter.com/Abd_Rahim1",
  },
  about: `
    I am a final-year student specializing in Applied Artificial Intelligence at the Pristini School of AI in Tunisia. 
    My studies and hands-on projects have strengthened my knowledge in Machine Learning, Deep Learning, and Computer Vision. 
    I have practical experience preparing and training models, building interactive applications, and managing databases. 
    Through internships at Sartex Group, I gained valuable skills in data science, model development, and IT systems management. 
    I am passionate about applying AI techniques to solve real-world problems and contributing to innovative international projects.
  `,
  projects: [
    {
      id: 1,
      title: "Cinema Management System",
      description: "Terminal-based app for managing cinema data including movies, bookings, and admin tools.",
      technologies: ["C Language"],
      domain: "Desktop Applications",
      projectLink: "https://github.com/Abd-Rahim1/cinema-management-system.git",
      image: "https://cutwatr.com/wp-content/uploads/2020/09/Picture7.jpg"
    },
    {
      id: 2,
      title: "Earthquake Detection System",
      description: "Predicts potential earthquake activity using ML models, integrated into a simple website for demo.",
      technologies: ["Python", "ML libraries", "HTML", "CSS", "JavaScript"],
      domain: "Machine Learning",
      projectLink: "https://github.com/Abd-Rahim1/Earthquake-Detection-System",
      demoLink: "https://abd-rahim1.github.io/Earthquake-Detection-System/",
      image: "https://geovera.com/wp-content/uploads/2023/04/Richter-Scale.png"
    },
    {
      id: 3,
      title: "Emotion Detection with CNN",
      description: "Real-time emotion detection system using webcam feed and convolutional neural networks.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
      domain: "Deep Learning",
      projectLink: "https://example.com/imageclassifier",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68yoFdxcAQWNFwU-kbOe4cthXhdsG6WNngw&s"
    },
    {
      id: 4,
      title: "Airline Booking System",
      description: "Admin and Passenger interfaces for managing flight bookings with full backend and database support.",
      technologies: ["Python", "Java", "MySQL", "QtDesigner"],
      domain: "Desktop Applications",
      projectLink: "https://github.com/Abd-Rahim1/Airline-Management-Database-System.git",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dyWsZM1iQYEGvNxh9TXmaHqX70zHvYb4Lg&s"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects, resume, and interactive sections built with React, TypeScript, and Tailwind CSS.",
      technologies: ["HTML", "CSS", "TypeScript", "React","TailwindCSS"],
      domain: "Web Development",
      projectLink: "https://github.com/Abd-Rahim1/Professional-Portfolio-Website.git",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ],
experience: [
  {
    id: 1,
    role: "Data Science Intern",
    company: "Sartex Group",
    location: "Ksar Hellal, Monastir",
    startDate: "Jul 2025",
    endDate: "Aug 2025",
    description: [
      "Conducted comprehensive data preparation and cleaning on the DeepFashion2 dataset to ensure high-quality inputs for keypoint detection tasks.",
      "Designed and implemented data augmentation and preprocessing pipelines to improve model accuracy.",
      "Trained and fine-tuned Detectron2 models using advanced transfer learning techniques.",
      "Developed a user-friendly Tkinter-based GUI to facilitate annotation correction and streamline the dataset labeling process.",
      "Collaborated closely with the data science team to evaluate model performance and optimize detection accuracy."
    ]
  },
  {
    id: 2,
    role: "IT Intern – Network & Systems Support",
    company: "Sartex Group",
    location: "Ksar Hellal, Monastir",
    startDate: "Jun 2024",
    endDate: "Jul 2024",
    description: [
      "Assisted with system maintenance and network monitoring.",
      "Troubleshot hardware and software issues, gaining practical experience in IT support and system administration.",
      "Worked with the IT team to optimize network performance and maintain system security."
    ]
  }
],

  certifications: [
    {
      id: 1,
      title: "Image Segmentation, Filtering & Region Analysis",
      issuer: "Coursera (MathWorks)",
      date: "2025",
      link: "https://www.coursera.org/account/accomplishments"
    }
  ],
  education: [
    {
      id: 1,
      degree: "BSc in Applied Artificial Intelligence",
      institution: "Pristini School of AI",
      location: "Sousse , Tunisia",
      startDate: "2023",
      endDate: "Present",
      description: [
        "Specialized in Machine Learning, Deep Learning, and Computer Vision.",
        "Completed multiple projects including data analysis and AI model development.",
        "Gained practical experience with Python, TensorFlow, and data engineering tools."
      ]
    },
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "French", level: "Advanced" },
    { name: "Arabic", level: "Native" }
  ],
  skills: [
    { name: "Python", level: 95 },
    { name: "Machine Learning", level: 90 },
    { name: "Deep Learning", level: 88 },
    { name: "Computer Vision", level: 85 },
    { name: "Data Analysis", level: 83 },
    { name: "TensorFlow", level: 80 },
    { name: "Detectron2", level: 78 },
    { name: "OpenCV", level: 78 },
    { name: "SQL", level: 75 },
    { name: "Java", level: 72 },
    { name: "HTML/CSS/JavaScript", level: 70 },
    { name: "Git & GitHub", level: 68 },
    { name: "Problem Solving", level: 90 },
    { name: "Team Collaboration", level: 85 }
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
