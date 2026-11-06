import React, { useRef } from 'react'
import './Project.css'
import ProjectCard from './ProjectCard'

import { projects } from '../../data/project'

import useIntersectionObserver from '../../hooks/useIntersectionObserver'

function Project() {

  const sectionRef = useRef()
  const containerRef = useRef()
  const isSectionVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1
  })

  const isContainerVisible = useIntersectionObserver(containerRef, {
    threshold: 0.1
  })
  

  return (
    <section id="project" className='project' ref={sectionRef}>
      <h2 className={ isSectionVisible ? 'fade__in' : '' } >Mis proyectos</h2>
      <div className={`project__container ${isContainerVisible ? 'fade__in' : ''}` } ref={containerRef}>
        {
          projects.map( project => (
            <ProjectCard key={project.id} title={project.name} context={project.context} description={project.description} img={project.img} dev={project.dev}/>
          ) )
        }
      </div>
    </section>
  )
}

export default Project
