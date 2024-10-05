import { Key } from "react";
import NewsLetter from "@/components/common/banners/news-letter-card";
import CategoryCard from "./category-card";

const mock_cats = [
  "House",
  "Apartment",
  "Land",
  "Pre-Construction",
  "Commercial",
].map((m, i) => ({
  img: `/images/categories/${m.toLocaleLowerCase()}.png`,
  label: m,
}));

export type CategoriesListType = {
  className?: string;
  containerClassName?: string;
  categories: {
    label: string;
    img: string;
    url: string;
  }[];
};

export default function CategoriesList({
  className = "",
  containerClassName,
  categories,
}: CategoriesListType) {
  return (
    <section
      id="categories"
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[1rem] pl-[0rem] pr-[1rem] box-border max-w-full ${containerClassName}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[13.25rem] max-w-[105%] shrink-0">
        <div
          className={`self-stretch flex flex-col items-start justify-start py-spacing-section-section-vertical-padding pl-spacing-section-section-horizontal-padding pr-[0rem] box-border gap-spacing-section-section-vertical-padding max-w-full text-left text-[2rem] text-content-base-main font-text-md-regular ${className}`}
        >
          <div className="self-stretch flex flex-row items-end justify-center py-[0rem] pl-[0rem] pr-[1rem] box-border max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.03em] leading-[2.5rem] font-medium font-[inherit] inline-block max-w-full">
              Categories
            </h1>
          </div>
          <div className="h-[25rem] md:flex-wrap md:h-full md:w-full md:justify-evenly 2xl:justify-between overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-spacing-container-md max-w-full text-[1.25rem] text-colors-background-bg-primary">
            {categories.map(
              (
                cat: {
                  label: string;
                  img: string;
                  url: string;
                },
                i,
              ) => (
                <CategoryCard
                  key={i}
                  className="md:w-[360px] md:h-[400px]"
                  imgUrl={cat.img}
                  label={cat.label}
                  link={cat.url}
                />
              ),
            )}
            <NewsLetter
              heading="Join Newsletter to stay updated"
              buttonText="Subscribe"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
