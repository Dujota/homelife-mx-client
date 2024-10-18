import { useModal } from "@/lib/hooks/use-modal";
import PropertyPreviewModal from "../../modals/property-preview-modal";

export default function TablePreviewBtn({ property }) {
  const { modalState, openModal, closeModal } = useModal(["previewProperty"]);
  return (
    <>
      <button
        onClick={() => openModal("previewProperty")}
        className="bg-primary text-white px-[12px] py-[8px] rounded text-base cursor-pointer"
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
