import React from 'react'
import './Footer.css'
import SocialLinks from '../SocialLinks/SocialLinks'

function Footer() {
  return (
    <footer className='footer'>
      <div className='container footer__content'>
        <small>© {new Date().getFullYear()} Luis Adrián</small>
        <SocialLinks/>
      </div>
    </footer>
  )
}

export default Footer
