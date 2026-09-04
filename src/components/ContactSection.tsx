import { useState } from 'react';
import { EmailSend } from './email';

interface ContactSectionProps {
    isDarkMode: boolean;
}

export const ContactSection = ({ isDarkMode }: ContactSectionProps) => {
    const [datosEnvio, setDatosEnvio] = useState({
        email: '',
        descripcion: ''
    });

    const enviar = async () => {
        const email = new EmailSend();
        if (datosEnvio.descripcion !== "" && datosEnvio.email !== "") {
            email.description = datosEnvio.descripcion;
            email.subject = datosEnvio.email + ': te envió un mensaje';

            try {
                await fetch('https://sendmail-api-lcbc.onrender.com/send', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(email)
                });
                setDatosEnvio({ email: '', descripcion: '' });
                alert('Mensaje enviado correctamente');
            } catch (error) {
                console.error('Error sending email:', error);
                alert('Error al enviar el mensaje');
            }
        }
    };

    return (
        <section
            id="contacto"
            className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-0"
        >
            {/* Left - Info */}
            <div>
                <h2
                    className={`font-extrabold tracking-[5px] mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                >
                    CONTACTO
                </h2>
                <p className={`text-sm leading-[1.8] mb-10 max-w-[400px] ${isDarkMode ? 'text-[#666]' : 'text-gray-400'}`}>
                    Soy un desarrollador fullstack con mas de 6 años de
                    experiencia, especializado en backend con .NET y la
                    arquitectura de APIs REST para sistemas empresariales. Estoy
                    listo para hacer realidad tu proximo proyecto.
                </p>
                <div className="flex flex-col gap-6">
                    <div>
                        <h4 className={`text-sm font-bold tracking-[1px] mb-0.5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            LinkedIn
                        </h4>
                        <a
                            href="https://www.linkedin.com/in/leonardo-burgos-diaz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-xs transition-colors duration-300 ${isDarkMode ? 'text-[#666] hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}
                        >
                            linkedin.com/in/leonardo-burgos-diaz
                        </a>
                    </div>
                    <div>
                        <h4 className={`text-sm font-bold tracking-[1px] mb-0.5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            GitHub
                        </h4>
                        <a
                            href="https://github.com/leonardoburgosd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-xs transition-colors duration-300 ${isDarkMode ? 'text-[#666] hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}
                        >
                            github.com/leonardoburgosd
                        </a>
                    </div>
                </div>
            </div>

            {/* Right - Form */}
            <div
                className={`rounded-lg p-8 md:p-10 ${
                    isDarkMode
                        ? 'bg-[#141414] border border-white/[0.05]'
                        : 'bg-gray-50 border border-gray-200'
                }`}
            >
                <h3 className={`text-xl font-extrabold tracking-[4px] mb-10 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    FORMULARIO DE CONTACTO
                </h3>
                <div className="space-y-8">
                    <div>
                        <input
                            type="email"
                            placeholder="Correo"
                            required
                            value={datosEnvio.email}
                            onChange={(e) => setDatosEnvio({ ...datosEnvio, email: e.target.value })}
                            className={`w-full pb-3 bg-transparent border-b outline-none text-sm ${
                                isDarkMode
                                    ? 'border-white/10 text-white placeholder-[#555] focus:border-white/40'
                                    : 'border-gray-300 text-gray-900 placeholder-gray-400 focus:border-gray-600'
                            }`}
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Mensaje"
                            required
                            value={datosEnvio.descripcion}
                            onChange={(e) => setDatosEnvio({ ...datosEnvio, descripcion: e.target.value })}
                            className={`w-full pb-3 bg-transparent border-b outline-none text-sm resize-none overflow-hidden ${
                                isDarkMode
                                    ? 'border-white/10 text-white placeholder-[#555] focus:border-white/40'
                                    : 'border-gray-300 text-gray-900 placeholder-gray-400 focus:border-gray-600'
                            }`}
                            rows={4}
                        />
                    </div>
                    <button
                        onClick={enviar}
                        className={`mt-4 w-full text-[0.65rem] font-semibold tracking-[3px] py-4 rounded-[3px] transition-all duration-300 cursor-pointer ${
                            isDarkMode
                                ? 'text-white border border-white/15 hover:bg-white hover:text-[#0a0a0a]'
                                : 'text-gray-900 border border-gray-300 hover:bg-gray-900 hover:text-white'
                        }`}
                    >
                        ENVIAR MENSAJE
                    </button>
                </div>
            </div>
        </section>
    );
};
