import { motion } from "framer-motion";
import { useUserData } from "../../context/UserDataContext";
import { useEffect } from "react";

const EducationList = () => {
  const { userData } = useUserData();

  // Mouse-follow glow effect
  useEffect(() => {
    const cards = document.querySelectorAll(".edu-card");

    cards.forEach((card: any) => {
      const handleMove = (e: any) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--y", `${e.clientY - rect.top}px`);
      };

      card.addEventListener("mousemove", handleMove);

      // Mobile tap light
      card.addEventListener("touchstart", (e: any) => {
        const touch = e.touches[0];
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--x", `${touch.clientX - rect.left}px`);
        card.style.setProperty("--y", `${touch.clientY - rect.top}px`);
      });
    });
  }, []);

  return (
    <div className="space-y-6">
      {userData.education.map((edu) => (
        <motion.div
          key={edu.id}
          className="
            edu-card relative p-6 rounded-2xl shadow-md border
            bg-white dark:bg-slate-800 dark:border-slate-600
            cursor-pointer overflow-hidden transition-all
          "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 0px 20px rgba(0,150,255,0.4)",
          }}
          whileTap={{
            scale: 0.97,
            boxShadow: "0px 0px 30px rgba(0,150,255,0.7)",
          }}
        >
          {/* Glow effect following mouse */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              background:
                "radial-gradient(circle at var(--x) var(--y), rgba(0,150,255,0.25), transparent 65%)",
            }}
          />

          {/* Card content */}
          <div className="flex items-center gap-5 relative z-10">
            <img
              src={edu.logo}
              alt="University Logo"
              className="w-16 h-16 object-contain rounded-xl"
            />

            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                {edu.degree}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {edu.institution} • {edu.location}
              </p>
              <p className="text-sm text-blue-500 mt-1">
                {edu.startDate} — {edu.endDate}
              </p>
            </div>
          </div>

          {edu.description && (
            <ul className="mt-4 text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
              {edu.description.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default EducationList;
