import React from "react";

import ListTypeTabSelector from "./list-type-tab-selector";
import AllPropertySearch from "@/components/forms/search/dashboard/property-search/all-property-search";
import PropertyListSort from "@/components/forms/search/dashboard/property-list-sort";

interface Property {
  id: number;
  name: string;
  price: number;
  location: string;
  bedBath: string;
  area: string;
  houseType: string;
  daysListed: number;
  agent: string;
  isPublic: boolean;
}

const properties: Property[] = [
  {
    id: 1,
    name: "Colonial Brooklyn",
    price: 423000,
    location: "Vaughan, Ontario, Canada, L5A4Y5",
    bedBath: "2 Bed, 2 Bath",
    area: "1000 sqm2",
    houseType: "Apartment",
    daysListed: 24,
    agent: "Stacy M.",
    isPublic: false,
  },
  {
    id: 2,
    name: "Another Property",
    price: 500000,
    location: "Toronto, Ontario, Canada, M5A4Y5",
    bedBath: "3 Bed, 2 Bath",
    area: "1500 sqm2",
    houseType: "House",
    daysListed: 10,
    agent: "John D.",
    isPublic: true,
  },
  {
    id: 1,
    name: "Colonial Brooklyn",
    price: 423000,
    location: "Vaughan, Ontario, Canada, L5A4Y5",
    bedBath: "2 Bed, 2 Bath",
    area: "1000 sqm2",
    houseType: "Apartment",
    daysListed: 24,
    agent: "Stacy M.",
    isPublic: false,
  },
  {
    id: 2,
    name: "Another Property",
    price: 500000,
    location: "Toronto, Ontario, Canada, M5A4Y5",
    bedBath: "3 Bed, 2 Bath",
    area: "1500 sqm2",
    houseType: "House",
    daysListed: 10,
    agent: "John D.",
    isPublic: true,
  },
  {
    id: 1,
    name: "Colonial Brooklyn",
    price: 423000,
    location: "Vaughan, Ontario, Canada, L5A4Y5",
    bedBath: "2 Bed, 2 Bath",
    area: "1000 sqm2",
    houseType: "Apartment",
    daysListed: 24,
    agent: "Stacy M.",
    isPublic: false,
  },
  {
    id: 2,
    name: "Another Property",
    price: 500000,
    location: "Toronto, Ontario, Canada, M5A4Y5",
    bedBath: "3 Bed, 2 Bath",
    area: "1500 sqm2",
    houseType: "House",
    daysListed: 10,
    agent: "John D.",
    isPublic: true,
  },
  {
    id: 1,
    name: "Colonial Brooklyn",
    price: 423000,
    location: "Vaughan, Ontario, Canada, L5A4Y5",
    bedBath: "2 Bed, 2 Bath",
    area: "1000 sqm2",
    houseType: "Apartment",
    daysListed: 24,
    agent: "Stacy M.",
    isPublic: false,
  },
  {
    id: 2,
    name: "Another Property",
    price: 500000,
    location: "Toronto, Ontario, Canada, M5A4Y5",
    bedBath: "3 Bed, 2 Bath",
    area: "1500 sqm2",
    houseType: "House",
    daysListed: 10,
    agent: "John D.",
    isPublic: true,
  },
  {
    id: 1,
    name: "Colonial Brooklyn",
    price: 423000,
    location: "Vaughan, Ontario, Canada, L5A4Y5",
    bedBath: "2 Bed, 2 Bath",
    area: "1000 sqm2",
    houseType: "Apartment",
    daysListed: 24,
    agent: "Stacy M.",
    isPublic: false,
  },
  {
    id: 2,
    name: "Another Property",
    price: 500000,
    location: "Toronto, Ontario, Canada, M5A4Y5",
    bedBath: "3 Bed, 2 Bath",
    area: "1500 sqm2",
    houseType: "House",
    daysListed: 10,
    agent: "John D.",
    isPublic: true,
  },
  {
    id: 1,
    name: "Colonial Brooklyn",
    price: 423000,
    location: "Vaughan, Ontario, Canada, L5A4Y5",
    bedBath: "2 Bed, 2 Bath",
    area: "1000 sqm2",
    houseType: "Apartment",
    daysListed: 24,
    agent: "Stacy M.",
    isPublic: false,
  },
  {
    id: 2,
    name: "Another Property",
    price: 500000,
    location: "Toronto, Ontario, Canada, M5A4Y5",
    bedBath: "3 Bed, 2 Bath",
    area: "1500 sqm2",
    houseType: "House",
    daysListed: 10,
    agent: "John D.",
    isPublic: true,
  },
  {
    id: 1,
    name: "Colonial Brooklyn",
    price: 423000,
    location: "Vaughan, Ontario, Canada, L5A4Y5",
    bedBath: "2 Bed, 2 Bath",
    area: "1000 sqm2",
    houseType: "Apartment",
    daysListed: 24,
    agent: "Stacy M.",
    isPublic: false,
  },
  {
    id: 2,
    name: "Another Property",
    price: 500000,
    location: "Toronto, Ontario, Canada, M5A4Y5",
    bedBath: "3 Bed, 2 Bath",
    area: "1500 sqm2",
    houseType: "House",
    daysListed: 10,
    agent: "John D.",
    isPublic: true,
  },
  {
    id: 1,
    name: "Colonial Brooklyn",
    price: 423000,
    location: "Vaughan, Ontario, Canada, L5A4Y5",
    bedBath: "2 Bed, 2 Bath",
    area: "1000 sqm2",
    houseType: "Apartment",
    daysListed: 24,
    agent: "Stacy M.",
    isPublic: false,
  },
  {
    id: 2,
    name: "Another Property",
    price: 500000,
    location: "Toronto, Ontario, Canada, M5A4Y5",
    bedBath: "3 Bed, 2 Bath",
    area: "1500 sqm2",
    houseType: "House",
    daysListed: 10,
    agent: "John D.",
    isPublic: true,
  },
  {
    id: 1,
    name: "Colonial Brooklyn",
    price: 423000,
    location: "Vaughan, Ontario, Canada, L5A4Y5",
    bedBath: "2 Bed, 2 Bath",
    area: "1000 sqm2",
    houseType: "Apartment",
    daysListed: 24,
    agent: "Stacy M.",
    isPublic: false,
  },
  {
    id: 2,
    name: "Another Property",
    price: 500000,
    location: "Toronto, Ontario, Canada, M5A4Y5",
    bedBath: "3 Bed, 2 Bath",
    area: "1500 sqm2",
    houseType: "House",
    daysListed: 10,
    agent: "John D.",
    isPublic: true,
  },
  {
    id: 1,
    name: "Colonial Brooklyn",
    price: 423000,
    location: "Vaughan, Ontario, Canada, L5A4Y5",
    bedBath: "2 Bed, 2 Bath",
    area: "1000 sqm2",
    houseType: "Apartment",
    daysListed: 24,
    agent: "Stacy M.",
    isPublic: false,
  },
  {
    id: 2,
    name: "Another Property",
    price: 500000,
    location: "Toronto, Ontario, Canada, M5A4Y5",
    bedBath: "3 Bed, 2 Bath",
    area: "1500 sqm2",
    houseType: "House",
    daysListed: 10,
    agent: "John D.",
    isPublic: true,
  },
];

