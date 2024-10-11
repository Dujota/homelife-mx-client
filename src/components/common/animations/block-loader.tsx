import React from "react";
import { Loader as LoaderIcon } from "lucide-react";

interface LoaderProps {
  message?: string;
  width?: string;
  height?: string;
}

export default function BlockLoader({
  message = "Loading...",
  width = "100%",
  height = "400px",
}: LoaderProps) {
  return (
    <div
      className="flex flex-col items-center justify-center bg-whitesmoke-300 rounded-lg animate-pulse"
      style={{ width, height }}
    >
      <LoaderIcon className="w-12 h-12 text-black animate-spin" />
      <p className="mt-4 text-lg font-semibold text-gray-700">{message}</p>
    </div>
  );
}
