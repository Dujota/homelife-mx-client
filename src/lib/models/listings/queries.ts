import { nextApi, handleError, handleSuccess } from "@/lib/services";
import { ListingResponse, ListingsResponse } from "@/types/api/listings";

// Public
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

// Broker
export const getAllListingsBroker = async (
  token: string,
): Promise<ListingsResponse | any> => {
  try {
    const response = await nextApi.get("/brokers/listings", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};

export const getOneListingBroker = async (
  slug: string,
  token: string,
): Promise<ListingResponse | any> => {
  try {
    const response = await nextApi.get(`/brokers/listings/${slug}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};

// Admin

export const getAllListingsAdmin = async (
  token: string,
): Promise<ListingsResponse | any> => {
  try {
    const response = await nextApi.get("/admins/listings", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};

export const getOneListingAdmin = async (
  slug: string,
  token: string,
): Promise<ListingResponse | any> => {
  try {
    const response = await nextApi.get(`/admins/listings/${slug}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};
