import React from 'react'
import Table from 'react-bootstrap/Table'
import './style.css'

const Listado = ({colaboradores, handleEliminarColaborador}) => {
    
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Teléfono</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {colaboradores.map((colaborador) => (
                    <tr key={colaborador.id}>
                        <td>{colaborador.nombre}</td>
                        <td>{colaborador.correo}</td>
                        <td>{colaborador.edad}</td>
                        <td>{colaborador.cargo}</td>
                        <td>{colaborador.telefono}</td>
                        <td>
                            <button className='btnEliminar' onClick={() => handleEliminarColaborador(colaborador.id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default Listado