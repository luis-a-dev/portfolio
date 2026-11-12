import React, {useState, useRef, useEffect} from 'react'
import './Header.css'

import { rippleEffect } from '../../helpers/animations'
import useScrollPosition from '../../hooks/useScrollPosition'

const navbarItems = [
    {id: 'project', label: 'Proyectos'},
    {id: 'about', label: 'Sobre mí'},
    {id: 'contact', label: 'Contacto'}
]

function Header() {

    const navbarList = useRef()
    const [menuOpen, setMenuOpen] = useState(false)
    const [isDesktop, setIsDesktop] = useState(true)

    const isVisible = useScrollPosition(150)
    

    const toggleMenu = () => {
        if(isDesktop) return

        Array.from(navbarList.current.children).forEach( (item, index) => {
            const link = item.children[0]
            link.style.animation = !menuOpen
            ? `to__left 0.5s ease forwards ${index / 7 + 0.2}s`
            : ''
        } )
        setMenuOpen(!menuOpen)
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1025px)')
      
        const handleMediaChange = (e) => {
          if (e.matches) {
            setMenuOpen(false)
            setIsDesktop(true)
          } else {
            setIsDesktop(false)
          }
        }
      
        handleMediaChange(mediaQuery)
        mediaQuery.addEventListener('change', handleMediaChange)
        return () => {
          mediaQuery.removeEventListener('change', handleMediaChange)
        }
    }, [])

    return (
        <header className={`navbar ${isVisible ? 'visible':''} ${menuOpen ? 'active':''}`}>
            <button 
                className={`rounded navbar__menu__btn ripple ${menuOpen ? 'active':''}`} 
                onClick={(e) => {rippleEffect(e); toggleMenu();}}
                aria-label='Menú de navegación'
                aria-expanded={menuOpen}
            >
                <span/>
                <span/>
                <span/>
            </button>
            <nav className={`navbar__menu ${menuOpen ? 'active':''}`}>
                <ul ref={navbarList} className={`navbar__list ${isVisible ? 'visible':''} ${menuOpen ? 'active':''}`}>
                    { navbarItems.map(item => (
                    <li key={item.id}>
                        <a
                            className={`navbar__link ripple ${menuOpen ? 'active' : ''}`}
                            href={`#${item.id}`}
                            onClick={(e) => rippleEffect(e)}
                        >
                            {item.label}
                        </a>
                    </li>
                    ))}
                </ul>
            </nav> 
        </header>
    )
}

export default Header
