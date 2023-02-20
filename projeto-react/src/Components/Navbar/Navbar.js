import './Navbar.css'

import imgLogo from '../../Imagem/ForSale.png'

import { Link, NavLink} from 'react-router-dom'

const Navbar = () => {

  return (
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
    </nav>
  )
}

export default Navbar