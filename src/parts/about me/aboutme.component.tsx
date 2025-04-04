import { faFileWord } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutMeComponent() {

    return (
        <>
            <div className='sm:flex sm:flex-wrap lg:hidden'>
                <div className='flex flex-col w-full p-6 items-start top-0'>
                    <h1 className="text-2xl font-bold p-4">Sobre mi </h1>
                    <p className="p-3 text-pretty text-lg space-x-1 tracking-wide">
                        <b className='text-blue-200'>Técnico en Computación y Tecnologías de la Información</b> y <b className='text-blue-200'>Bachiller en
                            Ingeniería en Sistemas Computacionales</b> con más de cuatro años de experiencia
                        como <b className='text-yellow-200'>desarrollador .NET</b> en servicios REST y de escritorio, y más de dos años de
                        experiencia como <b className='text-yellow-200'>desarrollador Angular</b>.
                    </p>
                    <a href='https://drive.google.com/file/d/1Tr57ybIYZXgVx-q3Gv_a7Lbx2PpanrVL/view?usp=sharing' target="_blank"
                        rel="noreferrer" className='bg-[#2F80ED] p-3 rounded-md text-lg font-semibold items-center flex m-3'>
                        <FontAwesomeIcon icon={faFileWord} className='pr-3 pl-1' />
                        View CV
                    </a>
                </div>
                <div className='flex flex-col w-full p-6 items-start'>
                    <h1 className='text-2xl font-bold p-4'>Experiencia</h1>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700">
                        <li className='mb-10 ms-4'>
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-blue-300 dark:text-blue-200">Febrero 2024</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Multilingual - Backend developer</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Implementacion con NestJs, NextJs, React, .NET Core, Azure AD B2C, Azure Functions, Azure Service Bus</p>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-blue-300 dark:text-blue-200">Diciembre 2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">CENS - Desarrollador</h3>
                            <p className="mb-4 text-base text-gray-500 dark:text-gray-400 font-semibold">Back-end</p>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Web API (.NET), Dapper, SqlServer, Caprover, Github, Windows server, Ubuntu server, Amazon lightsail</p>
                            <p className="mb-4 text-base text-gray-500 dark:text-gray-400 font-semibold">Font-end</p>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Angular 14</p>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-blue-300 dark:text-blue-200">Diciembre 2021</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">SIGTIES - Desarrollador .NET </h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Desktop Apps (.Net Framework 3.5, .Net Framework 4.8), SqlServer</p>
                        </li>
                        <li className="ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-blue-300 dark:text-blue-200">Noviembre 2019</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">CENS - Desarrollador fullstack </h3>
                            <p className="mb-4 text-base text-gray-500 dark:text-gray-400 font-semibold">Back-end</p>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Web API (.NET), Dapper, SqlServer, Github, Windows server, Azure Functions, Microsoft Graph</p>
                            <p className="mb-4 text-base text-gray-500 dark:text-gray-400 font-semibold">Font-end</p>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Angular 8, Angular 10</p>
                        </li>
                        <li className="ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-blue-300 dark:text-blue-200">Febrero 2018 <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Primer empleo</span></time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Equipo de desarrollo independiente - Desarrollador fullstack </h3>
                            <p className="mb-4 text-base text-gray-500 dark:text-gray-400 font-semibold">Back-end</p>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Web API (.NET), Dapper, SqlServer</p>
                            <p className="mb-4 text-base text-gray-500 dark:text-gray-400 font-semibold">Font-end</p>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Angular 4</p>
                        </li>
                    </ol>
                </div>
            </div>


            <div className='hidden lg:flex lg:p-2 lg:max-w-7xl lg:items-start lg:justify-start lg:mx-auto lg:relative z-0'>
                <div className='flex flex-col w-1/2 p-4 items-start top-0'>
                    <h1 className="text-2xl font-bold p-4">Sobre mi </h1>
                    <p className="p-3 text-pretty text-lg space-x-1 tracking-wide">
                        <b className='text-blue-200'>Técnico en Computación y Tecnologías de la Información</b> y <b className='text-blue-200'>Bachiller en
                            Ingeniería en Sistemas Computacionales</b> con más de cuatro años de experiencia
                        como <b className='text-yellow-200'>desarrollador .NET</b> en servicios REST y de escritorio, y más de dos años de
                        experiencia como <b className='text-yellow-200'>desarrollador Angular</b>.
                    </p>
                    <a href='https://drive.google.com/file/d/1Tr57ybIYZXgVx-q3Gv_a7Lbx2PpanrVL/view?usp=sharing' target="_blank"
                        rel="noreferrer" className='bg-[#2F80ED] p-3 rounded-md text-lg font-semibold items-center flex m-3'>
                        <FontAwesomeIcon icon={faFileWord} className='pr-3 pl-1' />
                        View CV
                    </a>
                </div>
                <div className='flex flex-col w-1/2 p-4 items-start'>
                    <h1 className='text-2xl font-bold p-4'>Experiencia</h1>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700">
                        <li className='mb-10 ms-4'>
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-blue-300 dark:text-blue-200">Febrero 2024</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Multilingual - Backend developer</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Implementacion con NestJs, NextJs, React, .NET Core, Azure AD B2C, Azure Functions, Azure Service Bus</p>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-blue-300 dark:text-blue-200">Diciembre 2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">CENS - Desarrollador</h3>
                            <p className="mb-4 text-base text-gray-500 dark:text-gray-400 font-semibold">Back-end</p>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Web API (.NET), Dapper, SqlServer, Caprover, Github, Windows server, Ubuntu server, Amazon lightsail</p>
                            <p className="mb-4 text-base text-gray-500 dark:text-gray-400 font-semibold">Font-end</p>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Angular 14</p>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-blue-300 dark:text-blue-200">Diciembre 2021</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">SIGTIES - Desarrollador .NET </h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Desktop Apps (.Net Framework 3.5, .Net Framework 4.8), SqlServer</p>
                        </li>
                        <li className="ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-blue-300 dark:text-blue-200">Noviembre 2019</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">CENS - Desarrollador fullstack </h3>
                            <p className="mb-4 text-base text-gray-500 dark:text-gray-400 font-semibold">Back-end</p>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Web API (.NET), Dapper, SqlServer, Github, Windows server, Azure Functions, Microsoft Graph</p>
                            <p className="mb-4 text-base text-gray-500 dark:text-gray-400 font-semibold">Font-end</p>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Angular 8, Angular 10</p>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default AboutMeComponent
