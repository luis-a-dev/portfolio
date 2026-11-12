import React, { useRef } from 'react'
import './About.css'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { rippleEffect } from '../../helpers/animations'
import photo from '../../assets/about/foto.webp'
import cv from '../../assets/pdf/CV-Luis-Adrian-Hernandez-ES.pdf'

import { IoDocumentTextOutline } from "react-icons/io5";

function About() {


  const sectionRef = useRef()
  const contentRef = useRef()
  const isSectionVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1
  })

  const isContentVisible = useIntersectionObserver(contentRef, {
    threshold: 0.1
  })
  return (
    <section id='about' className='about' ref={sectionRef}>
      <h2 className={`reveal ${isSectionVisible ? 'fade__in' : ''}`}>Acerca de mí</h2>
      <div className='container about__container' ref={contentRef}>
        <figure className={`about__img reveal ${isContentVisible ? 'fade__in' : ''}`}>
          <img src={photo} alt="Foto de Luis Adrián" loading='lazy' />
        </figure>
        <div className={`about__me reveal ${isContentVisible ? 'fade__in' : ''}`} style={{ animationDelay: '0.1s' }}>
          <h3>Quién soy</h3>
          <p>
            Soy desarrollador de software con enfoque en backend. 
            Mi formación en ingeniería de software me enseñó a 
            llevar un proyecto completo: analizo los requerimientos, 
            diseño la arquitectura y el modelo de datos, elijo las 
            herramientas adecuadas, implemento y pruebo. Construyo 
            APIs, sistemas de autenticación, comunicación en tiempo 
            real y bases de datos, y también desarrollo apps móviles. 
            Busco oportunidades como desarrollador backend, ya sea en 
            una empresa o como freelance.
          </p>
          <p className='about__availability'>
            Disponible para trabajo remoto o presencial
          </p>
          <a className='btn ripple' href={cv} download='CV-Luis-Adrian-Hernandez.pdf' onClick={(e) => rippleEffect(e)}><IoDocumentTextOutline /> Descargar CV</a>
        </div>
      </div>
    </section>
  )
}

export default About
