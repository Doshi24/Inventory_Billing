import React, { useState } from "react";

const Purchase_billingView = () => {
  const [dealerName, setDealerName] = useState("");
  const [billDate] = useState(new Date().toISOString().split("T")[0]);

  // Single product input
  const [product, setProduct] = useState({
    code: "",
    name: "",
    quantity: 1,
    price: 0,
    discount: 0,
    tax: 0,
  });

  // List of added products
  const [products, setProducts] = useState([]);

  // Handle product input
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Add product row
  const addProduct = () => {
    if (!product.name || !product.code) return alert("Enter product details");
    setProducts([...products, product]);
    setProduct({ code: "", name: "", quantity: 1, price: 0, discount: 0, tax: 0 });
  };

  // Remove product row
  const removeProduct = (index) => {
    const updated = [...products];
    updated.splice(index, 1);
    setProducts(updated);
  };

  // Row total calculation
  const calcRowTotal = (p) => {
    const price = parseFloat(p.price) * parseInt(p.quantity);
    const discount = (price * parseFloat(p.discount)) / 100;
    const afterDiscount = price - discount;
    const tax = (afterDiscount * parseFloat(p.tax)) / 100;
    return afterDiscount + tax;
  };

  // Grand total
  const grandTotal = products.reduce((acc, p) => acc + calcRowTotal(p), 0);

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h2 style={{ marginBottom: "20px" }}>Billing Page</h2>

      {/* Dealer Info */}
      <div style={{ marginBottom: "20px" }}>
        <label>Dealer Name: </label>
        <input
          type="text"
          value={dealerName}
          onChange={(e) => setDealerName(e.target.value)}
          style={{ marginRight: "20px" }}
        />
        <label>Date: </label>
        <input type="date" value={billDate} readOnly />
      </div>

      {/* Product Form */}
      <h3>Add Product</h3>
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <input
          name="code"
          placeholder="Code"
          value={product.code}
          onChange={handleChange}
        />
        <input
          name="name"
          placeholder="Name"
          value={product.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Qty"
          value={product.quantity}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />
        <input
          type="number"
          name="discount"
          placeholder="Discount %"
          value={product.discount}
          onChange={handleChange}
        />
        <input
          type="number"
          name="tax"
          placeholder="Tax %"
          value={product.tax}
          onChange={handleChange}
        />
        <button onClick={addProduct}>Add</button>
      </div>

      {/* Product Table */}
      <h3>Bill Details</h3>
      <table
        border="1"
        cellPadding="5"
        style={{ marginTop: "10px", width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Code</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Disc %</th>
            <th>Tax %</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{p.code}</td>
              <td>{p.name}</td>
              <td>{p.quantity}</td>
              <td>{p.price}</td>
              <td>{p.discount}%</td>
              <td>{p.tax}%</td>
              <td>{calcRowTotal(p).toFixed(2)}</td>
              <td>
                <button onClick={() => removeProduct(i)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Summary */}
      <h3 style={{ marginTop: "20px" }}>Grand Total: ₹{grandTotal.toFixed(2)}</h3>

      {/* Actions (You’ll wire these to backend later) */}
      <div style={{ marginTop: "20px" }}>
        <button>Save Bill</button>
        <button style={{ marginLeft: "10px" }}>Generate PDF</button>
      </div>
    </div>
  );
};

export default Purchase_billingView;
