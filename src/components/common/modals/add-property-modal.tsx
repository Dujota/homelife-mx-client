import { X } from "lucide-react";
import PropertyFormTabs from "@/components/forms/properties/property-form-tabs";

interface AddPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTypes: { name: string; id: number | string }[];
  currencyOptions: { name: string; value: string }[];
  amenities: { label: string; value: number | string }[];
}

const AddPropertyModal: React.FC<AddPropertyModalProps> = ({
  isOpen,
  onClose,
  propertyTypes,
  currencyOptions,
  amenities,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start overflow-y-auto pt-10">
      <div className="bg-white rounded-lg shadow-xl w-full mx-4 my-8">
        <div className="flex justify-between items-center p-6 border-b">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 max-h-[calc(100vh-200px)] max-w-6xl overflow-y-auto mx-auto">
          <div className="space-y-6">
            <PropertyFormTabs
              propertyTypes={propertyTypes}
              currencyOptions={currencyOptions}
              amenities={amenities}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyModal;
