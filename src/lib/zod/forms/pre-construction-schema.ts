import * as z from "zod";
import { imageValidator, validateCreateListing } from "./schema-helpers";

export const preConstructionSchema = z.object({
  development_name: z.string().min(1, "Name of development is required"),
  description: z.string().min(1, "Project description is required"),
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
  developer_contact: z
    .string()
    .min(1, "Developer contact information is required"),
  cadastral_number: z.string().min(1, "Cadastral folio number is required"),
  proof_of_ownership: z.boolean().optional(),
  property_taxes: z.preprocess(
    (val = "") => (val === "" ? 0 : parseFloat(val as string)),
    z.number().min(0, "Property taxes amount is required"),
  ),
  zoning: z.string().min(1, "Zoning information is required"),
  location: z.string().min(1, "Location is required"),
  plans: z.string().min(1, "Plans are required"),
  rendering_available: z.boolean().optional(),
  estimated_completion_date: z
    .string()
    .min(1, "Estimated completion date is required"),
  min_price: z.preprocess(
    (val = "") => (val === "" ? 0 : parseFloat(val as string)),
    z.number().min(1, "Minimum price is required"),
  ),
  max_price: z.preprocess(
    (val = "") => (val === "" ? 0 : parseFloat(val as string)),
    z.number().min(1, "Maximum price is required"),
  ),
  currency: z.preprocess(
    (val = "") => (val === "" ? "" : (val as string)),
    z.string().min(1, "Currency type is required").nullable(),
  ),
  deposit_structure: z.string().min(1, "Deposit structure is required"),
  incentives: z.string().optional(),
  amenity_ids: z.array(z.number()).optional(),
  create_listing: validateCreateListing,
  images: imageValidator,
  attachments: imageValidator,
});

export type PreConstructionFormData = z.infer<typeof preConstructionSchema>;
