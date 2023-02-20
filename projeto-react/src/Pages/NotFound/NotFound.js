import { Link } from "react-router-dom" 

import imgForSale from '../../Imagem/ForSale-home.png'

const NotFound = () => {
  return (
    <div id="container">
        <div className="img">
          <img src={imgForSale} alt="Forsale venda de veiculos" />
        </div>
        <p>Veículo não encontrado.</p>
        <p>Pesquise novamente <Link to="/">"Clicando aqui"</Link></p>
    </div>
  )
}

export default NotFound