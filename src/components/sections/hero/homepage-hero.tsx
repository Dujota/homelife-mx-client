import HomepageSearch from "@/components/forms/search/homepage-search";

export type HomepageHeroBannerType = {
  className?: string;
};

const HomepageHeroBanner = ({ className = "" }: HomepageHeroBannerType) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3rem] box-border gap-[1rem] max-w-full text-left text-[2.5rem] text-colors-background-bg-primary font-text-md-regular ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start bg-[url('/images/homepage-hero.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="self-stretch flex flex-col items-center justify-center py-[12.625rem] px-spacing-section-section-horizontal-padding gap-spacing-section-section-vertical-padding">
          <h1 className="m-0 relative text-inherit tracking-[-0.03em] leading-[3rem] font-medium font-[inherit] md:flex">
            <p className="m-0 md:mr-2">Find the right home</p>
            <p className="m-0">at the right price</p>
          </h1>
          <HomepageSearch />
        </div>
      </div>
    </section>
  );
};

export default HomepageHeroBanner;
