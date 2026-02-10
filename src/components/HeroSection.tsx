import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
    isDarkMode: boolean;
    scrollToSection: (sectionId: string) => void;
}

export const HeroSection = ({ isDarkMode, scrollToSection }: HeroSectionProps) => {
    const textSecondary = isDarkMode ? 'text-gray-300' : 'text-gray-600';

    return (
        <section id="index" className={`relative min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-purple-50'} overflow-hidden`}>
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="animate-fade-in-up">
                    <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                        Hola
                        <span className={`block ${isDarkMode ? 'text-white' : 'text-gray-900'} bg-clip-text `}>
                            soy Leonardo Burgos
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
                            onClick={() => scrollToSection('contacto')}
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
    );
};
