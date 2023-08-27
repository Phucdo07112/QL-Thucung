import React from 'react'
import { Link } from 'react-router-dom'
import "./headercss/header.css"
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Header = () => {
  return (
    
        <header >
          <div className='container flex items-center justify-between'>
          <div>
            <img src="/images/Logo.png" alt="Logo"/>
          </div>
          
      <ul>      
        <li><a href='#' class="active">Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Blog</a></li>
        <li><a href='#'>Gallery</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>

      <div  className='flex items-center gap-4' >
      <AiOutlineSearch/>
      <AiOutlineShoppingCart/>
      <div id="login">
      <a href='#'>Login</a>
      </div>
      </div>
      
          </div>
        </header>
    
    





  )
}

export default Header