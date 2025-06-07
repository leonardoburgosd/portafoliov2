import firebase from '../../assets/firebaseProyc.png';
import akamika from '../../assets/akamikaProyc.png';
import integra from '../../assets/integragroup.jpg';
import bc from '../../assets/bcCreate.png';
import buttonstyle from '../../assets/buttonstyleportada.png';
import authdash from '../../assets/authdashboard.png';
import diningApp from '../../assets/diningAppPresentation.png';
import diningApp1 from '../../assets/dinningApp1.jpg';
import diningApp2 from '../../assets/dinningApp2.jpg';
import diningApp3 from '../../assets/dinningApp3.jpg';
import diningApp4 from '../../assets/dinningApp4.jpg';
import diningApp5 from '../../assets/dinningApp5.jpg';
import diningApp6 from '../../assets/dinningApp6.jpg';
import diningApp7 from '../../assets/dinningApp7.jpg';
import diningApp8 from '../../assets/dinningApp8.jpg';
import diningApp9 from '../../assets/dinningApp9.jpg';

import AngularIcon from '../../assets/icons/angular.icon';
import SqlServerIcon from '../../assets/icons/sqlserver.icon';
import PhotoshopIcon from '../../assets/icons/photoshop.icon';
import FirebaseIcon from '../../assets/icons/firebase.icon';
import BootstrapIcon from '../../assets/icons/bootstrap.icon';
import HTMLIcon from '../../assets/icons/html.icon';
import CSSIcon from '../../assets/icons/css.icon';
import CSharpIcon from '../../assets/icons/csharp.icon';
import XamarinIcon from '../../assets/icons/xamarin.icon';
import ArduinoIcon from '../../assets/icons/arduino.icon';
import FluterFlowIcon from '../../assets/icons/flutterflow.icon';
import CardImage from '../../components/card-image.component';
import { useEffect, useState } from 'react';
import Proyects from '../../data/entities/project/entityProject';
import { getProjects } from '../../data/services/projects.services';

