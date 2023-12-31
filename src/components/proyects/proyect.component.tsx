import firebase from '../../assets/firebaseProyc.png';
import wpf from '../../assets/wpfProyec.png';
import akamika from '../../assets/akamikaProyc.png';
import integra from '../../assets/integragroup.jpg';
import bc from '../../assets/bcCreate.png';
import buttonstyle from '../../assets/buttonstyleportada.png';
import miPortafolio from '../../assets/miPortafolio.png';
import miPortafolio3 from '../../assets/portfoliov3.png';
import authdash from '../../assets/authdashboard.png';
import AngularIcon from '../../assets/icons/angular.icon';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FigmaIcon from '../../assets/icons/figma.icon';
import SqlServerIcon from '../../assets/icons/sqlserver.icon';
import PhotoshopIcon from '../../assets/icons/photoshop.icon';
import FirebaseIcon from '../../assets/icons/firebase.icon';
import BootstrapIcon from '../../assets/icons/bootstrap.icon';
import HTMLIcon from '../../assets/icons/html.icon';
import CSSIcon from '../../assets/icons/css.icon';
import ReactIcon from '../../assets/icons/react.icon';
import TailwindIcon from '../../assets/icons/tailwind.icon';
import AzureIcon from '../../assets/icons/azure.icon';
import CSharpIcon from '../../assets/icons/csharp.icon';
import XamarinIcon from '../../assets/icons/xamarin.icon';
import ArduinoIcon from '../../assets/icons/arduino.icon';

