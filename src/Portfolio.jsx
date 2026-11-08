import React from 'react'
import './Portfolio.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import useScrollPosition from './hooks/useScrollPosition'

import { FaArrowUp } from "react-icons/fa";



function Portfolio() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Project/>
        <About/>
        <Contact/>
      </main>
      <Footer/>
      <BackTop/>
    </>
  )
}

function BackTop() {

  const isVisible = useScrollPosition(300)

  const scrollToTop = () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <button className={`rounded scroll__to__top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  )
}

export default Portfolio
