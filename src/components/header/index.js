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

    return(
        <div className="header">
            <div className="logo">LOGOTIPO</div>
            <div className="opcoes">
                <p>Bem Vindo {usuario}</p>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}