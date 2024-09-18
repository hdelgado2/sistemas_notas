import React, { useEffect, useState } from 'react'
import Config from '../Config'
import {  useNavigate } from 'react-router-dom'
import AuthUser from "./AuthUser";

const Register = () => {

    const {getToken} = AuthUser()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();


    useEffect(() => {
        if(getToken()){
            navigate('/')
        }
    })



    const handleSubmit = async (e) => {
        e.preventDefault()
        Config.getRegister({name, email, password})
              .then(({data}) => {
                if(data.success){
                    navigate('/login')                
                }
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
                                Registro
                            </h1>

                            <form onSubmit={handleSubmit}>
                            <div className="mb-3 mt-3">
                                <label htmlFor="nombre" className="form-label">Nombre:</label>
                                <input type="text" className="form-control" id="nombre" value={name} onChange={e => setName(e.target.value)} placeholder="Ingrese el nombre" name="nombre" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Ingrese el Correo" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd" className="form-label">Contraseña:</label>
                                <input type="password" className="form-control" id="pwd" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" name="pswd"/>
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Registrar</button>
                            </form>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register