// "use client";

// import React, { useMemo, useState } from "react";
// import Select from "react-select";
// import CreatableSelect from "react-select/creatable";
// import { X, ChevronDown, ChevronUp } from "lucide-react";
// import { transformFormSubmission } from "@/lib/helpers/form-helpers";
// import { FilterFormSubmission } from "@/types/api/forms/public-forms";

// const parkingOptions = [
//   { value: "any", label: "Any" },
//   { value: "1", label: "1+" },
//   { value: "2", label: "2+" },
//   { value: "3", label: "3+" },
//   { value: "4", label: "4+" },
// ];

// const daysOnMarketOptions = [
//   { value: "any", label: "Any" },
//   { value: "1", label: "1 day+" },
//   { value: "7", label: "7 days+" },
//   { value: "14", label: "14 days+" },
//   { value: "30", label: "30 days+" },
//   { value: "90", label: "90 days+" },
//   { value: "180", label: "6 months+" },
//   { value: "365", label: "12 months+" },
//   { value: "730", label: "24 months+" },
//   { value: "1095", label: "36 months+" },
// ];

// const bedOptions = [
//   { label: "Any", value: "any" },
//   { label: "1+", value: 1 },
//   { label: "2+", value: 2 },
//   { label: "3+", value: 3 },
//   { label: "4+", value: 4 },
//   { label: "5+", value: 5 },
// ];

// const bathOptions = [
//   { label: "Any", value: "any" },
//   { label: "1+", value: 1 },
//   { label: "1.5+", value: 1.5 },
//   { label: "2+", value: 2 },
//   { label: "3+", value: 3 },
//   { label: "4+", value: 4 },
// ];

// export default function FilterModal({
//   isOpen,
//   onClose,
//   totalResults,
//   propertyTypes,
//   amenities,
//   setListingsList,
// }: any) {
//   // const [priceType, setPriceType] = useState("list");
//   // const [showMoreViews, setShowMoreViews] = useState(false);

//   // Memoized checbox values
//   const allIds = useMemo(() => {
//     return propertyTypes.map((type: any) => type.id);
//   }, [propertyTypes]);

//   const initialAmenities = useMemo(() => {
//     return amenities.slice(0, 6);
//   }, [amenities]);

//   const priceOptions = useMemo(
//     () => [
//       { value: "any", label: "Any" },
//       { value: "200000", label: "200,000+" },
//       { value: "300000", label: "300,000+" },
//       { value: "400000", label: "400,000+" },
//       { value: "500000", label: "500,000+" },
//       { value: "600000", label: "600,000+" },
//       { value: "700000", label: "700,000+" },
//       { value: "800000", label: "800,000+" },
//       { value: "900000", label: "900,000+" },
//       { value: "1000000", label: "1M+" },
//       { value: "2000000", label: "2M+" },
//       { value: "3000000", label: "3M+" },
//       { value: "4000000", label: "4M+" },
//       { value: "5000000", label: "5M+" },
//       { value: "6000000", label: "6M+" },
//       { value: "7000000", label: "7M+" },
//       { value: "8000000", label: "8M+" },
//       { value: "9000000", label: "9M+" },
//       { value: "10000000", label: "10M+" },
//       { value: "11000000", label: "11M+" },
//       { value: "12000000", label: "12M+" },
//       { value: "13000000", label: "13M+" },
//       { value: "14000000", label: "14M+" },
//       { value: "15000000", label: "15M+" },
//       { value: "16000000", label: "16M+" },
//       { value: "17000000", label: "17M+" },
//       { value: "18000000", label: "18M+" },
//       { value: "19000000", label: "19M+" },
//       { value: "20000000", label: "20M+" },
//     ],
//     [],
//   );

//   const lotSizes = useMemo(() => {
//     return [
//       { value: "any", label: "Any" },
//       { value: "100", label: "100+" },
//       { value: "200", label: "200+" },
//       { value: "300", label: "300+" },
//       { value: "400", label: "400+" },
//       { value: "500", label: "500+" },
//       { value: "600", label: "600+" },
//       { value: "700", label: "700+" },
//       { value: "800", label: "800+" },
//       { value: "900", label: "900+" },
//       { value: "1000", label: "1000+" },
//     ];
//   }, []);

