import React , {useState} from 'react';
import Header from '../../components/header';
import { useHistory } from 'react-router-dom';
import Api from "../../services/api";
import './incidente-style.css';

import Invalida from '../invalida';

export default function Incidente() {

    const history = useHistory();
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const usuario = sessionStorage.getItem("usuario");

    function cancelar(e) {
        e.preventDefault();
        history.push('/inicio');
    }

    async function abrir(e) {
        e.preventDefault();
        const dados = {titulo, descricao, usuario};

        try {
            const resposta = await Api.post('incidente', dados, {headers:{usuario:usuario}})
            alert(`${resposta.data.mensagem}`)
            history.push('/inicio')
        } catch (error) {
            alert(`Ocorreu um erro para abertura do incidente ${error}`)
        }
    }
    
    
    if ((usuario === '')||(usuario === null)) {
        return <Invalida/>
    }else{
        return(
            <div className="incidente">
                <Header/>
                <main>
                    <form onSubmit={abrir}>
                        <input
                        placeholder="Título"
                        className="titulo"
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                        />

                        <input
                        list="tipo"
                        placeholder="Tipo de incidente"
                        className="tipo"
                        />

                        <datalist id="tipo">
                            <option value="opção"></option>
                            <option value="opção"></option>
                            <option value="opção"></option>
                        </datalist>

                        <textarea
                        placeholder="Descrição"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                        />

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