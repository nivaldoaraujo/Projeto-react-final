//criar nossas rotas
//importar o react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Importar as páginas
import { Contato } from "./Paginas/Contato";
import { Home } from "./Paginas/Home";
import { Painel } from "./Paginas/Painel";
import { Sobre } from "./Paginas/Sobre";
import { PainelBase } from "./Paginas/PainelBase";
import { Atualizar } from "./Paginas/Atualizar";



//função do AppRouter
export function AppRouter()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Home />} ></Route>
                <Route  path="/Sobre" element={<Sobre />} ></Route>
                <Route  path="/contato" element={<Contato />} ></Route>
                <Route  path="/adm321" element={<PainelBase />} ></Route>
                <Route  path="/painel" element={<Painel />} ></Route>
                <Route  path="/atualizar/:id" element={<Atualizar />} ></Route>
                
            </Routes>
        </BrowserRouter>
    )
}


