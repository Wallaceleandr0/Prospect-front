// Cadastrar clientes

import { useState } from 'react'
import api from '../Api.js'
import './CreateUser.css'

function CreateUser () {

    const [ name, setName ] = useState('')
    const [ whatsapp, setWhatsapp ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ link, setLink ] = useState('')

    const handleInfo = (e) => {
        e.preventDefault()
        api.post('enviar',  {
            name,
            whatsapp,
            email,
            link
        })
        .then(console.log(`O usuário ${name} foi criado com sucesso!`))
        .catch((err) => console.log(`Deu erro :( => ${err})`))
        setName('')
        setWhatsapp('')
        setEmail('')
        setLink('')
    }


    return (
        <div className="CreateUser">
            <form onSubmit={handleInfo}>
            <h1>Cadastrar clientes</h1>
                <label htmlFor="nome">Nome:</label>
                <input type="text" placeholder="Digite o nome.." required value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="whatsapp">WhatsApp:</label>
                <input type="text" placeholder="Digite o whatsapp.." required value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
                <label htmlFor="email">E-mail:</label>
                <input type="text" placeholder="Digite o email.." required value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="link">Link:</label>
                <input type="text" placeholder="Digite o link.." required value={link} onChange={(e) => setLink(e.target.value)} />
                <button>Cadastrar Cliente</button>
            </form>
        </div>
    )
}

export default CreateUser