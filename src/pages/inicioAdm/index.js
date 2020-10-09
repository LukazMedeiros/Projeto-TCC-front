import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import Api from "../../services/api";
import { FiCheck, FiSearch } from "react-icons/fi";

import './inicioAdm-style.css'

import Invalida from '../invalida';

export default function InicioAdm() {

    const usuario = sessionStorage.getItem('usuario');
    const [chamados, setChamados] = useState([]);
    const [status, setStatus] = useState('');
    
    useEffect(()=>{
        Api.get('adm')
        .then(resposta => setChamados(resposta.data))
    },[usuario]);

    async function pesquisar(e) {
        e.preventDefault();

        try {
            const resposta = await Api.get(`adm/${status}`)
            setChamados(resposta.data)
        } catch (error) {
            
        }
    }

    if ((usuario === '')||(usuario === null)) {
        return <Invalida/>
    }else{
        return(
            <div className="inicioAdm">
                <Header/>
                <main>
                    <div className="filtro-container">
                    <select
                    value={status}
                    onChange={e => setStatus(e.target.value)}
                    >
                        <option value="" disabled >selecione</option>
                        <option value="aberto">Abertos</option>
                        <option value="solucionado">Solucionados</option>
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
                                        <button><FiCheck/></button>
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