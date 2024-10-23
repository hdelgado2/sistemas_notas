import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    
  
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: 280}}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          
          <strong>Configuraciones</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
          <li><a className="dropdown-item" href="#"><NavLink className={({isActive}) => (isActive ? ' nav-link active' : 'nav-link')} to={'/admin/years/listado'}>Años</NavLink></a></li>
          <li><a className="dropdown-item" href="#">Registrar Materias</a></li>
      
        </ul>
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="empresa" data-bs-toggle="dropdown" aria-expanded="false">
          <strong>Empresa</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="empresa">
          <li><a className="dropdown-item" href="#"><NavLink className={({isActive}) => (isActive ? ' nav-link active' : 'nav-link')} to={'/admin/listadosEmpresa'}>Listado</NavLink></a></li>
        </ul>
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="empresa" data-bs-toggle="dropdown" aria-expanded="false">
          
          <strong>Seguridad</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="empresa">
          <li><a href="#" className='dropdown-item'><NavLink  to={'/admin/user'} className={({isActive}) => (isActive ? ' nav-link active' : 'nav-link')}>Usuario</NavLink></a></li>  
        </ul>
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          
          <strong>Estudiantes</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
          <li><a className="dropdown-item" href="#">Listados</a></li>
          
      
        </ul>
      </div>
    </div>
  

            
        
    </>
  )
}

export default Sidebar