"use client";

import React, { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left font-medium text-lg"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title}
        <ChevronDown
          className={`w-5 h-5 transition-transform ${isExpanded ? "transform rotate-180" : ""}`}
        />
      </button>
      {isExpanded && <div className="pb-4">{children}</div>}
    </div>
  );
};

export default CollapsibleSection;
