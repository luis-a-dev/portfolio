import React, { useRef } from 'react'

import './Hero.css'
import { useParallax } from '../../hooks/useParallax'
import SocialLinks from '../SocialLinks/SocialLinks'
import moon from '../../assets/hero/bg__moon.webp'
import forest from '../../assets/hero/bg__forest.webp'

function Hero() {

  const moonParallaxRef = useRef(null)
  const forestParallaxRef = useRef(null)
  useParallax(moonParallaxRef, 0.35)
  useParallax(forestParallaxRef, 0.15)

  return (
    <section className='hero'>
      <figure>
        <img src={moon} alt="" ref={moonParallaxRef} />
        <img src={forest} alt="" ref={forestParallaxRef}/>
      </figure>
      <h1>Luis Adrián</h1>
      <p>Desarrollador backend y móvil</p>
      <div className='hero__links'>
        <SocialLinks/>
      </div>
    </section>
  )
}

export default Hero
