import ListingsList from "@/components/listings/listings-list";
import ListingListItem from "@/components/listings/listings-list-item";
import { getAllListingsPublicAPIV1 } from "@/lib/models/listings/queries";
import { type ListingsResponse } from "@/types/api/listings";

export default async function PublicListingsPage() {
  const res: ListingsResponse = await getAllListingsPublicAPIV1();
  const listings = res.data;

  return (
    <div>
      <h1>Listings</h1>
      <ListingsList listings={listings}>
        {(listing) => <ListingListItem listing={listing} />}
      </ListingsList>
    </div>
  );
}
