import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductForm from './component/Forms/Product'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
// import './App.css'

function App() {

  return (
      <Router>
      <Navbar />
      <Routes>
        {/* Home or Dashboard */}
        <Route path="/" element={<h1 className="p-6">Welcome Dashboard</h1>} />
        {/* Product → New Product */}
        <Route path="/products/new" element={<ProductForm />} />
        {/* Later you can add Product Delete, Inventory, etc. */}
      </Routes>
      <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
      theme="colored"
    />
    </Router>
  )
}

export default App
