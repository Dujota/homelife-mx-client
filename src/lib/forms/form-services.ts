import { apiV1, handleError, handleSuccess } from "../services";

export const getAddPropertyFormFieldsAdminAPIV1 = async (
  token: string,
): Promise<any> => {
  try {
    const response = await apiV1.get("/admin/properties/new", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};

// Brokers
export const getAddPropertyFormFieldsBrokersAPIV1 = async (
  token: string,
): Promise<any> => {
  try {
    const response = await apiV1.get("/brokers/properties/new", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};