function ProyectComponent() {
    return (
        <>
            {/* <div id='proyects' className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <button type="button" className="text-[#2F80ED] hover:text-white border border-[#2F80ED] bg-white hover:bg-[#2F80ED] focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">
                    All
                </button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">
                    .NET</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">
                    Angular</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">
                    Vite</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">
                    Java</button>
            </div> */}
            <div id='proyects' className="grid grid-cols-2 md:grid-cols-4 gap-0">
                <div className='relative group'>
                    <img className="w-full h-auto transition-opacity duration-300 group-hover:opacity-70 max-w-full" src={authdash} alt="" />
                    <div className="absolute inset-0 flex items-center p-12 justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-95 bg-zinc-800 shadow-inner">
                        <div className='flex flex-col items-start p-2'>
                            <span className="text-[#2F80ED] lg:text-xl sm:text-lg lg:font-bold lg:pb-2">AUTHDashboard</span>
                            <p className='hidden lg:pb-2'>Proyecto personal front-end de administración de autenticación de usuarios</p>
                            <span className='hidden lg:text-yellow-200'>Tecnologías implementadas:</span>
                            <div className='hidden lg:flex lg:flex-wrap'>
                                <div className=' bg-slate-950 rounded-full p-2 m-1'>
                                    <AngularIcon alto={30} ancho={30} ></AngularIcon>
                                </div>
                            </div>
                            <a href='https://dashboard.auth.leonardoburgosd.site' target="_blank"
                                rel="noreferrer" className='flex items-center p-2 rounded-2xl lg:text-xl sm:text-lg m-2 text-[#2F80ED] hover:text-[#2f97ed]'>
                                Acceder
                                <FontAwesomeIcon icon={faArrowRight} className='pl-1' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='relative group'>
                    <img className="w-full h-auto transition-opacity duration-300 group-hover:opacity-70 max-w-full" src={miPortafolio3} alt="" />
                    <div className="absolute inset-0 flex items-center p-12 justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-95 bg-zinc-800 shadow-inner">
                        <div className='flex flex-col items-start p-2'>
                            <span className="text-[#2F80ED] lg:text-xl sm:text-lg font-bold pb-2">Mi portafolio V3</span>
                            <p className='hidden lg:pb-2'>Diseño y distribución de mi portafolio versión 3</p>
                            <span className='hidden lg:text-yellow-200'>Tecnologías implementadas:</span>
                            <div className='hidden lg:flex lg:flex-wrap'>
                                <div className=' bg-red-800 rounded-full p-2 m-1'>
                                    <FigmaIcon alto={30} ancho={30} ></FigmaIcon>
                                </div>
                            </div>
                            <a href='https://www.figma.com/file/PJXVqcBYWrqIfuBgT3HUny/Portafolio?type=design&node-id=0%3A1&mode=design&t=t4aeTVBxPirM40eO-1' target="_blank"
                                rel="noreferrer" className='flex items-center p-2 rounded-2xl lg:text-xl sm:text-lg m-2 text-[#2F80ED] hover:text-[#2f97ed]'>
                                Acceder
                                <FontAwesomeIcon icon={faArrowRight} className='pl-1' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='relative group'>
                    <img className="w-full h-auto transition-opacity duration-300 group-hover:opacity-70 max-w-full" src={miPortafolio} alt="" />
                    <div className="absolute inset-0 flex items-center p-12 justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-95 bg-zinc-800 shadow-inner">
                        <div className='flex flex-col items-start p-2'>
                            <span className="text-[#2F80ED] lg:text-xl sm:text-lg font-bold pb-2">Mi portafolio V1</span>
                            <p className='hidden lg:pb-2'>Proyecto HTML y CSS (versión 1)</p>
                            <span className='hidden lg:text-yellow-200'>Tecnologías implementadas:</span>
                            <div className='hidden lg:flex lg:flex-wrap'>
                                <div className=' bg-blue-900 rounded-full p-2 m-1'>
                                    <ReactIcon alto={30} ancho={30} ></ReactIcon>
                                </div>
                                <div className=' bg-blue-400 rounded-full p-2  m-1'>
                                    <TailwindIcon alto={30} ancho={30} ></TailwindIcon>
                                </div>
                            </div>

                            <a href='https://github.com/leonardoburgosd/leonardoburgosd.github.io' target="_blank"
                                rel="noreferrer" className='flex items-center p-2 rounded-2xl lg:text-xl sm:text-lg m-2 text-[#2F80ED] hover:text-[#2f97ed]'>
                                Acceder
                                <FontAwesomeIcon icon={faArrowRight} className='pl-1' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='relative group'>
                    <img className="w-full h-auto transition-opacity duration-300 group-hover:opacity-70 max-w-full" src={buttonstyle} alt="" />
                    <div className="absolute inset-0 flex items-center p-12 justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-95 bg-zinc-800 shadow-inner">
                        <div className='flex flex-col items-start p-2'>
                            <span className="text-[#2F80ED] lg:text-xl sm:text-lg font-bold pb-2">ButtonStyle</span>
                            <p className='hidden lg:pb-2'>Proyecto con HTML y CSS de estilo de botones</p>
                            <span className='hidden lg:text-yellow-200'>Tecnologías implementadas:</span>
                            <div className='hidden lg:flex lg:flex-wrap'>
                                <div className='bg-orange-400 rounded-full p-2 m-1'>
                                    <HTMLIcon alto={30} ancho={30} ></HTMLIcon>
                                </div>
                                <div className='bg-blue-500 rounded-full p-2 m-1'>
                                    <CSSIcon alto={30} ancho={30} ></CSSIcon>
                                </div>
                            </div>
                            <a href='https://github.com/leonardoburgosd/button-styles' target="_blank"
                                rel="noreferrer" className='flex items-center p-2 rounded-2xl lg:text-xl sm:text-lg m-2 text-[#2F80ED] hover:text-[#2f97ed]'>
                                Acceder
                                <FontAwesomeIcon icon={faArrowRight} className='pl-1' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='relative group'>
                    <img className="w-full h-auto transition-opacity duration-300 group-hover:opacity-70 max-w-full" src={bc} alt="" />
                    <div className="absolute inset-0 flex items-center p-12 justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-95 bg-zinc-800 shadow-inner">
                        <div className='flex flex-col items-start p-2'>
                            <span className="text-[#2F80ED] lg:text-xl sm:text-lg font-bold pb-2">BCreate</span>
                            <p className='hidden lg:pb-2'>Estructura SQL para crear un blog</p>
                            <span className='hidden lg:text-yellow-200'>Tecnologías implementadas:</span>
                            <div className='hidden lg:flex lg:flex-wrap'>
                                <div className=' bg-yellow-600 rounded-full p-2'>
                                    <SqlServerIcon alto={30} ancho={30}></SqlServerIcon>
                                </div>
                            </div>
                            <a href='https://github.com/leonardoburgosd/bd-structure' target="_blank"
                                rel="noreferrer" className='flex items-center p-2 rounded-2xl lg:text-xl sm:text-lg m-2 text-[#2F80ED] hover:text-[#2f97ed]'>
                                Acceder
                                <FontAwesomeIcon icon={faArrowRight} className='pl-1' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='relative group'>
                    <img className="w-full h-auto transition-opacity duration-300 group-hover:opacity-70 max-w-full" src={integra} alt="" />
                    <div className="absolute inset-0 flex items-center p-12 justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-95 bg-zinc-800 shadow-inner">
                        <div className='flex flex-col items-start p-2'>
                            <span className="text-[#2F80ED] lg:text-xl sm:tex-lg font-bold pb-2">Integra:login</span>
                            <p className='hidden lg:pb-2'>Proyecto de diseño de registro y login en Photoshop</p>
                            <span className='hidden lg:text-yellow-200'>Tecnologías implementadas:</span>
                            <div className='hidden lg:flex lg:flex-wrap'>
                                <div className=' bg-blue-500 rounded-full p-2'>
                                    <PhotoshopIcon alto={30} ancho={30} ></PhotoshopIcon>
                                </div>
                            </div>
                            <a href='https://github.com/leonardoburgosd/integra-group' target="_blank"
                                rel="noreferrer" className='flex items-center p-2 rounded-2xl lg:text-xl sm:text-lg m-2 text-[#2F80ED] hover:text-[#2f97ed]'>
                                Acceder
                                <FontAwesomeIcon icon={faArrowRight} className='pl-1' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='relative group'>
                    <img className="w-full h-auto transition-opacity duration-300 group-hover:opacity-70 max-w-full" src={akamika} alt="" />
                    <div className="absolute inset-0 flex items-center p-12 justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-95 bg-zinc-800 shadow-inner">
                        <div className='flex flex-col items-start p-2'>
                            <span className="text-[#2F80ED] lg:text-xl sm:text-lg font-bold pb-2">Akamika</span>
                            <p className='hidden lg:pb-2'>Proyecto MVC en C# y SQL Server</p>
                            <span className='hidden lg:text-yellow-200'>Tecnologías implementadas:</span>
                            <div className='hidden lg:flex lg:flex-wrap'>
                                <div className=' bg-purple-500 rounded-full p-2 m-1'>
                                    <CSharpIcon alto={30} ancho={30}></CSharpIcon>
                                </div>
                                <div className=' bg-yellow-600 rounded-full p-2  m-1'>
                                    <SqlServerIcon alto={30} ancho={30} ></SqlServerIcon>
                                </div>
                                <div className='bg-purple-200 rounded-full p-2 m-1'>
                                    <BootstrapIcon alto={30} ancho={30} ></BootstrapIcon>
                                </div>
                            </div>
                            <a href='https://www.youtube.com/watch?v=63l2ByJUAUM&t=120s' target="_blank"
                                rel="noreferrer" className='flex items-center p-2 rounded-2xl lg:text-xl sm:text-lg m-2 text-[#2F80ED] hover:text-[#2f97ed]'>
                                Acceder
                                <FontAwesomeIcon icon={faArrowRight} className='pl-1' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='relative group'>
                    <img className="w-full h-auto transition-opacity duration-300 group-hover:opacity-70 max-w-full" src={wpf} alt="" />
                    <div className="absolute inset-0 flex items-center p-12 justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-95 bg-zinc-800 shadow-inner">
                        <div className='flex flex-col items-start p-2'>
                            <span className="text-[#2F80ED] lg:text-xl sm:text-lg font-bold pb-2">Azure Web API y WPF</span>
                            <p className='hidden lg:pb-2'>Proyecto de escritorio con .Net Framework, SqlServer y WPF</p>
                            <span className='hidden lg:text-yellow-200'>Tecnologías implementadas:</span>
                            <div className='hidden lg:flex lg:flex-wrap'>
                                <div className=' bg-red-400 rounded-full p-2 m-1'>
                                    <AzureIcon alto={30} ancho={30} ></AzureIcon>
                                </div>
                                <div className=' bg-yellow-600 rounded-full p-2  m-1'>
                                    <SqlServerIcon alto={30} ancho={30} ></SqlServerIcon>
                                </div>
                                <div className=' bg-purple-500 rounded-full p-2 m-1'>
                                    <CSharpIcon alto={30} ancho={30}></CSharpIcon>
                                </div>
                            </div>
                            <a href='https://codcafein.azurewebsites.net/2018/01/14/aplicacion-de-escritorio-con-wpf-y-web-api-c/' target="_blank"
                                rel="noreferrer" className='flex items-center p-2 rounded-2xl lg:text-xl sm:text-lg m-2 text-[#2F80ED] hover:text-[#2f97ed]'>
                                Acceder
                                <FontAwesomeIcon icon={faArrowRight} className='pl-1' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='relative group'>
                    <img className="w-full h-auto transition-opacity duration-300 group-hover:opacity-70 max-w-full" src={firebase} alt="" />
                    <div className="absolute inset-0 flex items-center p-12 justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-95 bg-zinc-800 shadow-inner">
                        <div className='flex flex-col items-start p-2'>
                            <span className="text-[#2F80ED] lg:text-xl sm:text-lg font-bold pb-2">IoT Básico</span>
                            <p className='hidden lg:pb-2'>Proyecto en Arduino, WinForms, Firebase y Xamarin</p>
                            <span className='hidden lg:text-yellow-200'>Tecnologías implementadas:</span>
                            <div className='hidden lg:flex lg:flex-wrap'>
                                <div className=' bg-yellow-900 rounded-full p-2 m-1'>
                                    <FirebaseIcon alto={30} ancho={30} ></FirebaseIcon>
                                </div>
                                <div className=' bg-purple-500 rounded-full p-2 m-1'>
                                    <CSharpIcon alto={30} ancho={30}></CSharpIcon>
                                </div>
                                <div className=' bg-white rounded-full p-2 m-1'>
                                    <XamarinIcon alto={30} ancho={30}></XamarinIcon>
                                </div>
                                <div className=' bg-green-200 rounded-full p-2 m-1'>
                                    <ArduinoIcon alto={30} ancho={30}></ArduinoIcon>
                                </div>
                            </div>
                            <a href='https://www.youtube.com/watch?v=whdph6Q_oek' target="_blank"
                                rel="noreferrer" className='flex items-center p-2 rounded-2xl lg:text-xl sm:text-lg m-2 text-[#2F80ED] hover:text-[#2f97ed]'>
                                Acceder
                                <FontAwesomeIcon icon={faArrowRight} className='pl-1' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProyectComponent
