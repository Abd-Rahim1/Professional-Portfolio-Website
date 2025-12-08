import React from 'react';
import { motion } from 'framer-motion';
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
import { FaChartBar, FaChartLine, FaInfinity, FaCode, FaWindows } from 'react-icons/fa';

const SkillsList: React.FC = () => {
  // Data structure from AboutMe.tsx
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
      { name: 'DVC', icon: SiGit, color: 'from-purple-500 to-indigo-500' },
      { name: 'CI/CD', icon: FaInfinity, color: 'from-blue-400 to-green-400' },
      { name: 'Power BI', icon: FaChartBar, color: 'from-yellow-500 to-orange-500' },
    ]
  };

  return (
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
  );
};

export default SkillsList;
