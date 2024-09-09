import { getOnePropertyBrokerAPIV1 } from "@/lib/models/properties/queries";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function ListingPage({
  params,
}: {
  params: { slug: string };
}) {
  const session = await auth();

  if (!session?.user) {
    return redirect(`/login?callbackUrl=/listings/${params.slug}`);
  }

  const res: any = await getOnePropertyBrokerAPIV1(
    params.slug,
    session.user.accessToken,
  );
  const property = res.data;

  return (
    <div>
      Property Page
      <h1>{params.slug}</h1>
      <div>
        <h1>{property.attributes.description}</h1>
        <p>Price: {property.attributes.price}</p>
      </div>
    </div>
  );
}
