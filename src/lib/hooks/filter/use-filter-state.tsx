import { useState, useMemo } from "react";

import {
  parkingOptions,
  daysOnMarketOptions,
  priceOptions,
  lotSizes,
  livingSpaceSizes,
  Option,
} from "./filter-options";
import { findOptionByValue } from "@/lib/helpers/form-helpers";

export function useFilterState(initialFilterData: any) {
  const [beds, setBeds] = useState<number | string>(
    initialFilterData.beds || "any",
  );
  const [baths, setBaths] = useState<number | string>(
    initialFilterData.baths || "any",
  );
  const [exactMatch, setExactMatch] = useState(
    initialFilterData.exactMatch || false,
  );
  const [selectedHomeTypes, setSelectedHomeTypes] = useState<string[]>(
    initialFilterData.propertyTypes || [],
  );
  const [selectedAmenities, setSelectedAmenities] = useState<number[]>(
    initialFilterData.amenities?.map(Number) || [],
  );
  const [showMoreAmenities, setShowMoreAmenities] = useState(false);
  const [minYearBuilt, setMinYearBuilt] = useState<string | undefined>(
    initialFilterData.minYearBuilt?.toString(),
  );
  const [maxYearBuilt, setMaxYearBuilt] = useState<string | undefined>(
    initialFilterData.maxYearBuilt?.toString(),
  );
  const [keyword, setKeyword] = useState(initialFilterData.keyword || "");
  const [mustHaveGarage, setMustHaveGarage] = useState(
    initialFilterData.mustHaveGarage || false,
  );
  const [parkingSpots, setParkingSpots] = useState<Option | null>(
    findOptionByValue(parkingOptions, initialFilterData.garageSize),
  );
  const [daysOnMarket, setDaysOnMarket] = useState<Option | null>(
    findOptionByValue(daysOnMarketOptions, initialFilterData.daysOnMarket),
  );
  const [minPrice, setMinPrice] = useState<Option | null>(
    findOptionByValue(priceOptions, initialFilterData.minPrice),
  );
  const [maxPrice, setMaxPrice] = useState<Option | null>(
    findOptionByValue(priceOptions, initialFilterData.maxPrice),
  );
  const [minLotSize, setMinLotSize] = useState<Option | null>(
    findOptionByValue(lotSizes, initialFilterData.minLotSize),
  );
  const [maxLotSize, setMaxLotSize] = useState<Option | null>(
    findOptionByValue(lotSizes, initialFilterData.maxLotSize),
  );
  const [minLivingSpace, setMinLivingSpace] = useState<Option | null>(
    findOptionByValue(livingSpaceSizes, initialFilterData.minLivingSpace),
  );
  const [maxLivingSpace, setMaxLivingSpace] = useState<Option | null>(
    findOptionByValue(livingSpaceSizes, initialFilterData.maxLivingSpace),
  );

  const maxPriceOptions = useMemo(() => {
    const minPriceIndex = priceOptions.findIndex(
      (option) => option.value === minPrice?.value,
    );
    return minPrice?.value === "any" || !minPrice
      ? priceOptions
      : priceOptions.slice(minPriceIndex + 1);
  }, [minPrice]);

  const maxLotSizeOptions = useMemo(() => {
    const minLotSizeIndex = lotSizes.findIndex(
      (option) => option.value === minLotSize?.value,
    );
    return minLotSize?.value === "any" || !minLotSize
      ? lotSizes
      : lotSizes.slice(minLotSizeIndex + 1);
  }, [minLotSize]);

  const maxLivingSpacesOptions = useMemo(() => {
    const minLivingSpaceIndex = livingSpaceSizes.findIndex(
      (option) => option.value === minLivingSpace?.value,
    );
    return minLivingSpace?.value === "any" || !minLivingSpace
      ? livingSpaceSizes
      : livingSpaceSizes.slice(minLivingSpaceIndex + 1);
  }, [minLivingSpace]);

  return {
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
  };
}
