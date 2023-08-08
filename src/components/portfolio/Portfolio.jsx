import React from 'react'
import './portfolio.css'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            {/* <img src={IMG1} alt=""/> */}
          </div>
          <h3>Chat Bot</h3>
          {/* NLTK */}
          <a href = "https://github.com" className='btn'>Github</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            {/* <img src={IMG1} alt=""/> */}
          </div>
          {/* Pytorch */}
          <h3>Image Classifier</h3>
          <a href = "https://github.com" className='btn'>Github</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            {/* <img src={IMG1} alt=""/> */}
          </div>
          {/* Django and mySQL */}
          <h3>Healthcare Management System</h3>
          <a href = "https://github.com" className='btn'>Github</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            {/* <img src={IMG1} alt=""/> */}
          </div>
          {/* React */}
          <h3>Personal Website</h3>
          <a href = "https://github.com" className='btn'>Github</a>
        </article>

        {/* AWS project potentially */}
      </div>
    </section>
    
  )
}

export default Portfolio