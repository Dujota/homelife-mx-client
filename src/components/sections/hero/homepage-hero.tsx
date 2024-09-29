import HomepageSearch from "@/components/forms/search/homepage-search";

export type HomepageHeroBannerType = {
  className?: string;
};

const HomepageHeroBanner = ({ className = "" }: HomepageHeroBannerType) => {
  return (
    <section className={`relative w-full ${className}`}>
      <div className="absolute inset-0 bg-[url('/images/homepage-hero.png')] bg-cover bg-center bg-no-repeat" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight leading-tight mb-8">
          <span className="block">Find the right home</span>
          <span className="block">at the right price</span>
        </h1>
        <div className="w-full max-w-2xl">
          <HomepageSearch />
        </div>
      </div>
    </section>
    // <section
    //   className={`self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3rem] box-border gap-[1rem] max-w-full text-left text-[2.5rem] text-colors-background-bg-primary font-text-md-regular ${className}`}
    // >
    //   <div className="self-stretch flex flex-col items-start justify-start bg-[url('/images/homepage-hero.png')] bg-cover bg-no-repeat bg-[top]">
    //     <div className="self-stretch flex flex-col items-center justify-center py-[12.625rem] px-spacing-section-section-horizontal-padding gap-spacing-section-section-vertical-padding">
    //       <h1 className="m-0 relative text-inherit tracking-[-0.03em] leading-[3rem] font-medium font-[inherit] md:flex">
    //         <p className="m-0 md:mr-2">Find the right home</p>
    //         <p className="m-0">at the right price</p>
    //       </h1>
    //       <HomepageSearch />
    //     </div>
    //   </div>
    // </section>
  );
};

export default HomepageHeroBanner;
