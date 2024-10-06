import { apiV1 } from "@/lib/services";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Extract query parameters from the request URL
    const url = new URL(req.url);
    const searchParams = url.searchParams;

    // Convert searchParams to a plain object
    const queryParams: { [key: string]: string } = {};
    searchParams.forEach((value, key) => {
      queryParams[key] = value;
    });

    // Make the API call with the query parameters
    const response: any = await apiV1.get("/listings", { params: queryParams });

    return Response.json(response.data);
  } catch (error: any) {
    console.error("Error fetching listings:", error);
    return new Response(
      JSON.stringify({
        error: error.message || "An error occurred while fetching listings",
      }),
      {
        status: error.response?.status || 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
