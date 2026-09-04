import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from './project';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!isOpen || !project) return null;

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
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center opacity-100 pointer-events-auto transition-opacity duration-300"
            onClick={onClose}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-[10px]" />

            {/* Content */}
            <div
                className="relative z-1 bg-[#111] border border-white/[0.06] rounded-[10px] max-w-[800px] w-[92%] max-h-[90vh] overflow-y-auto p-8 pb-6"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-5 w-8 h-8 flex items-center justify-center rounded-full text-[#666] hover:text-white hover:bg-white/[0.08] transition-all z-10"
                >
                    <X size={20} />
                </button>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-[4px] text-white mb-5">
                    {project.title.toUpperCase()}
                </h3>

                {/* Carousel */}
                {hasGallery && (
                    <div className="relative mb-4 bg-[#0a0a0a] rounded-lg overflow-hidden">
                        <img
                            src={gallery[currentImageIndex].url}
                            alt={gallery[currentImageIndex].title}
                            className="w-full aspect-[16/10] object-contain bg-[#0a0a0a]"
                        />

                        {/* Counter */}
                        <div className="absolute top-3 right-3 text-[0.6rem] font-medium tracking-[1px] text-[#888] bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-[4px] z-10">
                            {currentImageIndex + 1} / {gallery.length}
                        </div>

                        {/* Prev button */}
                        <button
                            onClick={prevImage}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/[0.08] border border-white/[0.1] text-white flex items-center justify-center cursor-pointer hover:bg-white/[0.18] transition-all backdrop-blur-[4px] z-10"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* Next button */}
                        <button
                            onClick={nextImage}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/[0.08] border border-white/[0.1] text-white flex items-center justify-center cursor-pointer hover:bg-white/[0.18] transition-all backdrop-blur-[4px] z-10"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}

                {/* Dots */}
                {hasGallery && (
                    <div className="flex justify-center gap-1.5 mb-5">
                        {gallery.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    index === currentImageIndex
                                        ? 'bg-white w-4'
                                        : 'bg-[#333] w-1.5'
                                }`}
                            />
                        ))}
                    </div>
                )}

                {/* Feature tags */}
                {project.features && project.features.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.map((feature, index) => (
                            <span
                                key={index}
                                className="text-[0.58rem] px-2.5 py-1 rounded-full bg-white/[0.06] text-[#888]"
                            >
                                {feature}
                            </span>
                        ))}
                    </div>
                )}

                {/* Description */}
                <p className="text-[0.75rem] text-[#666] leading-[1.7]">
                    {project.fullDescription || project.description}
                </p>
            </div>
        </div>
    );
};
