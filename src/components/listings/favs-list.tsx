import GridListingCard from "./cards/grid-listing-card";

const FavsWatchList = ({ listings }: { listings: any[] }) => {
  return (
    <section className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-spacing-container-lg max-w-full text-left text-[1.25rem] text-content-base-main font-text-md-regular">
      {listings.map((property, i) => (
        <GridListingCard
          slug={property.id}
          key={i}
          price={property.price}
          address="Vaughan, Ontario, Canada, L5A4Y5"
          bedrooms={property.bedrooms}
          bathrooms={property.bathrooms}
          size={property.size}
          propertyType={property.propertyType}
          isFavorite={property.isFavorite}
          currency={property.currency}
          imageUrl="/temp/TEST_IMAGE_DELETE.png"
        />
      ))}
    </section>
  );
};

export default FavsWatchList;
