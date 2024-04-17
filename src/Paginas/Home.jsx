import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carrosel from '../Componentes/Carrosel';

export function Home()
{
    const [valor, setValor] = useState([])
    useEffect(() => { 
        axios.get("http://localhost:3000/produtos")
        .then(resp => setValor(resp.data))
        .catch(err => console.log(err))
     })

    return(
        <>
        <Carrosel /><br />
        <div className='container ms-12' >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "0" }}>
                {
                  valor.map((d,i) => (

                    <Card key={i} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={d.img} />
                    <Card.Body>
                      <Card.Title>{d.nome}</Card.Title>
                      <Card.Text>
                        {d.detalhes}
                      </Card.Text>
                      {d.valor}
                      <Card.Text>
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card> 

                  ))
                }
            </div>
        </div><br />
        <div className='container' >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ullam necessitatibus inventore suscipit est veritatis vitae quod, natus libero error porro quis obcaecati unde dolor iusto sunt doloribus ratione aperiam.</p>
        </div>
        </>
    )
}