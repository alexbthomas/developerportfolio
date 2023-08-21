import React from 'react'
import './portfolio.css'

const data = [
  {
    id: 1,
    // image: IMG1,
    title: 'Image Classifier (CNN)',
    github: "https://github.com/alexbthomas/imageclassifier"
  },
  {
    id: 2,
    // image: IMG1,
    title: 'Chat Bot',
    github: "https://github.com"
  },
  {
    id: 3,
    // image: IMG1,
    title: 'Personal Website',
    github: "https://github.com/alexbthomas/developerportfolio"
  },
  {
    id: 4,
    // image: IMG1,
    title: 'Space Shooter',
    github: "https://github.com/alexbthomas/spaceshooter"
  },
]




function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  {/* <img src={image} alt={title}/> */}
                </div>
                <h3>{title}</h3>
                {/* Tensorflow Python */}
                <div className='portfolio__item-cta'>
                  <a href = {github} target="_blank" className='btn'>Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
    
  )
}

export default Portfolio