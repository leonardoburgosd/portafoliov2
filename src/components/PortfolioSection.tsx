import { ExternalLink } from 'lucide-react';
import { Project } from './project';

interface PortfolioSectionProps {
    isDarkMode: boolean;
    projects: Project[];
    onProjectClick: (project: Project) => void;
}

export const PortfolioSection = ({ isDarkMode, projects, onProjectClick }: PortfolioSectionProps) => {
    const textSecondary = isDarkMode ? 'text-gray-300' : 'text-gray-600';

    return (
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
                            onClick={() => onProjectClick(project)}
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
    );
};
