import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BaseColaboradores } from '../BaseColaboradores'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import Buscador from './components/buscador'
import Alert from './components/Alert'

function App() {
  const [alertInfo, setAlertInfo] = useState({ message: '', variant: '' });

  const showAlert = (message, variant) => {
    setAlertInfo({ message, variant })
  }
  return (
    <>
      <div className="App">
        <h1>Lista de colaboradores</h1>
        <Listado />
        <Formulario showAlert={showAlert}/>
        <Alert message={alertInfo.message} variant={alertInfo.variant} />
      </div>
    </>
  )
}

export default App
