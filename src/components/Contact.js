import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); // Estado para manejar mensajes

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que la página se recargue

        const userData = { name, email, password };

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                // Si la respuesta es exitosa, mostrar mensaje de éxito
                const responseData = await response.json();
                setMessage(responseData.message || 'Usuario registrado exitosamente.');
                // Limpiar los campos del formulario
                setName('');
                setEmail('');
                setPassword('');
            } else {
                // Manejar errores y mostrar mensaje
                const errorData = await response.json();
                setMessage(errorData.message || 'Error al registrar el usuario.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error en la conexión con el servidor.');
        }
    };

    return (
        <div className="contact-page"> 
         <div className="contact-container">
            <h2>Formulario de Registro</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Registrar</button>
            </form>
            {message && <p className="message">{message}</p>} {/* Mostrar el mensaje */}
        </div>
    </div>
    );
};

export default Contact;
