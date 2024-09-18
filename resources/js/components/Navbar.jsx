import React from 'react'
import AuthUser from '../pageAuth/AuthUser'
import Config from '../Config'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const {getToken,getLogout} = AuthUser()

  const Logout = () =>{
     Config.getLogout('/logout')
            .then((response) => {
              console.log(response)
              getLogout()
            }).catch((error) => console.log(error))
  }

  const renderLinks = () => {
    
    if (getToken()) {
        return(
          <>
          <li className="nav-item">
            <a className="nav-link" href="#">Cambio de Contraseña</a>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/admin' >Administracion</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='#' onClick={Logout}>Logout</a>
          </li>
          </>
        )
    }else{
      return(
        <>
      <li className="nav-item">
        <NavLink to='/login' className="nav-link" >Login</NavLink>
      </li>
      </>

      )
    }
  }

  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
  <div className="container">
    <a className="navbar-brand" href="#">SGN</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
      </ul>
      <div className="navbar-nav ms-auto">
      { renderLinks() }
      </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
