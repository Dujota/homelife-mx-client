export default function ContactAgent({
  title,
  time,
  buttonText,
}: {
  title: string;
  time?: string;
  buttonText: string;
}) {
  return (
    <div className="contact-agent lg:min-w-[400px] self-stretch rounded-lg bg-colors-background-bg-primary border-input-border-light-main border-[1px] border-solid flex flex-col items-start justify-start py-[0.625rem] px-[0.687rem] gap-spacing-container-sm text-center text-colors-background-bg-primary lg:justify-center sm:mx-auto sm:w-[80%]">
      <div className="self-stretch rounded-lg bg-primary flex flex-col items-start justify-start py-spacing-container-sm px-spacing-container-md gap-[0.25rem]">
        <div className="self-stretch relative">{title}</div>
        {time && (
          <div className="self-stretch relative text-[0.875rem] leading-[1.125rem] whitespace-nowrap">
            {time}
          </div>
        )}
      </div>
      <button className="cursor-pointer border-primary border-[1px] border-solid py-[0.625rem] px-[1.25rem] bg-[transparent] self-stretch rounded-lg flex flex-row items-start justify-center whitespace-nowrap">
        <div className="w-[8.625rem] relative text-[1.25rem] font-text-md-regular text-primary text-center inline-block">
          {buttonText}
        </div>
      </button>
    </div>
  );
}
