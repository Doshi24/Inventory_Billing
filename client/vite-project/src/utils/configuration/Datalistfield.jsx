import React from "react";

const DataListInput = ({ label, value, onChange, options }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        list="product-codes"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
        className="border border-gray-300 rounded-md p-2 w-full bg-white"
        placeholder="Select or type a product code"
      />
      <datalist id="product-codes">
        {options.map((opt, idx) => (
          <option key={idx} value={opt.product_code}>
            {opt.name}
          </option>
        ))}
      </datalist>
    </div>
  );
};

export default DataListInput;
