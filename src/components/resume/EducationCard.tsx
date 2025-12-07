import { motion } from "framer-motion";

interface EducationCardProps {
  logo: string;
  university: string;
  degree: string;
  period: string;
  description?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  logo,
  university,
  degree,
  period,
  description
}) => {

  return (
    <motion.div
      className="
        relative p-6 rounded-2xl shadow-md border
        bg-white dark:bg-slate-800 dark:border-slate-600
        cursor-pointer overflow-hidden
      "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}

      // hover for desktop
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 0px 25px rgba(0,150,255,0.6)"
      }}

      // tap for mobile
      whileTap={{
        scale: 0.97,
        boxShadow: "0px 0px 35px rgba(0,150,255,0.8)"
      }}
    >

      {/* glowing light animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          background:
            "radial-gradient(circle at var(--x) var(--y), rgba(0,150,255,0.3), transparent 60%)",
        }}
      />

      <div className="flex items-center gap-5 relative z-10">
        <img
          src={logo}
          alt="University Logo"
          className="w-16 h-16 rounded-lg object-contain"
        />

        <div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
            {university}
          </h3>
          <p className="text-slate-600 dark:text-slate-300">{degree}</p>
          <p className="text-sm text-blue-500">{period}</p>
        </div>
      </div>

      {description && (
        <p className="text-slate-700 dark:text-slate-300 mt-4 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default EducationCard;
