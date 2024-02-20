import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BaseColaboradores } from './BaseColaboradores';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';

function App() {

  return (
    <>
      <div className="App">
        <h1>Lista de colaboradores</h1>
        <Listado />
      </div>
    </>
  )
}

export default App
