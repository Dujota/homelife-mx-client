import React from "react";
import { Filter } from "lucide-react";

export default function FilterButton() {
  return (
    <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50 mr-4">
      <Filter className="h-5 w-5" />
      <span>Filter</span>
    </button>
  );
}
