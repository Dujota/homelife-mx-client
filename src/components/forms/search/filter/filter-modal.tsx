"use client";

import React, { useState } from "react";
import Select from "react-select";
import { X, ChevronDown, ChevronUp } from "lucide-react";

export default function FilterModal({ isOpen, onClose, totalResults }: any) {
  // const [priceType, setPriceType] = useState("list");
  const [showMoreAmenities, setShowMoreAmenities] = useState(false);
  // const [showMoreViews, setShowMoreViews] = useState(false);
  const [homeTypes, setHomeTypes] = useState({
    Houses: true,
    Townhomes: true,
    "Multi-family": true,
    "Condos/Co-ops": true,
    "Lots/Land": true,
    Apartments: true,
    Manufactured: true,
  });

  const handleHomeTypeChange = (type: any) => {
    setHomeTypes((prev: any) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleDeselectAll = () => {
    setHomeTypes(
      Object.fromEntries(
        Object.keys(homeTypes).map((key: any) => [key, false]),
      ),
    );
  };

  const handlSelectAll = () => {
    setHomeTypes(
      Object.fromEntries(Object.keys(homeTypes).map((key: any) => [key, true])),
    );
  };

  const handleResetAll = () => {
    // setPriceType("list");
    setShowMoreAmenities(false);
    // setShowMoreViews(false);
    setHomeTypes({
      Houses: true,
      Townhomes: true,
      "Multi-family": true,
      "Condos/Co-ops": true,
      "Lots/Land": true,
      Apartments: true,
      Manufactured: true,
    });
    // Reset other state variables here
  };

  const handleSubmit = () => {
    console.log("Apply");
  };

  if (!isOpen) return null;

  const priceOptions = [
    { value: "nomin", label: "No Min" },
    { value: "nomax", label: "No Max" },
    // Add more price options here
  ];

  const parkingOptions = [
    { value: "any", label: "Any" },
    { value: "1+", label: "1+" },
    { value: "2+", label: "2+" },
    { value: "3+", label: "3+" },
    { value: "4+", label: "4+" },
  ];

  const daysOnMarketOptions = [
    { value: "any", label: "Any" },
    { value: "1", label: "1 day" },
    { value: "7", label: "7 days" },
    { value: "14", label: "14 days" },
    { value: "30", label: "30 days" },
    { value: "90", label: "90 days" },
    { value: "180", label: "6 months" },
    { value: "365", label: "12 months" },
    { value: "730", label: "24 months" },
    { value: "1095", label: "36 months" },
  ];

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-hidden flex flex-col text-left">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-solid border">
        <div className="max-w-3xl w-full mx-auto">
          <h2 className="text-xl font-semibold">
            {totalResults.toLocaleString()} Results
          </h2>
        </div>
        <button onClick={onClose} className="absolute right-4 top-4">
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Scrollable content */}
      <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4">
        <div className="space-y-6 max-w-3xl mx-auto">
          {/* Price Range */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Price Range</h3>
            {/* <div className="flex mb-2">
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  className="form-radio"
                  name="priceType"
                  value="list"
                  checked={priceType === "list"}
                  onChange={() => setPriceType("list")}
                />
                <span className="ml-2">List Price</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="priceType"
                  value="monthly"
                  checked={priceType === "monthly"}
                  onChange={() => setPriceType("monthly")}
                />
                <span className="ml-2">Monthly Payment</span>
              </label>
            </div> */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <Select options={priceOptions} placeholder="No Min" />
              <Select options={priceOptions} placeholder="No Max" />
            </div>
          </div>

          {/* Beds & Baths */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Beds</h3>
              <div className="flex flex-wrap gap-2">
                {["Any", "1+", "2+", "3+", "4+", "5+"].map((bed) => (
                  <button key={bed} className="px-4 py-2 border rounded">
                    {bed}
                  </button>
                ))}
              </div>
              <label className="inline-flex items-center mt-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Use exact match</span>
              </label>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Bathrooms</h3>
              <div className="flex flex-wrap gap-2">
                {["Any", "1+", "1.5+", "2+", "3+", "4+"].map((bath) => (
                  <button key={bath} className="px-4 py-2 border rounded">
                    {bath}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Home Type */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Home Type</h3>
            <button
              className="px-4 py-2 border rounded mb-2"
              onClick={
                Object.values(homeTypes).some(Boolean)
                  ? handleDeselectAll
                  : handlSelectAll
              }
            >
              {Object.values(homeTypes).some(Boolean)
                ? "Deselect All"
                : "Select All"}
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {Object.entries(homeTypes).map(([type, isChecked]) => (
                <label key={type} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={isChecked}
                    onChange={() => handleHomeTypeChange(type)}
                  />
                  <span className="ml-2">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Property Status */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Property Status</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {[
                "Coming soon",
                "Accepting backup offers",
                "Pending & under contract",
              ].map((status) => (
                <label key={status} className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">{status}</span>
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
              />
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
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
              <Select options={priceOptions} placeholder="No Min" />
              <Select options={priceOptions} placeholder="No Max" />
            </div>
          </div>

          {/* Living Space */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Living Space (m<sup>2</sup>)
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <Select options={priceOptions} placeholder="No Min" />
              <Select options={priceOptions} placeholder="No Max" />
            </div>
          </div>

          {/* Year Built */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Year Built</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="No Min"
                className="px-4 py-2 border rounded"
              />
              <input
                type="number"
                placeholder="No Max"
                className="px-4 py-2 border rounded"
              />
            </div>
          </div>

          {/* Estimated Completion Date */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Estimated Completion Date
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                placeholder="Start Date"
                className="px-4 py-2 border rounded"
              />
              <input
                type="date"
                placeholder="End Date"
                className="px-4 py-2 border rounded"
              />
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Amenities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {["Pool", "Gym", "Elevator", "Parking", "Balcony", "Garden"]
                .concat(
                  showMoreAmenities
                    ? [
                        "Fireplace",
                        "Air Conditioning",
                        "Furnished",
                        "Pet Friendly",
                      ]
                    : [],
                )
                .map((amenity) => (
                  <label key={amenity} className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">{amenity}</span>
                  </label>
                ))}
            </div>
            <button
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

          {/* View */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-2">View</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {["City", "Mountain", "Park", "Water"]
                .concat(showMoreViews ? ["Ocean", "Lake", "Golf Course"] : [])
                .map((view) => (
                  <label key={view} className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">{view}</span>
                  </label>
                ))}
            </div>
            <button
              className="mt-2 text-blue-600"
              onClick={() => setShowMoreViews(!showMoreViews)}
            >
              {showMoreViews ? (
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
          </div> */}

          {/* Days on Market */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Days on Market</h3>
            <Select
              options={daysOnMarketOptions}
              placeholder="Any"
              className="w-full md:w-1/2"
            />
          </div>

          {/* Keywords */}
          <div style={{ marginBottom: "1rem" }}>
            <h3 className="text-lg font-semibold mb-2">Keywords</h3>
            <input
              type="text"
              placeholder="MLS #, yard, etc."
              className="min-w-[400px] max-w-[500px] md:max-w-full  px-4 py-2 border rounded"
            />
          </div>
        </div>
      </form>

      {/* Footer */}
      <div className="border-t border-solid p-4">
        <div className="max-w-3xl mx-auto flex justify-between">
          <button
            className="px-4 py-2 border rounded cursor-pointer"
            onClick={handleResetAll}
          >
            Reset all filters
          </button>
          <button
            type="submit"
            onClick={() => {
              console.log("Apply");
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
