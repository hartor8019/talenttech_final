import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      <table>
        <thead>
          <tr>
            <th>Proyecto</th>
            <th>Descripción</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Proyecto 1</td>
            <td>Calculadora Basica</td>
            <td><a href="https://github.com/hartor8019/talentotech" target="_blank" rel="noopener noreferrer">Ver Proyecto</a></td>
          </tr>
          <tr>
            <td>Proyecto 2</td>
            <td>Hoja de Vida</td>
            <td><a href="https://github.com/hartor8019/talentotech" target="_blank" rel="noopener noreferrer">Ver Proyecto</a></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Projects;