function ProyectComponent() {
    const [projects, setProyects] = useState<Proyects[]>([]);
    const [isDiningAppModalOpen, setIsDiningAppModalOpen] = useState(false);

    const obtenerProyectos = async () => {
        const projectResponse: Proyects[] = await getProjects();
        setProyects(projectResponse);
    }

    const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
    const carouselImages = [
        diningApp1,
        diningApp2,
        diningApp3,
        diningApp4,
        diningApp5,
        diningApp6,
        diningApp7,
        diningApp8,
        diningApp9,
    ];
    useEffect(() => {
    }, [isDiningAppModalOpen]);
    const nextCarouselSlide = () => {
        setCurrentCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    };

    const prevCarouselSlide = () => {
        setCurrentCarouselIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
    };

    useEffect(() => {
        obtenerProyectos();
    }, []);

    // Función para abrir el modal de "Dining App"
    const openDiningAppModal = () => {
        setIsDiningAppModalOpen(true);
    };

    // Función para cerrar el modal de "Dining App"
    const closeDiningAppModal = () => {
        setIsDiningAppModalOpen(false);
    };

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
                {projects.map((project, index) => (
                    <CardImage
                        key={index}
                        image={'https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/' + project.image}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        icons={[
                            <CSharpIcon alto={30} ancho={30} title='C#' />,
                            <AngularIcon alto={30} ancho={30} title='Angular' />
                        ]} />
                ))}
                <div
                    className="cursor-pointer" // Añade cursor de puntero para indicar interactividad
                    onClick={openDiningAppModal} // Al hacer clic, se abre el modal estático
                >
                    <CardImage
                        image={diningApp}
                        title='Dining App'
                        description='Aplicacion móvil para registro de pases de comida con Firebase y FlutterFlow'
                        link=''
                        icons={[<FirebaseIcon alto={30} ancho={30} title='Firebase' />,<FluterFlowIcon alto={30} ancho={30} title='FlutterFlow' />]}
                    />
                </div>
                <CardImage
                    image={authdash}
                    title='AUTHDashboard'
                    description='Proyecto de administración de autenticación de usuarios'
                    link='https://auth0rize.leonardoburgosd.site'
                    icons={[
                        <CSharpIcon alto={30} ancho={30} title='C#' />,
                        <AngularIcon alto={30} ancho={30} title='Angular' />
                    ]} />

                <CardImage
                    image={buttonstyle}
                    title='ButtonStyle'
                    description='Proyecto con HTML y CSS de estilo de botones'
                    link='https://github.com/leonardoburgosd/button-styles'
                    icons={[
                        <HTMLIcon alto={30} ancho={30} title='HTML' />,
                        <CSSIcon alto={30} ancho={30} title='CSS' ></CSSIcon>
                    ]} />

                <CardImage
                    image={bc}
                    title='BCreate'
                    description='Estructura y código SQL para crear un blog'
                    link='https://github.com/leonardoburgosd/bd-structure'
                    icons={[
                        <SqlServerIcon alto={30} ancho={30} title='SqlServer' />
                    ]} />

                <CardImage
                    image={akamika}
                    title='Akamika'
                    description='Platforma de educación online'
                    link='https://www.youtube.com/watch?v=63l2ByJUAUM'
                    icons={[
                        <CSharpIcon alto={30} ancho={30} title='C#' />,
                        <SqlServerIcon alto={30} ancho={30} title='SqlServer' />,
                        <BootstrapIcon alto={30} ancho={30} title='Bootstrap' />
                    ]} />

                <CardImage
                    image={integra}
                    title='Integra:login'
                    description='Proyecto de diseño de registro y login en Photoshop'
                    link='https://github.com/leonardoburgosd/integra-group'
                    icons={[
                        <PhotoshopIcon alto={30} ancho={30} title='Photoshop' />
                    ]} />

                <CardImage
                    image={firebase}
                    title='Aplicativo movil con IOT'
                    description='Proyecto encendido de diodo led desde Xamarin con Firebase y Arduino sin ESP'
                    link='https://www.youtube.com/watch?v=whdph6Q_oek'
                    icons={[
                        <FirebaseIcon alto={30} ancho={30} title='Firebase' />,
                        <CSharpIcon alto={30} ancho={30} title='C#' />,
                        <XamarinIcon alto={30} ancho={30} title='Xamarin' />,
                        <ArduinoIcon alto={30} ancho={30} title='Arduino' />
                    ]} />
            </div >
            {/* Modal Estático para "Dining App" */}
            {isDiningAppModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[1000]">
                    <div className="relative bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-5xl w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3"> {/* Ancho del modal reducido en un 30% aproximadamente */}
                        {/* Botón de cierre del modal */}
                        <button
                            onClick={closeDiningAppModal}
                            className="absolute top-3 right-3 text-white hover:text-gray-300 focus:outline-none z-10"
                            aria-label="Cerrar modal"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Contenido del Modal: Descripción a la izquierda, Carrusel a la derecha */}
                        <div className="flex flex-col md:flex-row items-start gap-6"> {/* Ajustamos el 'gap' para mantener la cohesión */}
                            {/* Sección de la Descripción y Funcionalidades (Izquierda) */}
                            <div className="w-full md:w-1/3"> {/* Ahora ocupa 1/3 del ancho en pantallas grandes */}
                                <h3 className="text-2xl font-bold mb-2">Dining App</h3>
                                <h4 className='font-bold'>Funcionalidades</h4>
                                <ul className="text-gray-300 list-disc list-inside mb-4">
                                    <li>Registro de empleados.</li>
                                    <li>Registro de pases de comida por documento de identidad.</li>
                                </ul>
                                <h4 className='font-bold'>Características</h4>
                                <ul className="text-gray-300 list-disc list-inside mb-4">
                                    <li>Funcionamiento offline.</li>
                                    <li>Impresión térmica por bluetooth.</li>
                                    <li>Desarga de reporte.</li>
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="p-2 rounded-full bg-gray-800">
                                        <FirebaseIcon alto={30} ancho={30} title='Firebase' />
                                    </span>
                                    <span className="p-2 rounded-full bg-gray-800">
                                        <FluterFlowIcon alto={30} ancho={30} title='FlutterFlow' />
                                    </span>
                                </div>
                            </div>

                            {/* Sección del Carrusel (Derecha) */}
                            <div className="w-full md:w-2/3"> {/* Ahora ocupa 2/3 del ancho en pantallas grandes */}
                                <div className="relative w-full mx-auto">
                                    <div className="overflow-hidden rounded-lg h-[550px]"> {/* Altura del carrusel aún más aumentada */}
                                        <div
                                            className="flex transition-transform duration-500 ease-in-out h-full"
                                            style={{ transform: `translateX(-${currentCarouselIndex * 100}%)` }}
                                        >
                                            {carouselImages.map((image, index) => (
                                                <img
                                                    key={index}
                                                    src={image}
                                                    alt={`Dining App Image ${index + 1}`}
                                                    className="w-full h-full flex-shrink-0 object-contain"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    {/* Botones de navegación del carrusel */}
                                    <button
                                        onClick={prevCarouselSlide}
                                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
                                        aria-label="Anterior imagen"
                                    >
                                        {'<'}
                                    </button>
                                    <button
                                        onClick={nextCarouselSlide}
                                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
                                        aria-label="Siguiente imagen"
                                    >
                                        {'>'}
                                    </button>
                                    {/* Indicadores de diapositivas (opcional) */}
                                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                                        {carouselImages.map((_, index) => (
                                            <span
                                                key={index}
                                                className={`block w-2 h-2 rounded-full cursor-pointer ${index === currentCarouselIndex ? 'bg-white' : 'bg-gray-400'}`}
                                                onClick={() => setCurrentCarouselIndex(index)}
                                            ></span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProyectComponent
