import { apiTokenExpired, getAccessToken } from "@/lib/helpers/api-helpers";
import { apiV1 } from "@/lib/services";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } },
) {
  try {
    if (!params?.slug) {
      return new Response(
        JSON.stringify({ status: "fail", message: "Invalid request" }),
        { status: 400 },
      );
    }

    const token = getAccessToken(req);

    if (!token) {
      return new Response(
        JSON.stringify({ status: "fail", message: "You are not logged in" }),
        { status: 401 },
      );
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await apiV1.get(
      `brokers/properties/${params.slug}/edit`,
      config,
    );

    return Response.json(response.data);
  } catch (error: any) {
    if (apiTokenExpired(error)) {
      return new Response(JSON.stringify(error), { status: 401 });
    }

    return new Response(JSON.stringify(error), { status: 400 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { slug: string } },
) {
  try {
    if (!params?.slug) {
      return new Response(
        JSON.stringify({ status: "fail", message: "Invalid request" }),
        { status: 400 },
      );
    }

    const headers = new Headers(req.headers);
    const token = headers.get("Authorization")?.split(" ")[1];

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

    const body = await req.json();

    const response = await apiV1.put(
      `brokers/properties/${params.slug}`,
      body,
      config,
    );
    return NextResponse.json(response.data);
  } catch (error: any) {
    if (apiTokenExpired(error)) {
      return new Response(JSON.stringify(error), { status: 401 });
    }

    return new Response(JSON.stringify(error), { status: 400 });
  }
}
