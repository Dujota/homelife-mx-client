// import { nextApi, handleError, handleSuccess } from "@/lib/services";
// import { BuildingInput } from "@/lib/zod/building-schema";
// import { type BuildingResponse } from "@/types/api";

// export const createBuilding = async (
//   data: { building: BuildingInput },
//   token?: string,
// ): Promise<BuildingResponse | any> => {
//   try {
//     const response = await nextApi.post("/buildings", data, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return handleSuccess(response);
//   } catch (error) {
//     return handleError(error);
//   }
// };
