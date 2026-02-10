import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
    scrollToSection: (sectionId: string) => void;
}

export const Navbar = ({ isDarkMode, toggleTheme, scrollToSection }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (sectionId: string) => {
        scrollToSection(sectionId);
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50
            ? isDarkMode
                ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800'
                : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
            : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div onClick={() => handleNavClick('index')} className="flex items-center gap-2 cursor-pointer group">
                        <img src={isDarkMode ? "/icon_white.png" : "/icon.png"} alt="Logo" className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110" />
                        <span className={`text-xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors`}>
                            LeonardoBurgos
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Sobre mi', 'Servicios', 'Portfolio', 'Contacto'].map((item) => (
                            <button
                                key={item}
                                onClick={() => handleNavClick(item.toLowerCase())}
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
                            {['Sobre mi', 'Servicios', 'Portfolio', 'Contacto'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => handleNavClick(item.toLowerCase())}
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
    );
};
