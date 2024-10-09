import {
  FilterFormSubmission,
  TransformedFilterFormParams,
} from "@/types/api/forms/public-forms";
import { type Option } from "../hooks/filter/filter-options";

export function transformFormSubmission(
  formData: FilterFormSubmission,
): TransformedFilterFormParams {
  return {
    beds: formData.beds,
    baths: formData.baths,
    exact_match: formData.exactMatch,
    property_types: formData.selectedHomeTypes.join(","),
    amenities: formData.selectedAmenities.join(","),
    min_year_built:
      formData.minYearBuilt && formData.minYearBuilt !== "any"
        ? parseInt(formData.minYearBuilt, 10)
        : null,
    max_year_built:
      formData.maxYearBuilt && formData.maxYearBuilt !== "any"
        ? parseInt(formData.maxYearBuilt, 10)
        : null,
    keyword: formData.keyword.trim(),
    must_have_garage: formData.mustHaveGarage,
    garage_size:
      formData.parkingSpots && formData.parkingSpots.value !== "any"
        ? parseInt(formData.parkingSpots.value, 10)
        : null,
    days_on_market: formData.daysOnMarket && formData.daysOnMarket.value,
    min_price:
      formData.minPrice &&
      formData.minPrice.value &&
      formData.minPrice.value !== "any"
        ? parseFloat(formData.minPrice.value)
        : null,
    max_price:
      formData.maxPrice &&
      formData.maxPrice.value &&
      formData.maxPrice.value !== "any"
        ? parseFloat(formData.maxPrice.value)
        : null,
    min_lot_size:
      formData.minLotSize &&
      formData.minLotSize.value &&
      formData.minLotSize.value !== "any"
        ? parseInt(formData.minLotSize.value)
        : null,
    max_lot_size:
      formData.maxLotSize &&
      formData.maxLotSize.value &&
      formData.maxLotSize.value !== "any"
        ? parseInt(formData.maxLotSize.value)
        : null,
    min_living_space:
      formData.minLivingSpace &&
      formData.minLivingSpace.value &&
      formData.minLivingSpace.value !== "any"
        ? parseInt(formData.minLivingSpace.value)
        : null,
    max_living_space:
      formData.maxLivingSpace &&
      formData.maxLivingSpace.value &&
      formData.maxLivingSpace.value !== "any"
        ? parseInt(formData.maxLivingSpace.value)
        : null,
  };
}

export const findOptionByValue = (
  options: Option[],
  value: string | number | undefined,
): Option | null => {
  if (value === undefined) return null;
  return options.find((option) => option.value === value.toString()) || null;
};
