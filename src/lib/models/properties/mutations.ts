import { nextApi, handleError, handleSuccess } from "@/lib/services";
import { SingleFamilyDwellingFormData } from "@/lib/zod/forms/single-family-dwelling-schema";
import { createPropertyResponse } from "@/types/property";

export const createSingleFamilyDwelling = async (
  data: { property: SingleFamilyDwellingFormData },
  token?: string,
): Promise<createPropertyResponse | any> => {
  try {
    const response = await nextApi.post("/admins/properties", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};
