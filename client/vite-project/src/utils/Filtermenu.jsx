import { useState } from "react";
import { Filter } from "lucide-react";

 function FilterMenu({ onFilter }) {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState({
    product_code: "",
    name: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    onFilter(filters); // send filters back to parent (DisplayProduct)
    setOpen(false); // close the menu after search
  };

  return (
    <div className="relative inline-block text-left">
      {/* Filter Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
      >
        <Filter className="w-5 h-5" />
      </button>

      {/* Dropdown Form */}
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg p-4 z-10">
          <input
            type="text"
            name="product_code"
            value={filters.product_code}
            onChange={handleChange}
            placeholder="Product Code"
            className="w-full mb-3 p-2 border rounded-lg focus:ring focus:ring-blue-200"
          />
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full mb-3 p-2 border rounded-lg focus:ring focus:ring-blue-200"
          />

          <button
            onClick={handleSearch}
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      )}
    </div>
  );
}



export default FilterMenu
