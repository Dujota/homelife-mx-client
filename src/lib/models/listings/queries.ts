import { buildQueryString } from "@/lib/helpers/url-helpers";
import { nextApi, handleError, handleSuccess, apiV1 } from "@/lib/services";
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

export const getAllListingsPublicAPIV1 = async (searchParams: {
  [key: string]: string | string[] | undefined;
}): Promise<ListingsResponse | any> => {
  try {
    const queryString = buildQueryString(searchParams);

    const response = await apiV1.get(`/listings?${queryString}`);
    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};

export const getOneListingPublicAPIV1 = async (
  slug: string,
): Promise<ListingResponse | any> => {
  try {
    const response = await apiV1.get(`/listings/${slug}`);
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

// API V1
export const getAllListingsBrokerAPIV1 = async (
  token: string,
): Promise<ListingsResponse | any> => {
  try {
    const response = await apiV1.get("/brokers/listings", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};

export const getOneListingBrokerAPIV1 = async (
  slug: string,
  token: string,
): Promise<ListingResponse | any> => {
  try {
    const response = await apiV1.get(`/brokers/listings/${slug}`, {
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

// API V1
export const getAllListingsAdminAPIV1 = async (
  token: string,
): Promise<ListingsResponse | any> => {
  try {
    const response = await apiV1.get("/admin/listings", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};

export const getOneListingAdminAPIV1 = async (
  slug: string,
  token: string,
): Promise<ListingResponse | any> => {
  try {
    const response = await apiV1.get(`/admin/listings/${slug}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
};
