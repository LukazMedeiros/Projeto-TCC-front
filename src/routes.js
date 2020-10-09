import React from 'react';
import {Route , Switch} from 'react-router-dom';

// importando as paginas
import Logon from './pages/logon';
import Inicio from './pages/inicio';
import Incidente from './pages/incidente';
import AlterarUsuario from './pages/alterarUsuario';
import InicioAdm from './pages/inicioAdm';
import EncerrarIncidente from './pages/encerrarIncidente';

export default function Rotas() {
    return(
        <Switch>
            <Route path="/" exact component={Logon}/>
            <Route path="/inicio" component={Inicio}/>
            <Route path="/inicioadm" component={InicioAdm}/>
            <Route path="/incidente" component={Incidente}/>
            <Route path="/alterarSenha" component={AlterarUsuario}/>
            <Route path="/encerrarIncidente" component={EncerrarIncidente}/>
        </Switch>
        )
    }