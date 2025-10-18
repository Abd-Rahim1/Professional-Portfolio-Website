import React from 'react';
import * as Lucide from 'lucide-react';
import { useUserData } from '../context/UserDataContext';

interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const { userData } = useUserData();

  // Only display sidebar if About Me section is active
  if (activeSection !== 'about') return null;

  return (
    <aside className="w-full md:w-1/4 bg-white shadow-md p-6 md:min-h-screen">
      {/* Profile Info */}
      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-slate-200">
          <img 
            src={userData.avatarUrl} 
            alt={userData.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">{userData.name}</h2>
        <p className="text-slate-600 mb-6">{userData.title}</p>
      </div>

      {/* Contact Info */}
      <div className="space-y-4 mt-6">
        <div className="flex items-center space-x-3">
          <Lucide.Mail size={18} className="text-slate-500" />
          <a href={`mailto:${userData.email}`} className="text-slate-700 hover:text-blue-600 transition-colors">
            {userData.email}
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <Lucide.Phone size={18} className="text-slate-500" />
          <a href={`tel:${userData.phone}`} className="text-slate-700 hover:text-blue-600 transition-colors">
            {userData.phone}
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <Lucide.MapPin size={18} className="text-slate-500" />
          <span className="text-slate-700">{userData.location}</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-3 border-b border-slate-200 pb-2">
          Social Links
        </h3>
        <div className="flex justify-center space-x-4">
          <a href={userData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <Lucide.Linkedin size={20} />
          </a>
          <a href={userData.socialLinks.github} target="_blank" rel="noopener noreferrer">
            <Lucide.Github size={20} />
          </a>
        </div>
      </div>

      {/* View CV Button */}
      <div className="flex justify-center mt-8">
        <a
          href="CV_Rahim.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <Lucide.FileText size={18} />
          View My CV
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
