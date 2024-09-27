import * as z from "zod";
import { imageValidator, validateCreateListing } from "./schema-helpers";

export const landPropertySchema = z.object({
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
  size_of_land: z.preprocess(
    (val = "") => (val === "" ? 0 : parseFloat(val as string)),
    z.number().min(1, "Size of the land is required"),
  ),
  dimensions: z.string().min(1, "Dimensions are required"),
  is_in_land_registry: z.boolean(),
  appraisal_available: z.boolean(),
  zoning: z.string().min(1, "Zoning information is required"),
  // topography: z.string().min(1, "Topography is required"),
  topography: z.string().optional(),
  access_to_utilities: z.boolean().optional(),
  existing_structures: z.string().optional(),
  create_listing: validateCreateListing,
  images: imageValidator,
  attachments: imageValidator,
});

export type LandPropertyFormData = z.infer<typeof landPropertySchema>;
