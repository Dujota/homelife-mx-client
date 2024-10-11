import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex justify-between items-center mt-4">
      <span className="text-sm text-gray-500">
        Showing {(currentPage - 1) * 10 + 1}-
        {Math.min(currentPage * 10, totalPages * 10)} of {totalPages * 10} items
      </span>
      <div className="flex space-x-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded text-sm ${
              i + 1 === currentPage
                ? "bg-green-600 text-white"
                : "border text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => onPageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
