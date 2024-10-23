import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthUser = () => {
    const navegate = useNavigate()


    const getToken = () =>{
         const tokenString = sessionStorage.getItem('token');
         const token = JSON.parse(tokenString)
         return token;
    }

    
    const getUser = () =>{
        const userString = sessionStorage.getItem('user');
        const user = JSON.parse(userString)
        return user;
   }


   const [Token, setToken] = useState(getToken())
   const [User, setUser] = useState(getUser())

   const saveToken = ({token,user}) =>{
        sessionStorage.setItem('user',JSON.stringify(user.name));
        sessionStorage.setItem('token',JSON.stringify(token));
       
        setToken(token);
        setUser(user);
   }    


   const getLogout = () =>{
    sessionStorage.clear();
    navegate('/')
   }

  return {
    setToken:saveToken,
    Token,
    User,
    getToken,
    getUser,
    getLogout

  }
}

export default AuthUser
