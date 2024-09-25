import { NextResponse } from "next/server";
import {
  apiV1,
  apiV1FormData,
  handleError,
  handleSuccess,
} from "@/lib/services";
import { apiTokenExpired, getAccessToken } from "@/lib/helpers/api-helpers";

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
      },
    };

    const formData = await req.formData();

    const data = new FormData();
    formData.forEach((value, key) => {
      // If value is a file (Blob), append the file; otherwise, append the field
      if (value instanceof Blob) {
        data.append(key, value, value.name);
      } else {
        data.append(key, value as string);
      }
    });

    const response = await apiV1FormData.post(
      "/admin/properties",
      data,
      config,
    );

    return NextResponse.json(response.data);
  } catch (error: any) {
    if (apiTokenExpired(error)) {
      return new Response(JSON.stringify(error), { status: 401 });
    }

    return new Response(JSON.stringify(error), { status: 500 });
  }
}

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

    const response = await apiV1.get("admin/properties", config);

    return NextResponse.json(response.data);
  } catch (error: any) {
    if (apiTokenExpired(error)) {
      return new Response(JSON.stringify(error), { status: 401 });
    }
    return new Response(JSON.stringify(error), { status: 400 });
  }
}
