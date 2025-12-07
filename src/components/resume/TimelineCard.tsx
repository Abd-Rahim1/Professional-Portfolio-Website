import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MapPin, CalendarDays, Building2 } from "lucide-react";

interface TimelineCardProps {
  type?: string;
  title: string;
  subtitle: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string[];
  skills?: string[];
  logo?: string;
  index: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  title,
  subtitle,
  location,
  startDate,
  endDate,
  description,
  skills,
  logo,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(
    650px circle at ${mouseX}px ${mouseY}px,
    rgba(14, 165, 233, 0.15),
    transparent 80%
  )`;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative mb-8 pl-8"
    >
      {/* Step marker */}
      <span className="absolute -left-[9px] top-6 w-5 h-5 rounded-full bg-white border-4 border-blue-600 dark:border-blue-500 z-10"></span>

      {/* Card */}
      <div
        className="group relative rounded-xl"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="relative z-10 p-6 rounded-xl shadow-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors duration-300 h-full"
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Spotlight overlay */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
            style={{
              background: background,
            }}
          />

          <div className="relative z-10">
            {/* Header: Role & Date */}
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>

              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm whitespace-nowrap">
                <CalendarDays className="w-4 h-4" />
                <span>{startDate} — {endDate}</span>
              </div>
            </div>

            {/* Sub-header: Company & Location */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div className="flex items-center gap-2">
                {logo ? (
                  <img src={logo} alt={subtitle} className="w-5 h-5 object-contain" />
                ) : (
                  <Building2 className="w-5 h-5 text-blue-500" />
                )}
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">{subtitle}</span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm">
                <MapPin className="w-4 h-4" />
                {location}
              </div>
            </div>

            {/* Description */}
            {description && description.length > 0 && (
              <ul className="mb-6 space-y-2">
                {description.map((line, idx) => (
                  <li key={idx} className="flex item-start gap-2 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Skills Chips */}
            {skills && skills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TimelineCard;
