import React, { useEffect, useState } from 'react';
import './skills.css';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await fetch('http://localhost:5000/skills');
                const data = await response.json();
                setSkills(data);
            } catch (error) {
                console.error('Error al obtener habilidades:', error);
            }
        };

        fetchSkills();
    }, []);

    return (
        <div id="skills-section" className="skills-container">
            <h2>Mis Skills</h2>
            <ol className="skills-list">
                {skills.map(skill => (
                    <li key={skill.id} className="skill-item">
                        <strong>{skill.skill_name}</strong>: {skill.description} ({skill.category})
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Skills;
