import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import Api from "../../services/api";
import './logon-style.css'

export default function Logon() {

    const history = useHistory();
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    async function logon(e) {
        e.preventDefault();
        const dados = {usuario, senha};
        console.log(dados)
        
        try {
            const resposta = await Api.post('sessao', dados)
            
            if (resposta.status === 200) {
                sessionStorage.setItem('usuario', resposta.data.nome)
                alert(`Bem Vindo - ${resposta.data.nome}`)
                history.push('/inicio')
            }
            
        } catch (error) {
            alert(`Erro ao efetuar login - Verifique o usuário e/ou senha!`)
        }
        // sessionStorage.setItem('usuario', document.querySelector('#usuario').value)
        // history.push('/inicio')
    }

    return(
        <div className="logon">
        <div className="logo">
            logotipo
        </div>
        <div className="formulario">
            <form onSubmit={logon}>
                <input
                placeholder="RA"
                value={usuario}
                onChange={e => setUsuario(e.target.value)}
                />

                <input 
                type="password" 
                placeholder="Senha"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                />

                <button>Entrar</button>
            </form>
        </div>
        </div>
        );
    }