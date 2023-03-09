import './Detalhes.css'

import { useParams,} from 'react-router-dom'

import { useFetch } from '../../Hooks/useFetch'

import { BsWhatsapp  } from 'react-icons/bs'

const Detalhes = () => {

  const { id } = useParams()

  const url = "http://localhost:3000/cars/" + id 

  const { data: car, loading } = useFetch(url)

  return (
    <div className="car">
      
      {loading && <p>Carregando...</p>}
      {car &&
        <div id='car-detalhe'>
          <div className="car-img">
            <h2>{car.nome}</h2>
          </div>
          <div className="inf-cars">
            <div className="inf-left">
                <p>Marca</p>
                <p>Combustivel</p>
                <p>Cor</p>
                <p>Quilômetros</p>
                <p>R$</p>
            </div>
            <div className="inf-center">
                <p>{car.marca}</p>
                <p>{car.comb}</p>
                <p>{car.cor}</p>
                <p>{car.km}</p>
                <p>{car.valor}</p>
            </div>
          </div>
          <div className="ctt-car">
            <h4>Informações do vendedor</h4>
              <div className='propri-ctt'>
                <p>{car.prop}</p>
                <p><a href={`https://wa.me/55${car.whats}?text=Me+interessei+no+carro`} target={"_blank"} rel="noreferrer" className='link-prop'><BsWhatsapp /> {car.whats}</a></p>
              </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Detalhes