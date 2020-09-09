import React from 'react';
import {Route , Switch} from 'react-router-dom';

// importando as paginas
import Logon from './pages/logon';
import Menu from './pages/menu'

export default function Rotas() {
    return(
        <Switch>
            <Route path="/" exact component={Logon}/>
            <Route path="/menu" exact component={Menu}/>
        </Switch>
        )
    }