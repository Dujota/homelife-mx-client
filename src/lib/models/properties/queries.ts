// import { nextApi, handleError, handleSuccess } from "@/lib/services";
// import { PropertyIndexResponse } from "@/types/api";

// export const getAllProperties = async (
//   token: string,
// ): Promise<PropertyIndexResponse | any> => {
//   try {
//     const response = await nextApi.get("/properties", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return handleSuccess(response);
//   } catch (error) {
//     return handleError(error);
//   }
// };
