import { useEffect, useRef } from 'react';

interface ExperienceSectionProps {
    isDarkMode: boolean;
}

const experiences = [
    {
        date: 'Agosto 2026 - Actualidad',
        role: 'Desarrollador web',
        company: 'Larama Berries',
        description: 'Encargado de diseño y desarrollo de landing page.',
        tech: ['Figma', 'HTML', 'CSS', 'JavaScript', 'React', 'Wordpress'],
    },
    {
        date: 'Junio 2026 - Julio 2026',
        role: 'Arquitecto de Software',
        company: 'CENS',
        description: 'Liderazgo técnico y diseño de arquitectura de software para soluciones escalables.',
        tech: ['.NET', 'Arquitectura', 'Escalabilidad'],
    },
    {
        date: 'Enero 2023 - Mayo 2026',
        role: 'Desarrollador Backend',
        company: 'CENS',
        description: 'Implementación, despliegue y mantenimiento de aplicaciones backend y frontend con .NET, Angular y SQL Server.',
        tech: ['.NET', 'Angular', 'SQL Server'],
    },
    {
        date: 'Febrero 2024 - Septiembre 2025',
        role: 'Desarrollador de Back-end',
        company: 'Multilingual',
        description: 'Implementación de API REST con NestJS y .NET Core. Implementación de interfaces en React.',
        tech: ['NestJS', '.NET Core', 'React'],
    },
    {
        date: 'Mayo 2025 - Agosto 2025',
        role: 'Programador Full Stack Móvil',
        company: 'Equipo independiente',
        description: 'Implementación de aplicación móvil para registro de entrega de alimentos y aplicación web para visualización de reportes.',
        tech: ['FlutterFlow', 'Firebase', 'Web'],
    },
    {
        date: 'Junio 2023 - Noviembre 2023',
        role: 'Desarrollador Backend',
        company: 'Colegio Tecnológico Médico del Perú',
        description: 'Implementación de emisión de comprobantes electrónicos, servicios REST para gestión de pagos, colegiados y deudas.',
        tech: ['.NET', 'REST API', 'Electrónicos'],
    },
    {
        date: 'Diciembre 2021 - Febrero 2023',
        role: 'Analista Programador .NET',
        company: 'SIGTIES',
        description: 'Implementación de aplicaciones de escritorio con .NET Framework y SQL Server.',
        tech: ['.NET Framework', 'SQL Server', 'Escritorio'],
    },
    {
        date: 'Noviembre 2019 - Septiembre 2021',
        role: 'Desarrollador de Aplicaciones Web',
        company: 'CENS',
        description: 'Implementación de aplicaciones web con Angular, .NET Core y SQL Server.',
        tech: ['Angular', '.NET Core', 'SQL Server'],
    },
    {
        date: 'Febrero 2018 - Julio 2018',
        role: 'Desarrollador Full Stack',
        company: 'Equipo de desarrollo independiente',
        description: 'Implementación de aplicaciones web con Angular, .NET Core y SQL Server.',
        tech: ['Angular', '.NET Core', 'SQL Server'],
    },
];

