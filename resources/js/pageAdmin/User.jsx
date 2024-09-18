import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Config from '../Config';
import { Link } from 'react-router-dom';

const User = () => {
    
    const [Estudiantes, setEstudiantes] = useState();

    useEffect(() => {
          getEstudiante();
    },[])

    const getEstudiante = async () =>{
        const response = await Config.getEstudianteAll()
        console.log(response.data)
        setEstudiantes(response.data)
    }

  return (
    
    <div className="container bg-light">
      <div className="row justify-content-center mt-5 mb-5">
        <Sidebar></Sidebar>
        <div className="col-sm-9 mt-3 mb-3">
            <div className="card">
              <div className="card-body">
                <table className='table'>
                    <thead>
                      <tr>
                      <th>n°</th>
                      <th>Nombre y Apellido</th>
                      <th>Correo</th>
                      <th>Accion</th>
                      </tr>
                    </thead>
                    <tbody>
                    { !Estudiantes ? "... Cargando" : 
                      Estudiantes.map((data) => (
                        
                        <tr>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>
                          <Link to={`/admin/user/edit/${data.id}`} className='btn btn-primary'>
                              Editar
                          </Link>
                        </td>
                      </tr>

                      ))
                    
                    }

                      
                    </tbody>
                </table>
              </div>
            </div>
        </div>

      </div>
      </div>
  )
}

export default User