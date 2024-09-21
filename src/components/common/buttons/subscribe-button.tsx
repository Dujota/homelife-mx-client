export default function SubscribeButton({
  text = "Subscribe",
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <button
      type="submit"
      className={`cursor-pointer [border:none] py-[0.75rem] px-[1.25rem] bg-darkolivegreen self-stretch rounded-lg flex flex-row items-center justify-center ${className}`}
    >
      <div className="relative text-[1.25rem] font-text-md-regular text-colors-background-bg-primary text-left inline-block min-w-[6rem]">
        {text}
      </div>
    </button>
  );
}
