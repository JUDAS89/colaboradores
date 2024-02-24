import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './style.css'


const Formulario = ({ showAlert, actualizarColaboradores }) => {
  const [nombre, setNombre]=useState("")
  const [correo, setCorreo]=useState("")
  const [edad, setEdad]=useState("")
  const [cargo, setCargo]=useState("")
  const [telefono, setTelefono]=useState("")

  const validarRegistro=(e)=>{
    e.preventDefault()
    let hasError=false

  if (nombre === '' || correo === '' || edad === '' || cargo === '' || telefono === '') {
    showAlert("Completa todos los campos", "danger")
    hasError=true
  } 

  if (!hasError){
    const nuevoColaborador ={
      id: Math.random(), nombre, correo, edad, cargo, telefono
    }

    actualizarColaboradores(nuevoColaborador)

    showAlert("Colaborador agregado", "success")

    setNombre('')
    setCorreo('')
    setEdad('')
    setCargo('')
    setTelefono('')
  }
  }

  return (
    <div className='form-group'>
    <Form onSubmit={validarRegistro}>
      
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control type="text" placeholder="Nombre del colaborador" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email del colaborador" value={correo} onChange={(e)=>setCorreo(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAge">  
        <Form.Control type="text" placeholder="Edad del colaborador" value={edad} onChange={(e)=>setEdad(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCargo">
        <Form.Control type="text" placeholder="Cargo del colaborador" value={cargo} onChange={(e)=>setCargo(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Control type="text" placeholder="Telefono del colaborador" value={telefono} onChange={(e)=>setTelefono(e.target.value)}/>
      </Form.Group>

      <Button type="submit" className='btnForm'>
        Agregar Colaborador
      </Button>
    </Form>
    </div>
  )
}

export default Formulario