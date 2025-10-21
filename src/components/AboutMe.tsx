import React, { useState } from 'react';
import { useUserData } from '../context/UserDataContext';
import { motion } from 'framer-motion';
import AiIcon from '../assets/animations/icons/ai.svg';
import MlIcon from '../assets/animations/icons/database.svg';
import DesktopIcon from '../assets/animations/icons/desktop.svg';
import WebIcon from '../assets/animations/icons/web.svg';
import DbIcon from '../assets/animations/icons/database.svg';
import NetworkIcon from '../assets/animations/icons/network.svg';

const AboutMe: React.FC = () => {
  const { userData } = useUserData();
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const domains = [
    { id: 'ml', title: 'Machine Learning & Deep Learning', icon: MlIcon, description: 'I build intelligent systems using machine learning and deep learning models...' },
    { id: 'ai', title: 'AI Applications', icon: AiIcon, description: 'I develop AI-powered tools that solve practical problems...' },
    { id: 'desktop', title: 'Desktop & GUI Applications Development', icon: DesktopIcon, description: 'I create full-featured desktop applications...' },
    { id: 'web', title: 'Web Development', icon: WebIcon, description: 'I work on responsive and dynamic websites...' },
    { id: 'db', title: 'Database Systems & Backend Integration', icon: DbIcon, description: 'I design and manage relational databases...' },
    { id: 'network', title: 'Systems & Network Administration', icon: NetworkIcon, description: 'Thanks to my internship experience, I have practical skills...' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <section className="animate-fadeIn">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 border-b-2 border-blue-500 pb-2 inline-block">
        About Me
      </h2>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line mb-8">
          {userData.about}
        </p>

        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">What I Do</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.id}
              className={`p-5 rounded-lg cursor-pointer flex items-start gap-4 border 
                ${selectedDomain === domain.id
                  ? 'bg-blue-50 dark:bg-blue-900 border-blue-400 shadow-lg'
                  : 'bg-slate-50 dark:bg-slate-700 hover:shadow-md border-slate-200 dark:border-slate-600'
                }`}
              onClick={() => setSelectedDomain(selectedDomain === domain.id ? null : domain.id)}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <img
                src={domain.icon}
                alt={`${domain.title} Icon`}
                className={`w-10 h-10 transition-transform duration-300
                  ${selectedDomain === domain.id ? 'animate-wiggle' : ''}`}
              />
              <div>
                <h4 className="text-lg font-medium text-slate-800 dark:text-slate-100 mb-2">{domain.title}</h4>
                <p className="text-slate-600 dark:text-slate-300">{domain.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">My Approach</h3>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          I strive to build intelligent solutions that bridge the gap between cutting-edge technology and real-world impact...
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
