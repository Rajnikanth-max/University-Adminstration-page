import React from 'react'
import './about.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


export const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt=""  className='about-img'/>
            <img src={play_icon} alt=""  className='play-icon'/>

        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leader Today</h2>
            <p>Embarak on a transformative educational journey with our university's comprehensive education programs.Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experience needed to excel in the dynamic field of education</p>
            <p>With a focus on innovation, hands-on learning , and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities</p>
            <p>Whether you aspire to become a teacher, admistrator, counselor, or educational leader, our diverse range of pragrams offers the perfect pathway to achieve your goal and unlock your full potentiall in shapping the future of education</p>
        </div>

    </div>
  )
}
