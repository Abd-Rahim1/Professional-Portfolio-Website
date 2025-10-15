import React, { useState } from 'react';
import { useUserData } from '../context/UserDataContext';

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
    {
      id: 'ml', 
      title: 'Machine Learning & Deep Learning',
      icon: MlIcon,
      description:
        'I build intelligent systems using machine learning and deep learning models, especially for tasks like classification, prediction, and image processing. I use tools like TensorFlow, Keras, Scikit-learn, and OpenCV.',
    },
    {
      id: 'ai',
      title: 'AI Applications',
      icon: AiIcon,
      description:
        'I develop AI-powered tools that solve practical problems, such as emotion recognition or earthquake detection, combining models with user-friendly interfaces for real-world use.',
    },
    {
      id: 'desktop',
      title: 'Desktop & GUI Applications Development',
      icon: DesktopIcon,
      description:
        'I create full-featured desktop applications with graphical interfaces using C, Python, and Qt Designer. These applications include booking systems, management software, and administrative tools.',
    },
    {
      id: 'web',
      title: 'Web Development',
      icon: WebIcon,
      description:
        'I work on responsive and dynamic websites, including personal portfolios and small web apps. I focus on clean UI/UX design and frontend development using HTML, CSS, and JavaScript.',
    },
    {
      id: 'db',
      title: 'Database Systems & Backend Integration',
      icon: DbIcon,
      description:
        'I design and manage relational databases (MySQL) and connect them to Python or Java applications for seamless CRUD operations and system automation.',
    },
    {
      id: 'network',
      title: 'Systems & Network Administration',
      icon: NetworkIcon,
      description:
        'Thanks to my internship experience, I have practical skills in system configuration, IT support, and basic network setup and troubleshooting.',
    },
  ];

  return (
    <section className="animate-fadeIn">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2 inline-block">
        About Me
      </h2>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="text-slate-700 leading-relaxed whitespace-pre-line mb-8">
          {userData.about}
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-4">What I Do</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((domain) => (
            <div
              key={domain.id}
              className={`p-5 rounded-lg transition-all duration-300 cursor-pointer flex items-start gap-4 border 
                ${selectedDomain === domain.id
                  ? 'bg-blue-50 border-blue-400 shadow-lg'
                  : 'bg-slate-50 hover:shadow-md border-slate-200'
                }`}
              onClick={() =>
                setSelectedDomain(selectedDomain === domain.id ? null : domain.id)
              }
            >
              <img
                src={domain.icon}
                alt={`${domain.title} Icon`}
                className={`w-10 h-10 transition-transform duration-300
                  ${selectedDomain === domain.id ? 'animate-wiggle' : ''}
                `}
              />
              <div>
                <h4 className="text-lg font-medium text-slate-800 mb-2">
                  {domain.title}
                </h4>
                <p className="text-slate-600">{domain.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">My Approach</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          I strive to build intelligent solutions that bridge the gap between
          cutting-edge technology and real-world impact. My approach integrates
          strong technical foundations with a deep interest in AI, ensuring each
          project is both functional and forward-thinking.
        </p>
        <p className="text-slate-700 leading-relaxed">
          From developing smart applications using Python to optimizing databases
          or contributing to robust system infrastructures, I focus on delivering
          solutions that are efficient, scalable, and user-centric. I value
          continuous learning, clarity in design, and problem-solving that drives
          meaningful results.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
