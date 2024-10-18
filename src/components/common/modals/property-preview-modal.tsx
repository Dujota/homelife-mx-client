"use client";

import PropertyPreview from "@/components/dashboard/properties/property-preview/property-preview";
import { Modal } from "./modal";
import { useState } from "react";
import ContactAgentForm from "@/components/forms/dashboard/contact-agent-form";

interface PropertyPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  property: {
    id: string | number;
    image: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    type: string;
    location: string;
    agent: {
      name: string;
      image: string;
    };
  };
}

export default function PropertyPreviewModal({
  isOpen,
  onClose,
  property,
}: PropertyPreviewProps) {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactAgentClick = () => {
    setShowContactForm(true);
  };

  const handleContactFormClose = () => {
    setShowContactForm(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* <PropertyPreview property={property} onClose={onClose} /> */}

      {showContactForm ? (
        <ContactAgentForm
          agentName={property?.agent?.name}
          agentImage={property?.agent?.image}
          onClose={handleContactFormClose}
        />
      ) : (
        <PropertyPreview
          property={property}
          onClose={onClose}
          handleContactAgentClick={handleContactAgentClick}
        />
      )}
    </Modal>
  );
}
