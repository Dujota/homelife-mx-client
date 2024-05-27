import { apiTokenExpired, getAccessToken } from "@/lib/helpers/api-helpers";
import { apiV1 } from "@/lib/services";

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
