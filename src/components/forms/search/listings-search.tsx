"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

// Components
import { SendHorizontal, SlidersHorizontal, Loader2 } from "lucide-react";
import FilterModal from "./filter/filter-modal";
import LoadingSpinner from "@/components/common/animations/loading-spinner";
import PlacePredictions from "./place-predictions";

// Hooks
import usePlacesAutocompleteService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import useFilterSearchParams from "@/lib/hooks/filter/use-filter-search-params";

// Types
import { Listing } from "@/types/api/listings";

// libs
import { updateSearchParams } from "@/lib/helpers/url-helpers";
import { getAllListingsPublic } from "@/lib/models/listings/queries";

const mockResults = 1000;

export default function ListingsSearch({
  showFilter = false,
  propertyTypes,
  amenities,
  setListingsList,
}: {
  showFilter?: boolean;
  propertyTypes?: { name: string; id: number | string }[];
  amenities?: { label: string; value: number | string }[];
  setListingsList?: (listings: Listing[]) => void;
}) {
  const [term, setTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedPlace, setSelectedPlace] =
    // @ts-ignore
    useState<google.maps.places.PlaceResult | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParams = useFilterSearchParams();

  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = usePlacesAutocompleteService({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    options: {
      types: ["(cities)"],
      componentRestrictions: { country: "mx" },
    },
    debounce: 500,
  });

  const handleSearch = async () => {
    try {
      setIsSearching(true);
      let updatedParams = new URLSearchParams(searchParams);

      if (selectedPlace && selectedPlace.address_components) {
        const cityName = selectedPlace.address_components[0].long_name;
        updatedParams = updateSearchParams(updatedParams, "location", cityName);
      }

      // Update the URL without reloading the page
      const newUrl = `${window.location.pathname}?${updatedParams.toString()}`;
      router.push(newUrl, { scroll: false });

      const res = await getAllListingsPublic(updatedParams.toString());
      if (setListingsList) {
        setListingsList(res.listings.data);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      // Handle error (e.g., show error message to user)
    }
    setIsSearching(false);
  };

  const handleFilterClick = () => {
    setIsFilterOpen(true);
  };

  const handlePredictionSelect = useCallback(
    (prediction: any) => {
      setTerm(prediction.description);
      getPlacePredictions({ input: "" }); // Clear predictions

      placesService?.getDetails(
        {
          placeId: prediction.place_id,
        },
        (placeDetails: any) => {
          console.log("Selected place details:", placeDetails);
          setSelectedPlace(placeDetails);
        },
      );
    },
    [placesService],
  );

  useEffect(() => {
    console.log("Place predictions:", placePredictions);
    console.log("Is loading predictions:", isPlacePredictionsLoading);
  }, [placePredictions, isPlacePredictionsLoading]);

  return (
    <>
      <div className="self-stretch rounded-lg bg-colors-background-bg-primary border-r-[1px] border-solid border-b-[1px] border-t-[1px] border-gainsboro-200 border-l-[1px] flex flex-row items-center justify-start pt-spacing-container-sm px-[0.687rem] pb-[0.625rem] gap-spacing-container-xs sm:w-[640px] sm:self-center w-full">
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
            placeholder="Search by City, Address, Postal Code"
            type="text"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
              getPlacePredictions({ input: e.target.value });
            }}
          />
        </div>
        {showFilter && (
          <div
            className="cursor-pointer hover:text-primary"
            onClick={handleFilterClick}
          >
            {isSearching ? (
              <Loader2 className="h-[1.25rem] w-[1.25rem] text-muted-foreground animate-spin" />
            ) : (
              <SlidersHorizontal className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 " />
            )}
          </div>
        )}
        <div className="cursor-pointer hover:text-primary">
          {isSearching ? (
            <Loader2 className="h-[1.25rem] w-[1.25rem] text-muted-foreground animate-spin" />
          ) : (
            <SendHorizontal
              className="h-[1.25rem] w-[1.25rem]"
              onClick={handleSearch}
            />
          )}
        </div>
      </div>
      {/* Google Places Predictions */}
      {!isPlacePredictionsLoading && (
        <PlacePredictions
          predictions={placePredictions}
          onSelect={handlePredictionSelect}
        />
      )}

      {/* Filter */}
      {showFilter && (
        <FilterModal
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          totalResults={mockResults}
          propertyTypes={propertyTypes}
          amenities={amenities}
          setListingsList={setListingsList}
          initialFilterData={filterParams}
          setIsSearching={setIsSearching}
        />
      )}

      {/* Page Loader when submitting */}
      <LoadingSpinner isLoading={isSearching} />
    </>
  );
}