//   const livingSpaceSizes = useMemo(() => {
//     return [
//       { value: "any", label: "Any" },
//       { value: "100", label: "100+" },
//       { value: "200", label: "200+" },
//       { value: "300", label: "300+" },
//       { value: "400", label: "400+" },
//       { value: "500", label: "500+" },
//       { value: "600", label: "600+" },
//       { value: "700", label: "700+" },
//       { value: "800", label: "800+" },
//       { value: "900", label: "900+" },
//       { value: "1000", label: "1000+" },
//     ];
//   }, []);

//   // Form State Fields
//   const [beds, setBeds] = useState<number | string>("any");
//   const [baths, setBaths] = useState<number | string>("any");
//   const [exactMatch, setExactMatch] = useState(false);
//   const [selectedHomeTypes, setSelectedHomeTypes] = useState(allIds);
//   const [selectedAmenities, setSelectedAmenities] = useState([]);
//   const [showMoreAmenities, setShowMoreAmenities] = useState(false);
//   const [minYearBuilt, setMinYearBuilt] = useState();
//   const [maxYearBuilt, setMaxYearBuilt] = useState();
//   const [keyword, setKeyword] = useState("");
//   const [mustHaveGarage, setMustHaveGarage] = useState(false);
//   const [parkingSpots, setParkingSpots] = useState<{
//     value: string;
//     label: string;
//   } | null>(parkingOptions[0]);
//   const [daysOnMarket, setDaysOnMarket] = useState<{
//     value: string;
//     label: string;
//   } | null>(daysOnMarketOptions[0]);
//   const [minPrice, setMinPrice] = useState<{
//     value: string;
//     label: string;
//   } | null>(priceOptions[0]);
//   const [maxPrice, setMaxPrice] = useState<{
//     value: string;
//     label: string;
//   } | null>(priceOptions[0]);

//   const [minLotSize, setMinLotSize] = useState<{
//     value: string;
//     label: string;
//   } | null>(lotSizes[0]);
//   const [maxLotSize, setMaxLotSize] = useState<{
//     value: string;
//     label: string;
//   } | null>(lotSizes[0]);

//   const [minLivingSpace, setMinLivingSpace] = useState<{
//     value: string;
//     label: string;
//   } | null>(lotSizes[0]);
//   const [maxLivingSpace, setMaxLivingSpace] = useState<{
//     value: string;
//     label: string;
//   } | null>(lotSizes[0]);

//   const maxPriceOptions = useMemo(() => {
//     const minPriceIndex = priceOptions.findIndex(
//       (option: { value: string; label: string }) =>
//         option.value === minPrice?.value,
//     );

//     return minPrice?.value === "any" || !minPrice
//       ? priceOptions
//       : priceOptions.slice(minPriceIndex + 1);
//   }, [priceOptions, minPrice]);

//   const maxLotSizeOptions = useMemo(() => {
//     const minLotSizeIndex = lotSizes.findIndex(
//       (option: { value: string; label: string }) =>
//         option.value === minLotSize?.value,
//     );

//     return minLotSize?.value === "any" || !minLotSize
//       ? lotSizes
//       : lotSizes.slice(minLotSizeIndex + 1);
//   }, [lotSizes, minLotSize]);

//   const maxLivingSpacesOptions = useMemo(() => {
//     const minLivingSpaceIndex = livingSpaceSizes.findIndex(
//       (option: { value: string; label: string }) =>
//         option.value === minLivingSpace?.value,
//     );

//     return minLivingSpace?.value === "any" || !minLivingSpace
//       ? livingSpaceSizes
//       : livingSpaceSizes.slice(minLivingSpaceIndex + 1);
//   }, [livingSpaceSizes, minLivingSpace]);

//   // Input Change handlers

//   // Year Built
//   const handleMinYearBuiltChange = (e: any) => {
//     setMinYearBuilt(e.target.value);
//   };

//   const handleMaxYearBuiltChange = (e: any) => {
//     setMaxYearBuilt(e.target.value);
//   };

