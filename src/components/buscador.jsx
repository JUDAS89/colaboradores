import React from 'react'
import Form from 'react-bootstrap/Form'

const Buscador = ({onBuscar}) => {

  const handleChange =(e) => {
    onBuscar(e.target.value)
  }

  return (
      <Form.Control type="text" placeholder="Busca un colaborador" id='buscador' onChange={handleChange}/>
  )
}

export default Buscador