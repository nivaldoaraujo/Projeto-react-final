import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export function Atualizar()
{
    //criar variaveis
    const {id} = useParams()
    const [data, setData] = useState([])
    const navegar = useNavigate()

    useEffect(() => { 
        axios.get("http://localhost:3000/produtos/"+id)
        .then(resp => setData(resp.data))
        .catch(err => console.log(err))
     })
     function HandSubmit(event)
     {
        event.preventDefault()
        axios.put("http://localhost:3000/produtos/"+id, data)
        .then(resp => { 
            alert("Dados atualizados com sucesso!!")
            navegar("/adm321")
         })
     }

    return(
        <>
            <h1 style={{ textAlign: "center" }}>Painel de atualização dos produtos</h1><br />
        <div className="d-flex w-100 vh-80 justify-content-center align-items-center">
           
           <div className="w-50 border bg-light p-5">
            <form onSubmit={HandSubmit} >
                <div >                    
                    <label htmlFor="name">Id do produto</label><br />
                    <input type="text" name="id" disabled value={data.id} className="from-control"  />
                </div><br />
                <div >                    
                    <label htmlFor="name">Nome Produto</label><br />
                    <input type="text" name="name" defaultValue={data.nome} className="from-control" 
                    onChange={e=>setData({...data, nome: e.target.value})} />
                </div><br />
                <div>
                    <label htmlFor="email">Valor</label><br />
                    <input type="text" name="valor" defaultValue={data.valor} className="from-control"
                    onChange={e=>setData({...data, valor: e.target.value})} />
                </div><br />
                <div>
                    <label htmlFor="detalhes">Detalhes</label><br />
                    <input type="text" name="detalhes" defaultValue={data.detalhes} className="from-control"
                    onChange={e=>setData({...data, detalhes: e.target.value})} />
                </div><br />
                <div>
                    <label htmlFor="imagem">Imagem</label><br />
                    <input type="text" name="imagem" defaultValue={data.img} className="from-control"
                    onChange={e=>setData({...data, img: e.target.value})} />
                </div><br />
                <button className="btn btn-info" >Atualizar</button>
            </form>
            </div> 
           
           
        </div>
        <br />
        </>
    )
}