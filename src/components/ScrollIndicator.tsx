import { useState, useEffect } from 'react';

interface ScrollIndicatorProps {
    isDarkMode: boolean;
}

export const ScrollIndicator = ({ isDarkMode }: ScrollIndicatorProps) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY <= 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed right-12 bottom-12 z-50 flex flex-col items-center gap-3 transition-opacity duration-300 max-md:right-6 max-md:bottom-6 ${
                visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
            <span
                className={`text-[0.55rem] font-medium tracking-[3px] ${isDarkMode ? 'text-[#555]' : 'text-gray-400'}`}
                style={{ writingMode: 'vertical-rl' }}
            >
                SCROLL
            </span>
            <div
                className={`w-px h-10 ${isDarkMode ? 'bg-gradient-to-b from-[#555] to-transparent' : 'bg-gradient-to-b from-gray-400 to-transparent'}`}
                style={{ animation: 'scrollPulse 2s ease-in-out infinite' }}
            />
            <style>{`
                @keyframes scrollPulse {
                    0%, 100% { opacity: 1; transform: scaleY(1); }
                    50% { opacity: 0.3; transform: scaleY(0.5); }
                }
            `}</style>
        </div>
    );
};
