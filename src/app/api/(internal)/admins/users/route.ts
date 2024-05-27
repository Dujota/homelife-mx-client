import { NextResponse } from "next/server";
import { auth } from "@/server/auth";
import { apiV1 } from "@/lib/services";

export async function POST(req: Request) {
  try {
    const session = (await auth()) as any;

    if (!session?.user) {
      return new NextResponse(
        JSON.stringify({ status: "fail", message: "You are not logged in" }),
        { status: 401 },
      );
    }

    const body = await req.json();

    const config = {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    };
    // return NextResponse.json(bookingGUID);
  } catch (error: any) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
}

export async function GET(req: Request) {
  try {
    const session = (await auth()) as any;

    if (!session?.user) {
      return new NextResponse(
        JSON.stringify({ status: "fail", message: "You are not logged in" }),
        { status: 401 },
      );
    }

    const config = {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    };

    const response = await apiV1.get("admin/users", config);

    return NextResponse.json(response.data);
  } catch (error: any) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
}
