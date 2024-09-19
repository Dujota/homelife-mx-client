"use client";
import type { NextPage } from "next";
import Image from "next/image";
import ListingCardMetrics from "./listing-card-metrics";
import Link from "next/link";

export type GridListingCardType = {
  imageUrl: string;
  price: string;
  slug: string;
  currency: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  propertyType: string;
  isFavorite?: boolean;
};

const GridListingCard: NextPage<GridListingCardType> = ({
  slug,
  imageUrl,
  price,
  currency,
  address,
  bedrooms,
  bathrooms,
  size,
  propertyType,
  isFavorite = false,
}) => {
  return (
    <Link
      href={`/listings/${slug}`}
      className="block w-full no-underline text-black"
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] min-w-[20rem] h-[21.75rem]">
        <div
          className="self-stretch h-[15rem] rounded-lg overflow-hidden shrink-0 flex flex-row items-start justify-end py-[1rem] px-[1.062rem] box-border bg-cover bg-no-repeat bg-[top]"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="h-[2.5rem] w-[2.5rem] [backdrop-filter:blur(10px)] rounded-3xl bg-gray flex flex-row items-start justify-start p-[0.5rem] box-border">
            <Image
              className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
              alt="Favourite Icon button"
              src="/images/icons/favorite.svg"
              width={50}
              height={50}
            />
          </div>
        </div>

        <ListingCardMetrics
          price={price}
          currency={currency}
          address={address}
          bedrooms={bedrooms}
          bathrooms={bathrooms}
          size={size}
          propertyType={propertyType}
        />
      </div>
    </Link>
  );
};

export default GridListingCard;
