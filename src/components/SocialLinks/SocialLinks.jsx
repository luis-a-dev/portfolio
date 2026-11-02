import React from 'react'
import './SocialLinks.css'
import { socialLinks } from '../../data/social'

function SocialLinks() {
  return (
    <div className='social__network'>
      {socialLinks.map(link => (
        <a key={link.name} className='icon rounded' href={link.url || undefined} aria-label={link.name} target='_blank' rel='noopener noreferrer'><link.Icon /></a>
      ))}
    </div>
  )
}

export default SocialLinks
