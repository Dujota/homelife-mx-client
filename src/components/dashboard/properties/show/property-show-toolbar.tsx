"use client";

import { Modal } from "@/components/common/modals/modal";
import ContactAgentForm from "@/components/forms/dashboard/contact-agent-form";
import { useModal } from "@/lib/hooks/use-modal";

export default function PropertyShowToolbar({
  className,
}: {
  className?: string;
}) {
  const { modalState, openModal, closeModal } = useModal(["contactAgent"]);

  return (
    <>
      <div className={`lg:w-1/3 mt-6 lg:mt-0 ${className}`}>
        <div className="sticky top-6 space-y-4">
          <button
            onClick={() => openModal("contactAgent")}
            className="w-full py-2 px-4 bg-primary text-white rounded-md text-center font-semibold cursor-pointer hover:bg-green-600"
          >
            Contact Agent
          </button>
          <button className="w-full py-2 px-4 border border-primary rounded-md text-center cursor-pointer hover:bg-green-100">
            Generate MLS Link
          </button>
        </div>
      </div>
      <Modal
        isOpen={modalState.contactAgent}
        onClose={() => closeModal("contactAgent")}
      >
        <ContactAgentForm
          agentName="Stacy Martin"
          agentImage="/temp/agent-image.png"
          onClose={() => closeModal("contactAgent")}
        />
      </Modal>
    </>
  );
}
