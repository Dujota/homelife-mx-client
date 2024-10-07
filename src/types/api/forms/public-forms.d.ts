export interface FilterFormSubmission {
  beds: number | string;
  baths: number | string;
  exactMatch: boolean;
  selectedHomeTypes: string[]; // IDs as strings
  selectedAmenities: number[]; // IDs as numbers
  showMoreAmenities: boolean;
  minYearBuilt?: string;
  maxYearBuilt?: string;
  keyword: string;
  mustHaveGarage: boolean;
  parkingSpots: {
    value: string;
    label: string;
  } | null;
  daysOnMarket: {
    value: string;
    label: string;
  } | null;
  minPrice: {
    value: string;
    label: string;
  } | null;
  maxPrice: {
    value: string;
    label: string;
  } | null;
  minLotSize: {
    value: string;
    label: string;
  } | null;
  maxLotSize: {
    value: string;
    label: string;
  } | null;
  minLivingSpace: {
    value: string;
    label: string;
  } | null;
  maxLivingSpace: {
    value: string;
    label: string;
  } | null;
}

// Transformed Parameters Type
interface TransformedFilterFormParams {
  beds: number | string;
  baths: number | string;
  exact_match: boolean;
  property_types: number[] | string; // IDs as numbers
  amenities: number[] | string;
  min_year_built: number | null;
  max_year_built: number | null;
  keyword: string;
  must_have_garage: boolean;
  garage_size: number | null;
  days_on_market: string | null;
  min_price: number | null;
  max_price: number | null;
  min_lot_size: number | null;
  max_lot_size: number | null;
  min_living_space: number | null;
  max_living_space: number | null;
}
