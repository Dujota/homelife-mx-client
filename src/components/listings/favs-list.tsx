import GridListingCard from "./cards/grid-listing-card";

const FavsWatchList = ({ listings }: { listings: any[] }) => {
  return (
    <section className="flex-1 overflow-hidden flex flex-col items-center justify-start gap-spacing-container-lg max-w-full text-left text-[1.25rem] text-content-base-main font-text-md-regular sm:flex-wrap sm:flex-row sm:justify-evenly">
      {listings.length &&
        listings.map((property, i) => (
          <GridListingCard
            slug={property.id}
            key={i}
            price={property.attributes.property.price}
            address="Vaughan, Ontario, Canada, L5A4Y5"
            bedrooms={property.attributes.property.number_of_bedrooms}
            bathrooms={property.attributes.property.number_of_bathrooms}
            size={
              property.attributes.property.living_space_square_meters ||
              property.attributes.property.lot_size
            }
            propertyType={property.attributes.property_type}
            isFavorite={property.attributes.is_favorite}
            currency={property.attributes.currency}
            imageUrl="/temp/TEST_IMAGE_DELETE.png"
          />
        ))}

      {/* DELETE BELOW */}
      {listings.length &&
        listings.map((property, i) => (
          <GridListingCard
            slug={property.id}
            key={i}
            price={property.attributes.property.price}
            address="Vaughan, Ontario, Canada, L5A4Y5"
            bedrooms={property.attributes.property.number_of_bedrooms}
            bathrooms={property.attributes.property.number_of_bathrooms}
            size={
              property.attributes.property.living_space_square_meters ||
              property.attributes.property.lot_size
            }
            propertyType={property.attributes.property_type}
            isFavorite={property.attributes.is_favorite}
            currency={property.attributes.currency}
            imageUrl="/temp/TEST_IMAGE_DELETE.png"
          />
        ))}
      {listings.length &&
        listings.map((property, i) => (
          <GridListingCard
            slug={property.id}
            key={i}
            price={property.attributes.property.price}
            address="Vaughan, Ontario, Canada, L5A4Y5"
            bedrooms={property.attributes.property.number_of_bedrooms}
            bathrooms={property.attributes.property.number_of_bathrooms}
            size={
              property.attributes.property.living_space_square_meters ||
              property.attributes.property.lot_size
            }
            propertyType={property.attributes.property_type}
            isFavorite={property.attributes.is_favorite}
            currency={property.attributes.currency}
            imageUrl="/temp/TEST_IMAGE_DELETE.png"
          />
        ))}
      {listings.length &&
        listings.map((property, i) => (
          <GridListingCard
            slug={property.id}
            key={i}
            price={property.attributes.property.price}
            address="Vaughan, Ontario, Canada, L5A4Y5"
            bedrooms={property.attributes.property.number_of_bedrooms}
            bathrooms={property.attributes.property.number_of_bathrooms}
            size={
              property.attributes.property.living_space_square_meters ||
              property.attributes.property.lot_size
            }
            propertyType={property.attributes.property_type}
            isFavorite={property.attributes.is_favorite}
            currency={property.attributes.currency}
            imageUrl="/temp/TEST_IMAGE_DELETE.png"
          />
        ))}
      {listings.length &&
        listings.map((property, i) => (
          <GridListingCard
            slug={property.id}
            key={i}
            price={property.attributes.property.price}
            address="Vaughan, Ontario, Canada, L5A4Y5"
            bedrooms={property.attributes.property.number_of_bedrooms}
            bathrooms={property.attributes.property.number_of_bathrooms}
            size={
              property.attributes.property.living_space_square_meters ||
              property.attributes.property.lot_size
            }
            propertyType={property.attributes.property_type}
            isFavorite={property.attributes.is_favorite}
            currency={property.attributes.currency}
            imageUrl="/temp/TEST_IMAGE_DELETE.png"
          />
        ))}
    </section>
  );
};

export default FavsWatchList;
