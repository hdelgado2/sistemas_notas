import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Config from '../Config';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';
import '../css/app.css'
import Loading from '../components/Loading'

const User = () => {
    
    const [Estudiantes, setEstudiantes] = useState();
    const [Load, setLoad] = useState(true)
    useEffect(() => {
          
          getEstudiante();
          
    },[])

    

    const getEstudiante = async () =>{
        const response = await Config.getEstudianteAll()
        console.log(response.data)
        setEstudiantes(response.data)
        setLoad(false)
    }

  return (
    <>
    
    {Load ? <Loading /> : null}    
    {
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
                    { !Estudiantes ? 
                        
                      null

                    
                     : 
                     Estudiantes.map((data) => (
                        
                      <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>

                        <Link to={`/admin/user/edit/${data.id}`} >
                        <Icon icon="material-symbols:edit-outline"  style={{color: '#071a78'}} />
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
    }
    </>
    
  )
}



export default User