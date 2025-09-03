import Image from "next/image";
import React from "react";
import ai from "@/assets/shared/ai_small_24.svg";

export type SmallTypeProps = {
  title?: string;
};

const SmallTitle = ({ title }: SmallTypeProps) => {
  return (
    <p className="flex items-center gap-x-2.5 text-tms-black text-base font-bold leading-5 border-b border-light-grey pb-4 md:pb-5 lg:pb-6">
      <Image
        src={ai}
        alt="TMS AI"
        width={24}
        height={24}
        className="w-full h-auto object-cover max-w-[24px]"
      />
      {title}
    </p>
  );
};

export default SmallTitle;
