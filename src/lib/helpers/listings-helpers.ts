import { formatMXN } from "./price-helpers";
import { capitalizeEveryWord } from "./string-helpers";

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
      text:
        property.living_space_square_meters ||
        property.lot_size ||
        property.size_of_land ||
        property.square_footage_of_building
          ? `${
              property.living_space_square_meters ||
              property.lot_size ||
              property.size_of_land ||
              property.square_footage_of_building
            } sqm²`
          : "N/A",
    },
    {
      icon: "/images/icons/properties/prop-type.svg",
      alt: "property type",
      text: property.property_type.label || "N/A",
    },
    {
      icon: "/images/icons/properties/prop-type.svg",
      alt: "property type",
      text: property.status.label || "N/A",
    },
    {
      icon: "/images/icons/properties/prop-type.svg",
      alt: "property type",
      text: property.mls_number || "N/A",
    },
  ].filter((item) => item.text !== "N/A");
};

export const mapAmenitiesToItems = (
  amenities: Array<{
    name: string;
    label: string;
    label_spanish?: string;
  }>,
) => {
  // Define a list of icon paths to be used for amenities
  const icons = [
    "/images/icons/properties/image.svg",
    "/images/icons/properties/sunset.svg",
    "/images/icons/properties/wifi.svg",
    "/images/icons/properties/car.svg",
    "/images/icons/properties/kitchen.svg",
    "/images/icons/properties/office.svg",
    "/images/icons/properties/alarm.svg",
  ];

  // Map the amenities data to match the required shape
  const items = amenities.map((amenity, index) => ({
    icon: icons[index % icons.length], // Repeat icons cyclically
    label: amenity.label, // Use the English label
    value: amenity.label, // Set value to English label (or customize as needed)
  }));

  return items;
};

