"use client";

import Link from "next/link";

export default function PreviewActions({
  url,
  handleContactAgentClick,
}: {
  url: string;
  handleContactAgentClick: () => void;
}) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={handleContactAgentClick}
          className="py-2 px-4 border border-green-700 text-green-700 rounded-md hover:bg-green-50 transition-colors"
        >
          Contact Agent
        </button>
        <Link
          href={url}
          className="py-2 px-4 bg-primary text-white rounded-md hover:bg-green-800 transition-colors"
        >
          See Property
        </Link>
      </div>
      <button
        type="button"
        className="w-full mt-4 py-2 px-4 border border-green-700 text-green-700 rounded-md hover:bg-green-50 transition-colors"
      >
        Generate MLS Link
      </button>
    </>
  );
}
