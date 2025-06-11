import { useEffect, useState } from "react";
import "./App.css";

import { Menu, X, Github, Linkedin, ExternalLink, Code, Palette, Smartphone, ArrowRight, Star, Sun, Moon, Calendar, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  rating: number;
  isModal?: boolean;
  fullDescription?: string;
  features?: string[];
  technologies?: string[];
  imageUrl: string;
  projectUrl?: string;
}
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const mobileImages = [
    {
      url: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop",
      title: "Login & Authentication",
      description: "Secure biometric login with Face ID and Touch ID support"
    },
    {
      url: "https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop",
      title: "Dashboard Overview",
      description: "Clean dashboard with account balance and quick actions"
    },
    {
      url: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop",
      title: "Transaction History",
      description: "Detailed transaction history with smart categorization"
    },
    {
      url: "https://images.pexels.com/photos/5849593/pexels-photo-5849593.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop",
      title: "Transfer & Payments",
      description: "Easy money transfers and bill payments interface"
    },
    {
      url: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop",
      title: "Investment Portfolio",
      description: "Real-time investment tracking and portfolio management"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % mobileImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + mobileImages.length) % mobileImages.length);
  };

  const experiences = [
    {
      title: "Desarrollador",
      company: "CENS",
      period: "Diciembre 2022",
      description: "Implementación, despliegue y mantenimiento de aplicaciones backend y frontend con tecnologías como .NET, Angular y SQL Server."
    },
    {
      title: "Desarrollador .NET",
      company: "SIGTIES",
      period: "Diciembre 2021",
      description: "Implementación de aplicaciones de escritorio con .NET Framework y SqlServer."
    },
    {
      title: "Desarrollador Fullstack",
      company: "CENS",
      period: "Noviembre 2019",
      description: "Implementación de aplicaciones web con Angular, .Net Core y SqlServer."
    },
    {
      title: "Desarrollador Fullstack",
      company: "Equipo de desarrollo independiente",
      period: "Febrero 2018",
      description: "Implementación de aplicaciones web con Angular, .Net Core y SqlServer."
    }
  ];

  const projects = [
    {
      title: "Dinning APP",
      description: "Aplicacion movil para registrar empleados y pases de comida",
      tech: ["FluterFlow", "Firebase"],
      isModal: true,
      imageUrl: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/diningApp.avif",
      fullDescription: "A comprehensive mobile banking application built with React Native, featuring advanced security measures including biometric authentication, real-time transaction monitoring, and seamless user experience. The app includes features like account management, fund transfers, bill payments, and investment tracking.",
      features: [
        "Biometric Authentication (Face ID / Touch ID)",
        "Real-time Transaction Notifications",
        "Advanced Security Encryption",
        "Multi-account Management",
        "Investment Portfolio Tracking",
        "Bill Payment Integration",
        "QR Code Payments",
        "Offline Mode Support"
      ],
      technologies: [
        "React Native",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "JWT Authentication",
        "Socket.io",
        "Stripe API",
        "AWS Services"
      ]
    },
    {
      title: "Auth0rize",
      imageUrl: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/authdashboard.avif",
      description: "Proyecto de administración de autenticación de usuarios",
      tech: ["Angular", "C#", "Postgre"],
      projectUrl: "https://auth0rize.leonardoburgosd.site"
    },
    {
      title: "ButtonStyle",
      imageUrl: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/buttonstyleportada.avif",
      description: "Proyecto con HTML y CSS de estilo de botones",
      tech: ["HTML", "CSS"],
      projectUrl: "https://auth0rize.leonardoburgosd.site"
    },
    {
      title: "BCreate",
      imageUrl: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/bcCreate.avif",
      description: "Estructura y código SQL para crear un blog",
      tech: ["SqlServer"],
      projectUrl: "https://github.com/leonardoburgosd/bd-structure"
    },
    {
      title: "Integra:login",
      imageUrl: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/integragroup.avif",
      description: "Proyecto de diseño de registro y login en Photoshop",
      tech: ["Photoshop"],
      projectUrl: "https://github.com/leonardoburgosd/bd-structure"
    },
    {
      title: "Akamika",
      imageUrl: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/akamikaProyc.avif",
      description: "Platforma de educación online",
      tech: ["C#", "SqlServer", "Bootstrap"],
      projectUrl: "https://www.youtube.com/watch?v=63l2ByJUAUM"
    },
    {
      title: "Aplicativo movil con IOT",
      imageUrl: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/firebaseProyc.avif",
      description: "Proyecto encendido de diodo led desde Xamarin con Firebase y Arduino sin ESP",
      tech: ["Firebase", "C#", "Xamain", "Arduino"],
      projectUrl: "https://www.youtube.com/watch?v=whdph6Q_oek"
    }
  ];

  const handleProjectClick = (project: Project) => {
    if (project.isModal) {
      setIsModalOpen(true);
    } else if (project.projectUrl) {
      window.open(project.projectUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const themeClasses = isDarkMode
    ? 'bg-gray-900 text-white'
    : 'bg-white text-gray-900';

  const cardClasses = isDarkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-gray-200';

  const textSecondary = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50
          ? isDarkMode
            ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800'
            : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div onClick={() => scrollToSection('index')} className="text-2xl font-bold bg-gradient-to-r from-white to-blue-600 bg-clip-text text-transparent">
              leonardoBurgos
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Sobre mi', 'Servicios', 'Portfolio', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-200 font-medium`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-200`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-200`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t`}>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['Sobre mi', 'Servicio', 'Portfolio', 'Contacto'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`block w-full text-left px-3 py-2 ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="index" className={`relative min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-purple-50'} overflow-hidden`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              Hola
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ">
                yo soy Leonardo Burgos
              </span>
            </h1>
            <p className={`text-xl sm:text-2xl ${textSecondary} mb-8 leading-relaxed`}>
              DESARROLLADOR FULLSTACK
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Ver mis proyectos
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`border-2 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400' : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'} px-8 py-4 rounded-full transition-all duration-300`}
              >
                Contáctame
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className={`w-6 h-10 border-2 ${isDarkMode ? 'border-gray-400' : 'border-gray-400'} rounded-full flex justify-center`}>
            <div className={`w-1 h-3 ${isDarkMode ? 'bg-gray-400' : 'bg-gray-400'} rounded-full mt-2 animate-pulse`}></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre mi" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Sobre mi</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Personal Info */}
            <div className="space-y-6">
              <p className={`text-lg ${textSecondary} leading-relaxed`}>
                Técnico en Computación y Tecnologías de la Información y Bachiller en Ingeniería en Sistemas Computacionales con más de cuatro años de experiencia como desarrollador .NET en servicios REST y de escritorio, y más de dos años de experiencia como desarrollador Angular.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/leonardoburgosd"
                  className={`p-3 ${isDarkMode ? 'bg-gray-700 hover:bg-blue-600' : 'bg-gray-100 hover:bg-blue-600'} rounded-full hover:text-white transition-all duration-300`}
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/leonardo-burgos-diaz/"
                  className={`p-3 ${isDarkMode ? 'bg-gray-700 hover:bg-blue-600' : 'bg-gray-100 hover:bg-blue-600'} rounded-full hover:text-white transition-all duration-300`}
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-6">
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6 flex items-center gap-2`}>
                <Briefcase size={24} className="text-blue-400" />
                Experiencia
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-blue-400">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                    <div className={`${cardClasses} p-6 rounded-lg shadow-lg border`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={16} className="text-blue-400" />
                        <span className="text-blue-400 font-medium">{exp.period}</span>
                      </div>
                      <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                        {exp.title}
                      </h4>
                      <p className={`${textMuted} mb-3`}>{exp.company}</p>
                      <p className={`${textSecondary} leading-relaxed`}>{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Servicios</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className={`text-xl ${textSecondary} max-w-3xl mx-auto`}>
              Ofrezco soluciones digitales integrales para ayudar a dar vida a tus ideas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code size={32} />,
                title: "Desarrollo frontend",
                description: "Desarrollo web utilizando tecnologías modernas para crear aplicaciones web escalables."
              },
              {
                icon: <Palette size={32} />,
                title: "Desarrollo Backend",
                description: "Creación de APIs robustas y eficientes con .NET Core, bases de datos SQL y NoSQL."
              },
              {
                icon: <Smartphone size={32} />,
                title: "Desarrollo Móvil",
                description: "Desarrollo de aplicaciones movil LOW-CODE."
              }
            ].map((service, index) => (
              <div
                key={index}
                className={`${cardClasses} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border`}
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>{service.title}</h3>
                <p className={`${textSecondary} leading-relaxed`}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Portfolio</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className={`text-xl ${textSecondary} max-w-3xl mx-auto`}>
              Una muestra de mis proyectos personales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${isDarkMode ? 'bg-gradient-to-br from-gray-700 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-gray-100'} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                onClick={() => handleProjectClick(project)}
              >
                <div className="h-48 relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="text-white text-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <ExternalLink size={20} />
                    </div>
                    <p className="text-sm font-medium">{project.isModal ? 'Ver detalle' : 'Abrir link'}</p>
                  </div>
                </div>
              </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{project.title}</h3>
                  <p className={`${textSecondary} mb-4`}>{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`${cardClasses} rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border`}>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                    Mobile Banking App
                  </h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className={`p-2 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-full transition-colors`}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Image Carousel */}
              <div className="mb-8">
                <div className="relative">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <img
                        src={mobileImages[currentImageIndex].url}
                        alt={mobileImages[currentImageIndex].title}
                        className="w-64 h-[500px] object-cover rounded-3xl shadow-2xl border-8 border-gray-800"
                      />
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} rounded-full shadow-lg transition-colors`}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} rounded-full shadow-lg transition-colors`}
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Image Info */}
                <div className="text-center">
                  <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                    {mobileImages[currentImageIndex].title}
                  </h4>
                  <p className={`${textSecondary} mb-4`}>
                    {mobileImages[currentImageIndex].description}
                  </p>

                  {/* Image Indicators */}
                  <div className="flex justify-center gap-2">
                    {mobileImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentImageIndex
                            ? 'bg-blue-400'
                            : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className={`text-lg ${textSecondary} mb-6 leading-relaxed`}>
                {projects[2].fullDescription}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Key Features</h4>
                  <ul className="space-y-2">
                    {projects[2].features?.map((feature, index) => (
                      <li key={index} className={`flex items-center gap-2 ${textSecondary}`}>
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[2].technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <ExternalLink size={20} />
                  View Live Demo
                </button>
                <button className={`border-2 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400' : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'} px-6 py-3 rounded-lg transition-colors flex items-center gap-2`}>
                  <Github size={20} />
                  View Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contacto" className={`py-20 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Trabajemos juntos</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className={`text-xl ${textSecondary}`}>
              ¿Listo para hacer realidad tus ideas? Cuentame de tu próximo proyecto.
            </p>
          </div>

          <div className={`${cardClasses} rounded-2xl shadow-xl p-8 border`}>
            <form className="space-y-6">
              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Correo</label>
                <input
                  type="email"
                    className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-400' : 'border-gray-300 bg-white focus:border-blue-600'} rounded-lg focus:ring-2 focus:ring-blue-600/20 focus:border-transparent transition-all duration-200`}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Mensaje</label>
                <textarea
                  rows={6}
                  className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-400' : 'border-gray-300 bg-white focus:border-blue-600'} rounded-lg focus:ring-2 focus:ring-blue-600/20 focus:border-transparent transition-all duration-200 resize-none`}
                  placeholder="Hablame de tu proyecto..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-900'} text-white py-12 border-t`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Leonardo Burgos
            </div>
            <div className="flex justify-center gap-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                2025 Leonardo Burgos.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
