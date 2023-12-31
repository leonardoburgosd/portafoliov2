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

    const enviar = async () => {
        let email: EmailSend = new EmailSend();
        email.description = datosEnvio.descripcion;
        email.subject = datosEnvio.email + ': te envió un mensaje';

        await fetch('https://mailsend-eight.vercel.app/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(email)
        });
        datosEnvio.email = '';
        datosEnvio.descripcion = '';
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
