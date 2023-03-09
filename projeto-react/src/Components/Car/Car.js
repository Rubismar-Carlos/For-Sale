import  './Car.css'

import { useFetch } from '../../Hooks/useFetch'

import { Link } from 'react-router-dom'

const Car = () => {

    const url = "http://localhost:3000/cars"

    const {data: veiculos} = useFetch(url)

  return (
    <div className='box'>
    
        {veiculos && veiculos.map((car) => (
        <div className="box-car" key={car.id} >
          <div className="car details">
            <h2>{car.nome}</h2>
            <h3>{car.marca}</h3>
            <div className="car-ctt">
                <Link to={`/cars/${car.id}`} className="link-car">Mais detalhes</Link>
            </div>
          </div>
        </div>
     ))}  
    </div>
  )
}

export default Car