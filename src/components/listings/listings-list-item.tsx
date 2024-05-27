import { type Listing } from "@/types/api/listings";
import Link from "next/link";

type ListingItemProps = {
  listing: Listing;
};

const ListingListItem = ({ listing }: ListingItemProps) => (
  <div>
    <Link href={`/listings/${listing.id}`}>
      {listing.attributes.property.description}
    </Link>
  </div>
);

export default ListingListItem;
