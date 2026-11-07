import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './Toast.css'
import { MdCheckCircle, MdError, MdClose } from 'react-icons/md'

export default function Toast({ isOpen, type, message, duration, onClose }) {
  useEffect(() => {
    if (!isOpen || !duration) return
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [isOpen, duration, onClose])

  return createPortal(
    <div className={`toast ${type} ${isOpen ? 'visible' : ''}`} role='status'>
      {type === 'error' ? <MdError className='toast__icon' /> : <MdCheckCircle className='toast__icon' />}
      <p>{message}</p>
      <button className='toast__close' onClick={onClose} aria-label='Cerrar aviso'>
        <MdClose />
      </button>
    </div>,
    document.body
  )
}
