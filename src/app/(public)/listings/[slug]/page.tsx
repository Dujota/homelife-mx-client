import BackToLink from "@/components/common/buttons/back-to-link";
import ContactAgent from "@/components/listings/public/contact-agent";
import DescriptionCard from "@/components/listings/public/description-card";
import PropertyDetailCard from "@/components/listings/public/property-detail-card";
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

const mockDetailProps = {
  title: "Details",
  items: [
    {
      icon: "/images/icons/properties/bed.svg",
      label: "Beds",
      value: "2 Beds",
    },
    {
      icon: "/images/icons/properties/bath.svg",
      label: "Baths",
      value: "2 Baths",
    },
    {
      icon: "/images/icons/properties/ruler-area.svg",
      label: "Size",
      value: "100m² living Space",
    },
    {
      icon: "/images/icons/properties/prop-type.svg",
      label: "Type",
      value: "Apartment",
    },
    {
      icon: "/images/icons/properties/calendar.svg",
      label: "Year",
      value: "Built in 2014",
    },
    {
      icon: "/images/icons/properties/apraisal.svg",
      label: "Appraisal",
      value: "Appraisal Available",
    },
    {
      icon: "/images/icons/properties/ruler-area.svg",
      label: "Lot Size",
      value: "100m² lot size",
    },
  ],
};

const mockAmenitiesProps = {
  title: "Amenities",
  items: [
    {
      icon: "/images/icons/properties/image.svg",
      label: "View",
      value: "Bay view",
    },
    {
      icon: "/images/icons/properties/sunset.svg",
      label: "Waterfront",
      value: "Waterfront",
    },
    { icon: "/images/icons/properties/wifi.svg", label: "Wifi", value: "Wifi" },
    {
      icon: "/images/icons/properties/car.svg",
      label: "Parking",
      value: "2 Car Garage",
    },
    {
      icon: "/images/icons/properties/sunset.svg",
      label: "View",
      value: "Beach view",
    },
    {
      icon: "/images/icons/properties/kitchen.svg",
      label: "Kitchen",
      value: "Kitchen",
    },
    {
      icon: "/images/icons/properties/office.svg",
      label: "Workspace",
      value: "Office / Den",
    },
    {
      icon: "/images/icons/properties/alarm.svg",
      label: "Safety",
      value: "24hr Security",
    },
  ],
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

              <PropertyDetailCard
                title={mockDetailProps.title}
                items={mockDetailProps.items}
              />
              <PropertyDetailCard
                title={mockAmenitiesProps.title}
                items={mockAmenitiesProps.items}
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
