import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import ListingsList from "@/components/listings/listings-list";
import ListingListItem from "@/components/listings/listings-list-item";
import { getAllListingsBroker } from "@/lib/models/listings/queries";
import { type ListingsResponse } from "@/types/api/listings";

export default async function BrokersListingsPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login?callbackUrl=/brokers/listings");
  }

  const res: ListingsResponse = await getAllListingsBroker(
    session.user.accessToken,
  );
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
