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
    { id: 'ml', title: 'Machine Learning & Deep Learning', icon: MlIcon, description: 'I build intelligent systems using machine learning and deep learning models. I handle data preprocessing, model training, evaluation, and deployment to create AI-powered solutions.' },
    { id: 'ai', title: 'AI Applications', icon: AiIcon, description: 'I develop AI-powered tools that solve practical problems, including natural language processing, computer vision, and automation workflows.' },
    { id: 'desktop', title: 'Desktop & GUI Applications Development', icon: DesktopIcon, description: 'I create full-featured desktop applications with intuitive user interfaces and robust backends, using modern programming languages and frameworks.' },
    { id: 'web', title: 'Web Development', icon: WebIcon, description: 'I work on responsive and dynamic websites, integrating frontend and backend technologies to build seamless web experiences.' },
    { id: 'db', title: 'Database Systems & Backend Integration', icon: DbIcon, description: 'I design and manage relational and non-relational databases, ensuring efficient data storage, querying, and integration with applications.' },
    { id: 'network', title: 'Systems & Network Administration', icon: NetworkIcon, description: 'Thanks to my internship experience, I have practical skills in configuring networks, managing servers, and ensuring secure and reliable system operations.' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const handleSelect = (id: string) => {
    setSelectedDomain(prev => (prev === id ? null : id));
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

        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
          What I Do
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((domain, index) => {
            const isExpanded = selectedDomain === domain.id;

            return (
              <motion.div
                key={domain.id}
                className={`p-5 rounded-lg cursor-pointer flex flex-col gap-4 border
                  ${isExpanded
                    ? 'bg-blue-50 dark:bg-blue-900 border-blue-400 shadow-lg'
                    : 'bg-slate-50 dark:bg-slate-700 hover:shadow-md border-slate-200 dark:border-slate-600'
                  }`}
                onClick={() => handleSelect(domain.id)}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1.05 }}
                style={{ scale: isExpanded ? 1.05 : 1 }} // popup effect for selected card
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="flex items-start gap-4">
                  <motion.img
                    src={domain.icon}
                    alt={`${domain.title} Icon`}
                    className="w-10 h-10"
                    animate={{ rotate: isExpanded ? [0, 10, -10, 0] : 0 }}
                    transition={{ duration: 0.6 }}
                  />
                  <h4 className="text-lg font-medium text-slate-800 dark:text-slate-100">{domain.title}</h4>
                </div>

                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                >
                  <p className="text-slate-600 dark:text-slate-300 mt-2">{domain.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
          My Approach
        </h3>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          I strive to build intelligent solutions that bridge the gap between cutting-edge technology and real-world impact, focusing on efficiency, scalability, and user experience.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
