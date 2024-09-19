"use client";

import Image from "next/image";
import Link from "next/link";

export default function BackToLink({
  slug,
  label,
}: {
  slug: string;
  label: string;
}) {
  return (
    <div className="flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem] gap-[0.25rem]">
      <Image
        className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
        loading="lazy"
        alt="go to previous page arrow"
        width={50}
        height={50}
        src="/images/icons/down-arrow.svg"
      />
      <Link
        href={slug}
        className="relative leading-[1.25rem] inline-block min-w-[5.875rem] "
      >
        Back to {label}
      </Link>
    </div>
  );
}
