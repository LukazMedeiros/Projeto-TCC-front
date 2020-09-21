import React from 'react';
import Header from '../../components/header';
import { FiTrash2, FiSearch } from "react-icons/fi";

import './inicio-style.css'

import Invalida from '../invalida';

export default function Inicio() {

    const usuario = sessionStorage.getItem('usuario');
    

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
                    <div className="itens">
                        <ul>
                            <div>
                                <li>Status:</li>
                                <li>Data:</li>
                                <button><FiTrash2/></button>
                            </div>
                            <li>Título</li>
                            <li>Descrição</li>
                            <li>Resolução</li>
                        </ul>
                    </div>
                </main>
            </div>
            )
    }
}