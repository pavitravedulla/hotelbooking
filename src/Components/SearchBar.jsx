import React from "react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="flex justify-center gap-2 mt-6">
      <input
        type="text"
        placeholder="Enter location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-lg px-4 py-2 w-64"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Search
      </button>
    </div>
  );
}
