import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import '././carrinho.css'

export function Carrinho()
{
    //Variaveis
    const {id} = useParams()
    const [data, setData] = useState([])
    const nav = useNavigate()
    const [res, setRes] = useState(0)
    //capturar os valores realcionados com o ID
    useEffect(() => { 
        axios.get("http://localhost:3000/produtos/"+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
     })
     //função do calculo das parcelas
     const calcularTotal = () =>{ 
        return (data.valor / res).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
      }

    function validar(event)
    {
        event.preventDefault()
        alert(`Sua compra foi realizada com sucesso ! - Valor Total da compra: ${data.valor} - Nº Pedido 21402177` )
        nav("/")
    }


    return(
        <>
        
        <div className="form-container">
            <h2>Carrinho de compras</h2>
            <div>
                <img src={data.img} style={{ width: "300px", height: "300px" }} />
            </div>
            <div>
                <h3>Produto</h3>
                {data.nome}
            </div>
            <div>
                <h3>Preço unitário do produto</h3>
                R$ {data.valor},00
            </div>
            <select onChange={(e) => setRes(e.target.value)}>
                <option value="" disable >Parcelas do produtos</option>
                <option value={1} disable>1</option>
                <option value={2} disable>2</option>
                <option value={3} disable>3</option>
                <option value={4} disable>4</option>
                <option value={5} disable>5</option>
                <option value={6} disable>6</option>
                <option value={7} disable>7</option>
                <option value={8} disable>8</option>
                <option value={9} disable>9</option>
                <option value={10} disable>10</option>
                
            </select>
            <div>
             Valor das parcelas: {calcularTotal()}
            </div>
            
        </div>
        
        <br />
        <div className="form-container" >
            
            <form onSubmit={validar}>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <div>
                <p>Opções de pagamento</p>
                                </div>
                </td>
                        </tr>
                    </thead>
                    <tbody>
                        
                            <tr><td> <input type="text" name="ncartao" placeholder="Número do cartão"/> </td><br /></tr>
                            
                        
                            <tr><td><input type="text" name="ncartao" placeholder="Nome impresso no cartão"/></td></tr>
                            <tr><td><input type="text" name="ncartao" placeholder="Data de validade (MM/AA)"/></td></tr>
                            <tr><td><input type="text" name="ncartao" placeholder="CVV"/></td></tr>
                        
                            <td>
                                <select onChange={(e) => setRes(e.target.value)}>
                                    <option value="" disable >Parcelas do produtos</option>
                                    <option value={1} disable>1</option>
                                    <option value={2} disable>2</option>
                                    <option value={3} disable>3</option>
                                    <option value={4} disable>4</option>
                                    <option value={5} disable>5</option>
                                    <option value={6} disable>6</option>
                                    <option value={7} disable>7</option>
                                    <option value={8} disable>8</option>
                                    <option value={9} disable>9</option>
                                    <option value={10} disable>10</option>
                    
                                </select>
                            </td>
                        
                            <tr><td><input type="text" name="ncartao" placeholder="Data de Nascimeto - (DD-MM-AAAA)"/></td></tr>
                            <tr><td><img src="https://danielfarias.net.br/wp-content/uploads/2022/10/400-icones-cartoes-de-credito.jpg" style={{ width: "190px", height: "80px" }} /></td></tr>
                            {/* <tr><td> <Link  className='btn btn-sm btn-success' >Comprar!</Link> </td></tr> */}
                            <tr><td> <button className='btn btn-sm btn-success'>Comprar</button> </td></tr>
                        

                    </tbody>
                </table>
            </form>
        </div><br /><br />
        
        </>
    )
    
}