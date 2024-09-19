import Image from "next/image";

interface Detail {
  icon: string;
  label: string;
  value: string;
}

interface PropertyDetailCardProps {
  title: string;
  items: Detail[];
}

const PropertyDetailCard: React.FC<PropertyDetailCardProps> = ({
  title,
  items,
}) => {
  const getFormattedDetail = (label: string, value: string): string => {
    return value;
  };

  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] gap-[1rem]">
      <div className="self-stretch relative tracking-[-0.01em] leading-[1.5rem] font-medium">
        {title}
      </div>
      <div className="flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem] gap-[1rem] text-content-base-base">
        <div className="flex flex-col items-start justify-start gap-[1rem]">
          {items.map((item, index) => (
            <Image
              key={index}
              className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
              loading="lazy"
              width={50}
              height={50}
              alt={`${item.label} Icon`}
              src={item.icon}
            />
          ))}
        </div>

        <div className="flex flex-col items-start justify-start gap-[1rem]">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative leading-[1.5rem] inline-block min-w-[5.313rem]"
            >
              {getFormattedDetail(item.label, item.value)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailCard;
