import React from 'react';
import {useHistory} from 'react-router-dom';
// import Api from "../../services/api";
import './logon-style.css'

export default function Logon() {

    const history = useHistory();

    function logon(e) {
        e.preventDefault();
        sessionStorage.setItem('usuario', document.querySelector('#usuario').value)
        history.push('/inicio')
    }

    return(
        <div className="logon">
        <div className="logo">
            logotipo
        </div>
        <div className="formulario">
            <form onSubmit={logon}>
                <input type="text" id="usuario" placeholder="RA"/>
                <input type="password" placeholder="Senha"/>
                <button>Entrar</button>
            </form>
        </div>
        </div>
        );
    }