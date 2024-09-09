import { handleError, handleSuccess, apiV1 } from "@/lib/services";
// import { PropertyIndexResponse } from "@/types/api";

// Admin
export const getAllAdminPropertiesAPIV1 = async (
  token: string,
): Promise<any> => {
  try {
    const response = await apiV1.get("/admin/properties", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};

export const getOnePropertyAdminAPIV1 = async (
  slug: string,
  token: string,
): Promise<any> => {
  try {
    const response = await apiV1.get(`/admin/properties/${slug}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};

// Brokers
export const getAllBrokerPropertiesAPIV1 = async (
  token: string,
): Promise<any> => {
  try {
    const response = await apiV1.get("/brokers/properties", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};

export const getOnePropertyBrokerAPIV1 = async (
  slug: string,
  token: string,
): Promise<any> => {
  try {
    const response = await apiV1.get(`/brokers/properties/${slug}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};
