import React, { useState,useEffect } from 'react'
import Sidebar from '../Sidebar'
import { Link,useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading'
import Config from '../../Config'


const RegistrarEmpresa = () => {
    const navigate = useNavigate();
    const [Empresa, setEmpresa] = useState("")
    const [Load, setLoad] = useState(false)
    useEffect(() => {
     
      setLoad(true)
      
      setInterval(() => {
        setLoad(false)
      }, 100);
  
  
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        Config.EmpresaRegister({Empresa})
              .then((result) => {
                console.log(result.status)
                if(result.status === 200){
                    navigate('/admin')
                }
              })

    }


  return (
    <>
    {Load ? <Loading/> : null}
    {  <div className="container">
      <div className="row justify-content-center mt-5 mb-5">
        <Sidebar/>
        <div className="col-sm-9 mt-3 mb-3">
            <div className="card">
              <div className="card-header"> </div>
              <div className="card-body">

                <form onSubmit={handleSubmit}>
                      <label htmlFor="empresa">Empresa</label>
                      <input 
                        id='empresa' 
                        type="text" 
                        className='form-control' 
                        value={Empresa} 
                        onChange={e => setEmpresa(e.target.value)} 
                        />
                      <div className="btn-group mt-3">
                          <Link to={-1} className='btn btn-secondary'>{"<-"} Back</Link>
                          <button type='submit' className='btn btn-primary'>Actualizar</button>
                      </div>
                </form>
              </div>
            </div>

        </div>

      </div>
      </div>}
    
    </>
  )
}

export default RegistrarEmpresa
