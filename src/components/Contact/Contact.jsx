import React, { useRef } from 'react'
import './Contact.css'
import { rippleEffect } from '../../helpers/animations'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

// Se arma al mostrar la página para que el correo completo no aparezca como texto en el código publicado
const email = ['luisac658', 'outlook.com'].join('@')

function Contact() {

  const sectionRef = useRef()
  const contentRef = useRef()
  const isSectionVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1
  })

  const isContentVisible = useIntersectionObserver(contentRef, {
    threshold: 0.1
  })

  return (
    <section id='contact' className='contact' ref={sectionRef}>
      <h2 className={isSectionVisible ? 'fade__in' : ''}>Contacto</h2>
      <p className={`lead ${isSectionVisible ? 'fade__in' : ''}`}>Si quieres saber más sobre mi trabajo, escríbeme.</p>
      <div className={`contact__me ${isContentVisible ? 'fade__in' : ''}`} ref={contentRef}>
        <form className='contact__form contact__card' action="">
            <div className="contact__row">
                <div className='contact__field'>
                    <label htmlFor="name">Nombre</label>
                    <input id='name' name='name' type="text" placeholder='Tu nombre' autoComplete='name' required/>
                </div>
                <div className='contact__field'>
                    <label htmlFor="email">Correo</label>
                    <input id='email' name='email' type="email" placeholder='Tu correo' autoComplete='email' required/>
                </div>
            </div>
            <div className='contact__field'>
                <label htmlFor="message">Mensaje</label>
                <textarea name="message" id="message" placeholder='Escribe tu mensaje' required></textarea>
            </div>
            <button className='btn ripple' onClick={(e) => rippleEffect(e)} type='submit'>
                Enviar mensaje
            </button>
        </form>
        <address className='contact__info'>
            <div className="contact__card contact__item">
                <div className='contact__icon rounded'>
                    <MdEmail />
                </div>
                <div className='contact__detail'>
                    <span className='contact__label'>Correo</span>
                    <p>{email}</p>
                </div>
            </div>
            <div className="contact__card contact__item">
                <div className="contact__icon rounded">
                    <FaLocationDot />
                </div>
                <div className='contact__detail'>
                    <span className='contact__label'>Ubicación</span>
                    <p>Zacatecas, México</p>
                </div>
            </div>
        </address>
      </div>
    </section>
  )
}

export default Contact
