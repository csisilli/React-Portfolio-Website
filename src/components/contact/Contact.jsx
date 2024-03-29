import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'
import {FaPhoneSquareAlt} from 'react-icons/fa'
export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>caitlinsisilli@gmail.com</h5>
            <a href="mailto:caitlinsisilli@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <SiMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Linkdln</h5>
            <a href="https://www.linkedin.com/in/caitlin-sisilli-/" target="_blank">Send a Message</a>
          </article>

        </div>
        {/*END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name ='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
export default Contact