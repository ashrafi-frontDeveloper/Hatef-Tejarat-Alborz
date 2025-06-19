import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login/Login'
import Register from './Register/Register'
import Navbar from '../Header/Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Validations() {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* وقتی هیچکدوم نبود، ریدایرکت به login */}
        <Route path="*" element={<Navigate to="login" replace />} />
      </Routes>
    </div>
  )
}
