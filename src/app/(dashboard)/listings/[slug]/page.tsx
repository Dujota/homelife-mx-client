import Header from "@/components/common/layout/header";
import PageHeader from "@/components/common/layout/page-header";
import PageWrapper from "@/components/common/layout/page-wrapper";
import Pagination from "@/components/pagination";
import Carousel from "@/components/properties/detail-page/carousel";
import PropertyAccess from "@/components/properties/detail-page/property-access";
import PropertyAgentSpotlight from "@/components/properties/detail-page/property-agent-spotlight";
import PropertyAmenities from "@/components/properties/detail-page/property-amenities";
import PropertyDescription from "@/components/properties/detail-page/property-description";
import PropertyDetails from "@/components/properties/detail-page/property-details";
import PropertyList from "@/components/properties/property-list";
import { getAllProperties } from "@/lib/models/properties/queries";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function ListingPage({
  params,
}: {
  params: { slug: string };
}) {
  const session = await auth();

  if (!session?.user) {
    return redirect(`/login?callbackUrl=/listings/${params.slug}`);
  }

  return (
    <>
      <Header />
      <PageHeader
        title="LISTINGS"
        ctaText="+ADD LISTING"
        ctaUrl="/listings/add-listing"
      />
      <PageWrapper className="pb-[1.25rem]">
        <Carousel />
        <PropertyDescription
          title="LISTING DESCRIPTION"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor ullamcorper massa, vitae sodales sem iaculis et. Duis at egestas quam. Praesent convallis libero sapien, ut suscipit tortor tempor in. Quisque sed purus nec urna vehicula porta. Mauris et vestibulum tortor. Aliquam et leo in magna tincidunt vestibulum. Aliquam erat volutpat."
        />
        <PropertyAmenities
          title="AMENITIES"
          content="Prewar, Dishwasher, Pets Accepted: On approval
Washer/Dryer: In Unit"
        />
        <PropertyAccess
          title="ACCESS"
          details="Property Manager John Doe 555.123.4567"
        />
        <PropertyDetails />
        <PropertyAgentSpotlight />
      </PageWrapper>
    </>
  );
}