export const ExperienceSection = ({ isDarkMode }: ExperienceSectionProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<HTMLDivElement>(null);
    const dotsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const itemsContainer = itemsRef.current;
        if (!section || !itemsContainer) return;

        const totalItems = experiences.length;

        // Build dots
        if (dotsRef.current) {
            dotsRef.current.innerHTML = '';
            for (let i = 0; i < totalItems; i++) {
                const dot = document.createElement('div');
                dot.className = `h-1.5 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-[#333]' : 'bg-gray-300'}`;
                dot.style.width = '6px';
                dotsRef.current.appendChild(dot);
            }
        }

        let raf: number;

        const update = () => {
            const rect = section.getBoundingClientRect();
            const sectionH = section.offsetHeight;
            const vpH = window.innerHeight;
            const scrollable = sectionH - vpH;
            if (scrollable <= 0) { raf = requestAnimationFrame(update); return; }

            const scrolled = Math.max(0, -rect.top);
            const progress = Math.min(1, scrolled / scrollable);

            const itemHeight = scrollable / totalItems;

            const allItems = itemsContainer.querySelectorAll('[data-exp-item]');

            for (let i = 0; i < allItems.length; i++) {
                const item = allItems[i] as HTMLElement;
                const itemStart = i * itemHeight;
                const itemProgress = (scrolled - itemStart) / itemHeight;

                let opacity: number;
                let translateY: number;

                if (itemProgress < -0.1) {
                    opacity = 0;
                    translateY = 40;
                } else if (itemProgress < 0) {
                    const t = 1 + itemProgress / 0.1;
                    opacity = t;
                    translateY = 40 * (1 - t);
                } else if (itemProgress <= 0.9) {
                    opacity = 1;
                    translateY = 0;
                } else if (itemProgress < 1) {
                    const t = (itemProgress - 0.9) / 0.1;
                    opacity = 1 - t;
                    translateY = -40 * t;
                } else {
                    opacity = 0;
                    translateY = -40;
                }

                item.style.opacity = String(Math.max(0, Math.min(1, opacity)));
                item.style.transform = `translateY(${translateY}px)`;
                item.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
            }

            // Update dots
            const activeIdx = Math.min(
                totalItems - 1,
                Math.round(progress * (totalItems - 1))
            );

            if (dotsRef.current) {
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

            raf = requestAnimationFrame(update);
        };

        raf = requestAnimationFrame(update);
        return () => cancelAnimationFrame(raf);
    }, [isDarkMode]);

    const totalHeight = experiences.length * 150;

    return (
        <section
            ref={sectionRef}
            id="experiencia"
            className={`relative ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-white'}`}
            style={{ height: `${totalHeight}vh` }}
        >
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="text-center px-4 sm:px-8 pt-24 sm:pt-0 pb-6 sm:pb-12 flex-shrink-0">
                    <h2
                        className={`font-extrabold tracking-[3px] sm:tracking-[5px] mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                        style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}
                    >
                        EXPERIENCIA
                    </h2>
                    <p className={`text-[0.6rem] sm:text-xs tracking-[1px] sm:tracking-[2px] ${isDarkMode ? 'text-[#555]' : 'text-gray-400'}`}>
                        Mas de 6 años construyendo soluciones digitales
                    </p>
                </div>

                <div className="flex-1 flex items-center justify-center relative px-4 sm:px-8">
                    <div ref={itemsRef} className="relative w-full max-w-[800px] h-[400px]">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                data-exp-item
                                className="absolute top-0 left-0 w-full h-full flex items-center"
                                style={{
                                    opacity: index === 0 ? 1 : 0,
                                    transform: index === 0 ? 'translateY(0)' : 'translateY(40px)',
                                }}
                            >
                                {/* Desktop layout */}
                                <div className="hidden sm:grid items-center" style={{ gridTemplateColumns: '1fr 60px 1fr' }}>
                                    <div className="text-right pr-6">
                                        <span className={`text-xs font-medium tracking-[1.5px] ${isDarkMode ? 'text-[#666]' : 'text-gray-400'}`}>
                                            {exp.date}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center h-full relative">
                                        <div className={`w-3.5 h-3.5 rounded-full border-[3px] relative z-20 mt-[50%] ${isDarkMode ? 'border-white shadow-[0_0_15px_rgba(255,255,255,0.15)]' : 'border-gray-900'}`} />
                                        <div className={`w-0.5 h-full absolute top-0 ${isDarkMode ? 'bg-gradient-to-b from-transparent via-[#333] to-transparent' : 'bg-gradient-to-b from-transparent via-gray-300 to-transparent'}`} />
                                    </div>
                                    <div className="pl-6">
                                        <span className={`text-[0.6rem] font-bold tracking-[2px] inline-block mb-2 px-2 py-0.5 rounded ${isDarkMode ? 'text-[#444] bg-white/[0.04]' : 'text-gray-500 bg-gray-100'}`}>
                                            {String(index).padStart(2, '0')}
                                        </span>
                                        <h3 className={`font-bold tracking-[1px] mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}>
                                            {exp.role}
                                        </h3>
                                        <span className={`text-sm font-medium block mb-3 ${isDarkMode ? 'text-[#888]' : 'text-gray-500'}`}>
                                            {exp.company}
                                        </span>
                                        <p className={`text-sm leading-[1.7] mb-4 max-w-[400px] ${isDarkMode ? 'text-[#666]' : 'text-gray-400'}`}>
                                            {exp.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {exp.tech.map((t, i) => (
                                                <span key={i} className={`text-[0.58rem] px-2.5 py-1 rounded-full ${isDarkMode ? 'bg-white/[0.05] text-[#777]' : 'bg-gray-100 text-gray-500'}`}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile layout */}
                                <div className="sm:hidden">
                                    <div className="flex items-start gap-3">
                                        <div className="flex flex-col items-center pt-1 flex-shrink-0">
                                            <div className={`w-3 h-3 rounded-full border-2 ${isDarkMode ? 'border-white shadow-[0_0_10px_rgba(255,255,255,0.15)]' : 'border-gray-900'}`} />
                                            <div className={`w-px flex-1 mt-1 ${isDarkMode ? 'bg-[#333]' : 'bg-gray-300'}`} />
                                        </div>
                                        <div className="flex-1 pb-4">
                                            <span className={`text-[0.5rem] font-bold tracking-[1px] inline-block mb-1 px-1.5 py-0.5 rounded ${isDarkMode ? 'text-[#444] bg-white/[0.04]' : 'text-gray-500 bg-gray-100'}`}>
                                                {String(index).padStart(2, '0')}
                                            </span>
                                            <span className={`text-[0.5rem] font-medium tracking-[0.5px] ml-2 ${isDarkMode ? 'text-[#666]' : 'text-gray-400'}`}>
                                                {exp.date}
                                            </span>
                                            <h3 className={`text-sm font-bold tracking-[0.5px] mb-0.5 mt-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                                {exp.role}
                                            </h3>
                                            <span className={`text-[0.65rem] font-medium block mb-2 ${isDarkMode ? 'text-[#888]' : 'text-gray-500'}`}>
                                                {exp.company}
                                            </span>
                                            <p className={`text-[0.65rem] leading-[1.5] mb-2 ${isDarkMode ? 'text-[#666]' : 'text-gray-400'}`}>
                                                {exp.description}
                                            </p>
                                            <div className="flex flex-wrap gap-1">
                                                {exp.tech.map((t, i) => (
                                                    <span key={i} className={`text-[0.45rem] px-1.5 py-0.5 rounded-full ${isDarkMode ? 'bg-white/[0.05] text-[#777]' : 'bg-gray-100 text-gray-500'}`}>
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div ref={dotsRef} className="flex justify-center gap-2 pt-4 sm:pt-8 flex-shrink-0" />
            </div>
        </section>
    );
};
