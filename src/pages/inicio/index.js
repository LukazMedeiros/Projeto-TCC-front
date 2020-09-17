import React from 'react';
import Header from '../../components/header';

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
                    <div className="itens">
                        <ul>
                            <div>
                                <li>status:</li>
                                <li>data:</li>
                                <button>excluir</button>
                            </div>
                            <li>Título</li>
                            <li>Descrição</li>
                            <li>Conclusão</li>
                        </ul>
                    </div>
                </main>
            </div>
            )
    }
}