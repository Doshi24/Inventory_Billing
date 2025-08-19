import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductForm from './component/Forms/Product'
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
    </Router>
  )
}

export default App