//   // Price
//   const handleAmenityChange = (value: number) => {
//     setSelectedAmenities((prev: any) =>
//       prev.includes(value)
//         ? prev.filter((amenityValue: any) => amenityValue !== value)
//         : [...prev, value],
//     );
//   };

//   const handleMinPriceChange = (value: any) => {
//     setMinPrice(value);
//     setMaxPrice((prevMaxPrice: any) => {
//       // If max price is "any", don't change it
//       if (prevMaxPrice.value === "any") return prevMaxPrice;

//       // If max price value is less than the new min price value, reset to priceOptions[0]
//       if (parseInt(prevMaxPrice.value) < parseInt(value.value)) {
//         return priceOptions[0]; // Assuming priceOptions[0] is always "any" or the default value
//       }

//       // Otherwise, keep the current max price
//       return prevMaxPrice;
//     });
//   };

//   // Beds & Baths
//   const handleExactMatchChange = (e: any) => {
//     setExactMatch(e.target.checked);
//   };

//   const handleBedsChange = (value: string | number) => {
//     setBeds(value);
//   };

//   const handleBathsChange = (value: string | number) => {
//     setBaths(value);
//   };

//   // Lot Size
//   const handleMinLotSizeChange = (value: any) => {
//     setMinLotSize(value);
//     setMaxLotSize((prevMaxLotSize: any) => {
//       // If max price is "any", don't change it
//       if (prevMaxLotSize.value === "any") return prevMaxLotSize;

//       // If max price value is less than the new min price value, reset to priceOptions[0]
//       if (parseInt(prevMaxLotSize.value) < parseInt(value.value)) {
//         return lotSizes[0]; // Assuming priceOptions[0] is always "any" or the default value
//       }

//       // Otherwise, keep the current max price
//       return prevMaxLotSize;
//     });
//   };

//   // Living Space
//   const handleMinLivingSpaceChange = (value: any) => {
//     setMinLivingSpace(value);
//     setMaxLivingSpace((prevMaxLivingSpace: any) => {
//       // If max price is "any", don't change it
//       if (prevMaxLivingSpace.value === "any") return prevMaxLivingSpace;

//       // If max price value is less than the new min price value, reset to priceOptions[0]
//       if (parseInt(prevMaxLivingSpace.value) < parseInt(value.value)) {
//         return livingSpaceSizes[0]; // Assuming priceOptions[0] is always "any" or the default value
//       }

//       // Otherwise, keep the current max price
//       return prevMaxLivingSpace;
//     });
//   };

//   // Property Types

//   const handleHomeTypeChange = (id: string) => {
//     setSelectedHomeTypes((prev: any) =>
//       prev.includes(id)
//         ? prev.filter((typeId: any) => typeId !== id)
//         : [...prev, id],
//     );
//   };

//   const handleDeselectAll = () => {
//     // @ts-ignore
//     setSelectedHomeTypes([]);
//   };

//   const handleSelectAll = () => {
//     // const allIds = propertyTypes.map((type: any) => type.id);
//     setSelectedHomeTypes(allIds);
//   };

//   const handleResetAll = () => {
//     // Reset all state variables to their initial values
//     setBeds("any");
//     setBaths("any");
//     setExactMatch(false);
//     setSelectedHomeTypes(allIds);
//     setSelectedAmenities([]);
//     setShowMoreAmenities(false);
//     setMinYearBuilt(undefined);
//     setMaxYearBuilt(undefined);
//     setKeyword("");
//     setMustHaveGarage(false);
//     setParkingSpots(parkingOptions[0]);
//     setDaysOnMarket(daysOnMarketOptions[0]);
//     setMinPrice(priceOptions[0]);
//     setMaxPrice(priceOptions[0]);
//     setMinLotSize(lotSizes[0]);
//     setMaxLotSize(lotSizes[0]);
//     setMinLivingSpace(lotSizes[0]);
//     setMaxLivingSpace(lotSizes[0]);
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();

//     // Gather all form state into an object
//     const formData: FilterFormSubmission = {
//       beds,
//       baths,
//       exactMatch,
//       selectedHomeTypes,
//       selectedAmenities,
//       showMoreAmenities,
//       minYearBuilt,
//       maxYearBuilt,
//       keyword,
//       mustHaveGarage,
//       parkingSpots,
//       daysOnMarket,
//       minPrice,
//       maxPrice,
//       minLotSize,
//       maxLotSize,
//       minLivingSpace,
//       maxLivingSpace,
//     };

