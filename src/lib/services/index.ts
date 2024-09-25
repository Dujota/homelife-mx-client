import axios from "axios";
import { TIMEOUT } from "../auth/constants";

// API V1
export const apiV1 = axios.create({
  baseURL: process.env.NEXT_PUBLIC_V1_API_BASE,
  timeout: TIMEOUT,
  headers: {
    Accept: "application/json",
  },
});
export const apiV1FormData = axios.create({
  baseURL: process.env.NEXT_PUBLIC_V1_API_BASE,
  timeout: TIMEOUT,
});

// API BASE
export const apiBase = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: TIMEOUT,
  headers: {
    Accept: "application/json",
  },
});

// NEXT API
export const nextApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: TIMEOUT,
  headers: {
    Accept: "application/json",
  },
});

export const nextApiFormData = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: TIMEOUT,
});

interface SuccessResponse {
  headers: any;
  data: any;
}

export function handleSuccess(response: SuccessResponse) {
  // api validation error response - preformatted with handle error
  // are passed through the catch.

  if (response?.data.status?.message === "Logged in sucessfully.") {
    const accessToken = response.headers.authorization.split(" ")[1];
    return { ...response?.data?.data, accessToken };
  }

  if (response?.data) {
    return response?.data as unknown;
  }

  // const { data, status, statusText } = response as any;
  // return {
  //   data,
  //   status,
  //   statusText,
  //   errors: null,
  // };
  return response as unknown;
}

export function handleError(error: unknown) {
  if (axios.isAxiosError(error)) {
    console.error("error message: ", error.message);
    // TODO: throwing the error triggers react.errorboundary when fetching in getServerSideProps
    // these errors include 401 from the api (any api error code)
    if (error.response?.data) {
      const { status, statusText, data: apiErrors } = error?.response || {};

      if (error.response?.status === 401) {
        throw new Error("Unauthorized");
      }

      if (error.response?.status === 403) {
        throw new Error("Forbidden");
      }

      if (error.response?.status === 404 && statusText === "Not Found") {
        throw new Error(statusText);
        // return {
        //   data: null,
        //   status,
        //   statusText,
        //   errors: apiErrors.errors,
        // };
      }

      // Handle API model validations gracefully
      if (status === 422 && statusText === "Unprocessable Entity") {
        throw new Error(statusText);
        // return {
        //   data: null,
        //   status,
        //   statusText,
        //   errors: apiErrors,
        // };
      }
      debugger;
      if (status === 400 && statusText === "Bad Request") {
        throw new Error(statusText);
      }
    }

    // Catch any other messages with the fetcher
    throw new Error(error.message);
  } else {
    console.error("unexpected error: ", error);
    throw new Error("An unexpected error occurred");
  }
}
