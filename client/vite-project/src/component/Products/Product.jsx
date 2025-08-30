import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import Notification from "../../utils/Notification.jsx";
import  { server_url }  from "../../utils/servicemanger.js";
import Loader from "../../utils/Loader.jsx";
import { toast } from "react-toastify";
import showToast from "../../utils/Toast.jsx";

const ProductForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    product_code: "",
    name: "",
    description: "",
    per_unit_price: "",
    tax_rate: "",
    tax_code_id: "",
    category_id: "",
    brand_id: "",
    unit_of_measure: "",
    stock_quantity : ""
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
        setLoading(true); // start loading
        const response = await fetch(`${server_url}products/new`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      showToast("success","Product added successfully!");
      // setNotification({ type: "success", message: "Product added successfully!" });
      setFormData({ name: "", description: "", price: "", quantity: "" });
      navigate("/"); 
    } else {
    showToast( "Error","Not Worked as Expected" );
  }
}   catch (error) {
    toast.error("Error:", error);
    setNotification("error", "Something went wrong");
}   finally {
  setLoading(false); // stop loading no matter what
}
  };
  // to redirect after form submission
  const navigate = useNavigate();

  return (
<div className="flex justify-center bg-gray-300 p-4 min-h-screen">
  <form
    onSubmit={handleSubmit}
    className="shadow-2xl w-full max-w-6xl border border-gray-400 rounded-2xl flex flex-col flex-1 bg-white"
  >
    {/* Header */}
    <div className="bg-blue-900 text-white px-6 py-3 rounded-t-2xl">
      <h2 className="text-2xl font-bold">Add Product</h2>
    </div>

    {/* Content */}
    <div className="flex-1 overflow-y-auto">
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

          {/* Description */}
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
          {/* // quantity */}
                    {/* Description */}
          <div>
            <label className="block text-gray-700 mb-2">Quantity *</label>
            <input
              type="text"
              name="stock_quantity"
              value={formData.stock_quantity}
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
            <label className="block text-gray-700 mb-2">
              Per Unit Price (₹) *
            </label>
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
      <div className="px-8 pb-2">
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
    </div>

    {/* Footer */}
    <div className="bg-gray-500 px-4 py-4 border-t flex justify-end gap-4 mt-auto rounded-b-2xl">
      <button
        type="button"
        className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-blue-600 hover:text-white transition"
        onClick={() => navigate("/")}
      >
        Cancel
      </button>
      <button
        type="submit"
        disabled={loading}
        className={`px-6 py-2 rounded-lg text-white transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-900"
        }`}
      >
        {loading ? <Loader type="dots" text="Saving..." /> : "Save Product"}
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
