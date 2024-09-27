// Amenity structure
export interface AmenityAttributes {
  name: string;
  label: string;
  label_spanish: string | null;
}

export interface AmenityData {
  id: string;
  type: string;
  attributes: AmenityAttributes;
}

export interface Amenities {
  data: AmenityData[];
}
