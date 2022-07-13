import React from 'react'
import './About.css'
import ME from '../../assests//img.webp'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {BsBook} from 'react-icons/bs'
const About = () => {
  return (
   <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className='container about__container'>
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About image" />
        </div>
      </div>
      
      <div className="about__content">
        <div className="about__cards">
        <article className="about__card">
          <BsBook className='about__icon'/>
          <h5>Qualification</h5>
          <small>National Institute of Technology,Patna</small>
        </article>
        <article className="about__card">
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>2 Month Working</small>
        </article>
        <article className="about__card">
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>5+ Projects</small>
        </article>
        </div>
        <p>I am a competitive coder.I have solved 500+ questions on Leetcode,GFG,Codestudio,Codechef.I am 2 ⭐coder at Codechef. Rather than them I am a front-end developer. And my skills are HTML,CSS,JavaScript,React,Programming in c++,Data Structures and Algorithm</p>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
     
      </div>
    </div>

   </section>
  )
}

export default About
