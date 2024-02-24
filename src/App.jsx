import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Listado from './components/listado'
import Formulario from './components/formulario'
import Buscador from './components/buscador'
import Alert from './components/alert'
import {BaseColaboradores} from './BaseColaboradores'

const App=() => {
  const [alertInfo, setAlertInfo] = useState({ message: '', variant: '' })
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)

  const showAlert = (message, variant) => {
    setAlertInfo({ message, variant })
  }

  const handleActualizarColaboradores = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador])
  }

  const handleEliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador)=>colaborador.id!==id)
    setColaboradores(nuevosColaboradores)
  }

  return (
    <>
      <h1>Lista de colaboradores</h1>
      <Buscador onBuscar={(texto) => console.log('Búsqueda:', texto)}/>
      <div className='App'>
      <Listado colaboradores={colaboradores} handleEliminarColaborador={handleEliminarColaborador}/>
          <div className='addColaborator'>
            <h4>Agregar colaborador</h4>
            <Formulario showAlert={showAlert} actualizarColaboradores={handleActualizarColaboradores} />
            <Alert message={alertInfo.message} variant={alertInfo.variant} />
          </div>
        </div>
    </>
  )
}

export default App