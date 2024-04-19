import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';



export function Contato()
{
    const navi = useNavigate()
    function enviar(event)
    {
        event.preventDefault()
        alert("Dados enviados com sucesso!!!!")
        navi("/")
    }
    return(
        <>
        <h1 style={{ textAlign: "center" }}>Envie o seu contato:</h1><br />
        <p style={{ textAlign: "center" }} >Tel: 021 3214-2541  /  021 98745-5412</p>
        <div className="d-flex w-100 vh-80 justify-content-center align-items-center">
           
           <div className="w-50 border bg-light p-5">
            <form onSubmit={enviar} >
            <div >
                    <label htmlFor="name">Nome</label><br />
                    <input type="text" name="name" className="from-control" style={{ width: "500px"}} />
                </div><br />
                <div>
                    <label htmlFor="email">email</label><br />
                    <input type="email" name="valor" className="from-control" style={{ width: "500px"}} />
                </div><br />
                <div>
                    <label htmlFor="detalhes"></label><br />
                    <textarea name="informe" id="info" cols="30" rows="8" style={{ width: "500px"}} ></textarea>
                </div><br />
                <button className="btn btn-info" >ENVIAR</button>
            </form>
            </div> 
           
           
        </div>
        <br />
        </>
    )
}