export default function AllPropertiesMobile() {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <ListTypeTabSelector />
      <AllPropertySearch />
      <PropertyListSort />

      <div className="space-y-4">
        {properties.map((property) => (
          <div
            key={property.id}
            className="border-solid border-[1px] border-silver rounded-lg p-4"
          >
            {property.isPublic && (
              <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold mb-2 px-2.5 py-0.5 rounded border border-orange-200">
                Public Listing
              </span>
            )}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-dash-muted-foreground">
                  Property Name
                </span>
                <span>{property.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dash-muted-foreground">Price</span>
                <span>${property.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dash-muted-foreground">Location</span>
                <span>{property.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dash-muted-foreground">Bed & Bath</span>
                <span>{property.bedBath}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dash-muted-foreground">Area</span>
                <span>{property.area}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dash-muted-foreground">House Type</span>
                <span>{property.houseType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dash-muted-foreground">
                  No. of days on listed
                </span>
                <span>{property.daysListed}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dash-muted-foreground">
                  Listing Agent
                </span>
                <span>{property.agent}</span>
              </div>
            </div>
            <div className="mt-4 flex space-x-4">
              <button className="flex-1 px-4 py-2 border border-primary bg-white text-primary rounded-lg hover:bg-green-50 cursor-pointer">
                Preview
              </button>
              <button className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-green-700 cursor-pointer">
                See Property
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
