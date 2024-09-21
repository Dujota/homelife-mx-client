import { nextApi, handleError, handleSuccess } from "@/lib/services";
import { CommercialPropertyFormData } from "@/lib/zod/forms/commercial-property-schema";
import { LandPropertyFormData } from "@/lib/zod/forms/land-property-schema";
import { PreConstructionFormData } from "@/lib/zod/forms/pre-construction-schema";
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

export const createLand = async (
  data: LandPropertyFormData,
  token?: string,
): Promise<createPropertyResponse | any> => {
  try {
    const payload = {
      property: { ...data, property_type_id: 3 },
    };
    const response = await nextApi.post("/admins/properties", payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};

export const createCommercialProperty = async (
  data: CommercialPropertyFormData,
  token?: string,
): Promise<createPropertyResponse | any> => {
  try {
    const payload = {
      property: { ...data, property_type_id: 4 },
    };
    const response = await nextApi.post("/admins/properties", payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};

export const createPreConstructionProject = async (
  data: PreConstructionFormData,
  token?: string,
): Promise<createPropertyResponse | any> => {
  try {
    const payload = {
      property: { ...data, property_type_id: 5 },
    };
    const response = await nextApi.post("/admins/properties", payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};
