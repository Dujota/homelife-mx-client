import PageWrapper from "@/components/common/layout/page-wrapper";
import AboutUs from "@/components/sections/about-us";
import CategoriesList from "@/components/sections/categories/category-list";
import ContactUs from "@/components/sections/contact-sections/contact-us";
import FeaturedPropertiesBanner from "@/components/sections/featured-properties-banner";
import HomepageHeroBanner from "@/components/sections/hero/homepage-hero";
import NewsletterBanner from "@/components/sections/newsletter-banner";
import UpcomingProjectsBanner from "@/components/sections/upcoming/upcoming-projects-banner";
import { deriveCateogoriesFromPropertyTypes } from "@/lib/helpers/pages-helpers";

import { getPublicHomepageAPIV1 } from "@/lib/services/pages/queries";
import { PropertyTypeData } from "@/types/api/property-type";

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

const mockContactUsData = {
  title: "Contact",
  text: "In case of a question, you can always contact us",
  info: [
    {
      icon: "/images/icons/mail.svg",
      title: "Email",
      content: "contact@homelife.com",
    },
    {
      icon: "/images/icons/phone.svg",
      title: "Phone",
      content: "+1 (555) 555-5555",
    },
    {
      icon: "/images/icons/location-marker.svg",
      title: "Office Location",
      content: "4517 Washington Ave., Manchester, Kentucky 39495",
    },
  ],
};

// Cache control
export const revalidate = 60;

export default async function Home() {
  const res = await getPublicHomepageAPIV1();

  // Transform property types
  const propertyTypes = deriveCateogoriesFromPropertyTypes(
    res.property_types.data,
  );

  return (
    <PageWrapper>
      <HomepageHeroBanner />
      <FeaturedPropertiesBanner />
      <UpcomingProjectsBanner />
      <CategoriesList
        containerClassName="3xl:mx-auto 3xl:max-w-[1600px]"
        categories={propertyTypes}
      />
      <AboutUs {...aboutUsData} className="3xl:mx-auto 3xl:max-w-[1600px]" />
      <ContactUs
        title={mockContactUsData.title}
        text={mockContactUsData.text}
        info={mockContactUsData.info}
      />
      <NewsletterBanner
        title={mockNewsletterData.title}
        className="2xl:mx-auto 2xl:w-[1600px]"
      />
    </PageWrapper>
  );
}
