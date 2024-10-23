import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthUser from './AuthUser'

const ProtectedRoute = () => {
   const {getToken} = AuthUser();

    if(!getToken()){
        return <Navigate to={'/'}/>
    }

  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default ProtectedRoute
