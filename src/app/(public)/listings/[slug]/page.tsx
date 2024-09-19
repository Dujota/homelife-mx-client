import BackToLink from "@/components/common/buttons/back-to-link";
import ContactAgent from "@/components/listings/public/contact-agent";
import DescriptionCard from "@/components/listings/public/description-card";
import PropertyDetailMetrics from "@/components/listings/public/property-detail-metrics";
import { getOneListingPublicAPIV1 } from "@/lib/models/listings/queries";
import { type ListingResponse } from "@/types/api/listings";

const propertyDetailMetricsMock = [
  {
    icon: "/images/icons/properties/bed.svg",
    alt: "location icon",
    text: "Vaughan, Ontario, Canada, L5A4Y5",
  },
  {
    icon: "/images/icons/properties/bed.svg",
    alt: "bed icon",
    text: "2 Beds",
  },
  {
    icon: "/images/icons/properties/bath.svg",
    alt: "bath icon",
    text: "2 Baths",
  },
  {
    icon: "/images/icons/properties/ruler-area.svg",
    alt: "size icon",
    text: "1000 sqm²",
  },
  {
    icon: "/images/icons/properties/prop-type.svg",
    alt: "property type icon",
    text: "Apartment",
  },
];

const mockTourRequestProps = {
  title: "Request a Tour",
  // time: "as early as today at 11:30 am",
  buttonText: "Contact Agent",
};

const mockDescriptionProps = {
  title: "Description",
  content: `
    Passambhati Villa is our exclusive villa at Cape Shark.
    The spacious villa of about 3000 sqft built in contemporary Thai style,
    is located at the very cape on a hillside about 35 metres above sea level.
    The villa has a 270° panoramic view over the ocean and the two closest bays.
    The villa has an outstanding infinity pool of 25 meters as well as outdoor salas
    and terraces of 5000 sqft. Passambhati Villa is the perfect hide-away, if you want
    an extraordinary and relaxing stay on Koh Tao. Use the laundry room by yourself!
  `,
  showMoreText: "Show More",
  showLessText: "Show Less",
};

export default async function PublicListingPage({
  params,
}: {
  params: { slug: string };
}) {
  const res: ListingResponse = await getOneListingPublicAPIV1(params.slug);
  const listing = res.data;

  return (
    <div className=" relative bg-colors-background-bg-primary overflow-hidden flex flex-col items-start justify-start gap-[4.5rem] leading-[normal] tracking-[normal] text-center text-[1.25rem] text-primary font-text-md-regular">
      <main className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full">
        <section className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border max-w-full text-left text-[1rem] text-content-base-base font-text-md-regular">
          <div className="flex-1 flex flex-row items-start justify-start max-w-full">
            {/* Metrics */}
            <div className="flex-1 flex flex-col items-start justify-start gap-[2.5rem] max-w-full">
              <BackToLink slug="/listings" label="Listings" />

              <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full text-[1.25rem] text-content-base-main">
                <PropertyDetailMetrics details={propertyDetailMetricsMock} />
              </div>

              <ContactAgent
                title={mockTourRequestProps.title}
                // time={mockTourRequestProps.time}
                buttonText={mockTourRequestProps.buttonText}
              />

              <DescriptionCard
                title={mockDescriptionProps.title}
                content={mockDescriptionProps.content}
                showMoreText={mockDescriptionProps.showMoreText}
                showLessText={mockDescriptionProps.showLessText}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// <div>
//   Listing Page
//   <h1>{params.slug}</h1>
//   <div>
//     <h1>{listing.attributes.property.description}</h1>
//     <p>Price: {listing.attributes.property.price}</p>
//     <p>Status: {listing.attributes.status.name}</p>
//     <p>Listing Type: {listing.attributes.listing_type.name}</p>
//     <p>Address: {listing.attributes.property.address_id}</p>
//     <p>Broker: {listing.attributes.broker.company_name}</p>
//   </div>
// </div>
