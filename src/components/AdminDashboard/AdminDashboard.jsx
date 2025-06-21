// AdminDashboard.jsx
import React from 'react'
import Sidbar from './pages/Sidbar'
import AppRoutes from './context/AppRoutes'
import { BrowserRouter, Routes } from 'react-router-dom'

export default function AdminDashboard() {
  return (
    <div className="flex">
      <Sidbar />
      <div className="flex-1 p-4">
        <AppRoutes />
      </div>
    </div>
  );
}