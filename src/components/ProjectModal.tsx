import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Project } from './project';

interface ProjectModalProps {
    isDarkMode: boolean;
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}

export const ProjectModal = ({ isDarkMode, isOpen, onClose, project }: ProjectModalProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!isOpen || !project) return null;

    const textSecondary = isDarkMode ? 'text-gray-300' : 'text-gray-600';
    const cardClasses = isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';

    const gallery = project.gallery || [];
    const hasGallery = gallery.length > 0;

    const nextImage = () => {
        if (!hasGallery) return;
        setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
    };

    const prevImage = () => {
        if (!hasGallery) return;
        setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className={`${cardClasses} rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border`}>
                <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                                {project.fullDescription || project.description}
                            </h3>
                        </div>
                        <button
                            onClick={onClose}
                            className={`p-2 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-full transition-colors`}
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Image Carousel */}
                    {hasGallery && (
                        <div className="mb-8">
                            <div className="relative">
                                <div className="flex justify-center mb-4">
                                    <div className="relative">
                                        <img
                                            src={gallery[currentImageIndex].url}
                                            alt={gallery[currentImageIndex].title}
                                            className="w-full max-w-2xl h-[400px] sm:h-[500px] object-cover rounded-3xl shadow-2xl border-4 sm:border-8 border-gray-800"
                                        />
                                    </div>
                                </div>

                                {/* Navigation Buttons */}
                                <button
                                    onClick={prevImage}
                                    className={`absolute left-0 sm:left-4 top-1/2 transform -translate-y-1/2 p-3 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} rounded-full shadow-lg transition-colors`}
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className={`absolute right-0 sm:right-4 top-1/2 transform -translate-y-1/2 p-3 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} rounded-full shadow-lg transition-colors`}
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>

                            {/* Image Info */}
                            <div className="text-center">
                                <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                                    {gallery[currentImageIndex].title}
                                </h4>
                                <p className={`${textSecondary} mb-4`}>
                                    {gallery[currentImageIndex].description}
                                </p>

                                {/* Image Indicators */}
                                <div className="flex justify-center gap-2 flex-wrap">
                                    {gallery.map((_, index) => (
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
                    )}

                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                        <div>
                            <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Características</h4>
                            <ul className="space-y-2">
                                {project.features?.map((feature, index) => (
                                    <li key={index} className={`flex items-center gap-2 ${textSecondary}`}>
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Technologías usadas</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies?.map((tech, index) => (
                                    <span
                                        key={index}
                                        className={`px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full flex items-center gap-1`}
                                    >
                                        {tech === 'AI' ? <Sparkles size={16} /> : tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
