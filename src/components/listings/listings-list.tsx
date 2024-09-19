import { type Listing } from "@/types/api/listings";
import { ReactNode } from "react";

type ListingListProps = {
  listings: Listing[];
  children: (listing: Listing) => ReactNode;
};

export default function ListingsList({ listings, children }: ListingListProps) {
  return (
    <ul>
      {listings.length &&
        listings?.map((listing: Listing) => (
          <li key={listing.id}>{children(listing)}</li>
        ))}
    </ul>
  );
}
