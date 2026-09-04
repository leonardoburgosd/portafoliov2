import { useState } from "react";
import "./App.css";

import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ProjectModal } from "./components/ProjectModal";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { SocialSidebar } from "./components/SocialSidebar";
import { ScrollIndicator } from "./components/ScrollIndicator";

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
  };

  const themeClasses = isDarkMode
    ? 'bg-[#0a0a0a] text-white'
    : 'bg-white text-gray-900';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        scrollToSection={scrollToSection}
      />

      <SocialSidebar isDarkMode={isDarkMode} />

      <ScrollIndicator isDarkMode={isDarkMode} />

      <HeroSection isDarkMode={isDarkMode} />

      <PortfolioSection
        isDarkMode={isDarkMode}
        projects={projects}
        onProjectClick={handleProjectClick}
      />

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />

      <ExperienceSection isDarkMode={isDarkMode} />

      <ContactSection isDarkMode={isDarkMode} />

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
