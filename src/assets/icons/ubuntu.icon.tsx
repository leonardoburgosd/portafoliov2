import React from 'react';
interface svgProps {
    ancho: number;
    alto: number;
}


const UbuntuIcon: React.FC<svgProps> = ({ ancho, alto }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={ancho} height={alto} viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#f47421" /><circle cx="50" cy="50" r="21.8" fill="none" stroke="#fff" stroke-width="8.6" /><g id="a"><circle cx="19.4" cy="50" r="8.4" fill="#f47421" /><path stroke="#f47421" stroke-width="3.2" d="M67 50h10" /><circle cx="19.4" cy="50" r="6" fill="#fff" /></g><use transform="rotate(120 50 50)" /><use transform="rotate(240 50 50)" /></svg>
    );
};

export default UbuntuIcon;