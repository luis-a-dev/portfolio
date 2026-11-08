import React, { useRef, useState } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'
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

  const isDesktop = useMediaQuery('(min-width: 1072px)')
  const isTablet = useMediaQuery('(min-width: 728px)')
  const limit = isDesktop ? 6 : isTablet ? 4 : 3

  const [isExpanded, setIsExpanded] = useState(false)
  const visibleProjects = isExpanded ? projects : projects.slice(0, limit)
  const hiddenCount = projects.length - limit

  const toggleProjects = () => {
    if (isExpanded) sectionRef.current.scrollIntoView({ behavior: 'smooth' })
    setIsExpanded(!isExpanded)
  }


  return (
    <section id="project" className='project' ref={sectionRef}>
      <h2 className={ isSectionVisible ? 'fade__in' : '' } >Mis proyectos</h2>
      <div id='project-list' className={`container project__container ${isContainerVisible ? 'fade__in' : ''}` } ref={containerRef}>
        {
          visibleProjects.map(
            (project, index) => (
              <ProjectCard 
                key={project.id} 
                title={project.name} 
                context={project.context} 
                description={project.description} 
                img={project.img}
                imgAlt={project.imgAlt}
                dev={project.dev}
                revealDelay={index >= limit ? (index - limit) * 0.08 : undefined}
              />
            )
          )
        }
      </div>
      {
        hiddenCount > 0 && (
          <button
            className='btn project__more'
            onClick={toggleProjects}
            aria-expanded={isExpanded}
            aria-controls='project-list'
          >
            {isExpanded ? 'Ver menos' : `Ver más proyectos (${hiddenCount})`}
          </button>
        )
      }
    </section>
  )
}

export default Project
