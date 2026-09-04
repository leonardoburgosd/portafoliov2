import { useEffect, useRef } from 'react';
import { Project } from './project';

interface PortfolioSectionProps {
    isDarkMode: boolean;
    projects: Project[];
    onProjectClick: (project: Project) => void;
}

export const PortfolioSection = ({ isDarkMode, projects, onProjectClick }: PortfolioSectionProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const dotsRef = useRef<HTMLDivElement>(null);

    const GAP = 32;

    useEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        let raf: number;

        const update = () => {
            const isMobile = window.innerWidth < 768;
            const SLIDE_W = isMobile ? window.innerWidth - 48 : 350;
            const SLIDES_VISIBLE = isMobile ? 1 : 3;
            const totalSlides = projects.length;
            const totalDots = isMobile ? totalSlides : totalSlides - 2;
            const slideStep = SLIDE_W + GAP;
            const maxTranslate = (totalSlides - SLIDES_VISIBLE) * slideStep;

            const rect = section.getBoundingClientRect();
            const sectionH = section.offsetHeight;
            const vpH = window.innerHeight;
            const vpW = window.innerWidth;
            const scrollable = sectionH - vpH;
            if (scrollable <= 0) { raf = requestAnimationFrame(update); return; }

            const scrolled = Math.max(0, -rect.top);
            const progress = Math.min(1, scrolled / scrollable);

            // Center slides
            const visibleW = SLIDES_VISIBLE * SLIDE_W + (SLIDES_VISIBLE - 1) * GAP;
            const centerOffset = (vpW - visibleW) / 2;

            const translateX = centerOffset - progress * maxTranslate;
            track.style.transform = `translate3d(${translateX}px, 0, 0)`;

            // Active index for dots
            const activeIdx = Math.min(
                totalDots - 1,
                Math.floor(progress * totalDots)
            );

            // Rebuild dots if count changed
            if (dotsRef.current) {
                const currentDots = dotsRef.current.children.length;
                if (currentDots !== totalDots) {
                    dotsRef.current.innerHTML = '';
                    for (let i = 0; i < totalDots; i++) {
                        const dot = document.createElement('div');
                        dot.className = `h-1.5 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-[#333]' : 'bg-gray-300'}`;
                        dot.style.width = '6px';
                        dotsRef.current.appendChild(dot);
                    }
                }
                const dots = dotsRef.current.children;
                for (let i = 0; i < dots.length; i++) {
                    const dot = dots[i] as HTMLElement;
                    if (i === activeIdx) {
                        dot.className = `h-1.5 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-white' : 'bg-gray-900'}`;
                        dot.style.width = '20px';
                    } else {
                        dot.className = `h-1.5 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-[#333]' : 'bg-gray-300'}`;
                        dot.style.width = '6px';
                    }
                }
            }

            // Update slide width and visibility
            const slides = track.children;
            for (let i = 0; i < slides.length; i++) {
                const slide = slides[i] as HTMLElement;
                slide.style.width = `${SLIDE_W}px`;
                const isVisible = i >= activeIdx && i < activeIdx + SLIDES_VISIBLE;
                slide.style.opacity = isVisible ? '1' : '0.25';
                slide.style.transform = isVisible ? 'scale(1)' : 'scale(0.88)';
            }

            raf = requestAnimationFrame(update);
        };

        raf = requestAnimationFrame(update);
        return () => cancelAnimationFrame(raf);
    }, [projects.length, isDarkMode]);

    const totalHeight = projects.length * 100;

    return (
        <section
            ref={sectionRef}
            id="proyectos"
            className={`relative ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-white'}`}
            style={{ height: `${totalHeight}vh` }}
        >
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                {/* Header */}
                <div className="text-center px-8 pb-8 flex-shrink-0 max-md:pt-24 max-md:pb-4">
                    <h2
                        className={`font-extrabold tracking-[6px] mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                        style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                    >
                        MI PORTAFOLIO
                    </h2>
                    <p className={`text-xs tracking-[2px] mb-4 ${isDarkMode ? 'text-[#555]' : 'text-gray-400'}`}>
                        Leonardo Burgos - Desarrollador Fullstack
                    </p>
                    <div className={`w-12 h-0.5 mx-auto ${isDarkMode ? 'bg-[#333]' : 'bg-gray-300'}`} />
                </div>

                {/* Viewport */}
                <div className="flex-1 overflow-hidden flex items-center px-6 md:px-12">
                    <div
                        ref={trackRef}
                        className="flex"
                        style={{ gap: `${GAP}px`, willChange: 'transform' }}
                    >
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0"
                                style={{ width: '350px', transition: 'opacity 0.5s ease, transform 0.5s ease, width 0.3s ease' }}
                            >
                                {/* Image */}
                                <div
                                    className={`w-full h-60 max-md:h-56 rounded-lg overflow-hidden relative mb-4 ${
                                        isDarkMode ? 'bg-[#151515]' : 'bg-gray-100'
                                    }`}
                                >
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                    <div
                                        className={`absolute inset-0 flex items-center justify-center ${
                                            isDarkMode
                                                ? 'bg-gradient-to-br from-[#1a1a1a] to-[#111]'
                                                : 'bg-gradient-to-br from-gray-100 to-gray-200'
                                        }`}
                                    >
                                        <span className={`text-2xl font-bold ${isDarkMode ? 'text-[#333]' : 'text-gray-300'}`}>
                                            &lt;/&gt;
                                        </span>
                                    </div>
                                </div>

                                {/* Info */}
                                <div>
                                    <h3 className={`text-sm font-bold tracking-[3px] mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {project.title.toUpperCase()}
                                    </h3>
                                    <p className={`text-xs leading-[1.5] mb-3 ${isDarkMode ? 'text-[#777]' : 'text-gray-400'}`}>
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className={`text-[0.52rem] px-2 py-0.5 rounded-full ${
                                                    isDarkMode
                                                        ? 'bg-white/[0.06] text-[#888]'
                                                        : 'bg-gray-100 text-gray-500'
                                                }`}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => onProjectClick(project)}
                                        className={`inline-block text-[0.58rem] font-semibold tracking-[2px] px-5 py-2 rounded-[3px] transition-all duration-300 uppercase cursor-pointer ${
                                            isDarkMode
                                                ? 'text-white border border-white/15 hover:bg-white hover:text-[#0a0a0a]'
                                                : 'text-gray-900 border border-gray-300 hover:bg-gray-900 hover:text-white'
                                        }`}
                                    >
                                        VER PROYECTO
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Indicators */}
                <div ref={dotsRef} className="flex justify-center gap-2 pt-6 flex-shrink-0" />
            </div>
        </section>
    );
};
