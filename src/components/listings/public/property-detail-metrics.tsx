import Image from "next/image";

interface PropertyDetailMetricsProps {
  details: {
    icon: string;
    alt: string;
    text: string;
  }[];
}

const PropertyDetailMetrics = ({ details }: PropertyDetailMetricsProps) => {
  const address = details.find((d: any) => d.alt === "location");
  const restOfMetrics = details.filter((d: any) => d.alt !== "location");

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-spacing-container-md text-[1rem] text-content-base-main">
      <div className="flex flex-row items-center justify-start py-[0rem] pl-[0rem] pr-[1.25rem] gap-[0.687rem]">
        <Image
          className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
          loading="eager"
          width={50}
          height={50}
          //@ts-ignore
          alt={address.alt}
          //@ts-ignore
          src={address.icon}
        />
        {/* @ts-ignore */}
        <div className="relative leading-[1.25rem]">{address.text}</div>
      </div>

      <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-x-[1rem] gap-y-[0.75rem] min-h-[3.5rem]">
        {restOfMetrics.map((detail, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-start py-[0rem] pl-[0rem] pr-[1.25rem] gap-[0.687rem] w-[40%] lg:w-auto"
          >
            <Image
              className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
              loading="eager"
              width={50}
              height={50}
              alt={detail.alt}
              src={detail.icon}
            />
            <div className="relative leading-[1.25rem]">{detail.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyDetailMetrics;
