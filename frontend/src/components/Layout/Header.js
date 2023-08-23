import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='container'>
      <nav className='flex items-center'>
        <img src='/images/Logo.png' alt=''/>
        <div>
          {/* <Link to={"/a"} className='text-red-500 text-lg' >home</Link> */}
        </div>
      </nav>
    </header>
  )
}

export default Header