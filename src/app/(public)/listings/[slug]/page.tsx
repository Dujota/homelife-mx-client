import { getOneListingPublic } from "@/lib/models/listings/queries";
import { type ListingResponse } from "@/types/api/listings";

export default async function ListingPage({
  params,
}: {
  params: { slug: string };
}) {
  const res: ListingResponse = await getOneListingPublic(params.slug);
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
