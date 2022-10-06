import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/arg.jpg'
import HeaderSocials from './HeaderSocials'

export const Header = () => {
  return (
    <header>
     <div className="container header__container">
      <h5>Hello I'm</h5>
      <h5>Caitlin Sisilli</h5>
      <h5 className="text-light">IT Tech</h5>
      <HeaderSocials />
      <CTA/>
      
      <br/>
      <div className="me"> 
        <img src ={ME} alt="me"/>
      </div>
      <a href="#contact" className='scrolldown'>Scroll Down</a>
     </div>
    </header>
  )
}
export default Header