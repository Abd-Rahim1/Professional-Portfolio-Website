import React, { useState } from 'react';
import { Menu, Sun, Moon, Mail, Home, User, GraduationCap, Briefcase, Award, FileText, Code } from 'lucide-react';
import { useUserData } from '../context/UserDataContext';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion'; // Added Framer Motion

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const { userData } = useUserData();
  const { darkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  const navData = [
    { name: 'Home', icon: Home },
    { name: 'About', icon: User },
    { name: 'Education', icon: GraduationCap },
    { name: 'Experience', icon: Briefcase },
    { name: 'Certifications', icon: Award },
    { name: 'Resume', icon: FileText },
    { name: 'Projects', icon: Code },
    { name: 'Contact', icon: Mail }
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId.toLowerCase());
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-slate-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side: name + typewriter */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold">{userData.name}</h1>

          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navData.map((item) => {
              const isActive = activeSection === item.name.toLowerCase();
              const Icon = item.icon;

              return (
                <motion.button
                  key={item.name}
                  onClick={() => handleSectionClick(item.name)}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2
                    ${isActive
                      ? 'text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Active indicator background */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md"
                      layoutId="activeNavBackground"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Button content */}
                  <span className="relative z-10 flex items-center gap-2">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.div>
                    {item.name}
                  </span>

                  {/* Pulsing dot indicator for active button */}
                  {isActive && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.7, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}

                  {/* Underline animation on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              );
            })}

            {/* Dark mode button with animation */}
            <motion.button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                rotate: darkMode ? [0, 360] : 0,
                transition: darkMode ? { duration: 1, ease: "easeInOut" } : {}
              }}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>

          {/* Mobile menu + dark mode */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition"
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            <motion.button
              className="text-slate-300 hover:text-white focus:outline-none"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu with animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-slate-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navData.map((item, index) => {
                const isActive = activeSection === item.name.toLowerCase();
                const Icon = item.icon;

                return (
                  <motion.button
                    key={item.name}
                    onClick={() => handleSectionClick(item.name)}
                    className={`relative px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center gap-3
                      ${isActive
                        ? 'text-white'
                        : 'text-slate-300 hover:bg-slate-600 hover:text-white'
                      }`}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Active indicator for mobile */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md"
                        layoutId="mobileActiveBackground"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Button content */}
                    <span className="relative z-10 flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      {item.name}

                      {/* Animated arrow for active button */}
                      {isActive && (
                        <motion.span
                          className="ml-auto"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      )}
                    </span>

                    {/* Pulse animation for active button */}
                    {isActive && (
                      <motion.div
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.7, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;