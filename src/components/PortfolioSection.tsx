import { ExternalLink } from "lucide-react";
import { Project } from "./project";

interface PortfolioSectionProps {
  isDarkMode: boolean;
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export const PortfolioSection = ({
  isDarkMode,
  projects,
  onProjectClick,
}: PortfolioSectionProps) => {
  const textSecondary = isDarkMode ? "text-gray-300" : "text-gray-600";

  // Helper to get background color class for each tech
  const getTechBgClass = (tech: string): string => {
    switch (tech) {
      case "React":
        return "bg-blue-100";
      case "NestJS":
        return "bg-indigo-100";
      case "Tailwind CSS":
        return "bg-sky-100";
      case "Firebase":
        return "bg-yellow-100";
      case "FluterFlow":
      case "FlutterFlow":
        return "bg-teal-100";
      case "Angular":
        return "bg-red-100";
      case "C#":
        return "bg-purple-100";
      case "Postgre":
      case "PostgreSQL":
        return "bg-indigo-200";
      case "HTML":
        return "bg-orange-100";
      case "CSS":
        return "bg-blue-100";
      case "SqlServer":
        return "bg-rose-100";
      case "Photoshop":
        return "bg-blue-200";
      case "Bootstrap":
        return "bg-purple-100";
      case "Xamain":
      case "Xamarin":
        return "bg-emerald-100";
      case "Arduino":
        return "bg-blue-100";
      case "Typescript":
      case "TS":
        return "bg-green-100";
      case "Jest":
        return "bg-purple-100";
      case "GraphQL":
        return "bg-orange-100";
      case "Next.js":
        return "bg-blue-200";
      case "Vue":
        return "bg-yellow-100";
      case "Svelte":
        return "bg-emerald-100";
      case "Docker":
        return "bg-blue-100";
      case "Kubernetes":
        return "bg-gray-200";
      case "AWS":
        return "bg-amber-100";
      case "Azure":
        return "bg-green-100";
      case "GCP":
        return "bg-pink-100";
      case "Python":
      case "Flask":
      case "Django":
        return "bg-yellow-100";
      case "Ruby":
      case "Rails":
        return "bg-blue-100";
      case "Go":
      case "Golang":
        return "bg-amber-100";
      case "Java":
      case "Spring":
        return "bg-red-100";
      case "SQL":
        return "bg-blue-100";
      case "MongoDB":
        return "bg-green-100";
      case "MySQL":
        return "bg-orange-100";
      case "Redis":
        return "bg-red-100";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <section
      id="portfolio"
      className={`py-20 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-4`}
          >
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className={`text-xl ${textSecondary} max-w-3xl mx-auto`}>
            Una muestra de mis proyectos personales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${
                isDarkMode
                  ? "bg-gradient-to-br from-gray-700 to-gray-800"
                  : "bg-gradient-to-br from-gray-50 to-gray-100"
              }
                rounded-xl overflow-hidden
                shadow-lg
                group
                cursor-pointer
                transform
                transition-transform
                duration-300
                hover:scale-105
                hover:shadow-2xl`}
              onClick={() => onProjectClick(project)}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center px-4 pb-4 space-y-2">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                    <ExternalLink size={20} />
                  </div>
                  <p className="text-sm font-medium text-white">
                    {project.isModal ? "Ver detalle" : "Abrir link"}
                  </p>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3
                  className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-2`}
                >
                  {project.title}
                </h3>
                {/* Truncate description to max 100 words */}
                <p className={textSecondary} mb-2>
                  {(() => {
                    const words = project.description.split(" ");
                    if (words.length > 100) {
                      return words.slice(0, 100).join(" ") + "...";
                    }
                    return words.join(" ");
                  })()}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`${getTechBgClass(tech)} text-gray-800 text-xs font-medium px-3 py-1 rounded-sm hover:scale-105 transition-transform`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
