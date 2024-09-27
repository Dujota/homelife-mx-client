import { preparePropertyFormData } from "@/lib/helpers/api-helpers";
import { handleError, handleSuccess, nextApiFormData } from "@/lib/services";
import { CommercialPropertyFormData } from "@/lib/zod/forms/commercial-property-schema";
import { LandPropertyFormData } from "@/lib/zod/forms/land-property-schema";
import { PreConstructionFormData } from "@/lib/zod/forms/pre-construction-schema";
import { SingleFamilyDwellingFormData } from "@/lib/zod/forms/single-family-dwelling-schema";
import { createPropertyResponse } from "@/types/property";

export const createSingleFamilyDwelling = async (
  data: SingleFamilyDwellingFormData,
  token?: string,
): Promise<createPropertyResponse | any> => {
  try {
    const formData = preparePropertyFormData(data);

    const response = await nextApiFormData.post(
      "/admins/properties",
      formData,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};

export const createLand = async (
  data: LandPropertyFormData | any,
  token?: string,
): Promise<createPropertyResponse | any> => {
  try {
    const formData = preparePropertyFormData(data);

    const response = await nextApiFormData.post("/admin/properties", formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};

export const createCommercialProperty = async (
  data: CommercialPropertyFormData | any,
  token?: string,
): Promise<createPropertyResponse | any> => {
  try {
    const payload = {
      property: { ...data, property_type_id: 4 },
      create_listing: data.create_listing,
    };

    const formData = preparePropertyFormData(data);
    const response = await nextApiFormData.post(
      "/admins/properties",
      formData,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};

export const createPreConstructionProject = async (
  data: PreConstructionFormData | any,
  token?: string,
): Promise<createPropertyResponse | any> => {
  try {
    const formData = preparePropertyFormData(data);
    const response = await nextApiFormData.post(
      "/admins/properties",
      formData,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};

// BROKERS
export const createSingleFamilyDwellingBrokers = async (
  data: SingleFamilyDwellingFormData,
  token?: string,
): Promise<createPropertyResponse | any> => {
  try {
    const formData = preparePropertyFormData(data);

    const response = await nextApiFormData.post(
      "/brokers/properties",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};

export const createLandBrokers = async (
  data: LandPropertyFormData | any,
  token?: string,
): Promise<createPropertyResponse | any> => {
  try {
    const formData = preparePropertyFormData(data);

    const response = await nextApiFormData.post(
      "/brokers/properties",
      formData,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};

export const createCommercialPropertyBrokers = async (
  data: CommercialPropertyFormData | any,
  token?: string,
): Promise<createPropertyResponse | any> => {
  try {
    const formData = preparePropertyFormData(data);
    const response = await nextApiFormData.post(
      "/brokers/properties",
      formData,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};

export const createPreConstructionProjectBrokers = async (
  data: PreConstructionFormData | any,
  token?: string,
): Promise<createPropertyResponse | any> => {
  try {
    const formData = preparePropertyFormData(data);
    const response = await nextApiFormData.post(
      "/brokers/properties",
      formData,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};
