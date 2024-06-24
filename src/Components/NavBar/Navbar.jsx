import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <div className='navbar container'>
            <h1 className='logo'><a href="">Chris</a></h1>
            <ul className="nav-menu">
                 <a href="#inicio">Inicio</a>
                 <a href="#sobremi">Sobre Mi</a>
                 <a href="#habilidades">Habilidades</a>
                 <a href="#proyectos">Proyectos</a>
                 <a href="#contacto">Contacto</a>
            </ul>
            <div className="nav-connect">Contactame</div>
        </div>
    </>
  )
}

export default Navbar