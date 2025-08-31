import React, { useEffect, useState } from "react";
import { Download, Filter, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import {server_url} from '../../utils/servicemanger.js'
import FilterMenu from "../../utils/Filtermenu.jsx";


function Displayproduct() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;


    // Fake API response for demo
    useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${server_url}products/Display`);
        const json = await res.json(); // convert response to JSON
        setData(json.result); // save to state
      } catch (err) {
        console.error("❌ Error fetching products:", err);
      }
    };

    fetchData();
  }, []);

  // Pagination logic
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);



  // filter logic 
  const handlefilter = async (filters) => {
    try {
      const filtersearch = new URLSearchParams(filters).toString(); // code and name
      const result = await fetch(`${server_url}products/filter?${filtersearch}`);
      const displayresult = await result.json();
      setData(displayresult.result);
      setPage(1);
    } catch (error) {
      console.log("filter logic didn;t work", error)
    }
  }
  return (
    // <div className="bg-black">
    // <div className="mr-20 ml-20 mt-30"> {/* 20px margin all sides */}
    //   {/* Wrapper with horizontal scroll for table only */}
    //   <div className="overflow-x-auto shadow-lg rounded-lg border">
    //     <table className="min-w-full border-collapse">
    //       {/* Header */}
    //       <thead className="bg-blue-600 text-white">
    //       <tr>
    //         <th className="p-3 text-center">Code</th>
    //         <th className="p-3 text-center">Name</th>
    //         <th className="p-3 text-center">Quantity</th>
    //         <th className="p-3 text-center">Price</th>
    //         <th className="p-3 text-center">Tax</th>
    //         <th className="p-3 text-center">Brand</th>
    //         <th className="p-3 text-center">Category</th>
    //         <th className="p-3 text-center">Unit</th>
    //         <th className="p-3 text-center">Description</th>
    //       </tr>
    //     </thead>

    //     <tbody>
    //     {currentItems.map((item, index) => (
    //       <tr
    //         key={item.product_code}
    //         className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
    //       >
    //         <td className="p-3 text-blue-600 cursor-pointer text-center">
    //           {item.product_code}
    //         </td>
    //         <td className="p-3 text-center">{item.name}</td>
    //         <td className="p-3 text-center">{item.Quantity}</td>
    //         <td className="p-3 text-center">{item.per_unit_price}</td>
    //         <td className="p-3 text-center">{item.tax_rate}</td>
    //         <td className="p-3 text-center">{item.brand_id}</td>
    //         <td className="p-3 text-center">{item.category_id}</td>
    //         <td className="p-3 text-center">{item.unit_of_measure}</td>
    //         <td className="p-3 text-center">{item.description}</td>
    //       </tr>
    //     ))}
    //     </tbody>
    //     </table>
    //   </div>

    //   {/* Pagination Controls */}
    //   <div className="flex justify-center items-center mt-6 space-x-4">
    //     <button
    //       className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
    //       onClick={() => setPage(page - 1)}
    //       disabled={page === 1}
    //     >
    //       Previous
    //     </button>
    //     <span className="font-semibold">
    //       Page {page} of {Math.ceil(data.length / itemsPerPage)}
    //     </span>
    //     <button
    //       className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
    //       onClick={() => setPage(page + 1)}
    //       disabled={endIndex >= data.length}
    //     >
    //       Next
    //     </button>
    //   </div>
    // </div>
    // </div>

    <div className="min-h-screen pt-8 bg-gray-300">
      {/* <div className="mx-10 my-10 h-[calc(100vh-6rem)]"> */}
        
        {/* Header Row */}
        <div className="flex justify-between items-center mb-4 mr-25 ml-25">
          <h2 className="text-2xl font-medium text-violet-900">Product List</h2>
          <div className="flex space-x-4">
            <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Download className="w-5 h-5" />
            </button>
            {/* <button className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              <Filter className="w-5 h-5" />
            </button> */}
            <FilterMenu onFilter={handlefilter} />
            <button className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto shadow-lg rounded-lg border h-full bg-white mr-25 ml-25 pb-5">
          <table className="min-w-full border-collapse">
            <thead className="bg-blue-600 text-white sticky top-0">
              <tr>
                <th className="p-3 text-center">Code</th>
                <th className="p-3 text-center">Name</th>
                <th className="p-3 text-center">Quantity</th>
                <th className="p-3 text-center">Price</th>
                <th className="p-3 text-center">Tax</th>
                <th className="p-3 text-center">Brand</th>
                <th className="p-3 text-center">Category</th>
                <th className="p-3 text-center">Unit</th>
                <th className="p-3 text-center">Description</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((item, index) => (
                  <tr
                    key={item.product_code || index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-200"}
                  >
                    <td className="p-3 text-blue-600 cursor-pointer text-center">
                      {item.product_code}
                    </td>
                    <td className="p-3 text-center">{item.name || "__"}</td>
                    <td className="p-3 text-center">{item.stock_quantity || "__"}</td>
                    <td className="p-3 text-center">{item.per_unit_price || "__"}</td>
                    <td className="p-3 text-center">{item.tax_rate || "__"}</td>
                    <td className="p-3 text-center">{item.brand_id || "__"}</td>
                    <td className="p-3 text-center">{item.category_id || "__"}</td>
                    <td className="p-3 text-center">{item.unit_of_measure || "__"}</td>
                    <td className="p-3 text-center">{item.description || "__"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="p-4 text-center text-gray-500">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
              onClick={() => setPage((p) => p - 1)}
              disabled={page === 1}
            >
              Previous
            </button>
            <span className="font-semibold text-black">
              Page {page} of {Math.max(1, Math.ceil(data.length / itemsPerPage))}
            </span>
            <button
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
              onClick={() => setPage((p) => p + 1)}
              disabled={endIndex >= data.length}
            >
              Next
            </button>
          </div>
        </div>
      {/* </div> */}
    </div>
)}


export default Displayproduct;
