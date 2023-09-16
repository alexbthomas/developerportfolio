import React from 'react'
import './experience.css'
import {IoMdCheckmarkCircle} from 'react-icons/io'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoMdCheckmarkCircle className='experience__content-icon'/>
              <h4>HTML</h4>
            </article>

            <article className="experience__details">
              <IoMdCheckmarkCircle className='experience__content-icon'/>
              <h4>CSS</h4>
            </article>

            <article className="experience__details">
              <IoMdCheckmarkCircle className='experience__content-icon'/>
              <h4>JavaScript</h4>
            </article>

            <article className="experience__details">
              <IoMdCheckmarkCircle className='experience__content-icon'/>
              <h4>React</h4>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
                <IoMdCheckmarkCircle className='experience__content-icon'/>
                <h4>Python</h4>
              </article>

            <article className="experience__details">
              <IoMdCheckmarkCircle className='experience__content-icon'/>
              <h4>Java</h4>
            </article>

            <article className="experience__details">
              <IoMdCheckmarkCircle className='experience__content-icon'/>
              <h4>C++</h4>
            </article>

            <article className="experience__details">
              <IoMdCheckmarkCircle className='experience__content-icon'/>
              <h4>mySQL</h4>
            </article>

            <article className="experience__details">
              <IoMdCheckmarkCircle className='experience__content-icon'/>
              <h4>Flask</h4>
            </article>

            <article className="experience__details">
              <IoMdCheckmarkCircle className='experience__content-icon'/>
              <h4>Firebase</h4>
            </article>
          </div>
        </div>

        <div className="experience__other">
          <h3>Other Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoMdCheckmarkCircle className='experience__content-icon'/>
              <h4>Git</h4>
            </article>

            <article className="experience__details">
              <IoMdCheckmarkCircle className='experience__content-icon'/>
              <h4>Communication</h4>
            </article>

            <article className="experience__details">
              <IoMdCheckmarkCircle className='experience__content-icon'/>
              <h4>Problem Solving</h4>
            </article>

            <article className="experience__details">
              <IoMdCheckmarkCircle className='experience__content-icon'/>
              <h4>Adaptability</h4>
            </article>

            <article className="experience__details">
              <IoMdCheckmarkCircle className='experience__content-icon'/>
              <h4>Collaboration</h4>
            </article>

            <article className="experience__details">
              <IoMdCheckmarkCircle className='experience__content-icon'/>
              <h4>Project Management</h4>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience