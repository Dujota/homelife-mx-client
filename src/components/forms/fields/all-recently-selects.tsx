"use client";

import { useState } from "react";
import Select from "react-select";
import type { NextPage } from "next";

export type ListFilterDropdownsType = {
  className?: string;
};

const optionsListings = [
  { value: "all", label: "All Listings" },
  { value: "houses", label: "Houses" },
  { value: "apartments", label: "Apartments" },
];

const optionsRecentlyAdded = [
  { value: "recentlyAdded", label: "Recently Added" },
  { value: "lastWeek", label: "Added Last Week" },
  { value: "lastMonth", label: "Added Last Month" },
];

const ListFilterDropdowns: NextPage<ListFilterDropdownsType> = ({
  className = "",
}) => {
  const [selectedListing, setSelectedListing] = useState(optionsListings[0]);
  const [selectedRecentlyAdded, setSelectedRecentlyAdded] = useState(
    optionsRecentlyAdded[0],
  );

  const handleListingChange = (option: any) => {
    setSelectedListing(option);
    alert(`Selected listing: ${option.label}`);
  };

  const handleRecentlyAddedChange = (option: any) => {
    setSelectedRecentlyAdded(option);
    alert(`Selected recently added: ${option.label}`);
  };

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border max-w-full text-left text-[2rem] text-content-base-main font-text-md-regular ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-spacing-container-xs max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.03em] leading-[2.5rem] font-medium font-[inherit]">
          Favorites
        </h1>
        <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-spacing-container-xs text-[1rem]">
          {/* All Listings */}
          <div className="flex-1 min-w-[7rem]">
            <Select
              options={optionsListings}
              value={selectedListing}
              onChange={handleListingChange}
              className="text-[1rem]"
            />
          </div>

          {/* Recently Added */}
          <div className="flex-1 min-w-[7rem]">
            <Select
              options={optionsRecentlyAdded}
              value={selectedRecentlyAdded}
              onChange={handleRecentlyAddedChange}
              className="text-[1rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListFilterDropdowns;
