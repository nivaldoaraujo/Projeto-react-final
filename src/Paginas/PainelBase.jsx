import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './PainelBase.css'



export function PainelBase()
{
    const [valor, setValor] = useState([])
    const navegar =- useNavigate()
    useEffect(() => { 
        axios.get("http://localhost:3000/produtos")
        .then(resp => setValor(resp.data))
        .catch(err => console.log(err))
     })
    return(
        <>
        <div className="container "><br />
            <div className='text-end' ><Link to="/painel" className='btn btn-primary'>Adicionar</Link></div>
            <table className="table" >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>valor</th>
                        <th>Detalhes</th>
                        <th>Foto</th>
                    </tr>
                </thead>
           
            <tbody>
                    {
                    valor.map((d, i) => (
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.nome}</td>
                        <td>{d.valor}</td>
                        <td>{d.detelhes}</td>
                        <td> <img className="fto" src={d.img}  /> </td>
                        <td>
                        <Link to={`/atualizar/${d.id}`} className='btn btn-sm btn-success'>Atualizar</Link>
                        <button className='btn btn-sm ms-1 btn-danger' >Excluir</button>
                        {/* <Link to="/" className='btn btn-sm ms-1 btn-danger'>Excluir</Link> */}
                        </td>
                    </tr>
                    ))
                    }

            </tbody>
            </table>
        </div>
        </>
    )
}