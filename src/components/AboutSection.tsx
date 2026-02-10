import { Briefcase, Calendar, Github, Linkedin } from 'lucide-react';

interface AboutSectionProps {
    isDarkMode: boolean;
}

export const AboutSection = ({ isDarkMode }: AboutSectionProps) => {
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

    const textSecondary = isDarkMode ? 'text-gray-300' : 'text-gray-600';
    const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
    const cardClasses = isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';

    return (
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
                            Técnico en Computación y Tecnologías de la Información y Bachiller en Ingeniería en Sistemas Computacionales con 6 años de experiencia como desarrollador .NET en servicios REST y de escritorio, y 4 años de experiencia como desarrollador Angular.
                        </p>
                        <div className="flex gap-4">
                            <a target="_blank" rel="noopener noreferrer"
                                href="https://github.com/leonardoburgosd"
                                className={`p-3 ${isDarkMode ? 'bg-gray-700 hover:bg-blue-600' : 'bg-gray-100 hover:bg-blue-600'} rounded-full hover:text-white transition-all duration-300`}
                            >
                                <Github size={20} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer"
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
    );
};
