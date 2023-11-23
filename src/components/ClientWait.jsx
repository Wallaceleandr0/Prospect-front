// Clientes que já entrou em contato

import api from '../Api.js'
import { useEffect, useState } from 'react'
import './Client.css'

function ClientWait () {

    const [objectFetch, setObjectFetch] = useState([])

    useEffect(() => {
        api.get(`clientes`).then(res => {

        const filterObject = res.data.filter((item) => item.clientes_status === 1)
        setObjectFetch(filterObject)
        })
    }, [objectFetch])

    const handleDelete = (id) => {
        api.delete(`deletar/${id}`)
            .then((response) => console.log(response))
            .catch((err) => console.log(`Deu erro ao tentar deletar ${err}`))
    }

    const handleUpdateStatus = (id, stats) => {
        api.put(`status/${id}/${stats}`)
        .then((response) => console.log(response))
        .catch((err) => console.log(`Deu erro ao tentar deletar ${err}`))
    }

    let qtdClientes = objectFetch.length

    return (
        <div className='Table'>
            <h2>Clientes já prospectados</h2>
            <h1>{qtdClientes} Contatos</h1>
            <div className="Table-name-list">
                <h4>Clientes</h4>
                <h4>WhatasApp</h4>
                <h4>Email</h4>
                <h4>Link</h4>
                <h4>Status</h4>
                <h4>Deletar</h4>
            </div>
            <hr />
            {objectFetch.map((item) => (
                <div className='Table-list' key={item.idclientes}>
                    <p >{item.clientes_nome.toUpperCase()}</p>
                    {item.clientes_whatsapp.length >= 9 ? (
                        <a href={`https://wa.me/${item.clientes_whatsapp}`} target="_blank"><img src="/img/wpp.png" alt="whatsapp" /></a>
                    ) : (
                        <p>-</p>
                    )}
                    {item.clientes_email.length >= 6 ? (
                        <p>{item.clientes_email}</p>
                    ) : (
                        <p>-</p>
                    )}
                    <a href={item.clientes_link} onClick={() => handleUpdateStatus(item.idclientes, item.clientes_status)} target='_blank' rel="noreferrer"><img src="/img/link.png" alt="" /></a>
                    <button className="btn-check" onClick={() => handleUpdateStatus(item.idclientes, item.clientes_status)} >Rebater</button>
                    {/* style={{backgroundColor: "#f5002dd7"}} */}
                    <button onClick={() => { handleDelete(item.idclientes) }}>Deletar</button>
                </div>
            ))}
        </div>
    )
}

export default ClientWait