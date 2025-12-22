"use client";

import React from "react";

type Props = {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmModal({ open, onConfirm, onCancel }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-999956 flex items-center justify-center bg-[#000000c9]">
      <div className="bg-white rounded-lg w-[100%] max-w-xl p-6">
        <h3 className="text-lg font-bold mb-4 text-[#0078bb]">
          Confirm Submission
        </h3>

        <p className="text-gray-600 mb-6">
          Kindly review your details carefully, as your pass will be generated based on these details.
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="bg-tms-purple/90 text-white rounded-sm border text-sm sm:text-base md:text-lg font-bold leading-5 md:py-3 w-fit  py-3 px-8 md:px-16  text-center mt-4 
          transition-all duration-300 hover:bg-white hover:text-black hover:border hover:border-[#4d1592]"
          >
            Edit Details
          </button>

          <button
            onClick={onConfirm}
            className="bg-tms-blue rounded-sm text-sm border sm:text-base md:text-lg font-bold leading-5 text-white md:py-3 w-fit  py-3 px-8 md:px-16  text-center mt-4 
          transition-all duration-300 hover:bg-white hover:border hover:border-[#0078bb] hover:text-black"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
