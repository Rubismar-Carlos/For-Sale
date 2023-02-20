import './About.css'

import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div id='container'>
        <h1>ForSale</h1>
        <p>O site para vender seu veículo.</p>
        <p>Nosso site tem o unico objetivo de te ajudar a vender seu veículo com apenas um <span>Click</span>
        </p>
        <p>Está a procura de algum carro ? <Link to="/">Pesquisar carros</Link></p>
        <p>Está querendo vender seu carro ? <Link to="/publicar">Publicar carro</Link></p>
    </div>
  )
}

export default About