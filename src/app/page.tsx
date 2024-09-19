import PageWrapper from "@/components/common/layout/page-wrapper";
import CategoriesList from "@/components/sections/categories/category-list";
import FeaturedPropertiesBanner from "@/components/sections/featured-properties-banner";
import HomepageHeroBanner from "@/components/sections/hero/homepage-hero";
import UpcomingProjectsBanner from "@/components/sections/upcoming/upcoming-projects-banner";

export default function Home() {
  return (
    <PageWrapper>
      <HomepageHeroBanner />
      <FeaturedPropertiesBanner />
      <UpcomingProjectsBanner />
      <CategoriesList />
    </PageWrapper>
  );
}
