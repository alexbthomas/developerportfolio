import React from 'react'
import './contact.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_98ej73t', 'template_f7l6v7u', form.current, 'M8VAx1dJ28M1ZHiRq')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/alex-b-thomas/" target="_blank"  >Let's Connect!</a>
          </article>

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>alexbthomas03@gmail.com</h5>
            <a href="mailto:alexbthomas03@gmail.com" target="_blank"  >Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        
      </div>
    </section>

  )
}

export default Contact