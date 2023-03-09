import { Link } from "react-router-dom" 

import './NotFound.css'

import imgForSale from '../../Imagem/ForSale-home.png'

const NotFound = () => {
  return (
    <div id="container-notfound">
      <div className="notfound">
        <div className="img">
          <img src={imgForSale} alt="Forsale venda de veiculos" />
        </div>
        <p>Veículo não encontrado.</p>
        <p>Pesquise novamente <Link to="/">"Clicando aqui"</Link></p>
      </div>
    </div>
  )
}

export default NotFound