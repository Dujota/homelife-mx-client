import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import ListingsList from "@/components/listings/listings-list";
import ListingListItem from "@/components/listings/listings-list-item";
import { getAllListingsAdmin } from "@/lib/models/listings/queries";
import { type ListingsResponse } from "@/types/api/listings";

export default async function AdminListingsPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login?callbackUrl=/admin/listings");
  }

  const res: ListingsResponse = await getAllListingsAdmin(
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
