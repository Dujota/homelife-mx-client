import Image from "next/image";

export type CardSlider = {
  children: React.ReactNode;
  containerClassName?: string;
  slidesWrapperClassName?: string;
  title?: string;
  showButtons?: boolean | undefined;
};

function SliderButton({ direction }: { direction: "left" | "right" }) {
  return (
    <button className="h-[2.5rem] w-[2.5rem] rounded-3xl border-input-border-light-main border-[1px] border-solid box-border flex flex-row items-center justify-start py-[0.5rem] px-[0.437rem] focus:border-content-base-base">
      <Image
        className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
        alt=""
        src={direction === "left" ? "/arrowleft.svg" : "/arrowright.svg"}
      />
    </button>
  );
}

function SliderActions() {
  return (
    <div className="hidden flex-row items-center justify-start gap-[1rem]">
      <SliderButton direction="left" />
      <SliderButton direction="right" />
    </div>
  );
}

const CardSlider = ({
  containerClassName = "",
  slidesWrapperClassName = "",
  children,
  title,
  showButtons,
}: CardSlider) => {
  return (
    <>
      {showButtons && <SliderActions />}
      <section
        className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[1rem] pb-[2rem] box-border max-w-full text-left text-[2rem] text-content-base-main font-text-md-regular ${containerClassName}`}
      >
        <div className="flex-1 flex flex-col items-start justify-start gap-[2rem] max-w-full">
          {title && (
            <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.03em] leading-[2.5rem] font-medium font-[inherit]">
              {title}
            </h2>
          )}

          <div
            className={`overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-spacing-container-md max-w-full text-[1.25rem] ${slidesWrapperClassName}`}
          >
            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export default CardSlider;
