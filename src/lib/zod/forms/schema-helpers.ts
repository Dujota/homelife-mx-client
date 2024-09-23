import * as z from "zod";

export const validateCreateListing = z
  .array(z.string())
  .nonempty("Choice Required")
  .refine((val) => val.includes("true") || val.includes("false"), {
    message: "Choice Required",
  })
  .transform((val) => val.includes("true"));

export const imageValidator = z
  .array(
    z.object({
      file: z.instanceof(File).refine((file) => file.size < 5 * 1024 * 1024, {
        message: "File size should be less than 5MB",
      }), // You can add other file validations like type check
      dataURL: z.string().url(),
    }),
  )
  .min(1, { message: "At least one image is required" }) // Ensure at least one image is uploaded
  .max(10, { message: "You can upload up to 10 images" }); // Ensure no more than 10 images
