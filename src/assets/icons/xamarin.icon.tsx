import React from 'react';
interface svgProps {
    ancho: number;
    alto: number;
}

const XamarinIcon: React.FC<svgProps> = ({ ancho, alto }) => {
    return (
        <svg width={ancho} height={alto} preserveAspectRatio="xMidYMid" viewBox="-.857 0 257.714 227.78" xmlns="http://www.w3.org/2000/svg"><path d="m73.866 0c-6.914.015-13.682 3.94-17.162 9.927l-54.134 94.036c-3.427 6.003-3.427 13.85 0 19.853l54.134 94.037c3.48 5.987 10.248 9.913 17.162 9.927h108.268c6.914-.015 13.682-3.94 17.162-9.927l54.134-94.037c3.427-6.003 3.426-13.85 0-19.853l-54.134-94.036c-3.48-5.988-10.248-9.913-17.162-9.927zm.983 55.013c.149-.015.305-.015.454 0h18.674a2.462 2.462 0 0 1 2.042 1.212l31.679 56.452c.16.28.262.59.3.91.04-.32.142-.63.302-.91l31.603-56.452a2.47 2.47 0 0 1 2.117-1.212h18.675c1.653.014 2.892 2.097 2.117 3.561l-30.923 55.316 30.923 55.24c.848 1.472-.42 3.651-2.117 3.637h-18.675a2.47 2.47 0 0 1 -2.117-1.288l-31.603-56.453c-.16-.279-.262-.59-.301-.909a2.43 2.43 0 0 1 -.301.91l-31.68 56.452a2.468 2.468 0 0 1 -2.04 1.288h-18.676c-1.697.015-2.965-2.165-2.117-3.637l30.923-55.24-30.923-55.316c-.741-1.336.163-3.276 1.663-3.561z" fill="#3498db" /></svg>
    );
};

export default XamarinIcon;