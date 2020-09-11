import React from 'react';
import './inicio-style.css'

export default function Inicio() {
    return(
        <div className="inicio">
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