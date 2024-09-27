import GridListingCard from "./cards/grid-listing-card";

const FavsWatchList = ({ listings }: { listings: any[] }) => {
  return (
    <section className="flex-1 overflow-hidden flex flex-col items-center justify-start gap-spacing-container-lg max-w-full text-left text-[1.25rem] text-content-base-main font-text-md-regular sm:flex-wrap sm:flex-row sm:justify-evenly 3xl:justify-start">
      {listings.length &&
        listings.map((listing, i) => {
          if (listing.id === 27) console.log(listing);
          return (
            <GridListingCard
              slug={listing.id}
              key={i}
              price={listing.attributes.property.price}
              address="Vaughan, Ontario, Canada, L5A4Y5"
              bedrooms={listing.attributes.property.number_of_bedrooms || 0}
              bathrooms={listing.attributes.property.number_of_bathrooms || 0}
              size={
                listing.attributes.property.living_space_square_meters ||
                listing.attributes.property.lot_size ||
                listing.attributes.property.size_of_land ||
                listing.attributes.property.square_footage_of_building
              }
              propertyType={listing.attributes.property_type}
              isFavorite={listing.attributes.is_favorite}
              currency={listing.attributes.currency}
              imageUrl="/temp/TEST_IMAGE_DELETE.png"
            />
          );
        })}
    </section>
  );
};

export default FavsWatchList;
