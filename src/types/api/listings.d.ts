import { Amenities } from "./amenity-type";
import { PropertyTypes } from "./property-type";

export interface Address {
  id: number;
  house_number: string;
  street: string;
  neighborhood: string;
  municipality: string;
  city: string;
  state: string;
  postal_code: string;
  created_at: string;
  updated_at: string;
}

export interface Property {
  id: number;
  address_id: number;
  property_type_id: number;
  user_id: number;
  price: string;
  description: string;
  created_at: string;
  updated_at: string;
  property_type: {
    name: string;
    label: string;
  };
  amenities: { name: string; label: string; label_spanish?: string }[];
}

export interface Status {
  id: number;
  name: string;
  label: string;
  created_at: string;
  updated_at: string;
}

export interface ListingType {
  id: number;
  name: string;
  label: string;
  created_at: string;
  updated_at: string;
}

export interface Broker {
  company_name: string;
  license_number: string;
  email: string;
}

export interface ListingAttributes {
  listing_date: string;
  commission_percentage: string;
  created_at: string;
  updated_at: string;
  currency: string;
  property_type: {
    name: string;
    label: string;
  };
  property: Property;
  status: Status;
  listing_type: ListingType;
  broker: Broker;
}

export interface Listing {
  id: string;
  type: string;
  attributes: ListingAttributes;
}

export interface ListingsResponse {
  listings: { data: Listing[] };
  amenities: { data: Amenities[] };
  property_types: { data: PropertyTypes[] };
}

export interface ListingResponse {
  data: Listing;
}