export const mapPropertyToDetails = (property: any) => {
  // Define static icons for each label
  const icons = {
    beds: "/images/icons/properties/bed.svg",
    baths: "/images/icons/properties/bath.svg",
    size: "/images/icons/properties/ruler-area.svg",
    type: "/images/icons/properties/prop-type.svg",
    year: "/images/icons/properties/calendar.svg",
    appraisal: "/images/icons/properties/apraisal.svg",
    lot_size: "/images/icons/properties/ruler-area.svg",
  };

  // // Map the property data to the format expected by the component
  const items = [
    {
      icon: icons.beds,
      label: "Beds",
      value: property.number_of_bedrooms
        ? `${property.number_of_bedrooms} Beds`
        : "N/A",
    },
    {
      icon: icons.beds,
      label: "Living Rooms",
      value: property.number_of_living_rooms
        ? `${property.number_of_living_rooms} Living Rooms`
        : "N/A",
    },
    {
      icon: icons.baths,
      label: "Baths",
      value: property.number_of_bathrooms
        ? `${property.number_of_bathrooms} Full Baths`
        : "N/A",
    },
    {
      icon: icons.baths,
      label: "Half Baths",
      value: property.half_bathrooms
        ? `${property.half_bathrooms} Half Baths`
        : "N/A",
    },
    {
      icon: icons.size,
      label: "Living Space",
      value: property.living_space_square_meters
        ? `${property.living_space_square_meters}m² Living Space`
        : "N/A",
    },
    {
      icon: icons.baths,
      label: "Laundry Room",
      value: property.laundry_room
        ? `Laundry Room: ${property.laundry_room}`
        : "N/A",
    },
    {
      icon: icons.baths,
      label: "Service Room with Bathroom",
      value: property.service_room_with_bathroom
        ? `Service Room with Bathroom: ${property.service_room_with_bathroom}`
        : "N/A",
    },
    {
      icon: icons.size,
      label: "Land Size",
      value: property.size_of_land
        ? `${property.size_of_land}m² Land Size`
        : "N/A",
    },
    {
      icon: icons.size,
      label: "Lot Size",
      value: property.lot_size ? `${property.lot_size}m² Lot Size` : "N/A",
    },
    {
      icon: icons.size,
      label: "Lot Dimensions",
      value: property.dimensions
        ? `${property.dimensions}m² Lot Dimension`
        : "N/A",
    },
    {
      icon: icons.size,
      label: "Garage Size",
      value: property.garage_size
        ? `${property.garage_size} Parking Spots`
        : "N/A",
    },
    {
      icon: icons.size,
      label: "Electric Meters",
      value: property.number_of_electric_meters
        ? `${property.number_of_electric_meters} Electric Meters`
        : "N/A",
    },
    {
      icon: icons.size,
      label: "Air Conditioners",
      value: property.number_of_airconditioners
        ? `${property.number_of_airconditioners} Air Conditioners`
        : "N/A",
    },
    {
      icon: icons.size,
      label: "Gas Tank Size",
      value: property.gas_tank_size
        ? `Gast tank: ${property.gas_tank_size} L`
        : "N/A",
    },
    {
      icon: icons.size,
      label: "Commercial Space",
      value: property.square_footage_of_building
        ? `${property.square_footage_of_building}m² Comercial Space`
        : "N/A",
    },
    {
      icon: icons.type,
      label: "Property Type",
      value:
        property.property_type.name === "commercial"
          ? property.type_of_business || "Commercial"
          : property.property_type.label || "N/A",
    },
    {
      icon: icons.type,
      label: "Zoning",
      value: property.zoning
        ? `${capitalizeEveryWord(property.zoning)} Zoning`
        : "N/A",
    },
    {
      icon: icons.type,
      label: "Topography",
      value: property.topography ? `${property.topography}` : "N/A",
    },
    {
      icon: icons.year,
      label: "Year",
      value: property.year_built ? `Built in ${property.year_built}` : "N/A",
    },
    {
      icon: icons.appraisal,
      label: "Appraisal",
      value: property.appraisal_available
        ? "Appraisal Available"
        : "No Appraisal",
    },
    // NEW FIELDS
    {
      icon: icons.type,
      label: "Access to Utilities",
      value: property.access_to_utilities ? `Access to Utilities` : "N/A",
    },
    {
      icon: icons.type,
      label: "Existing structures",
      value: property.existing_structures
        ? `Existing Structures: ${capitalizeEveryWord(property.existing_structures)}`
        : "N/A",
    },
    {
      icon: icons.type,
      label: "Rental Income",
      value: property.rental_income
        ? `${formatMXN(property.rental_income)} Rental Income`
        : "N/A",
    },
    {
      icon: icons.type,
      label: " Commercial Lease Terms",
      value: property.commercial_lease_terms
        ? `Lease Terms: ${property.commercial_lease_terms}`
        : "N/A",
    },
    {
      icon: icons.type,
      label: "Development Name",
      value: property.development_name
        ? `Developer: ${property.development_name}`
        : "N/A",
    },
    {
      icon: icons.type,
      label: "Developer Contact",
      value: property.developer_contact
        ? `Developer Contact: ${property.developer_contact}`
        : "N/A",
    },
    {
      icon: icons.type,
      label: "Type",
      value: property.topography ? `Topography ${property.topography}` : "N/A",
    },
    {
      icon: icons.type,
      label: "Cadastral Number",
      value: property.cadastral_number
        ? `Cadastral No. ${property.cadastral_number}`
        : "N/A",
    },
    {
      icon: icons.type,
      label: "Proof of Ownership",
      value: property.proof_of_ownership
        ? `${property.proof_of_ownership}`
        : "N/A",
    },
    {
      icon: icons.type,
      label: "Taxes Paid?",
      value: property.property_taxes
        ? `Taxes Paid: ${property.property_taxes}`
        : "N/A",
    },
    {
      icon: icons.type,
      label: "HOA Paid?",
      value: property.maintenance_fees_paid
        ? `HOA Paid: ${property.maintenance_fees_paid}`
        : "N/A",
    },
    {
      icon: icons.type,
      label: "Plans",
      value: property.plans ? `Plans: ${property.plans}` : "N/A",
    },
    {
      icon: icons.type,
      label: "Rendering Available",
      value: property.rendering_available
        ? `Rendering Available: ${property.rendering_available}`
        : "N/A",
    },
    {
      icon: icons.type,
      label: "Completion Date",
      value: property.estimated_completion_date
        ? `Completion Date: ${property.estimated_completion_date}`
        : "N/A",
    },
    {
      icon: icons.type,
      label: "Min Price",
      value: property.min_price ? `Min Price: ${property.min_price}` : "N/A",
    },
    {
      icon: icons.type,
      label: "Max Price",
      value: property.max_price ? `${property.max_price}` : "N/A",
    },
    {
      icon: icons.type,
      label: "Type",
      value: property.deposit_structure
        ? `Deposit Structure: ${property.deposit_structure}`
        : "N/A",
    },
    {
      icon: icons.type,
      label: "Incentives",
      value: property.incentives ? `Incentives: ${property.incentives}` : "N/A",
    },
    {
      icon: icons.type,
      label: "Cornert Lot",
      value: property.corner_lot
        ? `Corner lot?: ${property.corner_lot}`
        : "N/A",
    },
    {
      icon: icons.type,
      label: "Condition",
      value: property.general_carpentry_and_paint_condition
        ? `General Condition: ${property.general_carpentry_and_paint_condition}`
        : "N/A",
    },
    {
      icon: icons.type,
      label: "Incentives",
      value: property.incentives ? `Incentives: ${property.incentives}` : "N/A",
    },
    {
      icon: icons.type,
      label: "Incentives",
      value: property.incentives ? `Incentives: ${property.incentives}` : "N/A",
    },
    {
      icon: icons.type,
      label: "Incentives",
      value: property.incentives ? `Incentives: ${property.incentives}` : "N/A",
    },
    {
      icon: icons.type,
      label: "Incentives",
      value: property.incentives ? `Incentives: ${property.incentives}` : "N/A",
    },
    {
      icon: icons.type,
      label: "Incentives",
      value: property.incentives ? `Incentives: ${property.incentives}` : "N/A",
    },
  ].filter((item) => item.value !== "N/A");

  return items;
};
