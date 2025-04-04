import AngularIcon from '../../assets/icons/angular.icon';
import CSharpIcon from '../../assets/icons/csharp.icon';
import CardImage from '../../components/card-image.component';
import { useEffect, useState } from 'react';
import Proyects from '../../data/entities/project/entityProject';
import data from '../../data/entities/project/projects.json';

function ProyectComponent() {
    const [projects, setProyects] = useState<Proyects[]>([]);

    const obtenerProyectos = async () => {
        const projectResponse: Proyects[] = data;
        setProyects(projectResponse);
    }

    useEffect(() => {
        obtenerProyectos();
    }, []);

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
            <div id='proyects' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <CardImage
                        key={index}
                        image={project.image}
                        title={project.title}
                        fuente={project.fuente}
                        description={project.description}
                        link={project.link}
                        icons={[
                            <CSharpIcon alto={30} ancho={30} />,
                            <AngularIcon alto={30} ancho={30} />
                        ]} />
                ))}
            </div >
        </>
    )
}

export default ProyectComponent
