import * as z from "zod";

export const singleFamilyDwellingSchema = z.object({
  price: z.preprocess(
    (val = "") => (val === "" ? 0 : parseFloat(val as string)),
    z.number().min(1, "Please enter a price"),
  ),
  description: z.string().min(1, "Description is required"),
  address_attributes: z.object({
    // house_number: z.string().min(1, "House number is required"),
    house_number: z.string(),
    // street: z.string().min(1, "Street is required"),
    street: z.string(),
    neighborhood: z.string(),
    // neighborhood: z.string().min(1, "Neighborhood is required"),
    // municipality: z.string().min(1, "Municipality is required"),
    municipality: z.string(),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    // postal_code: z.string().min(1, "Postal code is required"),
    postal_code: z.string(),
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
  amenity_ids: z.array(z.number()).optional(),
});

export type SingleFamilyDwellingFormData = z.infer<
  typeof singleFamilyDwellingSchema
>;
