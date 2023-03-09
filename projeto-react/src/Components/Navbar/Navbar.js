import './Navbar.css'

import imgLogo from '../../Imagem/ForSale.png'

import { FiMenu } from 'react-icons/fi'

import { useState, useRef } from 'react'

import { Link, NavLink} from 'react-router-dom'

const Navbar = () => {

    const dropDownRef = useRef(null)

    const [isActive, setIsActive] = useState(false)

    const handleMenu = () => setIsActive(!isActive)

    const closeMenu = () => {

        setTimeout(() => {

            setIsActive(false)

        }, 1000)

    }

  return (
    <div>
    <nav id='nav'>
        <Link to="/"><img src={imgLogo} alt="For sale" /></Link>
        <ul id='nav-links'>
            <li>
                <NavLink to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about">
                    Sobre
                </NavLink>
            </li>
            <li>
                <NavLink to="/publicar">
                    Publicar
                </NavLink>
            </li>
        </ul>
        <div className="btn-menu-mobile" onClick={handleMenu}>
            <FiMenu />
        </div>
    </nav>
    <div ref={dropDownRef} className={`menu ${isActive ? "active" : "inactive"} .hide`}>
            <ul>
                <li>
                    <NavLink to="/"  onClick={closeMenu}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick={closeMenu}>
                     Sobre
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/publicar" onClick={closeMenu}>
                        Publicar
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar