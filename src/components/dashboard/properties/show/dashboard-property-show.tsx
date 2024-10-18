import { BedDouble, Bath, Maximize, MapPin, ArrowLeft } from "lucide-react";
import PropertyImageGallery from "./sections/property-image-gallery-section";
import CollapsibleSection from "./sections/collapsible-section";
import TextSection from "./sections/text-section";
import TableSection from "./sections/table-section";
import ListSection from "./sections/list-section";
import HeadingSubheadingSection from "./sections/heading-subheading-section";
import PropertyShowToolbar from "./property-show-toolbar";

const roomData = [
  {
    "Room Name": "Living Room",
    Length: "14.00",
    Width: "29.00",
    Level: "Main",
  },
  { "Room Name": "Kitchen", Length: "14.00", Width: "29.00", Level: "Main" },
  {
    "Room Name": "Master Bedroom",
    Length: "14.00",
    Width: "29.00",
    Level: "Main",
  },
];

const amenities = [
  { text: "Infinity Pool (25 meters)", icon: BedDouble },
  { text: "Outdoor Spa", icon: BedDouble },
  { text: "Panoramic Ocean View", icon: BedDouble },
  { text: "Terrace (5000 sqft)", icon: BedDouble },
  { text: "Modern Kitchen Appliances", icon: BedDouble },
  { text: "High-Speed Internet", icon: BedDouble },
  { text: "Smart Home System", icon: BedDouble },
  { text: "Home Theater", icon: BedDouble },
  { text: "Fitness Room", icon: BedDouble },
  { text: "Wine Cellar", icon: BedDouble },
];

const images = [
  {
    original: "/property-main.jpg",
    thumbnail: "/property-thumb-1.jpg",
  },
  {
    original: "/property-image-2.jpg",
    thumbnail: "/property-thumb-2.jpg",
  },
  {
    original: "/property-image-3.jpg",
    thumbnail: "/property-thumb-3.jpg",
  },
  {
    original: "/property-image-4.jpg",
    thumbnail: "/property-thumb-4.jpg",
  },
  {
    original: "/property-image-5.jpg",
    thumbnail: "/property-thumb-5.jpg",
  },
  {
    original: "/property-image-6.jpg",
    thumbnail: "/property-thumb-6.jpg",
  },
];

export default function DashboardPropertyShow() {
  return (
    <div className="bg-white text-gray-900 min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 flex items-center text-sm text-gray-600">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to Property</span>
        </div>

        <h1 className="text-3xl font-bold mb-2">$1,234,567</h1>

        <div className="flex flex-wrap items-center space-x-4 mb-2 text-sm">
          <div className="flex items-center">
            <BedDouble className="w-4 h-4 mr-1" />
            <span>2</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>2</span>
          </div>
          <div className="flex items-center">
            <Maximize className="w-4 h-4 mr-1" />
            <span>1000 ft²</span>
          </div>
          <span>Condo</span>
        </div>

        <div className="flex items-center mb-4 text-sm">
          <MapPin className="w-4 h-4 mr-1" />
          <span>Vaughan, Ontario, Canada, L5A4Y5</span>
        </div>

        <div className="lg:flex lg:space-x-4 mb-6">
          <div className="lg:w-2/3 mb-4 lg:mb-0">
            <PropertyImageGallery images={images} />
          </div>
          <PropertyShowToolbar className="lg:hidden" />
        </div>

        <div className="lg:flex lg:space-x-8">
          <div className="lg:w-2/3">
            <div className="space-y-4">
              <CollapsibleSection title="Description">
                <TextSection text="Passambhati Villa is our exclusive villa at Cape Shark. The spacious villa of about 3000 sqft built in contemporary Thai style, is located at the very cape on a hillside about 35 metres above sea level. The villa has a 270° panoramic view over the ocean and the two closest bays. The villa has an outstanding infinity pool of 25 meters as well as outdoor spas and terraces of 5000 sqft. Passambhati Villa is the perfect hide-away, if you want an extraordinary and relaxing stay on Koh Tao." />
              </CollapsibleSection>

              <CollapsibleSection title="Room">
                <TableSection data={roomData} />
              </CollapsibleSection>

              <CollapsibleSection title="Details">
                <TextSection
                  text="Property Type: Villa
                        Year Built: 2020
                        Total Square Footage: 3000 sqft
                        Lot Size: 5000 sqft
                        Bedrooms: 2
                        Bathrooms: 2
                        Parking: 2 Car Garage
                        Heating: Central
                        Cooling: Central Air"
                />
              </CollapsibleSection>

              <CollapsibleSection title="Amenities">
                <ListSection items={amenities} />
              </CollapsibleSection>

              <CollapsibleSection title="Contact Information">
                <HeadingSubheadingSection
                  heading="Listing Date"
                  subheading="September 8, 2024"
                />
                <HeadingSubheadingSection
                  heading="Original List Price"
                  subheading="$1,035,000"
                />
                <HeadingSubheadingSection heading="Auction" subheading="No" />
                <HeadingSubheadingSection
                  heading="Current Price"
                  subheading="$1,035,000"
                />
                <HeadingSubheadingSection
                  heading="List Price/Sq.Ft."
                  subheading="311.37"
                />
                <HeadingSubheadingSection
                  heading="Negotiable Seller Concessions YN"
                  subheading="Yes"
                />
              </CollapsibleSection>
            </div>
          </div>

          <PropertyShowToolbar />
        </div>
      </div>
    </div>
  );
}
