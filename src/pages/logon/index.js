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
        
        try {
            const resposta = await Api.post('sessao', dados)
            
            if (resposta.status === 200) {
                sessionStorage.setItem('nome', resposta.data.nome)
                sessionStorage.setItem('usuario', resposta.data.ra)
                sessionStorage.setItem('cpf', resposta.data.cpf)
                sessionStorage.setItem('tipo', resposta.data.tipo)
                alert(`Bem Vindo - ${resposta.data.nome}`)
                if (resposta.data.tipo !== "administrador") {
                    history.push('/inicio')                    
                } else {
                    history.push('/inicioadm')   
                }
            }
            
        } catch (error) {
            alert(`Erro ao efetuar login - Verifique o usuário e/ou senha!`)
        }
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