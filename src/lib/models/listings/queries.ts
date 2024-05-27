import { nextApi, handleError, handleSuccess } from "@/lib/services";
import { ListingResponse, ListingsResponse } from "@/types/api/listings";

export const getAllListingsPublic = async (): Promise<
  ListingsResponse | any
> => {
  try {
    const response = await nextApi.get("/listings");
    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};

export const getOneListingPublic = async (
  slug: string,
): Promise<ListingResponse | any> => {
  try {
    const response = await nextApi.get(`/listings/${slug}`);
    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};