//     const payload = transformFormSubmission(formData);

//     console.log(payload);

//     // Display the form data as a JSON string
//     alert(JSON.stringify(payload, null, 2));
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-white z-50 overflow-hidden flex flex-col text-left">
//       {/* Header */}
//       <div className="flex justify-between items-center p-4 border-b border-solid border">
//         <div className="max-w-3xl w-full mx-auto">
//           <h2 className="text-xl font-semibold">
//             {totalResults.toLocaleString()} Results
//           </h2>
//         </div>
//         <button
//           type="button"
//           onClick={onClose}
//           className="absolute right-4 top-4"
//         >
//           <X className="h-6 w-6" />
//         </button>
//       </div>

//       {/* Scrollable content */}
//       <form className="flex-1 overflow-y-auto p-4">
//         <div className="space-y-6 max-w-3xl mx-auto">
//           {/* Price Range */}
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Price Range</h3>
//             {/* <div className="flex mb-2">
//               <label className="inline-flex items-center mr-4">
//                 <input
//                   type="radio"
//                   className="form-radio"
//                   name="priceType"
//                   value="list"
//                   checked={priceType === "list"}
//                   onChange={() => setPriceType("list")}
//                 />
//                 <span className="ml-2">List Price</span>
//               </label>
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   className="form-radio"
//                   name="priceType"
//                   value="monthly"
//                   checked={priceType === "monthly"}
//                   onChange={() => setPriceType("monthly")}
//                 />
//                 <span className="ml-2">Monthly Payment</span>
//               </label>
//             </div> */}
//             <div className="grid grid-cols-2 gap-4 mt-2">
//               <CreatableSelect
//                 isClearable
//                 name="minPrice"
//                 options={priceOptions}
//                 defaultValue={priceOptions[0]}
//                 onChange={handleMinPriceChange}
//                 value={minPrice}
//               />
//               <CreatableSelect
//                 isClearable
//                 name="maxPrice"
//                 options={maxPriceOptions}
//                 defaultValue={priceOptions[0]}
//                 value={maxPrice}
//                 onChange={setMaxPrice}
//               />
//             </div>

//             {/* <div className="grid grid-cols-2 gap-4">
//               <input
//                 type="number"
//                 placeholder="No Min"
//                 min="200000"
//                 step={50000}
//                 value={minPrice}
//                 onChange={handleMinPriceChange}
//                 className="px-4 py-2 border rounded"
//               />
//               <input
//                 type="number"
//                 placeholder="No Max"
//                 className="px-4 py-2 border rounded"
//                 // @ts-ignore
//                 min={minPrice + 50000}
//                 value={maxPrice}
//                 step={50000}
//                 onChange={handleMaxPriceChange}
//               />
//             </div> */}
//           </div>

