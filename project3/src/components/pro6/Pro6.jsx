import React, { useState } from 'react'
import './pro6.css'
import cr from '../../assets/Category (11).png'
import cr1 from '../../assets/Category (12).png'
import cr2 from '../../assets/Category (13).png'
import cr3 from '../../assets/Category (14).png'

function Pro6() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const categories = [
    {
      id: 1,
      image: cr,
      title: 'BIKING',
      description: 'From downhill to endurance through trailing find the perfect fitment for your needs'
    },
    {
      id: 2,
      image: cr1,
      title: 'SKIING',
      description: 'From alpine ski to freeriding here a selection of our products made for every condition'
    },
    {
      id: 3,
      image: cr2,
      title: 'SPORTS',
      description: 'Running, climbing or everything that makes you move and where you need eye protection'
    },
    {
      id: 4,
      image: cr3,
      title: 'SUMMER',
      description: 'From Austria to the Caribbean cause sometimes you just want to get lazy'
    }
  ]

  return (
    <div className='pro6'>
      <div className="pro6-container">
        <div className="pro6-img">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="category-card"
              onMouseEnter={() => setHoveredIndex(category.id)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="image-wrapper">
                <img 
                  src={category.image} 
                  className='category-image' 
                  alt={category.title}
                />
                <div className="gradient-overlay" />
              </div>
              
              <div className="content-overlay">
                <div className="content-wrapper">
                  <div className="title-box">
                    <h3 className="category-title">{category.title}</h3>
                    <div className="title-line" />
                  </div>
                  <p className="category-description">{category.description}</p>
                  <div className="explore-button">
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pro6