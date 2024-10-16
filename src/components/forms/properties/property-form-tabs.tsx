"use client";

import { useState } from "react";
import LandPropertyForm from "./land-property-form";
import SingleFamilyDwellingForm from "./single-family-dwelling-form";
import CommercialPropertyForm from "./commercial-property-form";
import PreConstructionForm from "./pre-construction-propertry-form";

const PROPERTY_TABS = [
  { name: "Single Family Dwelling", component: SingleFamilyDwellingForm },
  { name: "Land", component: LandPropertyForm },
  { name: "Commercial", component: CommercialPropertyForm },
  { name: "Pre-construction", component: PreConstructionForm },
];

type PropertyTypes = {
  propertyTypes: { name: string; id: number | string }[];
  amenities: { label: string; value: number | string }[];
  currencyOptions: { name: string; value: string }[];
};

const PropertyFormTabs = ({
  propertyTypes,
  currencyOptions,
  amenities,
}: PropertyTypes) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const SelectedFormComponent = PROPERTY_TABS[selectedTab].component;

  return (
    <div>
      <div className="tabs my-20 flex justify-center flex-wrap">
        {PROPERTY_TABS.map((tab, index) => (
          <button
            key={tab.name}
            type="button"
            className={`mx-2 tab cursor-pointer p-2 ${index === selectedTab ? "active" : ""}`}
            onClick={() => setSelectedTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="tab-content md:mx-[20%]">
        <SelectedFormComponent
          propertyTypes={propertyTypes}
          amenities={amenities}
          currencyOptions={currencyOptions}
          broker
        />
      </div>
    </div>
  );
};

export default PropertyFormTabs;
