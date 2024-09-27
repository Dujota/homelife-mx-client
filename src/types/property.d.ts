import { Amenities } from "./api/amenity-type";
import { PropertyTypes } from "./api/property-type";

export type createPropertyResponse = {
  data: {
    property: {
      id: number;
    };
  };
};

export interface CreatePropertyFormFieldsResponse {
  property_types: PropertyTypes;
  amenities: Amenities;
}
