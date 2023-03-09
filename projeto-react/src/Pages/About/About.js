import './About.css'

import { Link } from 'react-router-dom'

import imgAbout from '../../Imagem/ForSale-home.png'

const About = () => {
  return (
    <div id='container'>
        <div className='central-about'>
          <div className="img">
            <img src={imgAbout} alt="For sale" />
          </div>
          <p>O site para vender seu veículo.</p>
          <p>Nosso site tem o unico objetivo de te ajudar a vender seu veículo com apenas um <span>Click</span></p>
          <p>Está a procura de algum carro ? <Link to="/">Pesquisar carros</Link></p>
          <p>Está querendo vender seu carro ? <Link to="/publicar">Publicar carro</Link></p>
        </div>
    </div>
  )
}

export default About