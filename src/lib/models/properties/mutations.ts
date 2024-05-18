import { nextApi, handleError, handleSuccess } from "@/lib/services";
import { PropertyInput } from "@/lib/zod/property-schema";

import { type PropertyResponse } from "@/types/api";

export const createProperty = async (
  data: { property: PropertyInput },
  token?: string,
): Promise<PropertyResponse | any> => {
  try {
    const response = await nextApi.post("/properties", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};
