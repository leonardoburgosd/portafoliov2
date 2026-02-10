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
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(email)
                });
                setDatosEnvio({
                    email: '',
                    descripcion: ''
                });
                alert('Mensaje enviado correctamente'); // Added feedback
            } catch (error) {
                console.error('Error sending email:', error);
                alert('Error al enviar el mensaje');
            }
        } else {
            // Handle empty fields
        }
    }

    const textSecondary = isDarkMode ? 'text-gray-300' : 'text-gray-600';
    const cardClasses = isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';

    return (
        <section id="contacto" className={`py-20 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Trabajemos juntos</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                    <p className={`text-xl ${textSecondary}`}>
                        ¿Listo para hacer realidad tus ideas? Cuentame de tu próximo proyecto.
                    </p>
                </div>

                <div className={`${cardClasses} rounded-2xl shadow-xl p-8 border`}>
                    <div className="space-y-6">
                        <div>
                            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Correo</label>
                            <input
                                type="email"
                                className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-400' : 'border-gray-300 bg-white focus:border-blue-600'} rounded-lg focus:ring-2 focus:ring-blue-600/20 focus:border-transparent transition-all duration-200`}
                                placeholder="your@email.com"
                                value={datosEnvio.email} onChange={(e) => setDatosEnvio({ ...datosEnvio, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Mensaje</label>
                            <textarea
                                onChange={(e) => setDatosEnvio({ ...datosEnvio, descripcion: e.target.value })} required
                                rows={6}
                                className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-400' : 'border-gray-300 bg-white focus:border-blue-600'} rounded-lg focus:ring-2 focus:ring-blue-600/20 focus:border-transparent transition-all duration-200 resize-none`}
                                placeholder="Hablame de tu proyecto..."
                                value={datosEnvio.descripcion}
                            ></textarea>
                        </div>
                        <button onClick={enviar}
                            type="submit"
                            className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
