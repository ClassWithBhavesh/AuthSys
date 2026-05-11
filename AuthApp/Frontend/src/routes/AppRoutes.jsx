import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import OTPInput from '../components/auth/OTPInput.jsx'

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to={"/register"} replace />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/verify-otp' element={<OTPInput />} />     
        <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default AppRoutes