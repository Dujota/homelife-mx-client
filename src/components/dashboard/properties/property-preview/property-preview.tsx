import React from "react";
import Image from "next/image";

import { X, Bed, Bath, Square, Building2 } from "lucide-react";
import PreviewActions from "@/components/dashboard/properties/property-preview/preview-actions";

export default function PropertyPreview({
  property,
  onClose,
  handleContactAgentClick,
}: {
  property: {
    id: string | number;
    image: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    type: string;
    location: string;
  };
  onClose: () => void;
  handleContactAgentClick: () => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 z-10 p-1 bg-white rounded-full"
      >
        <X className="w-6 h-6 text-gray-600" />
      </button>
      <div className="relative h-64 mb-4">
        <Image
          src={property.image}
          alt="Property"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="px-4 pb-4">
        <div className="inline-block px-2 py-1 mb-2 text-sm font-semibold text-orange-500 bg-orange-100 rounded-full">
          Public Listing
        </div>
        <h2 className="text-3xl font-bold mb-4">
          ${property.price.toLocaleString()}
        </h2>
        <div className="flex justify-between mb-4 text-gray-600">
          <div className="flex items-center">
            <Bed className="w-5 h-5 mr-1" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-5 h-5 mr-1" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Square className="w-5 h-5 mr-1" />
            <span>{property.area} ft²</span>
          </div>
          <div className="flex items-center">
            <Building2 className="w-5 h-5 mr-1" />
            <span>{property.type}</span>
          </div>
        </div>
        <div className="flex items-center mb-4 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span>{property.location}</span>
        </div>
        <PreviewActions
          url={`/dashboard/properties/${property.id}`}
          handleContactAgentClick={handleContactAgentClick}
        />
      </div>
    </div>
  );
}
