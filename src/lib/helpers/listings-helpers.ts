interface PropertyDetailMetric {
  icon: string;
  alt: string;
  text: string;
}

export const generateAddressText = (address: any): string => {
  if (!address) return "Contact Agent";

  // Create a list of address components in priority order
  const components = [
    address.house_number,
    address.street,
    address.neighborhood,
    address.municipality,
    address.city,
    address.state,
    address.postal_code,
  ];

  // Filter out any undefined or null components
  const validComponents = components.filter((component) => component);

  // Join valid components with commas
  const addressText = validComponents.join(", ");

  // If no valid components, return "Contact Agent"
  return addressText || "Contact Agent";
};

// Usage

export const generatePropertyDetailMetrics = (
  property: any,
): PropertyDetailMetric[] => {
  return [
    {
      icon: "/images/icons/properties/location.svg",
      alt: "location",
      text: generateAddressText(property.address),
    },
    {
      icon: "/images/icons/properties/bed.svg",
      alt: "bed",
      text: property.number_of_bedrooms
        ? `${property.number_of_bedrooms} Beds`
        : "N/A",
    },
    {
      icon: "/images/icons/properties/bath.svg",
      alt: "bath",
      text: property.number_of_bathrooms
        ? `${property.number_of_bathrooms} Baths`
        : "N/A",
    },
    {
      icon: "/images/icons/properties/ruler-area.svg",
      alt: "size",
      text: property.living_space_square_meters
        ? `${property.living_space_square_meters} sqm²`
        : "N/A",
    },
    {
      icon: "/images/icons/properties/prop-type.svg",
      alt: "property type",
      text: property.property_type.label || "N/A",
    },
  ];
};
