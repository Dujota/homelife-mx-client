import type { NextPage } from "next";
import Image from "next/image";

export type AboutUsType = {
  className?: string;

  title: string;
  description: string;
  stats: { number: string; label: string }[];
  imageSrc: string;
};

const AboutUs: NextPage<AboutUsType> = ({
  className = "",
  title,
  description,
  stats,
  imageSrc,
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2rem] box-border gap-[1rem] max-w-full text-left text-[2rem] text-content-base-main font-text-md-regular ${className}`}
    >
      <div className="self-stretch bg-colors-background-bg-primary overflow-hidden flex flex-col items-start justify-center py-spacing-section-section-vertical-padding px-spacing-section-section-horizontal-padding gap-spacing-section-section-horizontal-padding lg:flex-row">
        <div className="self-stretch flex flex-col items-start justify-start gap-spacing-container-lg">
          <div className="self-stretch flex flex-col items-start justify-start gap-spacing-container-xs">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.03em] leading-[2.5rem] font-medium font-[inherit]">
              {title}
            </h1>
            <div className="self-stretch relative text-[1rem] leading-[1.5rem] text-content-base-base">
              {description}
            </div>
          </div>
          <div className="self-stretch rounded-radius-2xl flex flex-row items-start justify-start flex-wrap content-start gap-x-[1rem] gap-y-[0.75rem] min-h-[9.5rem]">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-start justify-start gap-spacing-container-xxs1 min-w-[9rem] xs:min-w-[13.5rem] sm:min-w-[14.5rem] md:min-w-[20rem] lg:min-w-[15rem] 2xl:min-w-[19rem]"
              >
                <div className="self-stretch relative tracking-[-0.03em] leading-[2.5rem] font-medium">
                  {stat.number}
                </div>
                <div className="self-stretch relative text-[1rem] leading-[1.25rem]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image
          className="self-stretch relative rounded-lg w-full overflow-hidden max-h-full object-cover 2xl:w-[75%]"
          loading="eager"
          width={1200}
          height={400}
          alt="About Us Image"
          src={imageSrc}
        />
      </div>
      {/* ADVERTISEMENT */}
      {/* <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border max-w-full">
        <textarea
          className="[border:none] bg-darkgray-100 h-[11.25rem] w-auto [outline:none] flex-1 max-w-full"
          rows={9}
          cols={18}
        />
      </div> */}
    </section>
  );
};

export default AboutUs;
