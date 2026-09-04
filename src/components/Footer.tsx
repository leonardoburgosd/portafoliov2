interface FooterProps {
    isDarkMode: boolean;
}

export const Footer = ({ isDarkMode }: FooterProps) => {
    return (
        <footer
            className={`text-center py-12 border-t ${
                isDarkMode
                    ? 'border-white/[0.05] bg-[#0a0a0a]'
                    : 'border-gray-200 bg-white'
            }`}
            style={{ padding: '3rem 2rem' }}
        >
            <p
                className={`font-extrabold tracking-[5px] mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)' }}
            >
                GRACIAS POR VER!
            </p>
            <p className={`text-xs tracking-[1px] ${isDarkMode ? 'text-[#444]' : 'text-gray-400'}`}>
                &copy; 2026 Leonardo Burgos. Todos los derechos reservados.
            </p>
        </footer>
    );
};
