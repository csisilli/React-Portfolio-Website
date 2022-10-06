import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import CV from '../../assets/bg-texture.png'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Contact</a>
        
      <div >
        <a href='https://www.linkedin.com/in/caitlin-sisilli-/n' ><BsLinkedin/>  </a> 
        <a href='https://github.com' ><FaGithub/></a> 
      </div>
   

 
    </div>

     
  )
}

export default CTA