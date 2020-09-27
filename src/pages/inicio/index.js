import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import Api from "../../services/api";
import { FiTrash2, FiSearch } from "react-icons/fi";

import './inicio-style.css'

import Invalida from '../invalida';

export default function Inicio() {

    const usuario = sessionStorage.getItem('usuario');
    const [chamados, setChamados] = useState([]);
    
    useEffect(()=>{
        Api.get('incidente', {headers:{usuario:usuario}})
        .then(resposta => setChamados(resposta.data))
    },[usuario]);

    if ((usuario === '')||(usuario === null)) {
        return <Invalida/>
    }else{
        return(
            <div className="inicio">
                <Header/>
                <main>
                    <div className="filtro-container">
                    <select name="" id="">
                        <option value="aberto">Abertos</option>
                        <option value="encerrado">Encerrado</option>
                    </select>
                    <button><FiSearch/> Pesquisar</button>
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
                                    <li>Resolução: {chamado.resolucao}</li>
                                </ul>
                                </div>
                                ))
                            }
                    
                </main>
            </div>
            )
    }
}