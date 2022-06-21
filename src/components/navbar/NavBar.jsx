import React from 'react'
import Logo from '../../assets/logo.png'
import './navBar.scss'

export const NavBar = () => {
    return (
        <nav className='navbar'>
            <img className='nav-logo' src={Logo} alt="Logo Alejandro Maure Development" />
            <ul className="nav-menu">
                <li className="nav-item">
                <a href="#home" className='nav-link'>home</a>
                </li>
                <li className="nav-item">
                <a href="#about" className='nav-link'>about</a>
                </li>
                <li className="nav-item">
                <a href="#project" className='nav-link'>proyects</a>
                </li>
                <li className="nav-item">
                <a href="#practice" className='nav-link'>practices</a>
                </li>
                <li className="nav-item">
                <a href="#contact" className='nav-link'>contact</a>
                </li>
            </ul>
        </nav>
    )
}
