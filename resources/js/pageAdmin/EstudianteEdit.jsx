import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Config from '../Config'
import Sidebar from './Sidebar'

const EstudianteEdit = () => {
  const {id} = useParams()
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [aprobado, setAprobado] = useState(false)

  useEffect(() => {
      const getUserById = async() => {
        await Config.getEstudianteById (id)
              .then(({data}) => {
                
                setname(data.name)
                setAprobado(data.aprobado)
                setemail(data.email)
              })
      }
      getUserById()
  },[])

  const submitUpdate = async () => {

  }


  return (
    <>
      <div className="container">
      <div className="row justify-content-center mt-5 mb-5">
        <Sidebar></Sidebar>
        <div className="col-sm-9 mt-3 mb-3">
            <div className="card">
              <div className="card-header">EDITAR ESTUDIANTE </div>
              <div className="card-body">
                <form onSubmit={submitUpdate}>
                      <label htmlFor="name">Nombre</label>
                      <input type="text" className='form-control ' value={name} onChange={e => setname(e.target.value)} />
                      <label htmlFor="Email">Email</label>
                      <input type="text" className='form-control ' value={email} onChange={e => setemail(e.target.value)} />
                      <div className="col-sm-12 mt-3 ">
                        <div className="form-check form-switch">
                            <input type="checkbox" className='form-check-input' checked={aprobado} onChange={e => setAprobado(!aprobado)} id='aprobado'/>
                            <label htmlFor="aprobado" className='form-check-label'>aprobado</label>
                        </div>
                      </div>
                      <div className="btn-group mt-3">
                          <Link to={-1} className='btn btn-secondary'>{"<-"} Back</Link>
                          <button type='submit' className='btn btn-primary'>Actualizar</button>
                      </div>
                </form>
              </div>
            </div>

        </div>

      </div>
      </div>
    </>
  )
}

export default EstudianteEdit