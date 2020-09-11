import React from 'react';
import './logon-style.css'

export default function Logon() {
    return(
        <div className="logon">
        <div className="logo">
            logotipo
        </div>
        <div className="formulario">
            <form onSubmit="">
                <input type="text" name="" id=""/>
                <input type="password" name="" id=""/>
                <button>Entrar</button>
            </form>
        </div>
        </div>
        );
    }