import './Home.css'

// Hooks
import { useFetch } from '../../Hooks/useFetch'

// Components
import Car from '../../Components/Car/Car'
import SearchForm from '../../Components/SearchForm/SearchForm'

// Image
import imgHome from '../../Imagem/ForSale-home.png'

const Home = () => {

    const url = "http://localhost:3000/cars"

    const {loading } = useFetch(url)

  return (
    <div className='home'>
      <div className="img">
          <img src={imgHome} alt="For sale" />
      </div>
      <div className="centro">
      <p>ForSale o site para vender seu veículo.</p>
      </div>
      <div>
        < SearchForm />
      </div>

      <div className="bus-car">
        {loading && <p>Carregando...</p>}
        <Car />
      </div>

    </div>
  )
}

export default Home