import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductForm from './component/Products/Product'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import Updateproduct from './component/Products/Updateproduct';
import Displayproduct from './component/Products/Displayproduct';
import Purchase_billingView from './component/Invoices/Purchase/Purchase_BillingView';
// import './App.css'

function App() {

  return (
      <Router>
      <Navbar />
      <Routes>
        {/* Home or Dashboard */}
        <Route path="/" element={<h1 className="p-6">Welcome Dashboard</h1>} />
        {/* Product → New Product */}
        <Route path="/product/new" element={<ProductForm />} />
        <Route path="/product/update" element={< Updateproduct/>}/>
        <Route path="product/display" element={< Displayproduct/>}/>
        <Route path='/purchase/billing/view' element={<Purchase_billingView />}/>
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
