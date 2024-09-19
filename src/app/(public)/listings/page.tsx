import ListFilterDropdowns from "@/components/forms/fields/all-recently-selects";
import HomepageSearch from "@/components/forms/search/homepage-search";
import FavsWatchList from "@/components/listings/favs-list";
import { getAllListingsPublicAPIV1 } from "@/lib/models/listings/queries";
import { type ListingsResponse } from "@/types/api/listings";

export default async function PublicListingsPage() {
  const res: ListingsResponse = await getAllListingsPublicAPIV1();
  const listings = res.data;

  return (
    <div className=" relative bg-colors-background-bg-primary overflow-hidden flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border gap-[2rem] leading-[normal] tracking-[normal]">
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0.75rem] pb-[0.75rem] box-border max-w-full">
        <header className="flex-1 flex flex-row items-start justify-start gap-[0.75rem] max-w-full">
          {/* <div className="flex-1 rounded-lg border-gainsboro-200 border-[1px] border-solid flex flex-row items-start justify-start py-[0.25rem] pl-[0.375rem] pr-[0rem] gap-spacing-container-xxs1">
            <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
              <Image
                className="w-[1.25rem] h-[1.25rem] relative overflow-hidden shrink-0"
                alt=""
                src="/search.svg"
              />
            </div>
            <input
              className="w-[calc(100%_-_26px)] [border:none] [outline:none] font-text-md-regular text-[0.813rem] bg-[transparent] h-[1.5rem] flex-1 relative leading-[1.5rem] text-darkgray-200 text-left inline-block min-w-[10.75rem] whitespace-nowrap p-0"
              placeholder="Search by City, Address, Zip"
              type="text"
            />
          </div>
          <div className="w-[2.25rem] rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-row items-center justify-start py-[0.375rem] px-[0.437rem]">
            <Image
              className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/settings04.svg"
            />
          </div> */}
          <HomepageSearch />
        </header>
      </div>
      <ListFilterDropdowns />

      <main className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border max-w-full">
        <FavsWatchList listings={listings} />
      </main>
    </div>
  );
}
