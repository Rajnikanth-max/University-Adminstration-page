import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

export const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure better education for a better worlds</h1>
            <p>
                Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experience needed to excel in the dynamic field of education
            </p>
            <button className='btn'>Explore more <img src={dark_arrow} alt=''/></button>
        </div>

    </div>
  )
}
