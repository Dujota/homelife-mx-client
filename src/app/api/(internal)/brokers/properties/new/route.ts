import { NextResponse } from "next/server";
import { apiV1 } from "@/lib/services";
import { apiTokenExpired, getAccessToken } from "@/lib/helpers/api-helpers";

export async function GET(req: Request) {
  try {
    const token = getAccessToken(req);

    if (!token) {
      return new NextResponse(
        JSON.stringify({ status: "fail", message: "You are not logged in" }),
        { status: 401 },
      );
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await apiV1.get("brokers/properties/new", config);

    return NextResponse.json(response.data);
  } catch (error: any) {
    if (apiTokenExpired(error)) {
      return new Response(JSON.stringify(error), { status: 401 });
    }

    return new Response(JSON.stringify(error), { status: 400 });
  }
}
