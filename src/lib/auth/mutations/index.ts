import { handleError, apiV1, nextApi, handleSuccess } from "@/lib/services";

type AuthRequest = {
  user: { email?: string | unknown; password?: string | unknown };
};

// TODO: decide if we send reqs to nextapi and then call apiV1 from there
// Auth
export async function login(data: AuthRequest) {
  try {
    const user = await apiV1.post("/login", data);

    return handleSuccess(user);
  } catch (error) {
    return handleError(error);
  }
}
