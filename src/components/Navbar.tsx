import { useState } from 'react';

interface NavbarProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
    scrollToSection: (sectionId: string) => void;
}

export const Navbar = ({ isDarkMode, scrollToSection }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (sectionId: string) => {
        scrollToSection(sectionId);
        setIsMenuOpen(false);
    };

    return (
        <>
            <header
                className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-12 max-md:px-6 bg-transparent"
                style={{ padding: '1.5rem 3rem' }}
            >
                <div
                    onClick={() => handleNavClick('index')}
                    className="flex items-center cursor-pointer"
                >
                    <img
                        src={isDarkMode ? '/icon_white.png' : '/icon.png'}
                        alt="Leonardo Burgos"
                        className="h-9 w-auto"
                    />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-10">
                    {[
                        { label: 'PROYECTOS', id: 'proyectos' },
                        { label: 'EXPERIENCIA', id: 'experiencia' },
                        { label: 'CONTACTO', id: 'contacto' },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className={`text-[0.65rem] font-medium tracking-[3px] transition-colors duration-300 ${
                                isDarkMode
                                    ? 'text-[#666] hover:text-white'
                                    : 'text-gray-400 hover:text-gray-900'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col gap-[5px] p-1 z-[101]"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                >
                    <span
                        className={`w-[22px] h-[2px] transition-all duration-300 ${
                            isDarkMode ? 'bg-white' : 'bg-gray-900'
                        } ${isMenuOpen ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''}`}
                    />
                    <span
                        className={`w-[22px] h-[2px] transition-all duration-300 ${
                            isDarkMode ? 'bg-white' : 'bg-gray-900'
                        } ${isMenuOpen ? 'opacity-0' : ''}`}
                    />
                    <span
                        className={`w-[22px] h-[2px] transition-all duration-300 ${
                            isDarkMode ? 'bg-white' : 'bg-gray-900'
                        } ${isMenuOpen ? '-rotate-45 translate-x-[5px] -translate-y-[5px]' : ''}`}
                    />
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[99] flex items-center justify-center transition-opacity duration-400 ${
                    isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                style={{
                    background: isDarkMode ? 'rgba(10, 10, 10, 0.97)' : 'rgba(255, 255, 255, 0.97)',
                    backdropFilter: 'blur(20px)',
                }}
            >
                <nav className="flex flex-col gap-8 text-center">
                    {[
                        { label: 'INICIO', id: 'index' },
                        { label: 'PROYECTOS', id: 'proyectos' },
                        { label: 'EXPERIENCIA', id: 'experiencia' },
                        { label: 'CONTACTO', id: 'contacto' },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className={`text-2xl font-semibold tracking-[4px] transition-colors duration-300 ${
                                isDarkMode
                                    ? 'text-[#666] hover:text-white'
                                    : 'text-gray-400 hover:text-gray-900'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </>
    );
};
