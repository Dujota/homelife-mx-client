import {
  FilterFormSubmission,
  TransformedFilterFormParams,
} from "@/types/api/forms/public-forms";

export function transformFormSubmission(
  formData: FilterFormSubmission,
): TransformedFilterFormParams {
  return {
    beds: formData.beds,
    baths: formData.baths,
    exact_match: formData.exactMatch,
    property_types: formData.selectedHomeTypes.map(Number), // Convert ids to numbers
    amenities: formData.selectedAmenities,
    min_year_built: formData.minYearBuilt
      ? parseInt(formData.minYearBuilt, 10)
      : null,
    max_year_built: formData.maxYearBuilt
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
      formData.minPrice && formData.minPrice.value
        ? parseFloat(formData.minPrice.value)
        : null,
    max_price:
      formData.maxPrice && formData.maxPrice.value
        ? parseFloat(formData.maxPrice.value)
        : null,
    min_lot_size:
      formData.minLotSize && formData.minLotSize.value
        ? parseInt(formData.minLotSize.value)
        : null,
    max_lot_size:
      formData.maxLotSize && formData.maxLotSize.value
        ? parseInt(formData.maxLotSize.value)
        : null,
    min_living_space:
      formData.minLivingSpace && formData.minLivingSpace.value
        ? parseInt(formData.minLivingSpace.value)
        : null,
    max_living_space:
      formData.maxLivingSpace && formData.maxLivingSpace.value
        ? parseInt(formData.maxLivingSpace.value)
        : null,
  };
}
