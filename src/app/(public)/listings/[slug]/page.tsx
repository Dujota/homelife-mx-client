import BackToLink from "@/components/common/buttons/back-to-link";
import { getOneListingPublicAPIV1 } from "@/lib/models/listings/queries";
import { type ListingResponse } from "@/types/api/listings";

export default async function PublicListingPage({
  params,
}: {
  params: { slug: string };
}) {
  const res: ListingResponse = await getOneListingPublicAPIV1(params.slug);
  const listing = res.data;

  return (
    <div className=" relative bg-colors-background-bg-primary overflow-hidden flex flex-col items-start justify-start gap-[4.5rem] leading-[normal] tracking-[normal] text-center text-[1.25rem] text-primary font-text-md-regular">
      <main className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full">
        <section className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border max-w-full text-left text-[1rem] text-content-base-base font-text-md-regular">
          <div className="flex-1 flex flex-row items-start justify-start max-w-full">
            <BackToLink slug="/listings" label="Listings" />
          </div>
        </section>
      </main>
    </div>
  );
}

// <div>
//   Listing Page
//   <h1>{params.slug}</h1>
//   <div>
//     <h1>{listing.attributes.property.description}</h1>
//     <p>Price: {listing.attributes.property.price}</p>
//     <p>Status: {listing.attributes.status.name}</p>
//     <p>Listing Type: {listing.attributes.listing_type.name}</p>
//     <p>Address: {listing.attributes.property.address_id}</p>
//     <p>Broker: {listing.attributes.broker.company_name}</p>
//   </div>
// </div>
