import { useState } from 'react';

export class EmailSend {
    public subject!: string;
    public description!: string;
}

const FooterComponent: React.FC = () => {
    const [datosEnvio, setDatosEnvio] = useState({
        email: '',
        descripcion: ''
    })
    const [mostrarDiv, setMostrarDiv] = useState(false);
    const [mostrarErrorDiv, setMostrarErrorDiv] = useState(false);

    const toggleDiv = () => {
        setMostrarDiv(!mostrarDiv);
    };
    const toggleErrorDiv = () => {
        setMostrarErrorDiv(!mostrarErrorDiv);
    };

    const enviar = async () => {
        let email: EmailSend = new EmailSend();
        debugger
        if (datosEnvio.descripcion != "" && datosEnvio.email != "") {

            email.description = datosEnvio.descripcion;
            email.subject = datosEnvio.email + ': te envió un mensaje';

            await fetch('https://mailsend-eight.vercel.app/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(email)
            });
            setDatosEnvio({
                email: '',
                descripcion: ''
            });
            setMostrarDiv(!mostrarDiv);
            setMostrarErrorDiv(false);

        } else {
            setMostrarDiv(false);
            setMostrarErrorDiv(!mostrarErrorDiv);
        }
    }

    return (
        <footer className="bg-[#2F80ED]">
            <div className="sm:max-w-lg sm:mx-auto sm:p-6 md:hidden">
                <div className="flex flex-col p-2">
                    <h1 className="text-xl font-bold pb-4">Contáctame</h1>
                    <div className="w-full ">
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
                            <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={datosEnvio.email} onChange={(e) => setDatosEnvio({ ...datosEnvio, email: e.target.value })} placeholder="name@mail.com" required />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mensaje</label>
                            <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mensaje" value={datosEnvio.descripcion}
                                onChange={(e) => setDatosEnvio({ ...datosEnvio, descripcion: e.target.value })} required>
                            </textarea>
                        </div>
                        <button onClick={enviar} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
                    </div>
                </div>
                <span className="text-white">© 2023 Leonardo Burgos. All Rights Reserved.</span>
            </div>

            <div className="hidden md:p-2 md:max-w-7xl md:items-end md:justify-between md:mx-auto md:relative md:z-0 md:flex">
                <div className="flex flex-col w-1/3 p-4">
                    <span className="text-white">© 2023 Leonardo Burgos. All Rights Reserved.</span>
                </div>
                <div className="flex flex-col w-1/3 p-4">
                    <h1 className="text-xl font-bold pb-4">Contáctame</h1>
                    <div className="max-w-sm">
                        {mostrarDiv &&
                            <div id="alert-3" className="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 m-2" role="alert">
                                <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span className="sr-only">Info</span>
                                <div className="ms-3 text-sm font-medium">
                                    Mensaje enviado correctamente
                                </div>
                                <button onClick={toggleDiv} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-3" aria-label="Close">
                                    <span className="sr-only">Close</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </button>
                            </div>
                        }

                        {mostrarErrorDiv && <div id="alert-2" className="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                            <span className="sr-only">Info</span>
                            <div className="ms-3 text-sm font-medium">
                                Debe ingresar toda la información
                            </div>
                            <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-2" onClick={toggleErrorDiv} aria-label="Close">
                                <span className="sr-only">Close</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>}

                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
                            <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={datosEnvio.email} onChange={(e) => setDatosEnvio({ ...datosEnvio, email: e.target.value })} placeholder="name@mail.com" required />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mensaje</label>
                            <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mensaje" value={datosEnvio.descripcion}
                                onChange={(e) => setDatosEnvio({ ...datosEnvio, descripcion: e.target.value })} required>
                            </textarea>
                        </div>
                        <button onClick={enviar} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>

                    </div>

                </div>
            </div>

        </footer>

    )
}

export default FooterComponent
