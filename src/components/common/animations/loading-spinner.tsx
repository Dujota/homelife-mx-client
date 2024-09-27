"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Loader } from "lucide-react";

export default function LoadingSpinner({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8">
            <Loader className="w-12 h-12 text-white animate-spin" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
