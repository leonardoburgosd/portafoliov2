import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface svgProps {
    image: string;
    title: string;
    description: string;
    link: string;
    icons: React.ReactNode[];
}


const CardImage: React.FC<svgProps> = ({ image, title, description, link, icons }) => {
    return (
        <div className='relative group'>
            <img className="w-full h-auto transition-opacity duration-300 group-hover:opacity-70 max-w-full" src={image} alt="" />
            <div className="absolute inset-0 flex items-center p-12 justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-95 bg-zinc-800 shadow-inner">
                <div className='flex flex-col items-start p-2'>
                    <span className="text-[#2F80ED] lg:text-xl sm:text-sm lg:font-bold lg:pb-2">{title}</span>
                    <p className='hidden md:block md:text-xs 2xl:text-base'>{description}</p>
                    <span className='hidden lg:text-yellow-200'>Tecnologías implementadas:</span>
                    <div className='hidden xl:flex xl:flex-wrap'>
                        {icons.map((svg, index) => (
                            <div key={index} className=' bg-slate-950 rounded-full p-2 m-1'>
                                {svg}
                            </div>
                        ))}
                    </div>

                    {link?.trim() && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className='flex items-center lg:p-2 md:text-sm rounded-2xl lg:text-xl sm:text-lg lg:m-2 text-[#2F80ED] hover:text-[#2f97ed]'
                        >
                            Acceder
                            <FontAwesomeIcon icon={faArrowRight} className='pl-1' />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardImage;