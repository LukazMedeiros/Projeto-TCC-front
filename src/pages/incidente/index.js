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
                    <div className="formulario">
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
                            <button onClick={cancelar}>Cancelar</button>
                        </div>
                        </form>
                    </div>
                </main>
            </div>
            )
    }
}