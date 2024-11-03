import React from 'react';
import './Footer.css'; // Asegúrate de importar el CSS del footer
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,  faLinkedin, faGithub  } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div>
                <p>&copy; 2024 Harold Torres. Todos los derechos reservados.</p>
                <p>
                    <a href="#about">Sobre mí</a>
                    <a href="#skills">Habilidades</a>
                    <a href="#contact">Contacto</a>
                </p>
            </div>
            <div className="social-icons">
                <a href="https://www.facebook.com/harold.leon.54" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.linkedin.com/in/harold-torres-leon-devinmotion-5b106472/?originalSubdomain=co" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a href="https://github.com/hartor8019/talentotech" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>

               
            </div>
        </footer>
    );
};

export default Footer;
