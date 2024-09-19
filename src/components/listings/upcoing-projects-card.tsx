import type { NextPage } from "next";
import Image from "next/image";

export type UpcomingProjectsCard = {
  className?: string;
  imgUrl: string;
  label?: string;
  date?: string;
};

const UpcomingProjectsCard: NextPage<UpcomingProjectsCard> = ({
  className = "",
  imgUrl,
  label,
  date,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[20rem] max-w-[20.125rem] text-left text-[1.125rem] text-content-base-main font-text-md-regular ${className}`}
    >
      <Image
        className="self-stretch relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
        loading="eager"
        alt={`Upcoming Project: ${label}`}
        src={imgUrl}
        width={320}
        height={320}
      />
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
          <div className="self-stretch relative leading-[1.375rem] font-medium">
            {label}
          </div>
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start text-[0.875rem] text-content-base-base">
            <div className="flex-1 flex flex-row items-center justify-start py-[0rem] pl-[0rem] pr-[10.937rem] gap-[0.437rem]">
              <Image
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                alt={`Date of Project ${date}`}
                src="/images/icons/calendarcheck.svg"
                width={50}
                height={50}
              />
              <div className="h-[1rem] relative leading-[1rem] flex items-center">
                {date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingProjectsCard;
