import FavListWrapper from "@/components/listings/favourites/favs-list-wrapper";
import { transformApiResponseToFormOptions } from "@/lib/helpers/api-helpers";
import { getAllListingsPublicAPIV1 } from "@/lib/models/listings/queries";
import { type ListingsResponse } from "@/types/api/listings";

// Cache control
export const revalidate = 60;
export const dynamic = "force-dynamic";

export default async function PublicListingsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const res: ListingsResponse = await getAllListingsPublicAPIV1(searchParams);

  const { propertyTypes, amenities } = transformApiResponseToFormOptions({
    // @ts-ignore
    property_types: res.property_types,
    // @ts-ignore
    amenities: res.amenities,
  });

  return (
    <div className=" relative bg-colors-background-bg-primary overflow-hidden flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border gap-[2rem] leading-[normal] tracking-[normal] mt-[6rem] 3xl:mx-auto 3xl:w-[1650px]">
      <FavListWrapper
        listings={res.listings.data}
        propertyTypes={propertyTypes}
        amenities={amenities}
      />
    </div>
  );
}
