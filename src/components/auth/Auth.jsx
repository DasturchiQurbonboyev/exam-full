import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
    const user = localStorage.getItem("token");
    return user ? <Outlet /> : <Navigate replace to="/log-in" />
}

export default Auth