"use client ";

import { Modal } from "@/components/common/modals/modal";
import ContactAgentForm from "@/components/forms/dashboard/contact-agent-form";
import { useModal } from "@/lib/hooks/use-modal";
import Link from "next/link";

export default function TableActions({ url }: { url: string }) {
  const { modalState, openModal, closeModal } = useModal(["contactAgent"]);

  return (
    <>
      <button
        className="bg-white text-primary inset-0 border border-solid border-primary px-[16px] py-[8px] rounded text-base cursor-pointer mr-2 hover:text-black"
        onClick={() => openModal("contactAgent")}
      >
        Contact Agent
      </button>
      <Link href={url}>
        <button className="bg-primary text-white px-[16px] py-[8px] rounded text-base cursor-pointer hover:text-black">
          See Property
        </button>
      </Link>

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
