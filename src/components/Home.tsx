import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiMail, FiArrowRight } from "react-icons/fi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import profilePhoto from "../photo-profil.jpg";
import { useUserData } from '../context/UserDataContext';
import { Variants } from "framer-motion";

const Home = () => {
  const { userData } = useUserData();
  const [isLoaded, setIsLoaded] = useState(false);
  const [startFloating, setStartFloating] = useState(false);
  const [jobIndex, setJobIndex] = useState(0);

  const jobTitles = [
    "Software Engineer",
    "AI Developer",
    "Full Stack Developer",
    "Machine Learning Enthusiast",
    "Data Analyst",
    "Web Developer"
  ];

  useEffect(() => {
    setIsLoaded(true);

    const interval = setInterval(() => {
      setJobIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 3000);

    return () => {
      setIsLoaded(false);
      clearInterval(interval);
    };
  }, []);

  const handleContactClick = () => {
    const event = new CustomEvent('navigateToSection', { detail: 'contact' });
    window.dispatchEvent(event);

    setTimeout(() => {
      const contactNavButtons = document.querySelectorAll('button');
      contactNavButtons.forEach(button => {
        if (button.textContent?.includes('Contact') || button.innerHTML.includes('Contact')) {
          button.click();
        }
      });
    }, 100);
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const jobTitleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const socialLinks = [
    { icon: <SiGithub />, href: userData.socialLinks.github || "https://github.com/username", label: "GitHub" },
    { icon: <SiLinkedin />, href: userData.socialLinks.linkedin || "https://linkedin.com/in/username", label: "LinkedIn" },
  ];

  const firstName = "Abd Rahim";
  const lastName = "Mojbani";

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Background blobs */}
      <motion.div
        className="absolute top-10 left-4 md:top-20 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-purple-300 rounded-full opacity-30 blur-3xl dark:bg-blue-700"
        animate={{
          y: [0, -30, 0, 20, 0],
          x: [0, 20, -20, 10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-4 md:bottom-24 md:right-20 w-40 h-40 md:w-60 md:h-60 bg-pink-300 rounded-full opacity-40 blur-2xl dark:bg-purple-600"
        animate={{
          y: [0, 25, -25, 10, 0],
          x: [0, -15, 15, -10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Mobile Layout - Single Column Flow */}
      <div className="md:hidden w-full px-3 py-6 flex flex-col items-center">
        {/* Name section */}
        <motion.div
          className="text-center mb-4"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            variants={textVariants}
            className="mb-1"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-sm font-medium text-purple-700 dark:text-purple-300">
              👋 Hello, I'm
            </span>
          </motion.div>

          <motion.h1
            variants={textVariants}
            className="text-4xl font-bold leading-tight text-slate-900 dark:text-white"
          >
            {firstName}{" "}
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent animate-gradient">
              {lastName}
            </span>
          </motion.h1>

          {/* Animated job title */}
          <motion.div
            className="mt-3 h-10 relative"
            variants={textVariants}
          >
            <div className="relative h-full">
              <motion.h2
                key={jobIndex}
                variants={jobTitleVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-lg text-gray-700 dark:text-gray-300 font-semibold"
              >
                <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  {jobTitles[jobIndex]}
                </span>
                <span className="inline-block ml-1 animate-pulse">|</span>
              </motion.h2>
            </div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          className="z-10 flex justify-center mb-4"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={imageVariants}
          onAnimationComplete={() => setStartFloating(true)}
        >
          <div className="relative">
            <div className="relative p-1 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 animate-gradient">
              <motion.img
                src={userData.avatarUrl || profilePhoto}
                alt={`${firstName} ${lastName} - Software Engineer & AI Specialist`}
                className="w-44 h-44 rounded-full border-4 border-white dark:border-slate-800 shadow-2xl object-cover"
                animate={startFloating ? {
                  y: [0, -8, 0],
                  scale: [1, 1.02, 1],
                } : {}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </motion.div>
        {/* Short description */}
        <motion.div
          className="w-full max-w-xl mb-4"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.p
            variants={textVariants}
            className="text-gray-600 dark:text-gray-300 leading-relaxed text-center text-sm"
          >
            Passionate Software Engineer & AI Student building intelligent solutions.
            Specializing in full-stack development, machine learning, and data analysis.
          </motion.p>
        </motion.div>



        {/* Action buttons */}
        <motion.div
          className="w-full max-w-xl mb-4"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            variants={textVariants}
            className="flex flex-col gap-3"
          >
            <motion.button
              onClick={handleContactClick}
              className="group px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-300% animate-gradient text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-medium text-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail className="text-base" />
              Contact Me
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              href={userData.cvLink || "/CV_Rahim.pdf"}
              download
              className="group px-5 py-2.5 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-gray-900 dark:text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-medium border border-gray-200 dark:border-slate-700 text-center text-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="w-full max-w-xl"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="flex justify-center gap-3"
            variants={textVariants}
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-gray-200 dark:border-slate-700"
                aria-label={link.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.5 + i * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                whileHover={{ scale: 1.1, y: -2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Desktop Layout: Text on left, Photo on right */}
      <div className="hidden md:flex w-full h-screen px-8 lg:px-12 xl:px-16 items-center justify-between">
        {/* Left side: Text content */}
        <motion.div
          className="max-w-2xl z-10 -ml-2 lg:ml-0"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            variants={textVariants}
            className="mb-3"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-sm font-medium text-purple-700 dark:text-purple-300">
              👋 Hello, I'm
            </span>
          </motion.div>

          <motion.h1
            variants={textVariants}
            className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900 dark:text-white"
          >
            {firstName}{" "}
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent animate-gradient">
              {lastName}
            </span>
          </motion.h1>

          {/* Animated job title */}
          <motion.div
            className="mt-4 h-14 relative"
            variants={textVariants}
          >
            <div className="relative h-full">
              <motion.h2
                key={jobIndex}
                variants={jobTitleVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-2xl text-gray-700 dark:text-gray-300 font-semibold"
              >
                <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  {jobTitles[jobIndex]}
                </span>
                <span className="inline-block ml-1 animate-pulse">|</span>
              </motion.h2>
            </div>
            <div className="absolute -bottom-1 left-0 w-32 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          </motion.div>

          {/* Short description */}
          <motion.p
            variants={textVariants}
            className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg max-w-xl"
          >
            Passionate Software Engineer & AI Student building intelligent solutions.
            Specializing in full-stack development, machine learning, and data analysis
            to create impactful applications.
          </motion.p>



          {/* Action buttons */}
          <motion.div
            variants={textVariants}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              onClick={handleContactClick}
              className="group px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-300% animate-gradient text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-medium"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail className="text-lg" />
              Contact Me
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              href={userData.cvLink || "/CV_Rahim.pdf"}
              download
              className="group px-6 py-3 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-gray-900 dark:text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-medium border border-gray-200 dark:border-slate-700"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="mt-8 flex gap-4"
            variants={textVariants}
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-gray-200 dark:border-slate-700"
                aria-label={link.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.5 + i * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                whileHover={{ scale: 1.1, y: -2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side: Profile Photo */}
        <motion.div
          className="z-10 flex justify-end pr-4 lg:pr-8"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={imageVariants}
          onAnimationComplete={() => setStartFloating(true)}
        >
          <div className="relative">
            <div className="relative p-1 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 animate-gradient">
              <motion.img
                src={userData.avatarUrl || profilePhoto}
                alt={`${firstName} ${lastName} - Software Engineer & AI Specialist`}
                className="w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border-4 border-white dark:border-slate-800 shadow-2xl object-cover"
                animate={startFloating ? {
                  y: [0, -10, 0],
                  scale: [1, 1.02, 1],
                } : {}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            {/* Floating achievement badges have been removed */}
          </div>
        </motion.div>
      </div>
    </section >
  );
};

export default Home;