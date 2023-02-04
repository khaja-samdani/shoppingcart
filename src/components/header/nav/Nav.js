import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
        <div className='navbar'>
            <Link to='/' className='link'>Home</Link>
            <Link to='cart' className='link'>Cart</Link>
            <Link to='contacts' className='link'>Contact</Link>
            <Link to='about' className='link'>About us</Link>
        </div>
    )
}

export default Nav