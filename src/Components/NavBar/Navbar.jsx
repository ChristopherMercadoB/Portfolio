import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <div className='navbar container'>
            <h1 className='logo'><a href="">Chris</a></h1>
            <ul className="nav-menu">
                <li>Inicio</li>
                <li>Sobre mi</li>
                <li>Servicios</li>
                <li>Portafolio</li>
                <li>Contacto</li>
            </ul>
            <div className="nav-connect">Contactame</div>
        </div>
    </>
  )
}

export default Navbar