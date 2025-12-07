import React, { useState } from 'react';
import { useUserData } from '../context/UserDataContext';
import { ExternalLink, Award, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  logo?: string;
  link: string;
  pdf?: string;
}

const Certifications: React.FC = () => {
  const { userData } = useUserData();
  const { certifications } = userData;
  const [startIndex, setStartIndex] = useState(0);

  if (!certifications || certifications.length === 0) {
    return (
      <section className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="text-center text-gray-500 dark:text-gray-400 text-xl">No certifications found.</div>
      </section>
    );
  }

  const itemsPerPage = 3;
  const visibleCertifications = certifications.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (startIndex + itemsPerPage < certifications.length) {
      setStartIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };

  const isPrevDisabled = startIndex === 0;
  const isNextDisabled = startIndex + itemsPerPage >= certifications.length;

  return (
    <section id="certifications" className="min-h-screen px-4 md:px-8 lg:px-16 py-12 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl mb-4">
            <Award size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Licenses & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Professional credentials and technical certifications demonstrating expertise in AI, Machine Learning, and Software Development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-10">
            <button
              onClick={handlePrev}
              disabled={isPrevDisabled}
              className={`p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-200 ${isPrevDisabled
                  ? 'opacity-50 cursor-not-allowed text-slate-400'
                  : 'hover:bg-blue-50 dark:hover:bg-slate-700 text-slate-700 dark:text-blue-400 hover:scale-110'
                }`}
              aria-label="Previous certifications"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-10">
            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className={`p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-200 ${isNextDisabled
                  ? 'opacity-50 cursor-not-allowed text-slate-400'
                  : 'hover:bg-blue-50 dark:hover:bg-slate-700 text-slate-700 dark:text-blue-400 hover:scale-110'
                }`}
              aria-label="Next certifications"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {visibleCertifications.map((cert: Certification) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700/50 flex flex-col h-full"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      {cert.logo ? (
                        <div className="p-3 bg-white dark:bg-slate-700 rounded-xl shadow-sm border border-slate-100 dark:border-slate-600">
                          <img
                            src={cert.logo}
                            alt={cert.issuer}
                            className="w-12 h-12 object-contain"
                            onError={(e: any) => { e.target.src = '/logos/default.png'; }}
                          />
                        </div>
                      ) : (
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                          <Award size={28} />
                        </div>
                      )}

                      <div className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                        <Calendar size={12} />
                        {cert.date}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 font-medium mb-auto">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="p-6 pt-0 mt-auto">
                    <a
                      href={cert.pdf || cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full gap-2 px-4 py-3 bg-slate-50 dark:bg-slate-700/50 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-700 dark:text-slate-300 hover:text-white rounded-xl transition-all duration-300 font-medium group/btn"
                    >
                      <span>Show Credential</span>
                      <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Dots */}
        {certifications.length > itemsPerPage && (
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: certifications.length - itemsPerPage + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === startIndex
                    ? 'w-6 bg-blue-600'
                    : 'bg-slate-300 dark:bg-slate-700 hover:bg-blue-400'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
