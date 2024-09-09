import * as z from "zod";

export const commercialPropertySchema = z.object({
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
  type_of_property: z.string().min(1, "Type of property is required"),
  square_footage: z.preprocess(
    (val = "") => (val === "" ? 0 : parseFloat(val as string)),
    z.number().min(1, "Square footage is required"),
  ),
  lot_size: z.preprocess(
    (val = "") => (val === "" ? 0 : parseFloat(val as string)),
    z.number().min(1, "Lot size is required"),
  ),
  zoning: z.string().min(1, "Zoning information is required"),
  rental_income: z
    .preprocess(
      (val = "") => (val === "" ? 0 : parseFloat(val as string)),
      z.number().min(0, "Rental income is required"),
    )
    .optional(),
  year_built: z.preprocess(
    (val = "") => (val === "" ? 0 : parseInt(val as string, 10)),
    z.number().min(1900, "Year built is required"),
  ),
  commercial_lease_terms: z.string().optional(),
});

export type CommercialPropertyFormData = z.infer<
  typeof commercialPropertySchema
>;
