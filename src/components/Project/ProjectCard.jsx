import React from 'react'
import './ProjectCard.css'

const MAX_VISIBLE_SKILLS = 5

export default function ProjectCard({title, context, img, description, dev}) {
  // Si no caben todas, el último lugar lo ocupa el contador "+N"
  const visibleSkills = dev.length > MAX_VISIBLE_SKILLS ? dev.slice(0, MAX_VISIBLE_SKILLS - 1) : dev
  const hiddenSkills = dev.slice(visibleSkills.length)

  return (
    <div className='project__card'>
        <div className='project__card__area'>
          <figure className='project__card__img'>
            <img src={img} alt={title} />
          </figure>
          <div className="project__card__info">
            <h3>{title}</h3>
            <small className='project__card__context'>{context}</small>
            <p>{description}</p>
          </div>
        </div>
        <ul className='project__card__icon'>
          {
            visibleSkills.map( (skill, index) => (
              <li key={skill.id} style={{ zIndex: visibleSkills.length - index }}>
                <img src={skill.icon} alt={skill.name} title={skill.name} />
              </li>
            ))
          }
          {
            hiddenSkills.length > 0 && (
              <li title={hiddenSkills.map(skill => skill.name).join(', ')}>
                <small>+{hiddenSkills.length}</small>
              </li>
            )
          }
        </ul>
    </div>
  )
}
