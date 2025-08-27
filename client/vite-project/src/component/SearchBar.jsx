import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";  // simple search icon
import { searchconfig } from "../utils/config.js";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      setHighlightedIndex(-1);
      return;
    }

    const filtered = searchconfig.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setResults(filtered);
    setHighlightedIndex(-1);
  };

  const handleSelect = (path) => {
    navigate(path);
    setQuery("");
    setResults([]);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < results.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : results.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      const target =
        highlightedIndex >= 0 ? results[highlightedIndex] : results[0];
      if (target) handleSelect(target.path);
    }
  };

  return (
    <div className="relative w-80">
      {/* Input wrapper */}
      <div className="flex items-center bg-white border rounded-full shadow-sm px-3 py-2">
        <Search className="w-5 h-5 text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          className="w-full outline-none"
        />
      </div>

      {/* Dropdown results */}
      {results.length > 0 && (
        <ul className="absolute bg-white border w-full mt-1 rounded-md shadow-lg z-10">
          {results.map((item, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(item.path)}
              className={`px-3 py-2 cursor-pointer ${
                idx === highlightedIndex ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
