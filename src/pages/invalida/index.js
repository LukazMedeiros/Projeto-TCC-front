import React from 'react';
import {Link} from 'react-router-dom';

import './invalida-style.css';

export default function Invalida() {
    return(
        <div className="invalida">
            <div>
                <p>Você deve estar logado para utilizar a aplicação</p>
                <p>Favor <Link to="/">retornar à pagina inicial</Link> e efetuar o login</p>
            </div>
        </div>
    )
}