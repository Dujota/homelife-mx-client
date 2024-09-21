import PageWrapper from "@/components/common/layout/page-wrapper";
import AboutUs from "@/components/sections/about-us";
import CategoriesList from "@/components/sections/categories/category-list";
import FeaturedPropertiesBanner from "@/components/sections/featured-properties-banner";
import HomepageHeroBanner from "@/components/sections/hero/homepage-hero";
import NewsletterBanner from "@/components/sections/newsletter-banner";
import UpcomingProjectsBanner from "@/components/sections/upcoming/upcoming-projects-banner";

// MOCKS
const aboutUsData = {
  title: "About Casa Feliz",
  description:
    "Whether you're a first-time homebuyer, a seasoned investor, or looking to sell your property, our team of experienced and passionate agents is here to provide exceptional service and expertise.",
  stats: [
    { number: "400+", label: "Projects completed" },
    { number: "3000+", label: "Developers" },
    { number: "15", label: "Years of work" },
    { number: "15", label: "Years of work" },
  ],
  imageSrc: "/images/about-us.png",
};

const mockNewsletterData = {
  title: "Join Newsletter to stay updated",
  description:
    "Whether you're a first-time homebuyer, a seasoned investor, or looking to sell your property, our team of experienced and passionate agents is here to provide exceptional service and expertise.",
};

export default function Home() {
  return (
    <PageWrapper>
      <HomepageHeroBanner />
      <FeaturedPropertiesBanner />
      <UpcomingProjectsBanner />
      <CategoriesList />
      <AboutUs {...aboutUsData} />
      <NewsletterBanner title={mockNewsletterData.title} />
    </PageWrapper>
  );
}
