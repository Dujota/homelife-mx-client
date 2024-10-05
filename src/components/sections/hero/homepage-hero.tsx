import { Suspense } from "react";
import HomepageSearch from "@/components/forms/search/homepage-search";
import InputLoader from "@/components/common/animations/input-loading";

export type HomepageHeroBannerType = {
  className?: string;
};

const HomepageHeroBanner = async ({
  className = "",
}: HomepageHeroBannerType) => {
  return (
    <section className={`relative w-full ${className}`}>
      <div className="absolute inset-0 bg-[url('/images/homepage-hero.png')] bg-cover bg-center bg-no-repeat" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight leading-tight mb-8">
          <span className="block">Find the right home</span>
          <span className="block">at the right price</span>
        </h1>
        <div className="w-full max-w-2xl">
          <Suspense fallback={<InputLoader className="w-full h-12" />}>
            <HomepageSearch />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default HomepageHeroBanner;
