import BackToLink from "@/components/common/buttons/back-to-link";
import ContactAgent from "@/components/listings/public/contact-agent";
import DescriptionCard from "@/components/listings/public/description-card";
import PropertyDetailCard from "@/components/listings/public/property-detail-card";
import PropertyDetailMetrics from "@/components/listings/public/property-detail-metrics";
import ListingImageGallery from "@/components/sections/image-gallery/listing-image-gallery";
import {
  generatePropertyDetailMetrics,
  mapAmenitiesToItems,
  mapPropertyToDetails,
} from "@/lib/helpers/listings-helpers";
import { formatPrice } from "@/lib/helpers/price-helpers";
import {
  getAllListingsPublicAPIV1,
  getOneListingPublicAPIV1,
} from "@/lib/models/listings/queries";
import { ListingsResponse, type ListingResponse } from "@/types/api/listings";

const mockTourRequestProps = {
  title: "Request a Tour",
  // time: "as early as today at 11:30 am",
  buttonText: "Contact Agent",
};

const descriptionProps = {
  title: "Description",
  showMoreText: "Show More",
  showLessText: "Show Less",
};

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const res: ListingsResponse = await getAllListingsPublicAPIV1();
  const listings = res.data;

  return listings.map((listing: { id: string }) => ({
    slug: String(listing.id),
  }));
}

export default async function PublicListingPage({
  params,
}: {
  params: { slug: string };
}) {
  const res: ListingResponse = await getOneListingPublicAPIV1(params.slug);
  const listing = res.data;

  const {
    property,
    listing_date,
    commission_percentage,
    status,
    listing_type,
    currency,
    property_type,
    broker,
  } = listing.attributes;

  const propertyDetailMetrics = generatePropertyDetailMetrics({
    ...property,
    status,
    listing_date,
  });
  const formattedItems = mapAmenitiesToItems(property.amenities);
  const formattedDetails = mapPropertyToDetails(property);

  return (
    <div className=" relative bg-colors-background-bg-primary overflow-hidden flex flex-col items-start justify-start gap-[4.5rem] leading-[normal] tracking-[normal] text-center text-[1.25rem] text-primary font-text-md-regular mt-[6rem] ">
      <main className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full">
        <section className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border max-w-full text-left text-[1rem] text-content-base-base font-text-md-regular md:max-w-[1100px] mx-auto">
          <div className="flex-1 flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[2.5rem] max-w-full">
              <BackToLink slug="/listings" label="Listings" />
              {/* Image Gallery */}
              <ListingImageGallery listing={listing} />
              <div className="flex-1 flex flex-col items-start justify-start gap-[2.5rem] max-w-full self-stretch lg:flex-row">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-[2rem] text-black">
                  <div className="self-stretch relative tracking-[-0.03em] leading-[2.5rem] font-medium whitespace-nowrap">
                    {`${formatPrice(property.price)} ${currency}`}
                  </div>

                  <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full text-[1.25rem] text-content-base-main">
                    <PropertyDetailMetrics details={propertyDetailMetrics} />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[2.5rem] self-stretch lg:flex-row">
                  <ContactAgent
                    title={mockTourRequestProps.title}
                    // time={mockTourRequestProps.time}
                    buttonText={mockTourRequestProps.buttonText}
                  />
                </div>
              </div>

              <DescriptionCard
                title={descriptionProps.title}
                // content={property.description}
                content={property.description}
                showMoreText={descriptionProps.showMoreText}
                showLessText={descriptionProps.showLessText}
              />

              {/* General Section */}
              <PropertyDetailCard title="Details" items={formattedDetails} />
              {/* PreConstruction Sections*/}
              {/* Commercial Section */}
              {/* Single Family Dwelling Section*/}
              {/* Land Section */}

              {/* Amenities */}
              {property.amenities.length > 0 && (
                <PropertyDetailCard title="Amenities" items={formattedItems} />
              )}

              <ContactAgent
                title={mockTourRequestProps.title}
                // time={mockTourRequestProps.time}
                buttonText={mockTourRequestProps.buttonText}
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
