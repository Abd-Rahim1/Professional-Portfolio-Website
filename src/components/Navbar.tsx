import React, { useState, useEffect } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import { useUserData } from '../context/UserDataContext';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const { userData } = useUserData();
  const { darkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- Typewriter animation for userData.title ---
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

  const navItems = [
    { id: 'about', label: 'About Me' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' }
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    if (window.innerWidth < 768) setMobileMenuOpen(false);

    const sectionEl = document.getElementById(sectionId);
    if (sectionEl) sectionEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-slate-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side: name + animated title */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold">{userData.name}</h1>
            <p className="ml-3 text-slate-300 hidden sm:flex items-center">
              | <span className="ml-2 text-sky-400">{displayText}</span>
              <span className="ml-1 animate-pulse">|</span>
            </p>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                  ${activeSection === item.id
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                onClick={() => handleSectionClick(item.id)}
              >
                {item.label}
              </button>
            ))}

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu button + dark mode toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="text-slate-300 hover:text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left
                  ${activeSection === item.id
                    ? 'bg-slate-600 text-white'
                    : 'text-slate-300 hover:bg-slate-600 hover:text-white'
                  }`}
                onClick={() => handleSectionClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
