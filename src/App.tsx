import { useState } from "react";
import "./App.css";

import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ProjectModal } from "./components/ProjectModal";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

import { projects } from "./data/projects";
import { Project } from "./components/project";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleProjectClick = (project: Project) => {
    if (project.isModal) {
      setSelectedProject(project);
      setIsModalOpen(true);
    } else if (project.projectUrl) {
      window.open(project.projectUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Optional: clear selected project after animation or immediately
    // setSelectedProject(null); 
  };

  const themeClasses = isDarkMode
    ? 'bg-gray-900 text-white'
    : 'bg-white text-gray-900';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        scrollToSection={scrollToSection}
      />

      <HeroSection
        isDarkMode={isDarkMode}
        scrollToSection={scrollToSection}
      />

      <AboutSection isDarkMode={isDarkMode} />

      <ServicesSection isDarkMode={isDarkMode} />

      <PortfolioSection
        isDarkMode={isDarkMode}
        projects={projects}
        onProjectClick={handleProjectClick}
      />

      <ProjectModal
        isDarkMode={isDarkMode}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />

      <ContactSection isDarkMode={isDarkMode} />

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
