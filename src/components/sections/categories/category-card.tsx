import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

export type CategoryCardType = {
  className?: string;
  imgUrl: string;
  label?: string;
  link: string;
};

const CategoryCard: NextPage<CategoryCardType> = ({
  className = "",
  imgUrl,
  label,
  link,
}) => {
  return (
    <Link href={link || "#"}>
      <div
        className={`self-stretch w-[20rem] rounded-lg overflow-hidden shrink-0 flex flex-row items-end justify-center p-spacing-container-sm box-border relative gap-[0.5rem] bg-[url('/frame-30@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[1.25rem] text-colors-background-bg-primary font-text-md-regular ${className}`}
      >
        <Image
          className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
          loading="eager"
          alt={`Category ${label}`}
          src={imgUrl}
          width={320}
          height={320}
        />
        <div className="flex-1 flex flex-row items-center justify-center z-[1]">
          <h3 className="m-0 flex-1 relative text-inherit tracking-[-0.01em] leading-[1.5rem] font-medium font-[inherit]">
            {label}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
