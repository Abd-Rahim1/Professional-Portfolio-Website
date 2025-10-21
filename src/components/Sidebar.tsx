import React, { useState, useEffect } from 'react';
import * as Lucide from 'lucide-react';
import { useUserData } from '../context/UserDataContext';

interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const { userData } = useUserData();

  if (activeSection !== 'about') return null;

  // --- Typewriter animation for title ---
  const fullText = userData.title || 'Applied AI Student';
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = deleting ? 80 : 150;
    const timeout = setTimeout(() => {
      if (!deleting && index < fullText.length) {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      } else if (deleting && index > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      } else if (index === fullText.length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (index === 0 && deleting) {
        setDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, deleting, fullText]);

  return (
    <aside
      className="w-full md:w-1/4 bg-white dark:bg-slate-800 shadow-md p-6 overflow-y-auto border-b md:border-r border-slate-200 dark:border-slate-700
                 z-10 md:fixed md:top-[64px] md:left-0 md:h-[calc(100%-64px)]"
    >
      {/* Profile Info */}
      <div className="flex flex-col items-center">
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 border-4 border-slate-200 dark:border-slate-700">
          <img
            src={userData.avatarUrl}
            alt={userData.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 text-center">{userData.name}</h2>

        {/* Animated title */}
        <p className="text-slate-600 dark:text-slate-300 mb-6 text-center text-sm md:text-base">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>
      </div>

      {/* Contact Info */}
      <div className="space-y-4 mt-6">
        <div className="flex items-center space-x-3 justify-start">
          <Lucide.Mail
            size={18}
            className="text-slate-500 dark:text-slate-400 transform transition-transform duration-300 hover:scale-125 hover:text-blue-600"
          />
          <a
            href={`mailto:${userData.email}`}
            className="text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors text-sm md:text-base"
          >
            {userData.email}
          </a>
        </div>

        <div className="flex items-center space-x-3 justify-start">
          <Lucide.Phone
            size={18}
            className="text-slate-500 dark:text-slate-400 transform transition-transform duration-300 hover:scale-125 hover:text-green-600"
          />
          <a
            href={`tel:${userData.phone}`}
            className="text-slate-700 dark:text-slate-200 hover:text-green-600 transition-colors text-sm md:text-base"
          >
            {userData.phone}
          </a>
        </div>

        <div className="flex items-center space-x-3 justify-start">
          <Lucide.MapPin
            size={18}
            className="text-slate-500 dark:text-slate-400 transform transition-transform duration-300 hover:scale-125 hover:text-red-600"
          />
          <span className="text-slate-700 dark:text-slate-200 text-sm md:text-base">{userData.location}</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3 border-b border-slate-200 dark:border-slate-700 pb-2 text-center">
          Social Links
        </h3>
        <div className="flex justify-center space-x-4">
          {userData.socialLinks.linkedin && (
            <a
              href={userData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-125 hover:text-blue-600"
            >
              <Lucide.Linkedin size={20} />
            </a>
          )}
          {userData.socialLinks.github && (
            <a
              href={userData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-125 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <Lucide.Github size={20} />
            </a>
          )}
        </div>
      </div>

      {/* View CV Button */}
      <div className="flex justify-center mt-8">
        <a
          href="CV_Rahim.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold
                     hover:bg-blue-700 transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <Lucide.FileText size={18} />
          View My CV
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
