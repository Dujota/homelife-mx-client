import { type AxiosError } from "axios";
import { SingleFamilyDwellingFormData } from "../zod/forms/single-family-dwelling-schema";
import { CreatePropertyFormFieldsResponse } from "@/types/property";

export function getAccessToken(req: Request) {
  const headers = new Headers(req.headers);
  const token = headers.get("Authorization")?.split(" ")[1];

  return token;
}

export function apiTokenExpired(axiosError: AxiosError) {
  if (axiosError.response?.status === 401) {
    return true;
  }

  return false;
}

export function resourceNotFound(axiosError: AxiosError) {
  if (axiosError.response?.status === 404) {
    return true;
  }

  return false;
}

export const preparePropertyFormData = (data: any): FormData => {
  const formData = new FormData();

  // Append property details to FormData
  if (data.price) formData.append("property[price]", data.price.toString());
  if (data.description)
    formData.append("property[description]", data.description);
  if (data.property_type_id)
    formData.append(
      "property[property_type_id]",
      data.property_type_id.toString(),
    );
  if (data.currency) formData.append("property[currency]", data.currency);

  if (data.number_of_bedrooms)
    formData.append(
      "property[number_of_bedrooms]",
      data.number_of_bedrooms.toString(),
    );
  if (data.number_of_bathrooms)
    formData.append(
      "property[number_of_bathrooms]",
      data.number_of_bathrooms.toString(),
    );
  if (data.living_space_square_meters)
    formData.append(
      "property[living_space_square_meters]",
      data.living_space_square_meters.toString(),
    );
  if (data.lot_size)
    formData.append("property[lot_size]", data.lot_size.toString());
  if (data.year_built)
    formData.append("property[year_built]", data.year_built.toString());

  // Append address details to FormData
  if (data.address_attributes) {
    if (data.address_attributes.house_number)
      formData.append(
        "property[address_attributes][house_number]",
        data.address_attributes.house_number,
      );
    if (data.address_attributes.street)
      formData.append(
        "property[address_attributes][street]",
        data.address_attributes.street,
      );
    if (data.address_attributes.neighborhood)
      formData.append(
        "property[address_attributes][neighborhood]",
        data.address_attributes.neighborhood,
      );
    if (data.address_attributes.municipality)
      formData.append(
        "property[address_attributes][municipality]",
        data.address_attributes.municipality,
      );
    if (data.address_attributes.city)
      formData.append(
        "property[address_attributes][city]",
        data.address_attributes.city,
      );
    if (data.address_attributes.state)
      formData.append(
        "property[address_attributes][state]",
        data.address_attributes.state,
      );
    if (data.address_attributes.postal_code)
      formData.append(
        "property[address_attributes][postal_code]",
        data.address_attributes.postal_code,
      );
  }

  if (data.size_of_land)
    formData.append("property[size_of_land]", data.size_of_land.toString());
  if (data.dimensions) formData.append("property[dimensions]", data.dimensions);
  if (typeof data.is_in_land_registry !== "undefined")
    formData.append(
      "property[is_in_land_registry]",
      data.is_in_land_registry.toString(),
    );
  if (typeof data.appraisal_available !== "undefined")
    formData.append(
      "property[appraisal_available]",
      data.appraisal_available.toString(),
    );
  if (data.zoning) formData.append("property[zoning]", data.zoning);
  if (typeof data.access_to_utilities !== "undefined")
    formData.append(
      "property[access_to_utilities]",
      data.access_to_utilities.toString(),
    );
  if (data.existing_structures)
    formData.append("property[existing_structures]", data.existing_structures);

  if (data.number_of_living_rooms)
    formData.append(
      "property[number_of_living_rooms]",
      data.number_of_living_rooms.toString(),
    );
  if (data.garage_size)
    formData.append("property[garage_size]", data.garage_size.toString());
  if (data.general_carpentry_and_paint_condition)
    formData.append(
      "property[general_carpentry_and_paint_condition]",
      data.general_carpentry_and_paint_condition,
    );
  if (data.number_of_electric_meters)
    formData.append(
      "property[number_of_electric_meters]",
      data.number_of_electric_meters.toString(),
    );
  if (data.number_of_airconditioners)
    formData.append(
      "property[number_of_airconditioners]",
      data.number_of_airconditioners.toString(),
    );
  if (data.half_bathrooms)
    formData.append("property[half_bathrooms]", data.half_bathrooms.toString());
  if (data.gas_tank_size)
    formData.append("property[gas_tank_size]", data.gas_tank_size.toString());

  // Commercial Specific fields
  if (data.type_of_property)
    formData.append("property[type_of_property]", data.type_of_property);
  if (data.square_footage_of_building)
    formData.append(
      "property[square_footage_of_building]",
      data.square_footage_of_building.toString(),
    );
  if (data.rental_income)
    formData.append("property[rental_income]", data.rental_income.toString());
  if (data.commercial_lease_terms)
    formData.append(
      "property[commercial_lease_terms]",
      data.commercial_lease_terms,
    );

  // Pre-Construction Specific fields
  if (data.development_name)
    formData.append("property[development_name]", data.development_name);
  if (data.developer_contact)
    formData.append("property[developer_contact]", data.developer_contact);
  if (data.cadastral_number)
    formData.append("property[cadastral_number]", data.cadastral_number);
  if (typeof data.proof_of_ownership !== "undefined")
    formData.append(
      "property[proof_of_ownership]",
      data.proof_of_ownership.toString(),
    );
  if (data.property_taxes)
    formData.append("property[property_taxes]", data.property_taxes.toString());
  if (data.location) formData.append("property[location]", data.location);
  if (data.plans) formData.append("property[plans]", data.plans);
  if (typeof data.rendering_available !== "undefined")
    formData.append(
      "property[rendering_available]",
      data.rendering_available.toString(),
    );
  if (data.estimated_completion_date)
    formData.append(
      "property[estimated_completion_date]",
      data.estimated_completion_date,
    );
  if (data.min_price)
    formData.append("property[min_price]", data.min_price.toString());
  if (data.max_price)
    formData.append("property[max_price]", data.max_price.toString());
  if (data.deposit_structure)
    formData.append("property[deposit_structure]", data.deposit_structure);
  if (data.incentives) formData.append("property[incentives]", data.incentives);

  // ARRAY FIELDS
  // Append amenity_ids if they exist
  if (data.amenity_ids && data.amenity_ids.length > 0) {
    data.amenity_ids.forEach((amenity_id: any) => {
      formData.append("property[amenity_ids][]", amenity_id.toString());
    });
  }

  // Handle the checkbox for creating a listing
  formData.append("create_listing", data.create_listing ? "true" : "false");

  // Append images if they exist
  if (data.images && data.images.length > 0) {
    data.images.forEach((image: any) => {
      formData.append(`images[]`, image.file); // Append each image file to the form data
    });
  }

  // Append attachments if they exist
  if (data.attachments && data.attachments.length > 0) {
    data.attachments.forEach((attachment: any) => {
      formData.append(`attachments[]`, attachment.file); // Append each attachment file to the form data
    });
  }

  return formData;
};

interface FormPropertyType {
  name: string;
  id: number | string;
}

// Transformed Amenity structure for form options
interface FormAmenity {
  label: string;
  value: string | number;
}

// Transformed form options object
interface FormOptions {
  propertyTypes: FormPropertyType[];
  amenities: FormAmenity[];
}
export function transformApiResponseToFormOptions(
  apiResponse: CreatePropertyFormFieldsResponse,
): FormOptions {
  const { property_types: propertyTypesData, amenities: amenitiesData } =
    apiResponse;

  // Transform property types
  const propertyTypes = propertyTypesData.data.map(
    (item): FormPropertyType => ({
      name: item.attributes.label, // Use label_spanish if necessary
      id: item.id,
    }),
  );

  // Transform amenities
  const amenities = amenitiesData.data.map(
    (item): FormAmenity => ({
      label: item.attributes.label, // Use label_spanish if necessary
      value: parseInt(item.id),
    }),
  );

  return { propertyTypes, amenities };
}
