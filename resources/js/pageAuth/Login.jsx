import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Config from '../Config'
import AuthUser from './AuthUser'
import axios from 'axios'

const Login = () => {
  const {getToken,setToken} = AuthUser()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message,setMessage] = useState("")
  const navigate = useNavigate();
  

  useEffect(() => {
    if(getToken()){
        navigate('/admin')
    }
  },[])


  const handleLogin = async (e) => {
    e.preventDefault()

    await axios.get('/sanctum/csrf-cookie').then((response) => {

        Config.getLogin({name, email, password})
              .then(({data}) => {
               // console.log(data.token)
                
                if(data.success){
                    navigate('/admin')                
                    setToken(
                      data
                    )
                }else{
                    setMessage(data.message);
                }
              })
    })

  }

  return (
    <>
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-sm-4">
                <div className="card mt-5 mb-5">
                    <div className="card-body">
                        <h1 className="text-center fw-bolder">
                            Login
                        </h1>

                        <form onSubmit={handleLogin}>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Ingrese el Correo" name="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd" className="form-label">Contraseña:</label>
                            <input type="password" className="form-control" id="pwd" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" name="pswd"/>
                        </div>
                        
                        <button type="submit" className="btn btn-primary w-100 mt-4">Enviar</button>
                        </form>
                        <hr/>
                        <div className="mb-3">
                        <p className='text-center'>Primera vez... debe registrarse</p>
                        <NavLink to='/register' className='btn btn-primary w-100 mt-4'>Registro</NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
