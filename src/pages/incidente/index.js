import React from 'react';
import Header from '../../components/header';
import { useHistory } from 'react-router-dom';
import './incidente-style.css';

import Invalida from '../invalida';

export default function Incidente() {

    const history = useHistory();

    function cancelar(e) {
        e.preventDefault();
        history.push('/inicio');
    }
    
    const usuario = sessionStorage.getItem('usuario');
    
    if ((usuario === '')||(usuario === null)) {
        return <Invalida/>
    }else{
        return(
            <div className="incidente">
                <Header/>
                <main>
                    <form onSubmit="">
                        <input type="text" placeholder="Título" className="titulo"/>
                        <input list="tipo" placeholder="Tipo de incidente" className="tipo"/>
                        <datalist id="tipo">
                            <option value="opção"></option>
                            <option value="opção"></option>
                            <option value="opção"></option>
                        </datalist>
                        <textarea placeholder="Descrição"></textarea>
                    <div className="botoes">
                        <button className="botao">Salvar</button>
                        <button onClick={cancelar} className="botao">Cancelar</button>
                    </div>
                    </form>
                </main>
            </div>
            )
    }
}