import * as z from "zod";

export const createListingSchema = z.object({
  listing_date: z.string().min(1, "Listing date is required"),
  commission_percentage: z.preprocess(
    (val) => parseFloat(val as string),
    z
      .number()
      .min(0, "Commission percentage must be at least 0")
      .max(100, "Commission percentage must be at most 100"),
  ),
  property_id: z.preprocess(
    (val) => (val === "" ? 0 : parseInt(val as string, 10)),
    z.number().min(1, "Property is required").nullable(),
  ),
  status_id: z.preprocess(
    (val) => (val === "" ? 0 : parseInt(val as string, 10)),
    z.number().min(1, "Status is required").nullable(),
  ),
  listing_type_id: z.preprocess(
    (val) => (val === "" ? 0 : parseInt(val as string, 10)),
    z.number().min(1, "Listing type is required").nullable(),
  ),
});
export type CreateListingFormData = z.infer<typeof createListingSchema>;
