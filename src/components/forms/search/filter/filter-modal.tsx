"use client";

import React, { useMemo } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { transformFormSubmission } from "@/lib/helpers/form-helpers";
import { FilterFormSubmission } from "@/types/api/forms/public-forms";
import { useFilterState } from "@/lib/hooks/filter/use-filter-state";
import {
  parkingOptions,
  daysOnMarketOptions,
  bedOptions,
  bathOptions,
  priceOptions,
  lotSizes,
  livingSpaceSizes,
  Option,
} from "@/lib/hooks/filter/filter-options";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalResults: number;
  propertyTypes: { id: string; name: string }[];
  amenities: { value: number; label: string }[];
  setListingsList: (listings: any[]) => void;
  initialFilterData: any;
}

export default function FilterModal({
  isOpen,
  onClose,
  totalResults,
  propertyTypes,
  amenities,
  setListingsList,
  initialFilterData,
}: any) {
  const {
    beds,
    setBeds,
    baths,
    setBaths,
    exactMatch,
    setExactMatch,
    selectedHomeTypes,
    setSelectedHomeTypes,
    selectedAmenities,
    setSelectedAmenities,
    showMoreAmenities,
    setShowMoreAmenities,
    minYearBuilt,
    setMinYearBuilt,
    maxYearBuilt,
    setMaxYearBuilt,
    keyword,
    setKeyword,
    mustHaveGarage,
    setMustHaveGarage,
    parkingSpots,
    setParkingSpots,
    daysOnMarket,
    setDaysOnMarket,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    minLotSize,
    setMinLotSize,
    maxLotSize,
    setMaxLotSize,
    minLivingSpace,
    setMinLivingSpace,
    maxLivingSpace,
    setMaxLivingSpace,
    maxPriceOptions,
    maxLotSizeOptions,
    maxLivingSpacesOptions,
  } = useFilterState(initialFilterData);

  const allIds = useMemo(() => {
    return propertyTypes.map((type: any) => type.id);
  }, [propertyTypes]);

  const initialAmenities = useMemo(() => {
    return amenities.slice(0, 6);
  }, [amenities]);

  const handleMinYearBuiltChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinYearBuilt(e.target.value);
  };

  const handleMaxYearBuiltChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxYearBuilt(e.target.value);
  };

  const handleAmenityChange = (value: number) => {
    setSelectedAmenities((prev) =>
      prev.includes(value)
        ? prev.filter((amenityValue) => amenityValue !== value)
        : [...prev, value],
    );
  };

  const handleMinPriceChange = (value: Option | null) => {
    setMinPrice(value);
    setMaxPrice((prevMaxPrice) => {
      if (prevMaxPrice?.value === "any") return prevMaxPrice;
      if (
        value &&
        prevMaxPrice &&
        parseInt(prevMaxPrice.value) < parseInt(value.value)
      ) {
        return priceOptions[0];
      }
      return prevMaxPrice;
    });
  };

  const handleExactMatchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExactMatch(e.target.checked);
  };

  const handleBedsChange = (value: string | number) => {
    setBeds(value);
  };

  const handleBathsChange = (value: string | number) => {
    setBaths(value);
  };

  const handleMinLotSizeChange = (value: Option | null) => {
    setMinLotSize(value);
    setMaxLotSize((prevMaxLotSize) => {
      if (prevMaxLotSize?.value === "any") return prevMaxLotSize;
      if (
        value &&
        prevMaxLotSize &&
        parseInt(prevMaxLotSize.value) < parseInt(value.value)
      ) {
        return lotSizes[0];
      }
      return prevMaxLotSize;
    });
  };

  const handleMinLivingSpaceChange = (value: Option | null) => {
    setMinLivingSpace(value);
    setMaxLivingSpace((prevMaxLivingSpace) => {
      if (prevMaxLivingSpace?.value === "any") return prevMaxLivingSpace;
      if (
        value &&
        prevMaxLivingSpace &&
        parseInt(prevMaxLivingSpace.value) < parseInt(value.value)
      ) {
        return livingSpaceSizes[0];
      }
      return prevMaxLivingSpace;
    });
  };

  const handleHomeTypeChange = (id: string) => {
    setSelectedHomeTypes((prev) =>
      prev.includes(id)
        ? prev.filter((typeId) => typeId !== id)
        : [...prev, id],
    );
  };

  const handleDeselectAll = () => {
    setSelectedHomeTypes([]);
  };

  const handleSelectAll = () => {
    setSelectedHomeTypes(allIds);
  };

  const handleResetAll = () => {
    setBeds("any");
    setBaths("any");
    setExactMatch(false);
    setSelectedHomeTypes(allIds);
    setSelectedAmenities([]);
    setShowMoreAmenities(false);
    setMinYearBuilt(undefined);
    setMaxYearBuilt(undefined);
    setKeyword("");
    setMustHaveGarage(false);
    setParkingSpots(parkingOptions[0]);
    setDaysOnMarket(daysOnMarketOptions[0]);
    setMinPrice(priceOptions[0]);
    setMaxPrice(priceOptions[0]);
    setMinLotSize(lotSizes[0]);
    setMaxLotSize(lotSizes[0]);
    setMinLivingSpace(livingSpaceSizes[0]);
    setMaxLivingSpace(livingSpaceSizes[0]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData: FilterFormSubmission = {
      beds,
      baths,
      exactMatch,
      selectedHomeTypes,
      selectedAmenities,
      showMoreAmenities,
      minYearBuilt,
      maxYearBuilt,
      keyword,
      mustHaveGarage,
      parkingSpots,
      daysOnMarket,
      minPrice,
      maxPrice,
      minLotSize,
      maxLotSize,
      minLivingSpace,
      maxLivingSpace,
    };

    const payload = transformFormSubmission(formData);

    console.log(payload);

    alert(JSON.stringify(payload, null, 2));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-hidden flex flex-col text-left">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-solid border">
        <div className="max-w-3xl w-full mx-auto">
          <h2 className="text-xl font-semibold">
            {totalResults.toLocaleString()} Results
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 bg-transparent hover:text-red-400"
        >
          <X className="h-6 w-6 cursor-pointer" />
        </button>
      </div>

      {/* Scrollable content */}
      <form className="flex-1 overflow-y-auto p-4" onSubmit={handleSubmit}>
        <div className="space-y-6 max-w-3xl mx-auto">
          {/* Price Range */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Price Range</h3>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <CreatableSelect
                isClearable
                name="minPrice"
                options={priceOptions}
                value={minPrice}
                onChange={handleMinPriceChange}
              />
              <CreatableSelect
                isClearable
                name="maxPrice"
                options={maxPriceOptions}
                value={maxPrice}
                onChange={setMaxPrice}
              />
            </div>
          </div>

          {/* Beds & Baths */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Beds</h3>
              <div className="flex flex-wrap gap-2">
                {bedOptions.map((bed) => (
                  <button
                    type="button"
                    key={bed.label}
                    className={`px-4 py-2 border rounded cursor-pointer ${beds === bed.value ? "bg-dimgray text-white" : ""}`}
                    onClick={() => handleBedsChange(bed.value)}
                  >
                    {bed.label}
                  </button>
                ))}
              </div>
              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={exactMatch}
                  onChange={handleExactMatchChange}
                />
                <span className="ml-2">Use exact match</span>
              </label>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Bathrooms</h3>
              <div className="flex flex-wrap gap-2">
                {bathOptions.map((bath) => (
                  <button
                    type="button"
                    key={bath.label}
                    className={`px-4 py-2 border rounded cursor-pointer ${baths === bath.value ? "bg-dimgray text-white" : ""}`}
                    onClick={() => handleBathsChange(bath.value)}
                  >
                    {bath.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Home Type */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Property Type</h3>
            <button
              type="button"
              className="px-4 py-2 border rounded mb-2"
              onClick={
                selectedHomeTypes.length > 0
                  ? handleDeselectAll
                  : handleSelectAll
              }
            >
              {selectedHomeTypes.length > 0 ? "Deselect All" : "Select All"}
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {propertyTypes.map(({ id, name }: any) => (
                <label key={id} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    name="property_types"
                    checked={selectedHomeTypes.includes(id)}
                    onChange={() => handleHomeTypeChange(id)}
                  />
                  <span className="ml-2">{name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Parking Spots */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Parking Spots</h3>
            <div className="space-y-2">
              <Select
                options={parkingOptions}
                placeholder="Any"
                className="w-full md:w-1/2"
                value={parkingSpots}
                onChange={setParkingSpots}
              />
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={mustHaveGarage}
                  onChange={(e) => setMustHaveGarage(e.target.checked)}
                />
                <span className="ml-2">Must have garage</span>
              </label>
            </div>
          </div>

          {/* Lot Size */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Lot Size (m<sup>2</sup>)
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <CreatableSelect
                isClearable
                name="minLotSize"
                options={lotSizes}
                value={minLotSize}
                onChange={handleMinLotSizeChange}
              />
              <CreatableSelect
                isClearable
                name="maxLotSize"
                options={maxLotSizeOptions}
                value={maxLotSize}
                onChange={setMaxLotSize}
              />
            </div>
          </div>

          {/* Living Space */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Living Space (m<sup>2</sup>)
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <CreatableSelect
                isClearable
                options={livingSpaceSizes}
                value={minLivingSpace}
                onChange={handleMinLivingSpaceChange}
              />
              <CreatableSelect
                isClearable
                options={maxLivingSpacesOptions}
                value={maxLivingSpace}
                onChange={setMaxLivingSpace}
              />
            </div>
          </div>

          {/* Year Built */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Year Built</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Any"
                className="px-4 py-2 border rounded"
                min="2000"
                onChange={handleMinYearBuiltChange}
                value={minYearBuilt}
              />
              <input
                type="number"
                placeholder="Any"
                className="px-4 py-2 border rounded"
                min="2000"
                onChange={handleMaxYearBuiltChange}
                value={maxYearBuilt}
                max={new Date().getFullYear()}
              />
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Amenities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {(showMoreAmenities ? amenities : initialAmenities).map(
                (amenity: any) => (
                  <label
                    key={amenity.value}
                    className="inline-flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox cursor"
                      name="amenities"
                      value={amenity.value}
                      checked={selectedAmenities.includes(amenity.value)}
                      onChange={() => handleAmenityChange(amenity.value)}
                    />
                    <span className="ml-2">{amenity.label}</span>
                  </label>
                ),
              )}
            </div>
            <button
              type="button"
              className="mt-2 text-blue-600"
              onClick={() => setShowMoreAmenities(!showMoreAmenities)}
            >
              {showMoreAmenities ? (
                <>
                  Show Less <ChevronUp className="inline-block ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show More{" "}
                  <ChevronDown className="inline-block ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </div>

          {/* Days on Market */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Days on Market</h3>
            <Select
              options={daysOnMarketOptions}
              className="w-full md:w-1/2"
              onChange={setDaysOnMarket}
              value={daysOnMarket}
            />
          </div>

          {/* Keywords */}
          <div style={{ marginBottom: "1rem" }}>
            <h3 className="text-lg font-semibold mb-2">Keywords</h3>
            <input
              type="text"
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
              placeholder="MLS #, yard, etc."
              className="min-w-[400px] max-w-[500px] md:max-w-full px-4 py-2 border rounded"
            />
          </div>
        </div>
      </form>

      {/* Footer */}
      <div className="border-t border-solid p-4">
        <div className="max-w-3xl mx-auto flex justify-between">
          <button
            type="button"
            className="px-8 py-4 border rounded cursor-pointer bg-secondary text-base"
            onClick={handleResetAll}
          >
            Reset all filters
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-8 py-4 bg-primary text-white rounded cursor-pointer text-base"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
