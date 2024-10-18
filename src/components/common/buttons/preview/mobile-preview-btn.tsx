import { useModal } from "@/lib/hooks/use-modal";
import PropertyPreviewModal from "../../modals/property-preview-modal";

export default function MobilePreviewBtn({ property }) {
  const { modalState, openModal, closeModal } = useModal([
    "previewProperty",
    "contactAgent",
  ]);
  return (
    <>
      <button
        onClick={() => openModal("previewProperty")}
        className="flex-1 px-4 py-2 border border-primary bg-white text-primary rounded-lg hover:bg-green-50 cursor-pointer"
      >
        Preview
      </button>
      <PropertyPreviewModal
        isOpen={modalState.previewProperty}
        onClose={() => closeModal("previewProperty")}
        property={property}
      />
    </>
  );
}
