import React from 'react';
import about from '../about.png';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>Harold Torres Leon</h2>
      <div className="about-content">
        <img src={about} alt="Mi foto" />
        <p>Ingeniero de Sistemas en proceso de especialización en Inteligencia Artificial, con una fuerte pasión por el desarrollo de software. Comprometido con la innovación y el uso de tecnologías avanzadas para resolver problemas complejos, buscando contribuir con soluciones efectivas y de alto impacto.</p>
      </div>
    </section>
  );
}

export default About;
