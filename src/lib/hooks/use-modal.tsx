"use client";

import { useState, useEffect, useCallback } from "react";

interface ModalState {
  [key: string]: boolean;
}

export const useModal = (initialModals: string[] = []) => {
  const [modalState, setModalState] = useState<ModalState>(() =>
    initialModals.reduce((acc, modalId) => ({ ...acc, [modalId]: false }), {}),
  );

  const openModal = useCallback((modalId: string) => {
    setModalState((prev) => ({ ...prev, [modalId]: true }));
  }, []);

  const closeModal = useCallback((modalId: string) => {
    setModalState((prev) => ({ ...prev, [modalId]: false }));
  }, []);

  const toggleModal = useCallback((modalId: string) => {
    setModalState((prev) => ({ ...prev, [modalId]: !prev[modalId] }));
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        Object.keys(modalState).forEach((modalId) => {
          if (modalState[modalId]) {
            closeModal(modalId);
          }
        });
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [modalState, closeModal]);

  return { modalState, openModal, closeModal, toggleModal };
};
