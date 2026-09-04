interface HeroSectionProps {
    isDarkMode: boolean;
}

export const HeroSection = ({ isDarkMode }: HeroSectionProps) => {
    return (
        <section
            id="index"
            className={`h-screen flex items-center justify-center text-center ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-white'}`}
        >
            <div className="px-4">
                <p className={`text-xs font-normal tracking-[4px] mb-2 ${isDarkMode ? 'text-[#555]' : 'text-gray-400'}`}>
                    SOY
                </p>
                <h1
                    className={`font-black leading-[0.95] tracking-[6px] ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                    style={{ fontSize: 'clamp(4rem, 14vw, 11rem)' }}
                >
                    LEONARDO
                </h1>
                <p className={`text-xs font-normal tracking-[5px] mt-4 ${isDarkMode ? 'text-[#666]' : 'text-gray-500'}`}>
                    DESARROLLADOR FULLSTACK
                </p>
            </div>
        </section>
    );
};
