import { Routes, Route, Link } from "react-router-dom"
import Client from './Client'
import CreateUser from './CreateUser'
import ClientWait from "./ClientWait"
import './Header.css'

function Header () {
    return (
        <>
            <header className='Header'>
                <nav>
                    <ul>
                        <Link to="/"><img src="./img/aguardar.png" title="Entrar em contato" alt="Entrar em contato"/></Link>
                        <Link to="/criar"><img src="./img/adicionar.png" title="Cadastrar clientes" alt="Cadastrar clientes" /></Link>
                        <Link to="/prospectado"><img src="./img/visualizar.png" title="Clientes já prospectados" alt="Clientes já prospectados" /></Link>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Client />} />
                <Route path="/criar" element={<CreateUser />} />
                <Route path="/prospectado" element={<ClientWait />} />
            </Routes>
        </>
    )
}

export default Header