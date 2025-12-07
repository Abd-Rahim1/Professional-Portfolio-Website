import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HomeSection from './components/Home';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Certifications from './pages/Certifications';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Contact from './components/Contact';
import { UserDataProvider } from './context/UserDataContext';
import { ThemeProvider } from './context/ThemeContext';
import { FilterProvider } from './context/FilterContext';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Listen for navigation events from Home component
    const handleNavigate = (event: CustomEvent) => {
      setActiveSection(event.detail);
    };
    
    window.addEventListener('navigateToSection' as any, handleNavigate);
    
    return () => {
      window.removeEventListener('navigateToSection' as any, handleNavigate);
    };
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'about':
        return <AboutMe />;
      case 'certifications':
        return <Certifications />;
      case 'education':
        return <Education />;
      case 'experience':
        return <Experience />;
      case 'resume':
        return <Resume />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <HomeSection />;
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <ThemeProvider>
      <UserDataProvider>
        <FilterProvider>
          <motion.div
            className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Navbar - Pass the setActiveSection function */}
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

            {/* Main content */}
            <main className="flex flex-col flex-grow relative">
              <div className="p-6 transition-all duration-300 w-full">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeSection}
                    variants={contentVariants}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
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
        </FilterProvider>
      </UserDataProvider>
    </ThemeProvider>
  );
}

export default App;