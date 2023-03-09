import { useState } from 'react'
import './Adicionar.css'

import { useFetch } from '../../Hooks/useFetch'

const Adicionar = () => {

    const url = "http://localhost:3000/cars"

    const [car, setCar] = useState([])

    const { httpConfig } = useFetch(url)

    const [loading, setLoading] = useState(false)

    const [msg, setMsg] = useState("")

    const [nome, setNome] = useState("")
    const [marca, setMarca] = useState("")
    const [ano, setAno] = useState("")
    const [cor, setCor] = useState("")
    const [km, setKm] = useState("")
    const [valor, setValor] = useState("")
    const [whats, setWhats] = useState("")
    const [prop, setProp] = useState("")
    const [comb, setComb] = useState("")

    const resetInputs = () => {
        setNome("")
        setMarca("")
        setComb("")
        setCor("")
        setAno("")
        setKm("")
        setValor("")
        setProp("")
        setValor("")
        setWhats("")
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const car = {
            nome,
            marca,
            comb,
            ano,
            cor,
            km,
            valor,
            prop,
            whats,
        }

        setTimeout(() => {
            setMsg("")
        },3000)

        if(nome === '') {
            setMsg("Preencha o nome do veículo.")
            return false
        } else if (marca === '') {
            setMsg("Preencha a marca do veículo.")
            return false
        } else if ( comb === '') {
            setMsg("Preencha qual o combustivel do veículo.")
            return false
        } else if (ano === '') {
            setMsg("Preencha o ano de fabricação do veículo.")
            return false
        } else if (cor === '') {
            setMsg("Preencha a cor do veículo.")
            return false
        } else if (km === '') {
            setMsg("Preencha a kilometragem do veículo.")
            return false
        } else if (valor === '') {
            setMsg("Preencha o valor desejado.")
            return false
        } else if (prop === '') {
            setMsg("Preencha o proprietário do veículo.")
            return false
        } else if( whats === '') {
            setMsg("Preencha os dados de contato.")
            return false
        } else {
            setMsg("Carro publicado com sucesso.")
            setLoading(true)
        }

        httpConfig(car, "POST")


        setTimeout(() => {
            setLoading(false)
            resetInputs()
        }, 3000)

    }


  return (
    <div className="form">
        <h2>Descrição de carro a venda</h2>
        <div className="teste">
        <form onSubmit={handleSubmit} className="form-venda">
            <label>
                <input 
                    type="text" 
                    placeholder='Nome do carro'
                    onChange={(e) => setNome(e.target.value)}
                    value={nome}    
                />
            </label>
            <label className='label-mar-comb'>
                <div className='selects'>
                    <div>
                        <p>Marca</p>
                         <select name="marca" id="marca" value={marca}
                         onChange={(e) => setMarca(e.target.value)}>
                            <option value=""></option>
                            <option value="Volkswagen">VolksWagen</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Honda">Honda</option>
                            <option value="Ford">Ford</option>
                            <option value="Bmw">Bmw</option>
                            <option value="Mercedes">Mercedes</option>
                            <option value="Chevrolet">Chevrolet</option >
                            <option value="Ferrari">Ferrari</option>
                            <option value="Audi">Audi</option>
                            <option value="Dodge">Dodge</option>
                        </select>
                    </div>
                    <div className="select2">
                        <p>Combustivel</p>
                        <select name="combustivel" id="combustivel"
                        onChange={(e) => setComb(e.target.value)}>
                            <option value=""></option>
                            <option value="Alcool">Alcool</option>
                            <option value="Gasolina">Gasolina</option>
                            <option value="Flex">Flex</option>
                            <option value="Diesel">Diesel</option>
                        </select>
                    </div>
                </div>
            </label>
            <label>
 
                <input 
                    type="number" 
                    pattern='^[0-9]{4}$'
                    placeholder='Ano de fabricação ex: 2012'
                    onChange={(e) => setAno(e.target.value)}
                    value={ano}    
                />
            </label>
            <label>

                <input 
                    type="text" 
                    placeholder='Cor' 
                    onChange={(e) => setCor(e.target.value)}
                    value={cor}
                    />
            </label>
            <label>
                <input 
                    type="number" 
                    placeholder='Quilômetragem' 
                    onChange={(e) => setKm(e.target.value)}
                    value={km}
                    />
            </label>
            <label>
                <input 
                    type="number" 
                    placeholder='Valor em R$' 
                    onChange={(e) => setValor(e.target.value)}
                    value={valor}    
                />
            </label>
            <h3>Meios de contato</h3>
            <label>
                <input 
                    type="text" 
                    placeholder='Nome do proprietário' 
                    onChange={(e) => setProp(e.target.value)}
                    value={prop}
                    />
            </label>
            <label>
                <input 
                    type="tel"
                    name='tel'
                    placeholder=' WhatsApp Ex: (21) 98765-4321' 
                    onChange={(e) => setWhats(e.target.value)}
                    value={whats}
                    />
            </label>
            {!loading && <button className='btn'>Publicar</button>}
            {loading && <button className='btn' disabled >Enviando</button>}
            <div className="alert-msg">
                {msg}
            </div>
        </form>
        </div>
    </div>
  )
}

export default Adicionar