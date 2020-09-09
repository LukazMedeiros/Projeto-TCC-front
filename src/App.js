import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes';

import './reset.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Rotas/>
      </BrowserRouter>
    </div>
    );
  }
  
  export default App;
