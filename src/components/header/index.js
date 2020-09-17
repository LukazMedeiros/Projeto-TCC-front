import React from 'react';
import {useHistory} from 'react-router-dom';

import './header-style.css';

export default function Header() {
    
    const usuario = sessionStorage.getItem('usuario');
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
    
    return(
        <div className="header">
            <div className="logo">LOGOTIPO</div>
            <p>Bem Vindo {usuario}</p>
            <button onClick={novo}>Novo</button>
            <button onClick={logout}>Logout</button>
        </div>
        )
    }