//           {/* Beds & Baths */}
//           <div className="space-y-4">
//             <div>
//               <h3 className="text-lg font-semibold mb-2">Beds</h3>
//               <div className="flex flex-wrap gap-2">
//                 {bedOptions.map((bed) => (
//                   <button
//                     type="button"
//                     key={bed.label}
//                     className={`px-4 py-2 border rounded cursor-pointer ${beds === bed.value ? "bg-dimgray text-white" : ""}`}
//                     onClick={() => handleBedsChange(bed.value)}
//                   >
//                     {bed.label}
//                   </button>
//                 ))}
//               </div>
//               <label className="inline-flex items-center mt-2">
//                 <input
//                   type="checkbox"
//                   className="form-checkbox"
//                   checked={exactMatch}
//                   onChange={handleExactMatchChange}
//                 />
//                 <span className="ml-2">Use exact match</span>
//               </label>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-2">Bathrooms</h3>
//               <div className="flex flex-wrap gap-2">
//                 {bathOptions.map((bath) => (
//                   <button
//                     type="button"
//                     key={bath.label}
//                     className={`px-4 py-2 border rounded cursor-pointer ${baths === bath.value ? "bg-dimgray text-white" : ""}`}
//                     onClick={() => handleBathsChange(bath.value)}
//                   >
//                     {bath.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Home Type */}
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Property Type</h3>
//             <button
//               type="button"
//               className="px-4 py-2 border rounded mb-2"
//               onClick={
//                 selectedHomeTypes?.length > 0
//                   ? handleDeselectAll
//                   : handleSelectAll
//               }
//             >
//               {selectedHomeTypes?.length > 0 ? "Deselect All" : "Select All"}
//             </button>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
//               {propertyTypes.map(({ id, name }: any) => (
//                 <label key={id} className="inline-flex items-center">
//                   <input
//                     type="checkbox"
//                     className="form-checkbox"
//                     name="property_types"
//                     checked={selectedHomeTypes?.includes(id)}
//                     onChange={() => handleHomeTypeChange(id)}
//                   />
//                   <span className="ml-2">{name}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Property Status */}
//           {/* <div>
//             <h3 className="text-lg font-semibold mb-2">Property Status</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
//               {[
//                 "Coming soon",
//                 "Accepting backup offers",
//                 "Pending & under contract",
//               ].map((status) => (
//                 <label key={status} className="inline-flex items-center">
//                   <input type="checkbox" className="form-checkbox" />
//                   <span className="ml-2">{status}</span>
//                 </label>
//               ))}
//             </div>
//           </div> */}

//           {/* Parking Spots */}
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Parking Spots</h3>
//             <div className="space-y-2">
//               <Select
//                 options={parkingOptions}
//                 placeholder="Any"
//                 className="w-full md:w-1/2"
//                 defaultValue={parkingOptions[0]}
//                 onChange={setParkingSpots}
//                 value={parkingSpots}
//               />
//               <label className="inline-flex items-center">
//                 <input
//                   type="checkbox"
//                   className="form-checkbox"
//                   checked={mustHaveGarage}
//                   onChange={(e) => {
//                     setMustHaveGarage(e.target.checked);
//                   }}
//                 />
//                 <span className="ml-2">Must have garage</span>
//               </label>
//             </div>
//           </div>

//           {/* Lot Size */}
//           <div>
//             <h3 className="text-lg font-semibold mb-2">
//               Lot Size (m<sup>2</sup>)
//             </h3>
//             <div className="grid grid-cols-2 gap-4">
//               <CreatableSelect
//                 isClearable
//                 name="minLotSize"
//                 options={lotSizes}
//                 defaultValue={lotSizes}
//                 value={minLotSize}
//                 onChange={handleMinLotSizeChange}
//               />
//               <CreatableSelect
//                 isClearable
//                 name="maxLotSize"
//                 options={maxLotSizeOptions}
//                 defaultValue={lotSizes[0]}
//                 value={maxLotSize}
//                 onChange={setMaxLotSize}
//               />
//             </div>
//           </div>

//           {/* Living Space */}
//           <div>
//             <h3 className="text-lg font-semibold mb-2">
//               Living Space (m<sup>2</sup>)
//             </h3>
//             <div className="grid grid-cols-2 gap-4">
//               <CreatableSelect
//                 isClearable
//                 options={livingSpaceSizes}
//                 defaultValue={livingSpaceSizes[0]}
//                 value={minLivingSpace}
//                 onChange={handleMinLivingSpaceChange}
//               />
//               <CreatableSelect
//                 isClearable
//                 options={maxLivingSpacesOptions}
//                 defaultValue={livingSpaceSizes[0]}
//                 value={maxLivingSpace}
//                 onChange={setMaxLivingSpace}
//               />
//             </div>
//           </div>

//           {/* Year Built */}
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Year Built</h3>
//             <div className="grid grid-cols-2 gap-4">
//               <input
//                 type="number"
//                 placeholder="Any"
//                 className="px-4 py-2 border rounded"
//                 min="2000"
//                 onChange={handleMinYearBuiltChange}
//                 value={minYearBuilt}
//               />
//               <input
//                 type="number"
//                 placeholder="Any"
//                 className="px-4 py-2 border rounded"
//                 min="2000"
//                 onChange={handleMaxYearBuiltChange}
//                 value={maxYearBuilt}
//                 max={new Date().getFullYear()}
//               />
//             </div>
//           </div>

