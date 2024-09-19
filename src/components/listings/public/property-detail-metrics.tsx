import Image from "next/image";

interface PropertyDetailMetricsProps {
  details: {
    icon: string;
    alt: string;
    text: string;
  }[];
}

const PropertyDetailMetrics = ({ details }: PropertyDetailMetricsProps) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-spacing-container-md text-[1rem] text-content-base-main">
      {details.map((detail, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-start py-[0rem] pl-[0rem] pr-[1.25rem] gap-[0.687rem]"
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
  );
};

export default PropertyDetailMetrics;
