import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import { UserDataProvider } from './context/UserDataContext';
import { ThemeProvider } from './context/ThemeContext'; // ← added for dark mode

function App() {
  const [activeSection, setActiveSection] = useState('about');

  // 🔹 Scroll to top whenever active section changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scroll effect
    });
  }, [activeSection]);

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <AboutMe />;
      case 'resume':
        return <Resume />;
      case 'projects':
        return <Projects />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <ThemeProvider> {/* ← wrap entire app for dark/light mode */}
      <UserDataProvider>
        <motion.div
          className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Navbar */}
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

          {/* Main layout */}
          <main className="flex flex-col md:flex-row flex-grow relative">
            {activeSection === 'about' && <Sidebar activeSection={activeSection} />}

            {/* Animated content area */}
            <div
              className={`p-6 transition-all duration-300 ${
                activeSection === 'about' ? 'w-full md:ml-[25%] md:w-3/4' : 'w-full'
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="animate-fadeIn"
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-slate-800 dark:bg-slate-900 text-white text-center py-4 text-sm">
            <p>© {new Date().getFullYear()} - Portfolio Website</p>
          </footer>
        </motion.div>
      </UserDataProvider>
    </ThemeProvider>
  );
}

export default App;
