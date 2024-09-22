"use client";
import { useState } from "react";

export default function NewsLetterCard({
  heading = "",
  buttonText = "",
}: {
  heading: string;
  buttonText: string;
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    alert(`Form submitted with email:", ${email}`);
    setEmail("");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="self-stretch w-[20rem] rounded-lg bg-primary overflow-hidden shrink-0 flex flex-col items-center justify-center py-[6.625rem] px-spacing-container-xs box-border gap-[0.5rem] text-center text-[1.5rem] text-content-inverted-main md:w-[360px] 2xl:grow"
    >
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[1.5rem] 2xl:gap-[1rem] 2xl:w-[500px] 2xl:mx-auto">
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[0.75rem]">
          <h2 className="m-0 self-stretch flex-1 relative text-inherit tracking-[-0.02em] leading-[2rem] font-medium font-[inherit]">
            {heading}
          </h2>
        </div>
        <div
          className={`self-stretch h-[2.75rem] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-rounded-lg bg-colors-background-bg-primary   border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.75rem] px-[0.687rem] gap-[0.5rem] text-left text-[1rem] text-input-text-placeholder ${error ? "border-4 border-red-500" : "border-[1px]"}`}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="self-stretch flex-1 relative leading-[1.25rem] overflow-hidden text-ellipsis whitespace-nowrap p-2 border-none"
          />
        </div>
        {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
        <button
          type="submit"
          className="self-stretch h-[3rem] rounded-lg bg-darkolivegreen flex flex-row items-center justify-center py-[0.75rem] px-[1.25rem] box-border text-left text-[1.25rem] text-colors-background-bg-primary"
        >
          <h3 className="m-0 self-stretch w-[6rem] relative text-inherit font-normal font-[inherit] inline-block">
            {buttonText}
          </h3>
        </button>
      </div>
    </form>
  );
}
