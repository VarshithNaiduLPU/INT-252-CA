import React from 'react'

export default function ProjectItem({ projects }) {
return (
    <div>
        <h3>Projects</h3>
        {projects.map((project) => {
            console.log(project.name);
            return (
                <div>
                    <h4>{project.name}</h4>
                    <p>{project.des}</p>
                    <h5>Technologies Used:</h5>
                    <ul>
                        {project.technologies.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                </div>
            );
        })}
    </div>
);
}
