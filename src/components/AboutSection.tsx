import { Briefcase, Calendar, Github, Linkedin } from "lucide-react";

interface AboutSectionProps {
  isDarkMode: boolean;
}

export const AboutSection = ({ isDarkMode }: AboutSectionProps) => {
  const experiences = [
    {
      title: "Arquitecto de software",
      company: "CENS",
      period: "Junio 2026 - Actualidad",
      description:
        "Liderazgo técnico y diseño de arquitectura de software para soluciones escalables.",
    },
    {
      title: "Desarrollador backend",
      company: "CENS",
      period: "Enero 2023 - Mayo 2026",
      description:
        "Implementación, despliegue y mantenimiento de aplicaciones backend y frontend con tecnologías como .NET, Angular y SQL Server.",
    },
    {
      title: "Desarrollador de back-end",
      company: "Multilingual",
      period: "Febrero 2024 - Septiembre 2025",
      description:
        "Implementación de API REST con NestJS y .NET Core. Implementación de interfaces en React.",
    },
    {
      title: "Programador full stack móvil",
      company: "Pequeño equipo independiente",
      period: "Mayo 2025 - Agosto 2025",
      description:
        "Implementación de aplicación móvil para registro de entrega de alimentos e implementación de aplicación web para visualización de reportes de entrega.",
    },
    {
      title: "Desarrollador Backend",
      company: "Colegio Tecnológico Médico del Perú",
      period: "Junio 2023 - Noviembre 2023",
      description:
        "Implementación de emisión de comprobantes electrónicos, servicios REST para gestión de pagos, colegiados y deudas, configuración de servidor Windows Server y despliegue de soluciones.",
    },
    {
      title: "Analista Programador .NET",
      company: "SIGTIES",
      period: "Diciembre 2021 - Febrero 2023",
      description:
        "Implementación de aplicaciones de escritorio con .NET Framework y SqlServer.",
    },
    {
      title: "Desarrollador de aplicaciones web",
      company: "CENS",
      period: "Noviembre 2019 - Septiembre 2021",
      description:
        "Implementación de aplicaciones web con Angular, .Net Core y SqlServer.",
    },
    {
      title: "Desarrollador full stack",
      company: "Equipo de desarrollo independiente",
      period: "Febrero 2018 - Julio 2018",
      description:
        "Implementación de aplicaciones web con Angular, .Net Core y SqlServer.",
    },
  ];

  const textSecondary = isDarkMode ? "text-gray-300" : "text-gray-600";
  const textMuted = isDarkMode ? "text-gray-400" : "text-gray-500";
  const cardClasses = isDarkMode
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-gray-200";

  return (
    <section
      id="sobre mi"
      className={`py-20 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-4`}
          >
            Sobre mi
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-12">
          {/* Personal Info */}
          <div className="space-y-6">
            <p className={`text-lg ${textSecondary} leading-relaxed`}>
              Desarrollador de software con más de 6 años de experiencia,
              especializado en backend con .NET y construcción de APIs REST para
              sistemas empresariales. Experiencia complementaria en Node.js
              (NestJS) y desarrollo frontend con Angular y React, participando
              en la implementación de interfaces y consumo de servicios.
              Experiencia en integración de servicios, gestión de bases de datos
              y autenticación (JWT, OAuth). Enfocado en soluciones escalables,
              mantenibles y de alto rendimiento.
            </p>
            <div className="flex gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/leonardoburgosd"
                className={`p-3 ${isDarkMode ? "bg-gray-700 hover:bg-blue-600" : "bg-gray-100 hover:bg-blue-600"} rounded-full hover:text-white transition-all duration-300`}
              >
                <Github size={20} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/leonardo-burgos-diaz/"
                className={`p-3 ${isDarkMode ? "bg-gray-700 hover:bg-blue-600" : "bg-gray-100 hover:bg-blue-600"} rounded-full hover:text-white transition-all duration-300`}
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6">
            <h3
              className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-6 flex items-center gap-2`}
            >
              <Briefcase size={24} className="text-blue-400" />
              Experiencia
            </h3>
            <div className="relative flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-900/95 [&::-webkit-scrollbar-thumb]:bg-white/95 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/95">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-80 snap-start ${cardClasses} p-6 rounded-lg shadow-lg border relative`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={16} className="text-blue-400" />
                    <span className="text-blue-400 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <h4
                    className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-1`}
                  >
                    {exp.title}
                  </h4>
                  <p className={`${textMuted} mb-3`}>{exp.company}</p>
                  <p className={`${textSecondary} leading-relaxed`}>
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
