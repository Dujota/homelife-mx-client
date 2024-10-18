"use client";

import {
  MessageSquare,
  List,
  Calendar,
  PlusCircle,
  FileSignature,
  UserPlus,
  X,
} from "lucide-react";

import ActionButton from "../action-button";
import { useModal } from "@/lib/hooks/use-modal";
import { Modal } from "@/components/common/modals/modal";
import PropertyFormTabs from "@/components/forms/properties/property-form-tabs";
import AddPropertyModal from "@/components/common/modals/add-property-modal";

type QuickActionToolbarTypes = {
  propertyTypes: { name: string; id: number | string }[];
  amenities: { label: string; value: number | string }[];
  currencyOptions: { name: string; value: string }[];
};

export default function QuickActionToolbar({
  propertyTypes,
  currencyOptions,
  amenities,
}: QuickActionToolbarTypes) {
  const { modalState, openModal, closeModal } = useModal(["addProperty"]);

  return (
    <>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:flex lg:flex-wrap">
        <ActionButton
          icon={PlusCircle}
          label="Add Property"
          handleClick={() => openModal("addProperty")}
        />
        <ActionButton icon={List} label="Add Listing" />
        <ActionButton icon={Calendar} label="Add Task/Event" />
        <ActionButton icon={UserPlus} label="Create a Lead" />
        <ActionButton icon={FileSignature} label="Create Transaction" />
        <ActionButton icon={MessageSquare} label="Start Conversation" />
      </div>
      <AddPropertyModal
        propertyTypes={propertyTypes}
        currencyOptions={currencyOptions}
        amenities={amenities}
        isOpen={modalState.addProperty}
        onClose={() => closeModal("addProperty")}
      />
      {/* <Modal
        isOpen={modalState.addProperty}
        onClose={() => closeModal("addProperty")}
      >
        <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-auto">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">Add Property</h2>
            <button onClick={() => closeModal("addProperty")}>
              <X className="w-6 h-6" />
              <div className="p-6 max-h-[80vh] overflow-y-auto">
                <PropertyFormTabs
                  propertyTypes={propertyTypes}
                  currencyOptions={currencyOptions}
                  amenities={amenities}
                />
              </div>
            </button>
          </div>
        </div>
      </Modal> */}
    </>
  );
}
// export default function QuickActionToolbar() {
//   return (
//     <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:flex lg:flex-wrap">
//       <ActionButton icon={PlusCircle} label="Add Property" />
//       <ActionButton icon={List} label="Add Listing" />
//       <ActionButton icon={Calendar} label="Add Task/Event" />
//       <ActionButton icon={UserPlus} label="Create a Lead" />
//       <ActionButton icon={FileSignature} label="Create Transaction" />
//       <ActionButton icon={MessageSquare} label="Start Conversation" />
//     </div>
//   );
// }
