import { resourceNotFound } from "@/lib/helpers/api-helpers";
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

    const response = await apiV1.get(`/listings/${params.slug}`);

    return Response.json(response.data);
  } catch (error: any) {
    if (resourceNotFound(error)) {
      return new Response(JSON.stringify(error), { status: 404 });
    }

    return new Response(JSON.stringify(error), { status: 400 });
  }
}
