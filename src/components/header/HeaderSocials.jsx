import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
export const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/caitlin-sisilli-/n' target="_blank" ><BsLinkedin/></a> 
        <a href='https://github.com/csisilli' ><FaGithub/></a> 
    </div>
  )
} 
export default HeaderSocials