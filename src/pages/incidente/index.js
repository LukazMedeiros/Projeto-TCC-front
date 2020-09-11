import React from 'react';
import './incidente-style.css';

export default function Incidente() {
    return(
        <div className="incidente">
            <header>
                <div className="logo">logotipo</div>
                <div className="opicoes">Bem-Vindo #nome#</div>
            </header>
            <main>
                <form onSubmit="">
                    <input type="text" placeholder="Título"/>
                    <input list="tipo" placeholder="Tipo de incidente"/>
                    <datalist id="tipo">
                        <option value="opção"></option>
                        <option value="opção"></option>
                        <option value="opção"></option>
                    </datalist>
                    <textarea placeholder="Descrição"></textarea>
                <div className="botoes">
                    <button>Salvar</button>
                    <button>Cancelar</button>
                </div>
                </form>
            </main>
        </div>
        )
    }