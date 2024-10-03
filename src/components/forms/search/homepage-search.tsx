"use client";

import React, { useState } from "react";
import { SendHorizontal, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import FilterModal from "./filter/filter-modal";

const mockResults = 1000;

export default function HomepageSearch({
  showFilter = false,
  propertyTypes,
  amenities,
}: {
  showFilter?: boolean;
  propertyTypes?: { name: string; id: number | string }[];
  amenities?: { label: string; value: number | string }[];
}) {
  const [term, setTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterClick = () => {
    setIsFilterOpen(true);
  };

  return (
    <>
      <div className="self-stretch rounded-lg bg-colors-background-bg-primary border-r-[1px] border-solid border-b-[1px] border-t-[1px] border-gainsboro-200 border-l-[1px] flex flex-row items-center justify-start pt-spacing-container-sm px-[0.687rem] pb-[0.625rem] gap-spacing-container-xs sm:w-[640px] sm:self-center">
        <div className="flex-1 flex flex-row items-center justify-start gap-spacing-container-xxs1">
          <Image
            className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
            alt="Search Image"
            width={20}
            height={20}
            src="/images/icons/forms/search.svg"
          />
          <input
            className="w-[calc(100%_-_40px)] [border:none] [outline:none] font-text-md-regular text-[0.813rem] bg-[transparent] h-[1.5rem] flex-1 relative leading-[1.5rem] text-darkgray-200 text-left inline-block min-w-[10rem] p-0"
            placeholder="Search by City, Address, Zip"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        {showFilter && (
          <div
            className="cursor-pointer hover:text-primary"
            onClick={handleFilterClick}
          >
            <SlidersHorizontal className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 " />
          </div>
        )}
        <div className="cursor-pointer hover:text-primary">
          <SendHorizontal className="h-[1.25rem] w-[1.25rem] " />
        </div>
      </div>
      {showFilter && (
        <FilterModal
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          totalResults={mockResults}
          propertyTypes={propertyTypes}
          amenities={amenities}
        />
      )}
    </>
  );
}
