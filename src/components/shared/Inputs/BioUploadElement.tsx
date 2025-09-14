// components/shared/Inputs/BioUploadElemet.tsx

"use client";
import React, { useState, useEffect } from "react";
import uploadImage from "@/assets/icons/backup_white.svg";
import uploadImage2 from "@/assets/icons/backup_purple.svg";

import Image from "next/image";
import { FieldValues, FieldErrors, Path } from "react-hook-form";

interface BioUploadProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  onChange: (value: FileList | null) => void;
  value: FileList | null;
  isPresentation?: boolean;
}

const BioUploadElemet = <TFieldValues extends FieldValues>({
  name,
  onChange,
  value,
  errors,
  isPresentation = false,
}: BioUploadProps<TFieldValues>) => {
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    if (value && value.length > 0) {
      setFileName(value[0].name);
    } else {
      setFileName("");
    }
  }, [value]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      onChange(files);
    } else {
      onChange(null);
    }
  };

  const errorMessage = errors[name]?.message;

  const uploadText = isPresentation ? "Submit your papers" : "Upload Bio";
  const heaperText = isPresentation
    ? "Please upload your papers in pdf format. Max 5MB"
    : "Upload Bio";

  return (
    <div className="flex flex-col gap-y2 flex-grow-1">
      <div className="flex items-center justify-center w-full mb-1">
        <label
          htmlFor={name}
          className={`flex flex-col items-center justify-center w-full border  border-dashed rounded-sm cursor-pointer bg-transparent text-white ${
            isPresentation ? "border-[#0078BB]" : "border-white"
          }`}
        >
          <div
            className={`flex ${
              isPresentation
                ? "flex-col gap-y-3 py-6"
                : "flex-row gap-x-3  py-4 "
            } items-center justify-center `}
          >
            <Image
              src={isPresentation ? uploadImage2 : uploadImage}
              alt="uploadImage"
              width={26}
              height={18}
            />
            <p
              className={`description ${
                isPresentation ? "text-dark-alter" : "text-white"
              }  underline`}
            >
              {fileName ? fileName : uploadText}
            </p>
          </div>
          <input
            id={name}
            type="file"
            className="hidden"
            accept="application/pdf"
            onChange={handleFileChange}
          />
        </label>
      </div>
      <span
        className={` ${
          isPresentation ? "text-dark-alter" : "text-white"
        } text-xs md:text-sm font-normal leading-5`}
      >
        Upload your bio in pdf format. Max 5MB
      </span>
      {errorMessage && (
        <p className="text-red-500 text-sm font-normal leading-5 mt-1">
          {errorMessage as string}
        </p>
      )}
    </div>
  );
};

export default BioUploadElemet;
