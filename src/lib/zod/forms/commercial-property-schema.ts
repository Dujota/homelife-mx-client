import * as z from "zod";
import { imageValidator, validateCreateListing } from "./schema-helpers";

export const commercialPropertySchema = z.object({
  price: z.preprocess(
    (val = "") => (val === "" ? 0 : parseFloat(val as string)),
    z.number().min(1, "Please enter a price"),
  ),
  currency: z.preprocess(
    (val = "") => (val === "" ? "" : (val as string)),
    z.string().min(1, "Currency type is required").nullable(),
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
  // property_type_id: z.preprocess(
  //   (val = "") => (val === "" ? 0 : parseInt(val as string, 10)),
  //   z.number().min(1, "Property type is required").nullable(),
  // ),
  type_of_business: z.string().min(3, "Type of property is required"),
  square_footage_of_building: z.preprocess(
    (val = "") => (val === "" ? 0 : parseFloat(val as string)),
    z.number().min(1, "Commercial space size is required"),
  ),
  // size_of_land: z.preprocess(
  //   (val = "") => (val === "" ? 0 : parseFloat(val as string)),
  //   z.number().min(1, "Lot size is required").optional(),
  // ),
  zoning: z.string().min(1, "Zoning information is required"),
  rental_income: z
    .preprocess(
      (val = "") => (val === "" ? 0 : parseFloat(val as string)),
      z.number().min(0, "Rental income has to be greater than 0"),
    )
    .optional(),
  commercial_lease_terms: z.string().optional(),
  create_listing: validateCreateListing,
  images: imageValidator,
  attachments: imageValidator,
});

export type CommercialPropertyFormData = z.infer<
  typeof commercialPropertySchema
>;
