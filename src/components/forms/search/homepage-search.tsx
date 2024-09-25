"use client";
import Image from "next/image";
import { useState } from "react";

export default function HomepageSearch() {
  const [term, setTerm] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleFilterClick = () => {
    setToggle(true);
  };

  return (
    <div className="self-stretch rounded-lg bg-colors-background-bg-primary border-r-[1px] border-solid border-b-[1px] border-gainsboro-200 border-l-[1px] flex flex-row items-center justify-start pt-spacing-container-sm px-[0.687rem] pb-[0.625rem] gap-spacing-container-xs sm:w-[640px] sm:self-center">
      <div className="flex-1 flex flex-row items-center justify-start gap-spacing-container-xxs1">
        <Image
          className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
          alt="Search Image"
          width={20}
          height={20}
          src="/images/icons/forms/search.svg"
        />
        <input
          className="w-[calc(100%_-_40px)] [border:none] [outline:none] font-text-md-regular text-[0.813rem] bg-[transparent] h-[1.5rem] flex-1 relative leading-[1.5rem] text-darkgray-200 text-left inline-block min-w-[10rem] p-0"
          placeholder="Search by City, Address, Zip"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <Image
        className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 cursor-pointer"
        width={20}
        height={20}
        alt="Activate Filter Button"
        onClick={handleFilterClick}
        src="/images/icons/forms/filter.svg"
      />
      <Image
        className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 bg-primary cursor-pointer"
        width={20}
        height={20}
        alt="Activate Filter Button"
        onClick={handleFilterClick}
        src="/images/icons/forms/filter.svg"
      />
    </div>
  );
}
