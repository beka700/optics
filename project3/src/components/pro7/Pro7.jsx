import React, { useState, useEffect } from 'react'
import re from '../../assets/Rectangle 25 (2).png'
import re1 from '../../assets/Rectangle 26 (1).png'
import re2 from '../../assets/Rectangle 27.png'
import re3 from '../../assets/Rectangle 28.png'
import re4 from '../../assets/Rectangle 29.png'
import re5 from '../../assets/Rectangle 30.png'
import './pro7.css'

function Pro7() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Анимация появления при скролле
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    const element = document.querySelector('.pro7')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const logos = [
    { src: re, className: 'pro7-photo', delay: 0 },
    { src: re1, className: 'pro7-photo1', delay: 0.1 },
    { src: re2, className: 'pro7-photo', delay: 0.2 },
    { src: re3, className: 'pro7-photo1', delay: 0.3 },
    { src: re4, className: 'pro7-photo', delay: 0.4 },
    { src: re5, className: 'pro7-photo', delay: 0.5 }
  ]

  return (
    <div className='pro7'>
      <h1 className={`pro7-text ${isVisible ? 'animate-text' : ''}`}>
        FEATURED ON
      </h1>
      <div className="pro7-img">
        {logos.map((logo, index) => (
          <div 
            key={index}
            className={`logo-container ${isVisible ? 'animate-logo' : ''}`}
            style={{ 
              animationDelay: `${logo.delay}s`,
              '--logo-index': index
            }}
          >
            <img 
              src={logo.src} 
              className={logo.className}
              alt={`Featured brand ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pro7