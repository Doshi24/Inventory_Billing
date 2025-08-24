import React, { useState } from "react";
import Notification from "../../utils/Notification";
import  server_url  from "../../utils/servicemanger.js";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    product_code: "",
    name: "",
    description: "",
    per_unit_price: "",
    tax_rate: "",
    tax_code_id: "",
    category_id: "",
    brand_id: "",
    unit_of_measure: ""
  });

  const [notification, setNotification] = useState(null);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${server_url}products/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setNotification({ type: "success", message: "Product added successfully!" });
        setFormData({ name: "", description: "", price: "", quantity: "" });
      } else {
        setNotification({ type: "error", message: "Failed to add product" });
      }
    } catch (error) {
      console.error("Error:", error);
      setNotification({ type: "error", message: "Something went wrong" });
    }
  };

  return (
<div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
  <form
    onSubmit={handleSubmit}
    className="bg-white shadow-2xl rounded-2xl w-full max-w-6xl border border-gray-400"
  >
    {/* Header */}
    <div className="bg-blue-900 text-white px-6 py-3  rounded-t-2xl">
      <h2 className="text-2xl font-bold">Add Product</h2>
    </div>

    {/* Section 1: General Details */}
    <div className="p-8">
      <h3 className="text-lg font-semibold text-blue-900 mb-4">
        General Product Details
      </h3>

      <div className="grid grid-cols-3 gap-6">
        {/* Product Code */}
        <div>
          <label className="block text-gray-700 mb-2">Product Code *</label>
          <input
            type="text"
            name="product_code"
            value={formData.product_code}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Product Name */}
        <div>
          <label className="block text-gray-700 mb-2">Product Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Description (changed to input, not textarea) */}
        <div>
          <label className="block text-gray-700 mb-2">Description *</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
    </div>

    {/* Section 2: Pricing & Tax */}
    <div className="px-8 pb-8">
      <h3 className="text-lg font-semibold text-blue-900 mb-4">
        Pricing & Tax
      </h3>

      <div className="grid grid-cols-3 gap-6">
        {/* Price */}
        <div>
          <label className="block text-gray-700 mb-2">Per Unit Price (₹) *</label>
          <input
            type="number"
            name="per_unit_price"
            value={formData.per_unit_price}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Tax Rate */}
        <div>
          <label className="block text-gray-700 mb-2">Tax Rate (%)</label>
          <input
            type="number"
            name="tax_rate"
            value={formData.tax_rate}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Tax Code */}
        <div>
          <label className="block text-gray-700 mb-2">Tax Code</label>
          <input
            type="text"
            name="tax_code_id"
            value={formData.tax_code_id}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
    </div>

    {/* Section 3: Categorization */}
    <div className="px-8 pb-8">
      <h3 className="text-lg font-semibold text-blue-900 mb-4">
        Categorization
      </h3>

      <div className="grid grid-cols-3 gap-6">
        {/* Category */}
        <div>
          <label className="block text-gray-700 mb-2">Category *</label>
          <input
            type="text"
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block text-gray-700 mb-2">Brand *</label>
          <input
            type="text"
            name="brand_id"
            value={formData.brand_id}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Unit of Measure */}
        <div>
          <label className="block text-gray-700 mb-2">Unit of Measure *</label>
          <input
            type="text"
            name="unit_of_measure"
            value={formData.unit_of_measure}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
    </div>

    {/* Footer Buttons */}
    <div className="bg-gray-50 px-8 py-4 rounded-b-2xl border-t flex justify-end gap-4">
      <button
        type="button"
        className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Save Product
      </button>
    </div>
  </form>

  {/* Notification */}
  {notification && (
    <Notification
      type={notification.type}
      message={notification.message}
      onClose={() => setNotification(null)}
    />
  )}
</div>



  );
};

export default ProductForm;
