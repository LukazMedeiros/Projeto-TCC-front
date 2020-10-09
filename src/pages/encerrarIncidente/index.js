import React , {useState} from 'react';
import Header from '../../components/header';
import { useHistory } from 'react-router-dom';
import Api from "../../services/api";
import './encerrarIncidente-style.css';

import Invalida from '../invalida';
import Inicio from '../inicio';

export default function EncerrarIncidente() {

    const history = useHistory();
    const usuario = sessionStorage.getItem("usuario");
    const tipo = sessionStorage.getItem("tipo");
    const [resolucao, setResolucao] = useState('');

    function cancelar(e) {
        e.preventDefault();
        history.push('/inicioadm');
    }

    async function encerrar(e) {
        e.preventDefault()
        console.log(resolucao)
    }
    
    if ((usuario === '')||(usuario === null)) {
        return <Invalida/>
    }else if(tipo !== "administrador"){
        return <Inicio/>
    } else {
        return(
            <div className="encerrarincidente">
                <Header/>
                <main>
                    <form onSubmit={encerrar}>
                        <h3>titulo</h3>
                        <p>descriçao</p>
                        <p>solicitante</p>
                        <p>data</p>

                        <textarea
                        required
                        value={resolucao}
                        onChange={e => setResolucao(e.target.value)}
                        ></textarea>
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