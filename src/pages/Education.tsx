import React, { useEffect } from 'react';
import { useUserData } from '../context/UserDataContext';
import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  const { userData } = useUserData();

  // Add glow-follow-mouse effect for desktop
  useEffect(() => {
    const cards = document.querySelectorAll(".edu-card");
    cards.forEach((card: any) => {
      card.addEventListener("mousemove", (e: any) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--y", `${e.clientY - rect.top}px`);
      });
    });
  }, []);

  return (
    <section id="education" className="min-h-screen px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="p-3 rounded-full bg-blue-50 dark:bg-slate-700">
            <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-300" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
              Education
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Academic background and relevant courses.
            </p>
          </div>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-6">
          {userData.education.map((edu) => (
            <motion.article
              key={edu.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="
                edu-card relative bg-white dark:bg-slate-800 rounded-xl shadow p-6 
                border border-slate-100 dark:border-slate-700 overflow-hidden cursor-pointer
              "
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 0px 40px rgba(0,150,255,0.35)"
              }}
              whileTap={{
                scale: 0.97,
                boxShadow: "0px 0px 40px rgba(0,150,255,0.5)"
              }}
            >

              {/* Moving Glow Light */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 
                    "radial-gradient(circle at var(--x) var(--y), rgba(0,150,255,0.25), transparent 60%)"
                }}
              />

              <div className="absolute -left-3 top-8 md:top-10 w-3 h-3 bg-blue-500 rounded-full z-10" />

              {/* Main content */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative z-10">
                
                {/* LEFT SIDE — With Logo */}
                <div className="flex items-start gap-4">
                  {edu.logo && (
                    <img 
                      src={edu.logo} 
                      alt="University Logo" 
                      className="w-14 h-14 object-contain rounded-lg"
                    />
                  )}

                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      {edu.institution} •{" "}
                      <span className="text-slate-500">{edu.location}</span>
                    </p>
                  </div>
                </div>

                {/* Dates */}
                <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {edu.startDate} — {edu.endDate}
                  </span>
                </div>
              </div>

              {/* Description */}
              {edu.description && edu.description.length > 0 && (
                <ul className="list-disc list-inside mt-4 text-slate-700 dark:text-slate-200 space-y-1 relative z-10">
                  {edu.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
