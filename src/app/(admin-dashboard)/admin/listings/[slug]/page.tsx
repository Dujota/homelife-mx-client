import { getOneListingAdmin } from "@/lib/models/listings/queries";
import { auth } from "@/server/auth";
import { type ListingResponse } from "@/types/api/listings";
import { redirect } from "next/navigation";

export default async function AdminListingShowPage({
  params,
}: {
  params: { slug: string };
}) {
  const session = await auth();

  if (!session?.user) {
    return redirect(`/login?callbackUrl=/admins/listings/${params.slug}`);
  }

  const res: ListingResponse = await getOneListingAdmin(
    params.slug,
    session.user.accessToken,
  );
  const listing = res.data;

  return (
    <div>
      Listing Page
      <h1>{params.slug}</h1>
      <div>
        <h1>{listing.attributes.property.description}</h1>
        <p>Price: {listing.attributes.property.price}</p>
        <p>Status: {listing.attributes.status.name}</p>
        <p>Listing Type: {listing.attributes.listing_type.name}</p>
        <p>Address: {listing.attributes.property.address_id}</p>
        <p>Broker: {listing.attributes.broker.company_name}</p>
      </div>
    </div>
  );
}
