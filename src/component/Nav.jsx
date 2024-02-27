import React from 'react'
import image from '../asserts/logo.png'
import './Nav.css'

function Nav() {
  return (
    <div className='nav'>
        <img src={image} alt='logo'/>
    </div>
  )
}

export default Nav