//           {/* Estimated Completion Date */}
//           {/* <div>
//             <h3 className="text-lg font-semibold mb-2">
//               Estimated Completion Date
//             </h3>
//             <div className="grid grid-cols-2 gap-4">
//               <input
//                 type="date"
//                 placeholder="Start Date"
//                 className="px-4 py-2 border rounded"
//               />
//               <input
//                 type="date"
//                 placeholder="End Date"
//                 className="px-4 py-2 border rounded"
//               />
//             </div>
//           </div> */}

//           {/* Amenities */}
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Amenities</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
//               {(showMoreAmenities ? amenities : initialAmenities).map(
//                 (amenity: { label: string; value: number }) => (
//                   <label
//                     key={amenity.value}
//                     className="inline-flex items-center cursor-pointer"
//                   >
//                     <input
//                       type="checkbox"
//                       className="form-checkbox cursor"
//                       name="amenities"
//                       value={amenity.value}
//                       // @ts-ignore
//                       checked={selectedAmenities.includes(amenity.value)}
//                       onChange={() => handleAmenityChange(amenity.value)}
//                     />
//                     <span className="ml-2">{amenity.label}</span>
//                   </label>
//                 ),
//               )}
//             </div>
//             <button
//               type="button"
//               className="mt-2 text-blue-600"
//               onClick={() => setShowMoreAmenities(!showMoreAmenities)}
//             >
//               {showMoreAmenities ? (
//                 <>
//                   Show Less <ChevronUp className="inline-block ml-2 h-4 w-4" />
//                 </>
//               ) : (
//                 <>
//                   Show More{" "}
//                   <ChevronDown className="inline-block ml-2 h-4 w-4" />
//                 </>
//               )}
//             </button>
//           </div>

//           {/* View */}
//           {/* <div>
//             <h3 className="text-lg font-semibold mb-2">View</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
//               {["City", "Mountain", "Park", "Water"]
//                 .concat(showMoreViews ? ["Ocean", "Lake", "Golf Course"] : [])
//                 .map((view) => (
//                   <label key={view} className="inline-flex items-center">
//                     <input type="checkbox" className="form-checkbox" />
//                     <span className="ml-2">{view}</span>
//                   </label>
//                 ))}
//             </div>
//             <button
//               className="mt-2 text-blue-600"
//               onClick={() => setShowMoreViews(!showMoreViews)}
//             >
//               {showMoreViews ? (
//                 <>
//                   Show Less <ChevronUp className="inline-block ml-2 h-4 w-4" />
//                 </>
//               ) : (
//                 <>
//                   Show More{" "}
//                   <ChevronDown className="inline-block ml-2 h-4 w-4" />
//                 </>
//               )}
//             </button>
//           </div> */}

//           {/* Days on Market */}
//           {/* <div>
//             <h3 className="text-lg font-semibold mb-2">Days on Market</h3>
//             <Select
//               options={daysOnMarketOptions}
//               defaultValue={daysOnMarketOptions[0]}
//               className="w-full md:w-1/2"
//               onChange={setDaysOnMarket}
//               value={daysOnMarket}
//             />
//           </div> */}

//           {/* Keywords */}
//           <div style={{ marginBottom: "1rem" }}>
//             <h3 className="text-lg font-semibold mb-2">Keywords</h3>
//             <input
//               type="text"
//               onChange={(e) => setKeyword(e.target.value)}
//               value={keyword}
//               placeholder="MLS #, yard, etc."
//               className="min-w-[400px] max-w-[500px] md:max-w-full  px-4 py-2 border rounded"
//             />
//           </div>
//         </div>
//       </form>

//       {/* Footer */}
//       <div className="border-t border-solid p-4">
//         <div className="max-w-3xl mx-auto flex justify-between">
//           <button
//             type="button"
//             className="px-8 py-4 border rounded cursor-pointer bg-secondary text-base"
//             onClick={handleResetAll}
//           >
//             Reset all filters
//           </button>
//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="px-8 py-4 bg-primary text-white rounded cursor-pointer text-base"
//           >
//             Apply
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// NEW CODE

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
          className="absolute right-4 top-4"
        >
          <X className="h-6 w-6" />
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
