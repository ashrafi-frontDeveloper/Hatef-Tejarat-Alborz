// context/AppRoutes.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
// صفحات
import Home from '../pages/Home/Home'
import Order from '../pages/Order'
import Products from '../pages/Products'
import NewUser from '../pages/NewUser'
import Users from '../pages/Users'
import AddProduct from '../pages/AddProduct'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="new-users" element={<NewUser />} />
      <Route path="orders" element={<Order />} />
      <Route path="add-product" element={<AddProduct />} />
      <Route path="products" element={<Products />} />
      <Route path="users" element={<Users />} />
    </Routes>
  )
}
