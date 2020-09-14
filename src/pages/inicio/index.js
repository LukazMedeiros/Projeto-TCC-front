import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/header';

import './inicio-style.css'

import Invalida from '../invalida';

export default function Inicio() {

    const history = useHistory();    
    const usuario = sessionStorage.getItem('usuario');

    function novo(e) {
        e.preventDefault();
        history.push('/incidente')
    }

    if ((usuario === '')||(usuario === null)) {
        return <Invalida/>
    }else{
        return(
            <div className="inicio">
                <Header/>
                <main>
                    <button onClick={novo}>Novo</button>
                    <div className="itens">
                        <ul>
                            <li>incidentes</li>
                        </ul>
                    </div>
                </main>
            </div>
            )
    }
}