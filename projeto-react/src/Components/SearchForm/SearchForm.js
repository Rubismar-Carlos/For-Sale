import './SearchForm.css'

import { useNavigate } from "react-router-dom"

import { useState } from "react"

import { BsSearch } from "react-icons/bs"

const SearchForm = () => {

    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate(`/search?q=` + query)

    }
  return (
    <div>
        
        <form onSubmit={handleSubmit} id="form-search">
            <button>
                <BsSearch />
            </button>
            <input 
                type="text"
                placeholder='Pesquisar por carro'
                onChange={(e) => setQuery(e.target.value)}
                />
        </form>
        {query && <h3>Buscando por: {query}</h3>}
    </div>
  )
}

export default SearchForm