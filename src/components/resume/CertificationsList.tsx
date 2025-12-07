import React from 'react';
import { useUserData } from '../../context/UserDataContext';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link: string;
}

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const CertificationsList: React.FC = () => {
  const { userData } = useUserData();

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {userData.certifications.map((cert: Certification) => (
        <motion.div
          key={cert.id}
          className="group relative bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 shadow-sm hover:shadow-md transition-all duration-300"
          variants={itemVariants}
          whileHover={{ y: -4 }}
        >
          {/* Decorative accent */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Award size={24} />
            </div>

            <div className="flex-1">
              <h4 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h4>

              <div className="flex flex-col gap-1 mt-1">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {cert.issuer}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <Calendar size={12} />
                  <span>{cert.date}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Show Credential
                  <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CertificationsList;
