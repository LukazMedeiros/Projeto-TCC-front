import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import Api from "../../services/api";
import { FiTrash2, FiSearch } from "react-icons/fi";

import './inicio-style.css'

import Invalida from '../invalida';

export default function Inicio() {

    const usuario = sessionStorage.getItem('usuario');
    const [chamados, setChamados] = useState([]);
    const [status, setStatus] = useState('abertos');
    
    useEffect(()=>{
        Api.get('incidente', {headers:{usuario:usuario}})
        .then(resposta => setChamados(resposta.data))
    },[usuario]);

    async function pesquisar(e) {
        e.preventDefault();

        try {
            const resposta = await Api.get(`incidente/${status}`)
            setChamados(resposta.data)
        } catch (error) {
            
        }
    }

    if ((usuario === '')||(usuario === null)) {
        return <Invalida/>
    }else{
        return(
            <div className="inicio">
                <Header/>
                <main>
                    <div className="filtro-container">
                    <select
                    value={status}
                    onChange={e => setStatus(e.target.value)}
                    >
                        <option value="aberto">Abertos</option>
                        <option value="solucionado">Solucionado</option>
                    </select>
                    <button onClick={pesquisar}><FiSearch/> Pesquisar</button>
                    </div>                    
                        
                        {
                            chamados.map( chamado => (
                                <div className="itens">
                                <ul key={chamado.id}>
                                    <div>
                                        <li>Status: {chamado.status}</li>
                                        <li>Data: {chamado.data_abertura}</li>
                                        <button><FiTrash2/></button>
                                    </div>
                                    <li>Título: {chamado.titulo}</li>
                                    <li>Descrição:{chamado.descricao}</li>
                                    <div>
                                        <li>Resolução: {chamado.resolucao}</li>
                                        <li>Data: {chamado.data_encerramento}</li>
                                    </div>
                                </ul>
                                </div>
                                ))
                        }
                    
                </main>
            </div>
            )
    }
}