"use client";
import { useState } from "react";

const useExpandable = (initialState: Record<string, boolean> = {}) => {
  const [expandedSections, setExpandedSections] = useState(initialState);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Check if a section is expanded
  const isSectionExpanded = (section: string) => !!expandedSections[section];

  return {
    expandedSections,
    toggleSection,
    isSectionExpanded,
  };
};

export default useExpandable;
