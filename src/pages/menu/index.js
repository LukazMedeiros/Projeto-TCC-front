import React from 'react';
import './menu-style.css'

export default function Menu() {
    return(
        <div className="menu">
            <header>
                <div className="logo">logotipo</div>
                <div className="opicoes">Bem-Vindo #Nome#</div>
            </header>
            <main>
                <button>Novo</button>
                <div className="itens">
                    <ul>
                        <li>incidentes</li>
                    </ul>
                </div>
            </main>
        </div>
        )
    }