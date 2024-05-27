import { apiV1 } from "@/lib/services";
import { ListingsResponse } from "@/types/api/listings";

export async function GET(req: Request) {
  try {
    const response: ListingsResponse = await apiV1.get("/listings");

    return Response.json(response.data);
  } catch (error: any) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
}
