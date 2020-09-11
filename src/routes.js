import React from 'react';
import {Route , Switch} from 'react-router-dom';

// importando as paginas
import Logon from './pages/logon';
import Inicio from './pages/inicio';
import Incidente from './pages/incidente';

export default function Rotas() {
    return(
        <Switch>
            <Route path="/" exact component={Logon}/>
            <Route path="/inicio" component={Inicio}/>
            <Route path="/incidente" component={Incidente}/>
        </Switch>
        )
    }