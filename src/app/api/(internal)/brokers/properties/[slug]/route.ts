import { apiTokenExpired, getAccessToken } from "@/lib/helpers/api-helpers";
import { apiV1, apiV1FormData } from "@/lib/services";
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

    const response = await apiV1.get(`admin/properties/${params.slug}`, config);

    return Response.json(response.data);
  } catch (error: any) {
    if (apiTokenExpired(error)) {
      return new Response(JSON.stringify(error), { status: 401 });
    }
    return new Response(JSON.stringify(error), { status: 400 });
  }
}

export async function POST(req: Request) {
  try {
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
        // "Content-Type": "multipart/form-data",
      },
    };

    // const body = await req.json();
    const formData = await req.formData();
    // Prepare the payload to send to your Rails API
    const payload: any = {};
    // Convert FormData into a key-value object
    formData.forEach((value, key) => {
      if (key.endsWith("[]")) {
        // Handle array fields (like images[] and attachments[])
        if (!payload[key]) {
          payload[key] = [];
        }
        payload[key].push(value);
      } else {
        payload[key] = value;
      }
    });

    const response = await apiV1FormData.post(
      "/brokers/properties",
      payload,
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
