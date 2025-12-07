import React, { useState } from 'react';
import { useUserData } from '../context/UserDataContext';
import { motion, easeOut } from 'framer-motion';
import { useFilter } from '../context/FilterContext';

// Import from react-icons/si
import {
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTensorflow,
  SiAngular,
  SiTailwindcss,
  SiGit,
  SiKeras,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiFlask,
  SiDjango,
  SiMysql,
  SiFlutter,
  SiGithub,
  SiJupyter,
  SiAnaconda
} from 'react-icons/si';


// Import from react-icons/fa for chart icons
import { FaChartBar, FaChartLine, FaMobileAlt, FaInfinity, FaCode, FaWindows } from 'react-icons/fa';

// Import other SVG icons
import AiIcon from '../assets/animations/icons/ai.svg';
import DesktopIcon from '../assets/animations/icons/desktop.svg';
import WebIcon from '../assets/animations/icons/web.svg';
import NetworkIcon from '../assets/animations/icons/network.svg';

const AboutMe: React.FC = () => {
  const { userData } = useUserData();
  const { setProjectFilter } = useFilter();
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);

  const domains = [
    {
      id: 'ai',
      title: 'AI Applications',
      icon: AiIcon,
      description: 'Building intelligent systems using machine learning and deep learning models.',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/30',
      textColor: 'text-purple-700 dark:text-purple-300',
      filterValue: 'AI Applications'
    },
    {
      id: 'desktop',
      title: 'Desktop & GUI Applications',
      icon: DesktopIcon,
      description: 'Creating full-featured desktop applications with intuitive user interfaces.',
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/30',
      textColor: 'text-green-700 dark:text-green-300',
      filterValue: 'Desktop and GUI Applications'
    },
    {
      id: 'web',
      title: 'Web Development',
      icon: WebIcon,
      description: 'Developing responsive and dynamic websites with modern technologies.',
      gradient: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/30',
      textColor: 'text-orange-700 dark:text-orange-300',
      filterValue: 'Web Development'
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: null,
      ReactIcon: FaMobileAlt,
      description: 'Building cross-platform mobile applications for iOS and Android.',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/30',
      textColor: 'text-blue-700 dark:text-blue-300',
      filterValue: 'Mobile Development'
    },
    {
      id: 'network',
      title: 'System and Network',
      icon: NetworkIcon,
      description: 'Managing and optimizing system infrastructure and network configurations.',
      gradient: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/30',
      textColor: 'text-indigo-700 dark:text-indigo-300',
      filterValue: 'System and Network'
    }
  ];

  // Updated professionalSkills with new structure
  const professionalSkills = {
    aiDataScience: [
      { name: 'Python', icon: SiPython, color: 'from-blue-500 to-cyan-500' },
      { name: 'TensorFlow', icon: SiTensorflow, color: 'from-orange-500 to-red-500' },
      { name: 'Keras', icon: SiKeras, color: 'from-red-500 to-pink-500' },
      { name: 'Scikit-learn', icon: SiScikitlearn, color: 'from-orange-500 to-amber-500' },
      { name: 'Pandas', icon: SiPandas, color: 'from-red-500 to-pink-500' },
      { name: 'NumPy', icon: SiNumpy, color: 'from-blue-500 to-indigo-500' },
      { name: 'Matplotlib', icon: FaChartBar, color: 'from-blue-500 to-cyan-500' },
      { name: 'Seaborn', icon: FaChartLine, color: 'from-purple-500 to-pink-500' },
    ],
    webDevelopment: {
      frontend: [
        { name: 'React.js', icon: SiReact, color: 'from-cyan-500 to-blue-500' },
        { name: 'Angular', icon: SiAngular, color: 'from-red-500 to-pink-500' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'from-teal-500 to-cyan-500' },
      ],
      backend: [
        { name: 'Node.js', icon: SiNodedotjs, color: 'from-green-500 to-emerald-500' },
        { name: 'Flask', icon: SiFlask, color: 'from-gray-500 to-gray-700' },
        { name: 'Django', icon: SiDjango, color: 'from-green-600 to-green-800' },
        { name: 'MySQL', icon: SiMysql, color: 'from-blue-400 to-blue-600' },
      ]
    },
    mobileDevelopment: [
      { name: 'Flutter', icon: SiFlutter, color: 'from-blue-400 to-cyan-400' },
      { name: '.NET MAUI', icon: FaWindows, color: 'from-purple-600 to-blue-600' },
    ],
    toolsAndPlatforms: [
      { name: 'Git', icon: SiGit, color: 'from-orange-500 to-red-500' },
      { name: 'GitHub', icon: SiGithub, color: 'from-gray-700 to-black' },
      { name: 'Jupyter', icon: SiJupyter, color: 'from-orange-400 to-orange-600' },
      { name: 'VS Code', icon: FaCode, color: 'from-blue-500 to-blue-700' },
      { name: 'Conda', icon: SiAnaconda, color: 'from-green-500 to-green-700' },
      { name: 'DVC', icon: SiGit, color: 'from-purple-500 to-indigo-500' }, // Using SiGit as fallback for DVC if specific icon absent, or could use generic
      { name: 'CI/CD', icon: FaInfinity, color: 'from-blue-400 to-green-400' },
      { name: 'Power BI', icon: FaChartBar, color: 'from-yellow-500 to-orange-500' },
    ]
  };

  // Updated statistics data
  const statistics = [
    {
      id: 'years',
      title: 'Years of Study',
      value: '3+',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'certifications',
      title: 'Certifications',
      value: '10+',
      subtitle: 'IA/ML with IBM, NVIDIA, Coursera',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 'projects',
      title: 'Technical Projects',
      value: '10+',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 'internships',
      title: 'Industry Internships',
      value: '3+',
      subtitle: 'IT, WEP, AI',
      gradient: 'from-orange-500 to-amber-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const handleSelect = (id: string) => {
    setSelectedDomain(prev => (prev === id ? null : id));
  };

  // Function to handle navigation to projects with filter
  const handleViewProjects = (filterValue: string) => {
    setProjectFilter(filterValue);
    window.dispatchEvent(new CustomEvent('navigateToSection', {
      detail: 'projects'
    }));
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="about" className="min-h-screen px-4 md:px-8 lg:px-16 py-8 md:py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-300 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-300 rounded-full opacity-10 blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Passionate about creating intelligent solutions that bridge technology and real-world impact
          </p>
        </motion.div>

        {/* My Journey Card with Statistics Cards on Right */}
        <div className="flex flex-col lg:flex-row gap-6 mb-10">
          {/* Left: My Journey Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/3"
          >
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200 dark:border-slate-700 h-full">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  My Journey
                </span>
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg whitespace-pre-line">
                {userData.about || "As a passionate Software Engineer and AI specialist, I combine technical expertise with creative problem-solving to build innovative solutions. My journey in technology has been driven by curiosity and a desire to make meaningful impact through code."}
              </p>
            </div>
          </motion.div>

          {/* Right: Statistics Cards Grid - Centered content */}
          <div className="lg:w-1/3">
            <div className="grid grid-cols-2 gap-4 h-full">
              {statistics.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className={`relative p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center text-center`}
                  whileHover={{ y: -5 }}
                >
                  {/* Gradient Background Effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${stat.gradient} opacity-5`}></div>

                  <div className="relative z-10 w-full">
                    {/* Main Value - Large and centered */}
                    <div className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                      {stat.value}
                    </div>

                    {/* Title - Smaller and centered */}
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                      {stat.title}
                    </h4>

                    {/* Subtitle if exists */}
                    {stat.subtitle && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {stat.subtitle}
                      </p>
                    )}

                    {/* Decorative line at bottom */}
                    <div className="mt-3">
                      <div className={`h-0.5 rounded-full bg-gradient-to-r ${stat.gradient}`}></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* What I Do Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {domains.map((domain, index) => {
              const isExpanded = selectedDomain === domain.id;
              const isHovered = hoveredDomain === domain.id;

              return (
                <motion.div
                  key={domain.id}
                  className={`relative p-5 rounded-xl cursor-pointer flex flex-col gap-3 border-2 transition-all duration-300
                    ${isExpanded
                      ? `border-${domain.gradient.split('-')[1]}-400 dark:border-${domain.gradient.split('-')[1]}-400 shadow-2xl scale-[1.02]`
                      : 'border-gray-200 dark:border-slate-700 hover:shadow-xl'
                    }
                    ${domain.bgColor}`}
                  onClick={() => handleSelect(domain.id)}
                  onMouseEnter={() => setHoveredDomain(domain.id)}
                  onMouseLeave={() => setHoveredDomain(null)}
                  custom={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  animate={{ scale: isExpanded ? 1.02 : 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${domain.gradient} opacity-0 ${isHovered ? 'opacity-10' : ''} transition-opacity duration-300`}></div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-2">
                      <motion.div
                        className={`p-2.5 rounded-lg bg-gradient-to-br ${domain.gradient}`}
                        animate={{
                          rotate: isHovered ? [0, 5, -5, 0] : 0,
                          scale: isHovered ? 1.1 : 1
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        {domain.ReactIcon ? (
                          <domain.ReactIcon className="w-5 h-5 text-white" />
                        ) : (
                          <img
                            src={domain.icon}
                            alt={`${domain.title} Icon`}
                            className="w-5 h-5 filter brightness-0 invert"
                          />
                        )}
                      </motion.div>
                      <div>
                        <h4 className={`text-base font-semibold ${domain.textColor} mb-1`}>
                          {domain.title}
                        </h4>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full ${isExpanded ? domain.textColor : 'bg-gray-400'} mx-0.5`}
                              ></div>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            Click to {isExpanded ? 'collapse' : 'expand'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: isExpanded ? 'auto' : 0,
                        opacity: isExpanded ? 1 : 0
                      }}
                      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    >
                      <p className="text-slate-600 dark:text-slate-300 pt-2 border-t border-gray-200 dark:border-slate-700 text-sm">
                        {domain.description}
                      </p>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="mt-3 pt-2 border-t border-gray-200 dark:border-slate-700 flex justify-between items-center"
                        >
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleViewProjects(domain.filterValue);
                            }}
                            className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${domain.gradient} text-white text-sm font-medium hover:opacity-90 transition-opacity`}
                          >
                            View Projects →
                          </button>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Professional Skillset Section with Updated Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 mb-10 border border-gray-200 dark:border-slate-700"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 sm:mb-8 text-center">
            Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skillset</span>
          </h3>

          <div className="space-y-8 sm:space-y-10">

            {/* AI & Data Science Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b border-gray-300 dark:border-slate-700">
                AI & Data Science
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                {professionalSkills.aiDataScience.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 + index * 0.05 }}
                    className="relative group"
                    whileHover={{ y: -2 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      animate={{
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    <div className="relative flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700/50 transition-colors">
                      <motion.div
                        className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-10 flex items-center justify-center`}
                        animate={{
                          rotate: [0, 3, -3, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }}
                      >
                        <skill.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </motion.div>

                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Web Development - Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b border-gray-300 dark:border-slate-700">
                Web Development - Frontend
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {professionalSkills.webDevelopment.frontend.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.25 + index * 0.05 }}
                    className="relative group"
                    whileHover={{ y: -2 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      animate={{
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    <div className="relative flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700/50 transition-colors">
                      <motion.div
                        className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-10 flex items-center justify-center`}
                        animate={{
                          rotate: [0, 3, -3, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }}
                      >
                        <skill.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </motion.div>

                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Web Development - Backend */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b border-gray-300 dark:border-slate-700">
                Web Development - Backend
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {professionalSkills.webDevelopment.backend.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35 + index * 0.05 }}
                    className="relative group"
                    whileHover={{ y: -2 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      animate={{
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    <div className="relative flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700/50 transition-colors">
                      <motion.div
                        className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-10 flex items-center justify-center`}
                        animate={{
                          rotate: [0, 3, -3, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }}
                      >
                        <skill.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </motion.div>

                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mobile Development */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b border-gray-300 dark:border-slate-700">
                Mobile Development
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto">
                {professionalSkills.mobileDevelopment.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.45 + index * 0.05 }}
                    className="relative group"
                    whileHover={{ y: -2 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      animate={{
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    <div className="relative flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700/50 transition-colors">
                      <motion.div
                        className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-10 flex items-center justify-center`}
                        animate={{
                          rotate: [0, 3, -3, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }}
                      >
                        <skill.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </motion.div>

                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools & Platforms */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b border-gray-300 dark:border-slate-700">
                Tools & Platforms
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                {professionalSkills.toolsAndPlatforms.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.55 + index * 0.05 }}
                    className="relative group"
                    whileHover={{ y: -2 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      animate={{
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    <div className="relative flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700/50 transition-colors">
                      <motion.div
                        className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-10 flex items-center justify-center`}
                        animate={{
                          rotate: [0, 3, -3, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }}
                      >
                        <skill.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </motion.div>

                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-blue-200 dark:border-blue-800"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4 sm:mb-5">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Approach</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                icon: '💡',
                title: 'Innovation First',
                description: 'Always exploring new technologies and methodologies to solve problems creatively.'
              },
              {
                icon: '⚡',
                title: 'Efficiency Focused',
                description: 'Building scalable solutions with performance and maintainability in mind.'
              },
              {
                icon: '🎯',
                title: 'Impact Driven',
                description: 'Creating solutions that make real-world impact and solve genuine user needs.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white/50 dark:bg-slate-800/50 p-4 sm:p-5 rounded-xl text-center hover:shadow-lg transition-shadow"
                whileHover={{ y: -3 }}
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{item.icon}</div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-100 mb-1 sm:mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-blue-200 dark:border-blue-800 text-center"
          >
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 italic">
              "I strive to build intelligent solutions that bridge the gap between cutting-edge technology and real-world impact, focusing on efficiency, scalability, and user experience."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;