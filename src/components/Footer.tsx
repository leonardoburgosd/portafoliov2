import { Github, Linkedin } from 'lucide-react';

interface FooterProps {
    isDarkMode: boolean;
}

export const Footer = ({ isDarkMode }: FooterProps) => {
    return (
        <footer className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-900'} text-white py-12 border-t`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                        Leonardo Burgos
                    </div>
                    <div className="flex justify-center gap-6 mb-8">
                        <a href="https://github.com/leonardoburgosd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/leonardo-burgos-diaz/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
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
    );
};
