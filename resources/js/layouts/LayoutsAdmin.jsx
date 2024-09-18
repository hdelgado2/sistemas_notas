import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import {Outlet, useNavigate} from "react-router-dom";
import AuthUser from '../pageAuth/AuthUser';

const LayoutsAdmin = () => {

  const {getToken} = AuthUser()
  const Navigate = useNavigate()

  useEffect(() => {

      if(getToken()){
        Navigate('/admin')
      }

  },[])

  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default LayoutsAdmin
