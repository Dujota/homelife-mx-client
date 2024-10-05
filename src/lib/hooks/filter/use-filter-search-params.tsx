"use client";

import { useSearchParams } from "next/navigation";

export interface FilterFormData {
  [key: string]: string | number | boolean | string[] | undefined;
}

export default function useFilterSearchParams() {
  const searchParams = useSearchParams();
  const initialFormData: FilterFormData = {};

  // Helper function to parse value based on key
  const parseValue = (
    key: string,
    value: string,
  ): string | number | boolean | string[] => {
    // List of keys that should be treated as numbers
    const numberKeys = [
      // "beds",
      // "baths",
      "garage_size",
      "days_on_market",
      "min_year_built",
      "max_year_built",
      "min_price",
      "max_price",
      "min_lot_size",
      "max_lot_size",
      "min_living_space",
      "max_living_space",
    ];

    // List of keys that should be treated as booleans
    const booleanKeys = ["exact_match", "must_have_garage"];

    // List of keys that should be treated as arrays
    const arrayKeys = ["property_types", "amenities"];

    if (numberKeys.includes(key)) {
      return parseInt(value, 10);
    } else if (booleanKeys.includes(key)) {
      return value === "true";
    } else if (arrayKeys.includes(key)) {
      return value.split(",");
    } else {
      return value;
    }
  };

  // Loop through all search params and add them to initialFormData
  searchParams.forEach((value, key) => {
    const parsedKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase()); // Convert snake_case to camelCase
    initialFormData[parsedKey] = parseValue(key, value);
  });

  return initialFormData;
}
