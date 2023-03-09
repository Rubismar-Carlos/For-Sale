// Router
import { useSearchParams, Link } from "react-router-dom"

// Hooks
import { useFetch } from "../../Hooks/useFetch"

// Components
import SearchForm from "../../Components/SearchForm/SearchForm"

// Pages
import NotFound from "../NotFound/NotFound"

const Search = () => {

    const [ searchParams ] = useSearchParams()

    const url = "http://localhost:3000/cars?" + searchParams

    const {data: veiculos, loading} = useFetch(url)

  return (
    <div className="search-page">
        {veiculos && <SearchForm />}
        {loading && <p>Buscando...</p>}
        <div className="res-search"> 
        {veiculos && veiculos.length === 0 && (
            < NotFound />
        ) }
        {veiculos && veiculos.map((car) => (
        <div className="box-car" key={car.id}>
          <div className="car details">
            <h2>{car.nome}</h2>
            <h3>{car.marca}</h3>
            <div className="car-ctt">
                <Link to={`/cars/${car.id}`}>Mais detalhes</Link>
            </div>
          </div>
        </div>
     ))}  
     </div>    
    </div>
  )
}

export default Search