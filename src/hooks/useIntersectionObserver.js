import { useState, useEffect } from 'react'

export default function useIntersectionObserver(ref, options = {}) {

  const [isVisible, setIsVisible] = useState(false)

  useEffect( () => {
    const element = ref.current
    if(!element || isVisible) return

    const observer = new IntersectionObserver( ([entry]) => {
      if(entry.isIntersecting) setIsVisible(true)
    }, options )

    observer.observe(element)

    return () => observer.disconnect()
  }, [ref, options, isVisible] )

  return isVisible
}
