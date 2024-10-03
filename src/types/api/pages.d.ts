import { Amenities } from "./amenity-type";
import { PropertyTypes } from "./property-type";

export interface FilterFieldsResponse {
  amenities: { data: Amenities[] };
  property_types: { data: PropertyTypes[] };
}
