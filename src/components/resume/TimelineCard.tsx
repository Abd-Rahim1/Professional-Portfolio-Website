import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, CalendarDays } from "lucide-react";

interface TimelineCardProps {
  type?: "University" | "Course" | string; // <-- optional
  title: string;
  subtitle: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string[];
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  type,
  title,
  subtitle,
  location,
  startDate,
  endDate,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative mb-8 pl-8"
    >
      {/* Step marker */}
      <span className="absolute -left-4 top-2 w-3 h-3 rounded-full bg-blue-500 border-2 border-white dark:border-slate-900"></span>

      {/* Card */}
      <div className="p-4 rounded-xl shadow-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
        {/* Type label */}
        {type && (
          <span className="inline-block mb-2 px-2 py-0.5 text-xs font-medium text-blue-500 bg-blue-100 dark:bg-blue-900 rounded-full">
            {type}
          </span>
        )}

        <div className="flex items-center gap-2 mb-2">
          <GraduationCap className="w-5 h-5 text-blue-500 dark:text-blue-400" />
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{title}</h3>
        </div>

        <p className="text-slate-700 dark:text-slate-300 font-medium">{subtitle}</p>

        <div className="flex items-center gap-2 mt-1 text-slate-600 dark:text-slate-400 text-sm">
          <MapPin className="w-4 h-4" />
          {location}
        </div>

        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
          <CalendarDays className="w-4 h-4" />
          {startDate} — {endDate}
        </div>

        {description && description.length > 0 && (
          <ul className="mt-2 list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            {description.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineCard;
