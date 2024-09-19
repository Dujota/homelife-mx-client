import Image from "next/image";

export type ListingCard = {
  className?: string;
  imageContainerClassName?: string;
  currency?: string;
  imageUrl?: string;
  listing: {
    price?: string;
  };
};

const ListingCard = ({
  className = "",
  imageContainerClassName = "",
  currency = "",
  imageUrl,
  listing: { price },
}: ListingCard) => {
  return (
    <div
      className={`self-stretch flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[20rem] shrink-0 text-left text-[1.25rem] text-content-base-main font-text-md-regular ${className}`}
    >
      <div
        className={`self-stretch flex-1 rounded-lg overflow-hidden flex flex-row items-start justify-end py-[1rem] px-[1.062rem] bg-cover bg-no-repeat bg-[top] ${imageContainerClassName}`}
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

      <div className="self-stretch h-[5.25rem] flex flex-col items-start justify-start gap-[0.75rem]">
        <div className="w-[11rem] h-[1.5rem] flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem] box-border gap-[0.25rem]">
          <h3 className="m-0 self-stretch w-[0.813rem] relative text-inherit tracking-[-0.02em] leading-[1.5rem] font-medium font-[inherit] flex items-center">
            $
          </h3>
          <div className="self-stretch flex-1 relative tracking-[-0.02em] leading-[1.5rem] font-medium flex items-center">
            {price}
          </div>
          <h3 className="m-0 self-stretch w-[2.688rem] relative text-inherit tracking-[-0.02em] leading-[1.5rem] font-medium font-[inherit] flex items-center">
            {currency}
          </h3>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[1rem] text-[0.875rem] text-content-base-base">
          <div className="self-stretch h-[1rem] relative leading-[1rem] flex items-center">
            Vaughan, Ontario, Canada, L5A4Y5
          </div>
          <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start py-[0rem] pl-[0rem] pr-[1.5rem] gap-x-[1.5rem] gap-y-[1.418rem]">
            <div className="self-stretch w-[2.063rem] flex flex-row items-center justify-start gap-[0.5rem]">
              <Image
                className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 min-h-[1rem]"
                alt=""
                height={20}
                width={20}
                src="/images/icons/properties/bed.svg"
              />
              <div className="self-stretch flex-1 relative leading-[1rem] flex items-center">
                2
              </div>
            </div>
            <div className="self-stretch w-[2.063rem] flex flex-row items-center justify-start gap-[0.5rem]">
              <Image
                className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 min-h-[1rem]"
                alt=""
                height={20}
                width={20}
                src="/images/icons/properties/bath.svg"
              />
              <div className="self-stretch flex-1 relative leading-[1rem] flex items-center">
                2
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.5rem]">
              <Image
                className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 min-h-[1rem]"
                alt=""
                height={20}
                width={20}
                src="/images/icons/properties/ruler-area.svg"
              />
              <div className="h-[1rem] w-[3.5rem] relative leading-[1rem] flex items-center">
                <span className="w-full">
                  1000 m<sup>2</sup>
                </span>
              </div>
            </div>
            <div className="self-stretch w-[4.25rem] flex flex-row items-center justify-start gap-[0.5rem]">
              <Image
                className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 min-h-[1rem]"
                alt=""
                height={20}
                width={20}
                src="/images/icons/properties/prop-type.svg"
              />
              <div className="self-stretch flex-1 relative leading-[1rem] flex items-center">
                Condo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
