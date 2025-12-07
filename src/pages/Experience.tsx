import React, { useEffect } from 'react';
import { useUserData } from '../context/UserDataContext';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const { userData } = useUserData();

  // Glow-follow-mouse effect
  useEffect(() => {
    const cards = document.querySelectorAll('.exp-card');
    cards.forEach((card: any) => {
      card.addEventListener('mousemove', (e: any) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
      });
    });
  }, []);

  const colors = ['text-blue-500', 'text-green-500', 'text-purple-500', 'text-red-500'];

  return (
    <section id="experience" className="min-h-screen px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto relative">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="p-3 rounded-full bg-blue-50 dark:bg-slate-700">
            <FaCalendarAlt className="w-5 h-5 text-blue-600 dark:text-blue-300" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
              Experience
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Professional experience and internships.
            </p>
          </div>
        </motion.div>

        {/* Vertical Timeline Line */}
        <div className="absolute left-7 top-20 bottom-0 w-1 bg-gray-300 dark:bg-gray-700 z-0" />

        {/* Experience Cards */}
        <div className="space-y-12 relative z-10">
          {userData.experience.map((exp, idx) => {
            const color = colors[idx % colors.length];

            return (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
                className={`
                  exp-card relative bg-white dark:bg-slate-800 rounded-xl shadow p-6 
                  border border-slate-100 dark:border-slate-700 overflow-hidden cursor-pointer
                `}
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0px 0px 40px rgba(0,0,0,0.1)`
                }}
                whileTap={{
                  scale: 0.97,
                  boxShadow: `0px 0px 20px rgba(0,0,0,0.1)`
                }}
              >
                {/* Glow */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: `radial-gradient(circle at var(--x) var(--y), rgba(0,0,0,0.05), transparent 60%)`
                  }}
                />

                {/* Timeline circle + connecting line */}
                <div className="absolute -left-4 top-10 flex flex-col items-center z-10">
                  <div className={`w-4 h-4 ${color.replace('text-', 'bg-')} rounded-full`} />
                  {/* Connecting line from dot to card */}
                  <div className="flex-1 w-0.5 bg-gray-300 dark:bg-gray-700 mt-1" />
                </div>

                {/* Main content */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative z-10">

                  {/* LEFT SIDE — Logo + Company + Role */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 flex-shrink-0">
                    {/* Logo + Company */}
                    <div className="flex flex-col items-center md:items-start">
                      {exp.sartexlogo && (
                        <img
                          src={exp.sartexlogo}
                          alt={exp.company}
                          className="w-16 h-16 object-contain rounded-full border-2 border-gray-300 dark:border-gray-600 mb-2"
                          onError={(e: any) => { e.target.src = '/logos/default.png'; }}
                        />
                      )}
                      <div className={`text-sm font-semibold ${color} text-center md:text-left`}>
                        {exp.company}
                      </div>
                    </div>

                    {/* Role/Job title */}
                    <h3 className={`text-2xl font-bold ${color} text-center md:text-left`}>
                      {exp.role}
                    </h3>
                  </div>

                  {/* Dates & Location */}
                  <div className="text-sm text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-3 mt-4 md:mt-0">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt /> {exp.startDate} — {exp.endDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                {exp.description && exp.description.length > 0 && (
                  <ul className="list-disc list-inside mt-4 space-y-1 relative z-10 text-slate-700 dark:text-slate-200">
                    {exp.description.map((d, i) => (
                      <li key={i} className={`marker:text-${color.replace('text-', '')}`}>
                        {d}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Skills */}
                {exp.skills && (
                  <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className={`px-2 py-1 rounded text-white text-xs ${color.replace('text-', 'bg-')}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
