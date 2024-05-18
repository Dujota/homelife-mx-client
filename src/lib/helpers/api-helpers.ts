import { type AxiosError } from "axios";

export function getAccessToken(req: Request) {
  const headers = new Headers(req.headers);
  const token = headers.get("Authorization")?.split(" ")[1];

  return token;
}

export function apiTokenExpired(axiosError: AxiosError) {
  if (axiosError.response?.status === 401) {
    return true;
  }

  return false;
}
