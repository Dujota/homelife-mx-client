"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";
import SearchBar from "./search-bar";

export default function AllPropertySearch() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex justify-between items-center mb-6">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-dash-secondary">
        <Filter className="h-5 w-5" />
        <span>Filter</span>
      </button>
    </div>
  );
}
