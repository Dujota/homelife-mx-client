"use client";

import React, { useState } from "react";

import ListFilterDropdowns from "@/components/forms/fields/all-recently-selects";
import HomepageSearch from "@/components/forms/search/homepage-search";
import FavouriteCardGrid from "./fav-card-grid";
import { FormAmenity, FormPropertyType } from "@/lib/helpers/api-helpers";
import { Listing } from "@/types/api/listings";

type FavListWrapperProps = {
  propertyTypes: FormPropertyType[];
  amenities: FormAmenity[];
  listings: Listing[];
};

export default function FavListWrapper({
  propertyTypes,
  amenities,
  listings,
}: FavListWrapperProps) {
  const [listingList, setListingsList] = useState<Listing[]>(listings);

  return (
    <>
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0.75rem] pb-[0.75rem] box-border max-w-full">
        <header className="flex-1 flex flex-row items-start justify-start gap-[0.75rem] max-w-full">
          <HomepageSearch
            showFilter
            propertyTypes={propertyTypes}
            amenities={amenities}
            setListingsList={setListingsList}
          />
        </header>
      </div>
      <ListFilterDropdowns title="Listings" setListingsList={setListingsList} />

      <main className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border max-w-full">
        <FavouriteCardGrid listings={listingList} />
      </main>
    </>
  );
}
