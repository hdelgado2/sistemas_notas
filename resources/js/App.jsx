import React, { useState,useEffect } from 'react'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import LayoutsPublic from "../js/layouts/LayoutsPublic";
import PageHome from './Pagespublic/PageHome';
import LayoutsAdmin from "../js/layouts/LayoutsAdmin";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from "../js/pageAuth/protectedRoute";
import Login from './pageAuth/Login';
import Register from './pageAuth/Register';
import Panel from './pageAdmin/Panel';
import User from './pageAdmin/User';
import EstudianteEdit from './pageAdmin/EstudianteEdit';
import Loading from './components/Loading';
import RegistrarEmpresa from './pageAdmin/Empresa/RegistrarEmpresa';
import ListadoEmpresa from './pageAdmin/Empresa/ListadoEmpresa';

const App = () => {
  const [Load, setLoad] = useState(false)
  useEffect(() => {
   
    setLoad(true)
    
    setInterval(() => {
      setLoad(false)
    }, 100);


  }, [])
  
  
  

  return (
    
    <div>
      {Load ? <Loading/> : null}
      {<Router>
        <Routes>
          <Route path='/' element={<LayoutsPublic/>}>
              <Route index element={<PageHome/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
          </Route>
          <Route element={<ProtectedRoute/>}>
              <Route path='/admin' element={<LayoutsAdmin/>}>
                <Route index element={<Panel/>}/>
                <Route path='user' element={<User/>}/>
                <Route path='user/edit/:id' element={<EstudianteEdit/>}/>
                <Route path='listadosEmpresa' element={<ListadoEmpresa/>}></Route>
                <Route path='registrarEmpresa' element={<RegistrarEmpresa/>}></Route>
              </Route>
          </Route>
        </Routes>
      </Router>}
    </div>
  )
}

export default App

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}
