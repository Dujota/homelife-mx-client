import { apiV1 } from "@/lib/services";

export async function GET(req: Request) {
  try {
    const response = await apiV1.get("/listings");

    return Response.json(response.data);
  } catch (error: any) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
}
