"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function PropertyListSort() {
  const [sortBy, setSortBy] = useState("Date");

  return (
    <div className="flex justify-between items-center mb-6">
      <span className="text-dash-muted-foreground">29 results</span>
      <div className="flex items-center space-x-2">
        <span className="text-dash-muted-foreground">Sort by</span>
        <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-dash-secondary">
          <span>{sortBy}</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
