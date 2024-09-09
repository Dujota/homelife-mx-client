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
  propertyTypes: { name: string; id: number }[];
};

const PropertyFormTabs = ({ propertyTypes }: PropertyTypes) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const SelectedFormComponent = PROPERTY_TABS[selectedTab].component;

  return (
    <div>
      <div className="tabs my-20 flex justify-center flex-wrap">
        {PROPERTY_TABS.map((tab, index) => (
          <button
            key={tab.name}
            className={`mx-2 tab ${index === selectedTab ? "active" : ""}`}
            onClick={() => setSelectedTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="tab-content md:mx-[20%]">
        <SelectedFormComponent propertyTypes={propertyTypes} />
      </div>
    </div>
  );
};

export default PropertyFormTabs;
