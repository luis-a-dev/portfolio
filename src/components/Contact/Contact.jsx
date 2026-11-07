import React, { useCallback, useRef, useState } from 'react'
import './Contact.css'
import { rippleEffect } from '../../helpers/animations'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import Toast from '../Toast/Toast'

import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

// Se arma al mostrar la página para que el correo completo no aparezca como texto en el código publicado
const email = ['luisac658', 'outlook.com'].join('@')
const FORM_ENDPOINT = 'https://formspree.io/f/mzeeqepo'

const TOAST_MESSAGES = {
  success: 'Mensaje enviado. Te responderé lo antes posible.',
  error: 'No se pudo enviar el mensaje. Inténtalo de nuevo.'
}

function Contact() {
  const sectionRef = useRef()
  const contentRef = useRef()
  const isSectionVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1
  })
  
  const isContentVisible = useIntersectionObserver(contentRef, {
    threshold: 0.1
  })

  const [isSending, setIsSending] = useState(false)
  const [isToastOpen, setIsToastOpen] = useState(false)
  const [toastType, setToastType] = useState('success')

  const closeToast = useCallback(() => setIsToastOpen(false), [])

  const handleSubmit = async(e) => {
    e.preventDefault()

    const form = e.currentTarget
    setIsSending(true)
    setIsToastOpen(false)

    try {
        const response = await fetch(FORM_ENDPOINT, {
            method: 'POST',
            body: new FormData(form),
            headers: { Accept: 'application/json' }
        })

        if(!response.ok) throw new Error('El servicio rechazó el envío')
        
        form.reset()
        setToastType('success')
    } catch {
        setToastType('error')
    } finally {
        setIsSending(false)
        setIsToastOpen(true)
    }
  }

  return (
    <section id='contact' className='contact' ref={sectionRef}>
      <h2 className={isSectionVisible ? 'fade__in' : ''}>Contacto</h2>
      <p className={`lead ${isSectionVisible ? 'fade__in' : ''}`}>Si quieres saber más sobre mi trabajo, escríbeme.</p>
      <div className={`contact__me ${isContentVisible ? 'fade__in' : ''}`} ref={contentRef}>
        <form className='contact__form contact__card' onSubmit={handleSubmit}>
            <input type='hidden' name='_subject' value='Nuevo mensaje desde el portafolio' />
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
            <input type='text' name='_gotcha' className='contact__trap' tabIndex={-1} autoComplete='off' />
            <button className='btn ripple' onClick={(e) => rippleEffect(e)} type='submit' disabled={isSending}>
                {isSending ? 'Enviando…' : 'Enviar mensaje'}
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
      <Toast
        isOpen={isToastOpen}
        type={toastType}
        message={TOAST_MESSAGES[toastType]}
        duration={toastType === 'success' ? 4000 : undefined}
        onClose={closeToast}
      />
    </section>
  )
}

export default Contact
