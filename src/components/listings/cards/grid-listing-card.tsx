"use client";
import type { NextPage } from "next";
import Image from "next/image";
import ListingCardMetrics from "./listing-card-metrics";
import Link from "next/link";
import { useState } from "react";
import CardPreviewImagePlaceholder from "@/components/common/animations/card-preview-image-placeholder";

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
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      href={`/listings/${slug}`}
      className="block w-full xs:max-w-[500px] sm:max-w-[290px] md:max-w-[350px] lg:max-w-[300px] xl:max-w-[380px] no-underline text-black"
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] ">
        <div className="self-stretch h-[15rem] rounded-lg overflow-hidden shrink-0 relative">
          <Image
            src={imageUrl}
            alt={`Listing image for ${address}`}
            layout="fill"
            objectFit="cover"
            quality={75}
            onLoadingComplete={() => setImageLoaded(true)}
            className={`transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          {!imageLoaded && <CardPreviewImagePlaceholder />}
          <div className="absolute top-4 right-4 h-[2.5rem] w-[2.5rem] [backdrop-filter:blur(10px)] rounded-3xl bg-gray flex flex-row items-start justify-start p-[0.5rem] box-border">
            <Image
              className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
              alt="Favourite Icon button"
              src="/images/icons/favorite.svg"
              width={24}
              height={24}
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
