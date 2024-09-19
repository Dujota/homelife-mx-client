import Image from "next/image";
import type { NextPage } from "next";

export type ListingCardMetricsType = {
  price: string;
  currency: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  propertyType: string;
};

const ListingCardMetrics: NextPage<ListingCardMetricsType> = ({
  price,
  currency,
  address,
  bedrooms,
  bathrooms,
  size,
  propertyType,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
      {/* Price Section */}
      <div className="flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem] gap-[0.25rem]">
        <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[1.5rem] font-medium font-[inherit] inline-block min-w-[0.813rem]">
          $
        </h3>
        <div className="relative tracking-[-0.02em] leading-[1.5rem] font-medium inline-block min-w-[5.75rem]">
          {price}
        </div>
        <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[1.5rem] font-medium font-[inherit] inline-block min-w-[2.688rem]">
          {currency}
        </h3>
      </div>

      {/* Address and Property Details */}
      <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] text-[0.875rem] text-content-base-base">
        <div className="self-stretch relative leading-[1rem]">{address}</div>

        <div className="flex flex-row items-start justify-start flex-wrap content-start py-[0rem] pl-[0rem] pr-[1.5rem] gap-x-[1.5rem] gap-y-[1.418rem]">
          {/* Bedrooms */}
          <div className="flex flex-row items-center justify-start gap-[0.5rem]">
            <Image
              className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 min-h-[1rem]"
              alt="Bedrooms"
              height={20}
              width={20}
              src="/images/icons/properties/bed.svg"
            />
            <div className="relative leading-[1rem] inline-block min-w-[0.563rem]">
              {bedrooms}
            </div>
          </div>

          {/* Bathrooms */}
          <div className="flex flex-row items-center justify-start gap-[0.5rem]">
            <Image
              className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 min-h-[1rem]"
              alt="Bathrooms"
              height={20}
              width={20}
              src="/images/icons/properties/bath.svg"
            />
            <div className="relative leading-[1rem] inline-block min-w-[0.563rem]">
              {bathrooms}
            </div>
          </div>

          {/* Size */}
          <div className="flex flex-row items-center justify-start gap-[0.5rem]">
            <Image
              className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 min-h-[1rem]"
              alt="Size"
              height={20}
              width={20}
              src="/images/icons/properties/ruler-area.svg"
            />
            <div className="relative leading-[1rem] inline-block min-w-[3.438rem]">
              {size} m<sup>2</sup>
            </div>
          </div>

          {/* Property Type */}
          <div className="flex flex-row items-center justify-start gap-[0.5rem]">
            <Image
              className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 min-h-[1rem]"
              alt="Property Type"
              height={20}
              width={20}
              src="/images/icons/properties/prop-type.svg"
            />
            <div className="relative leading-[1rem] inline-block min-w-[2.75rem]">
              {propertyType}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCardMetrics;
