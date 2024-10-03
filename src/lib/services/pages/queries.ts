import { nextApi, handleError, handleSuccess, apiV1 } from "@/lib/services";
import { FilterFieldsResponse } from "@/types/api/pages";

export const getPublicFilterFieldsAPIV1 =
  async (): Promise<FilterFieldsResponse> => {
    try {
      const response = await apiV1.get("/pages/filter_fields");
      return handleSuccess(response);
    } catch (error) {
      return handleError(error) as any;
    }
  };
