import React from 'react'
import ProjectItem from '../../../components/ProjectItem'

export default function page() {
  let projects = [
    {
        name : "Portfolio Website",
        des : "A personal portfolio website",
        technologies : ["React", "Bootsrap", "CSS"]
    },
    {
        name : "E-commerce Site",
        des : "An online store for electronics",
        technologies : ["React", "Redux", "NodeJS"]
    }
  ];
    return (
    <div>
        <h1>John Doe's Portfolio</h1>
        <h2>Full Stack Developer</h2>
        <br />
        <h3>About Me</h3>
        <p>I am a full stack developer with a passion for creaating dynamic and responsive web applications. I have experience in various technologies and enjoy learning new tools and frameworks</p>
        <ProjectItem projects = {projects}/>
    </div>
  )
}
