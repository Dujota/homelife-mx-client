import { nextApi, handleError, handleSuccess } from "@/lib/services";
// import { BuildingIndexResponse } from "@/types/api";

export const getAllListingsPublic = async (): Promise<any> => {
  try {
    const response = await nextApi.get("/listings");
    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};
