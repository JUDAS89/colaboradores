import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BaseColaboradores } from './BaseColaboradores'
import Listado from './components/listado'
import Formulario from './components/formulario'
import Buscador from './components/buscador'
import Alert from './components/alert'

function App() {
  const [alertInfo, setAlertInfo] = useState({ message: '', variant: '' })

  const showAlert = (message, variant) => {
    setAlertInfo({ message, variant })
  }
  return (
    <>
      <h1>Lista de colaboradores</h1>
      <Buscador/>
      <div className='App'>
      <Listado/>
        <div className='addColaborator'>
          <h4>Agregar colaborador</h4>
          <Formulario showAlert={showAlert}/>
          <Alert message={alertInfo.message} variant={alertInfo.variant} />
        </div>
      </div>
    </>
  )
}

export default App
