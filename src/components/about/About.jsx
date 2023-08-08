import React from 'react'
import './about.css'
import ME from '../../assets/kuttu_pups_bday.jpg'
import {GiTeacher} from 'react-icons/gi'
import {GiLaptop} from 'react-icons/gi'
import {MdSchool} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="snowboy"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiTeacher className='about__icon'/>
              <h5>Experience</h5>
              <small>4+ years teaching programming at theCoderSchool Frisco</small>
            </article>

            <article className='about__card'>
              <GiLaptop className='about__icon'/>
              <h5>Skills</h5>
              <small>HTML/CSS, JavaScript, React, Python, Java, C++, mySQL, AWS, Django</small>
            </article>

            <article className='about__card'>
              <MdSchool className='about__icon'/>
              <h5>Relevant Coursework</h5>
              <small>Data Structures and Algorithms, Artifical Intelligence, Machine Learning</small>
            </article>
          </div>

          <p>
            I am currently a senior at the University of Texas at Dallas (UTD) studying Computer Science.
            My areas of focus right now are in Machine Learning/AI.
          <br></br>
          <br></br>
            I also work at theCoderSchool Frisco where I am in charge of educating
            students on the fundamentals of Computer Science and programming.
          <br></br>
          <br></br>
            I am looking for a Software Engineering internship/entry level position.
            
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About