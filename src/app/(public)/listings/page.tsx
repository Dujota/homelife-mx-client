import ListingsList from "@/components/listings/listings-list";
import ListingListItem from "@/components/listings/listings-list-item";
import { getAllListingsPublic } from "@/lib/models/listings/queries";
import { type ListingsResponse } from "@/types/api/listings";

export default async function ListingsPage() {
  const res: ListingsResponse = await getAllListingsPublic();
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
