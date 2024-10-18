"use client";

import TablePreviewBtn from "@/components/common/buttons/preview/table-preview-btn";
import React from "react";
import TableActions from "./table-actions";

interface Property {
  id: number;
  name: string;
  price: number;
  location: string;
  bedroom: number;
  bathroom: number;
  area: string;
  daysListed: string;
  houseType: string;
  listingAgent: string;
  isPublic: boolean;
}

interface PropertyTableProps {
  properties: Property[];
}

export default function PropertyTable({ properties }: PropertyTableProps) {
  const getHouseTypeColor = (houseType: string) => {
    switch (houseType.toLowerCase()) {
      case "apartment":
        return "bg-green-100 text-green-800";
      case "condo":
        return "bg-yellow-100 text-yellow-800";
      case "land":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="overflow-hidden border border-gray-200 rounded-lg">
      <div className="overflow-x-auto">
        <div className="overflow-y-auto max-h-[calc(100vh-300px)]">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50 sticky top-0 z-10 bg-white h-[50px]">
              <tr className="bg-gray-50 text-gray-600 text-sm leading-normal">
                <th className="py-3 px-6 text-left whitespace-nowrap">
                  Action
                </th>
                <th className="py-3 px-6 text-left whitespace-nowrap">
                  Property Name
                </th>
                <th className="py-3 px-6 text-left whitespace-nowrap">
                  Estimated Price
                </th>
                <th className="py-3 px-6 text-left whitespace-nowrap">
                  Location
                </th>
                <th className="py-3 px-6 text-left whitespace-nowrap">
                  Bedroom
                </th>
                <th className="py-3 px-6 text-left whitespace-nowrap">
                  Bathroom
                </th>
                <th className="py-3 px-6 text-left whitespace-nowrap">Area</th>
                <th className="py-3 px-6 text-left whitespace-nowrap">
                  No. of days listed
                </th>
                <th className="py-3 px-6 text-left whitespace-nowrap">
                  House Type
                </th>
                <th className="py-3 px-6 text-left whitespace-nowrap">
                  Listing Agent
                </th>
                <th className="py-3 px-6 text-left whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {properties.map((property, index) => (
                <tr
                  key={property.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <TablePreviewBtn property={property} />
                  </td>
                  <td
                    className={`py-3 px-6 text-left font-medium whitespace-nowrap ${property.isPublic ? "text-orange-500" : ""}`}
                  >
                    {property.name}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    $
                    {property.price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {property.location}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {property.bedroom}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {property.bathroom}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {property.area}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {property.daysListed}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${getHouseTypeColor(property.houseType)}`}
                    >
                      {property.houseType}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {property.listingAgent}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <TableActions
                      url={`/dashboard/properties/${property.id}`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
