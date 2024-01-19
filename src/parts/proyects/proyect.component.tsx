import firebase from '../../assets/firebaseProyc.png';
import akamika from '../../assets/akamikaProyc.png';
import integra from '../../assets/integragroup.jpg';
import bc from '../../assets/bcCreate.png';
import buttonstyle from '../../assets/buttonstyleportada.png';
import authdash from '../../assets/authdashboard.png';

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
import CardImage from '../../components/card-image.component';

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
                <CardImage
                    image={authdash}
                    title='AUTHDashboard'
                    description='Proyecto de administración de autenticación de usuarios'
                    link='https://auth0rize.leonardoburgosd.site'
                    icons={[
                        <CSharpIcon alto={30} ancho={30} />,
                        <AngularIcon alto={30} ancho={30} />
                    ]} />

                <CardImage
                    image={buttonstyle}
                    title='ButtonStyle'
                    description='Proyecto con HTML y CSS de estilo de botones'
                    link='https://github.com/leonardoburgosd/button-styles'
                    icons={[
                        <HTMLIcon alto={30} ancho={30} />,
                        <CSSIcon alto={30} ancho={30} ></CSSIcon>
                    ]} />

                <CardImage
                    image={bc}
                    title='BCreate'
                    description='Estructura y código SQL para crear un blog'
                    link='https://github.com/leonardoburgosd/bd-structure'
                    icons={[
                        <SqlServerIcon alto={30} ancho={30} />
                    ]} />

                <CardImage
                    image={integra}
                    title='Integra:login'
                    description='Proyecto de diseño de registro y login en Photoshop'
                    link='https://github.com/leonardoburgosd/integra-group'
                    icons={[
                        <PhotoshopIcon alto={30} ancho={30} />
                    ]} />

                <CardImage
                    image={akamika}
                    title='Akamika'
                    description='Platforma de educación online'
                    link='https://www.youtube.com/watch?v=63l2ByJUAUM'
                    icons={[
                        <CSharpIcon alto={30} ancho={30} />,
                        <SqlServerIcon alto={30} ancho={30} />,
                        <BootstrapIcon alto={30} ancho={30} />
                    ]} />

                <CardImage
                    image={firebase}
                    title='Aplicativo movil con IOT'
                    description='Proyecto encendido de diodo led desde Xamarin con Firebase y Arduino sin ESP'
                    link='https://www.youtube.com/watch?v=whdph6Q_oek'
                    icons={[
                        <FirebaseIcon alto={30} ancho={30} />,
                        <CSharpIcon alto={30} ancho={30} />,
                        <XamarinIcon alto={30} ancho={30} />,
                        <ArduinoIcon alto={30} ancho={30} />
                    ]} />
            </div >
        </>
    )
}

export default ProyectComponent
