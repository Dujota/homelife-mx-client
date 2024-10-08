import * as z from "zod";
import { imageValidator, validateCreateListing } from "./schema-helpers";

export const singleFamilyDwellingSchema = z.object({
  price: z.preprocess(
    (val = "") => (val === "" ? 0 : parseFloat(val as string)),
    z.number().min(1, "Please enter a price"),
  ),
  description: z.string().min(1, "Description is required"),
  address_attributes: z.object({
    // house_number: z.string().min(1, "House number is required"),
    house_number: z.string().optional(),
    // street: z.string().min(1, "Street is required"),
    street: z.string().optional(),
    neighborhood: z.string().optional(),
    // neighborhood: z.string().min(1, "Neighborhood is required"),
    // municipality: z.string().min(1, "Municipality is required"),
    municipality: z.string().optional(),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    // postal_code: z.string().min(1, "Postal code is required"),
    postal_code: z.string().optional(),
  }),
  property_type_id: z.preprocess(
    (val = "") => (val === "" ? 0 : parseInt(val as string, 10)),
    z.number().min(1, "Property type is required").nullable(),
  ),
  number_of_bedrooms: z.preprocess(
    (val = "") => (val === "" ? 0 : parseInt(val as string, 10)),
    z.number().min(1, "Number of bedrooms is required"),
  ),
  number_of_bathrooms: z.preprocess(
    (val = "") => (val === "" ? 0 : parseInt(val as string, 10)),
    z.number().min(1, "Number of bathrooms is required"),
  ),
  living_space_square_meters: z.preprocess(
    (val = "") => (val === "" ? 0 : parseFloat(val as string)),
    z.number().min(1, "Living space is required"),
  ),
  lot_size: z.preprocess(
    (val = "") => (val === "" ? 0 : parseFloat(val as string)),
    z.number().min(1, "Lot size is required"),
  ),
  year_built: z.preprocess(
    (val = "") => (val === "" ? 0 : parseInt(val as string, 10)),
    z.number().min(1900, "Year built is required"),
  ),
  // currency: z.string().optional(),
  currency: z.preprocess(
    (val = "") => (val === "" ? "" : (val as string)),
    z.string().min(1, "Currency type is required").nullable(),
  ),
  corner_lot: z.boolean().optional(),
  number_of_living_rooms: z.preprocess(
    (val = "") => (val === "" ? 0 : parseInt(val as string, 10)),
    z.number().optional(),
  ),
  garage_size: z.preprocess(
    (val = "") => (val === "" ? 0 : parseInt(val as string, 10)),
    z.number().optional(),
  ),
  service_room_with_bathroom: z.boolean().optional(),
  laundry_room: z.boolean().optional(),
  general_carpentry_and_paint_condition: z.string().optional(),
  number_of_electric_meters: z.preprocess(
    (val = "") => (val === "" ? 0 : parseInt(val as string, 10)),
    z.number().optional(),
  ),
  number_of_airconditioners: z.preprocess(
    (val = "") => (val === "" ? 0 : parseInt(val as string, 10)),
    z.number().optional(),
  ),
  half_bathrooms: z.preprocess(
    (val = "") => (val === "" ? 0 : parseInt(val as string, 10)),
    z.number().optional(),
  ),
  gas_tank_size: z.preprocess(
    (val = "") => (val === "" ? 0 : parseFloat(val as string)),
    z.number().optional(),
  ),
  property_tax_paid: z.boolean().optional(),
  maintenance_fees_paid: z.boolean().optional(),
  amenity_ids: z.array(z.number()).optional(),
  create_listing: validateCreateListing,
  images: imageValidator,
  attachments: imageValidator,
});

export type SingleFamilyDwellingFormData = z.infer<
  typeof singleFamilyDwellingSchema
>;
