import * as z from "zod";

export const preConstructionSchema = z.object({
  name_of_develop: z.string().min(1, "Name of development is required"),
  project_description: z.string().min(1, "Project description is required"),
  developer_contact_info: z
    .string()
    .min(1, "Developer contact information is required"),
  cadastral_folio_number: z
    .string()
    .min(1, "Cadastral folio number is required"),
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
  deposit_structure: z.string().min(1, "Deposit structure is required"),
  incentives: z.string().optional(),
});

export type PreConstructionFormData = z.infer<typeof preConstructionSchema>;
