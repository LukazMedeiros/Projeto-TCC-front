import React from 'react';
import {useHistory} from 'react-router-dom';
import { FiPlus, FiLogOut } from "react-icons/fi";


import './header-style.css';

export default function Header() {
    
    const nome = sessionStorage.getItem('nome');
    const history = useHistory();
    
    function logout(e) {
        e.preventDefault();
        localStorage.clear();
        sessionStorage.clear();
        history.push('/')
    }
    
    function novo(e) {
        e.preventDefault();
        history.push('/incidente')
    }

    function mudaSenha(e) {
        e.preventDefault();
        history.push('/alterarSenha')
    }
    
    return(
        <div className="header">
            <div className="logo">LOGOTIPO</div>
        {/* <p>Bem Vindo {nome}</p> */}
            <p>Bem Vindo <button onClick={mudaSenha}>{nome}</button></p>
            <button onClick={novo}>Novo <FiPlus/></button>
            <button onClick={logout}>Logout <FiLogOut/></button>            
        </div>
        )
    }