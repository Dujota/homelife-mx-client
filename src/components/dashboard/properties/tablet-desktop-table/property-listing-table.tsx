"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

import PropertyTable from "./property-table";
import Pagination from "./pagination";
import SearchBar from "@/components/forms/search/dashboard/property-search/search-bar";
import FilterButton from "@/components/common/buttons/filter-button";
import SortButton from "@/components/common/buttons/sort-button";

interface Property {
  id: number;
  name: string;
  price: number;
  location: string;
  bedroom: number;
  bathroom: number;
  area: string;
  daysListed: string;
  houseType: string;
  listingAgent: string;
  isPublic: boolean;
}

export default function PropertyListingTable({
  properties,
}: {
  properties: Property[];
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Date");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Assuming 5 pages for this example

  return (
    <div className="p-4 flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Property Listing</h1>
        {/* <button
          className="bg-primary hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center cursor-pointer"
          type="button"
        >
          <Plus className="mr-2" /> Add Property
        </button> */}
      </div>
      <p className="text-orange-500 mb-4">
        {`Orange colored 'property name' indicates public listing`}
      </p>
      <div className="flex justify-between items-center mb-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterButton />
        <SortButton sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <div className="flex-grow overflow-hidden">
        <PropertyTable properties={properties} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
