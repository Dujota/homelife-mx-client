import { nextApi, handleError, handleSuccess } from "@/lib/services";
import { BuildingIndexResponse } from "@/types/api";

export const getAllBuildings = async (
  token: string,
): Promise<BuildingIndexResponse | any> => {
  try {
    const response = await nextApi.get("/buildings", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};
