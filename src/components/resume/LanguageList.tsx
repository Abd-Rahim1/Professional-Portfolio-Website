import React from 'react';
import { useUserData } from '../../context/UserDataContext';
import { motion } from 'framer-motion';

const LanguageList: React.FC = () => {
  const { userData } = useUserData();

  const getPercentage = (level: string) => {
    const lower = level.toLowerCase();
    if (lower.includes('native')) return 100;
    if (lower.includes('fluent')) return 90;
    if (lower.includes('advanced')) return 75;
    if (lower.includes('intermediate')) return 50;
    if (lower.includes('basic')) return 25;
    return 60; // default
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {userData.languages.map((lang, index) => {
        const percent = getPercentage(lang.level);

        return (
          <motion.div
            key={index}
            className="group"
            variants={itemVariants}
          >
            <div className="flex justify-between items-end mb-2">
              <span className="font-semibold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {lang.name}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                {lang.level}
              </span>
            </div>

            <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default LanguageList;
