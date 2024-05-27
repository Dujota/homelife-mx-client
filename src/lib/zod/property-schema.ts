import * as z from "zod";

export const createPropertySchema = z.object({
  price: z.preprocess(
    (val = "") => {
      if (val === "") {
        return 0;
      }
      return parseFloat(val as string);
    },
    z.number().min(1, "Please enter a price"),
  ),

  description: z.string().min(1, "Description is required"),
  address: z.object({
    house_number: z.string().min(1, "House number is required"),
    street: z.string().min(1, "Street is required"),
    neighborhood: z.string().min(1, "Neighborhood is required"),
    municipality: z.string().min(1, "Municipality is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    postal_code: z.string().min(1, "Postal code is required"),
  }),
  property_type_id: z.preprocess(
    (val = "") => (val === "" ? 0 : parseInt(val as string, 10)),
    z.number().min(1, "Property type is required").nullable(),
  ),
});

export type CreatePropertyFormData = z.infer<typeof createPropertySchema>;
