import React from "react";
import { ChevronDown } from "lucide-react";

interface SortButtonProps {
  sortBy: string;
  setSortBy: (sort: string) => void;
}

export default function SortButton({ sortBy, setSortBy }: SortButtonProps) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-500">Sort by</span>
      <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
        <span>{sortBy}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    </div>
  );
}
