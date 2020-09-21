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
                        <input type="text" list="filtro"/>
                        <button><FiSearch/> Pesquisar</button>
                        <datalist id="filtro">
                            <option value="aberto"></option>
                            <option value="encerrado"></option>
                        </datalist>
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