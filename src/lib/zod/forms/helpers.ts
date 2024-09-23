import * as z from "zod";

export const validateCreateListing = z
  .array(z.string())
  .nonempty("Choice Required")
  .refine((val) => val.includes("true") || val.includes("false"), {
    message: "Choice Required",
  })
  .transform((val) => val.includes("true"));
