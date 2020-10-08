import React , {useState} from 'react';
import Header from '../../components/header';
import { useHistory } from 'react-router-dom';
import crypto from 'crypto';
import Api from "../../services/api";
import './alterarUsuario-style.css';

import Invalida from '../invalida';

export default function AlterarUsuario() {
    
    const history = useHistory();
    const usuario = sessionStorage.getItem("usuario");
    const nome = sessionStorage.getItem("nome");
    const cpf = sessionStorage.getItem("cpf");
    const ra = usuario;
    const [senhaantiga, setSenhaantiga] = useState('');
    var senha
    const [novasenha, setNovasenha] = useState('');
    const [confsenha, setConfsenha] = useState('');

    function cancelar(e) {
        e.preventDefault();
        history.push('/inicio');
    }

    async function validaSenha(e) {
        e.preventDefault();
        const validaSenha = crypto.createHash("md5",senhaantiga).update(senhaantiga).digest('HEX');
        try {
            const pesquisa = await Api.get('usuario', {headers:{usuario:usuario}})
            if(validaSenha !== pesquisa.data[0].senha){
                alert(`senha atual não confere`)
            }else if(novasenha !== confsenha){
                alert(`as senhas não conferem`)
            }else{
                senha = novasenha
                const dados = { cpf, nome, ra, senha }
                const resposta = await Api.put('usuario', dados, {headers:{usuario:usuario}})
                console.log(resposta)
                alert(`${resposta.data.mensagem}`)
                localStorage.clear();
                sessionStorage.clear();
                history.push('/')
            }
        } catch (error) {
            alert(`erro na solicitação - ${error}`)
        }
    }
    
    if ((usuario === '')||(usuario === null)) {
        return <Invalida/>
    } else {
        return(
            <div className="alteraUsuario">
                <Header/>
                <main>
                    <form onSubmit={validaSenha}>
                        <input
                        type="password"
                        placeholder="Senha atual"
                        value={senhaantiga}
                        onChange={e=>setSenhaantiga(e.target.value)}
                        />

                        <input
                        type="password"
                        placeholder="Nova senha"
                        value={novasenha}
                        onChange={e=>setNovasenha(e.target.value)}
                        />

                        <input
                        type="password"
                        placeholder="Confirme nova senha"
                        value={confsenha}
                        onChange={e=>setConfsenha(e.target.value)}
                        />

                        <div className="botoes">
                            <button className="botao">Alterar</button>
                            <button className="botao" onClick={cancelar}>Cancelar</button>
                        </div>
                    </form>
                </main>
            </div>
        )
    }
}