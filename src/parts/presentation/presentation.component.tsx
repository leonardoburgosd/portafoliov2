import authdash from '../../assets/authdashboard.png';
import buttonstyle from '../../assets/buttonstyleportada.png';
import bc from '../../assets/bcCreate.png';

import avatar from '../../assets/avatar2.png';

function PresentationComponent() {

    return (
        <>
            <div className='flex p-2 m-2 mt-12 max-w-7xl items-center justify-between mx-auto relative z-0'>
                <div className='flex flex-col'>
                    <div className='flex w-10/12'>
                        <div className='flex flex-col br-4'>
                            <h1 className='text-8xl items-center m-2 text-blue-200'>Hola, </h1>
                            <h1 className='text-8xl items-center m-2'>soy Leonardo Burgos</h1>
                        </div>
                        <img className='rounded-full bg-blue-200 hidden xl:block' width='330' src={avatar} />
                    </div>
                </div>
            </div>
            <div className='sm:flex sm:flex-wrap lg:hidden'>
                <div className='p-4'>
                    <label className='text-1xl pt-5 font-semibold text-blue-200'>- DESARROLLADOR FULLSTACK -</label>
                    <div className="flex pt-4 pb-4">
                        <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300 items-center">Abierto a nuevas oportunidades</span>
                    </div>
                    <div className="flex">
                        <a href="https://github.com/leonardoburgosd" target="_blank"
                            rel="noreferrer" className="border-2 rounded-lg pl-2 pr-2 hover:border-[#2F80ED] hover:text-[#2F80ED] m-1">Github</a>
                        <a href="https://www.linkedin.com/in/leonardo-burgos-diaz/" target="_blank"
                            rel="noreferrer" className="border-2 rounded-lg pl-2 pr-2 hover:border-[#2F80ED] hover:text-[#2F80ED] m-1">Linkedin</a>
                    </div>
                </div>
                <div className='p-4'>
                    <a href='#proyects'>Últimos proyectos</a>
                    <div className='flex bg-opacity-100'>
                        <div className='h-35 w-70 relative bg-white rounded m-1'>
                            <img className='w-full h-full object-cover' src={authdash} />
                        </div>
                        <div className='h-35 w-70 relative bg-white rounded m-1'>
                            <img className='w-full h-full object-cover' src={buttonstyle} />
                        </div>
                        <div className='h-35 w-70 relative bg-white rounded m-1'>
                            <img className='w-full h-full object-cover' src={bc} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:mx-auto lg:relative z-0'>
                <div className='flex flex-col w-1/2'>
                    <label className='text-1xl pt-5 font-semibold text-blue-200'>- DESARROLLADOR FULLSTACK -</label>
                    <div className="flex pt-4 pb-4">
                        <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300 items-center">Abierto a nuevas oportunidades</span>
                    </div>
                    <div className="xl:flex">
                        <a href="https://github.com/leonardoburgosd" target="_blank"
                            rel="noreferrer" className="border-2 rounded-lg pl-2 pr-2 hover:border-[#2F80ED] hover:text-[#2F80ED] m-1">Github</a>
                        <a href="https://www.linkedin.com/in/leonardo-burgos-diaz/" target="_blank"
                            rel="noreferrer" className="border-2 rounded-lg pl-2 pr-2 hover:border-[#2F80ED] hover:text-[#2F80ED] m-1">Linkedin</a>
                    </div>
                </div>
                <div className='w-1/2'>
                    <a href='#proyects'>Últimos proyectos</a>
                    <div className='flex bg-opacity-100'>
                        <div className='h-35 w-70 relative bg-white rounded m-1'>
                            <img className='w-full h-full object-cover ' src={authdash} />
                        </div>
                        <div className='h-35 w-70 relative bg-white rounded m-1'>
                            <img className='w-full h-full object-cover ' src={buttonstyle} />
                        </div>
                        <div className='h-35 w-70 relative bg-white rounded m-1'>
                            <img className='w-full h-full object-cover ' src={bc} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default PresentationComponent
