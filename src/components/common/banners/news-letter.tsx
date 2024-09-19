export default function NewsLetter() {
  return (
    <div className="self-stretch w-[20rem] rounded-lg bg-primary overflow-hidden shrink-0 flex flex-col items-center justify-center py-[6.625rem] px-spacing-container-xs box-border gap-[0.5rem] text-center text-[1.5rem] text-content-inverted-main">
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[1.5rem]">
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[0.75rem]">
          <h2 className="m-0 self-stretch flex-1 relative text-inherit tracking-[-0.02em] leading-[2rem] font-medium font-[inherit]">
            Join Newsletter to stay updated
          </h2>
          <div className="self-stretch relative text-[1rem] tracking-[-0.03em] leading-[1.5rem] font-medium hidden">
            Whether you&aposre a first-time homebuyer, a seasoned investor, or
            looking to sell your property, our team of experienced and
            passionate agents is here to provide exceptional service and
            expertise.
          </div>
        </div>
        <div className="self-stretch h-[2.75rem] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-rounded-lg bg-colors-background-bg-primary border-input-border-light-main border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.75rem] px-[0.687rem] gap-[0.5rem] text-left text-[1rem] text-input-text-placeholder">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start">
            <input
              type="text"
              className="self-stretch flex-1 relative leading-[1.25rem] overflow-hidden text-ellipsis whitespace-nowrap"
            >
              Your Email
            </input>
          </div>
          {/* <img
            className="h-[1rem] w-[1rem] relative hidden"
            alt=""
            src="/icon1.svg"
          /> */}
        </div>
      </div>
      <button className="self-stretch h-[3rem] rounded-lg bg-darkolivegreen flex flex-row items-center justify-center py-[0.75rem] px-[1.25rem] box-border text-left text-[1.25rem] text-colors-background-bg-primary">
        <h3 className="m-0 self-stretch w-[6rem] relative text-inherit font-normal font-[inherit] inline-block">
          Subscribe
        </h3>
      </button>
    </div>
  );
}
