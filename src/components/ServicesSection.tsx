import { Code, Palette, Smartphone } from 'lucide-react';

interface ServicesSectionProps {
    isDarkMode: boolean;
}

export const ServicesSection = ({ isDarkMode }: ServicesSectionProps) => {
    const textSecondary = isDarkMode ? 'text-gray-300' : 'text-gray-600';
    const cardClasses = isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';

    const services = [
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
    ];

    return (
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
                    {services.map((service, index) => (
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
    );
};
