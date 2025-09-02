import { ButtonPropsType } from "@/types/common";
import Link from "next/link";
import React from "react";

const BigButton = ({
  children,
  hrefs,
  isGradient,
  isIcon,
  isLink = false,
}: ButtonPropsType) => {
  return (
    <Link
      href={hrefs ?? "/"}
      className={`rounded-sm w-fit text-sm md:text-base font-semibold md:font-bold leading-5 py-4 md:py-6 px-6 group transition-colors duration-300 ease-in-out text-white buttonGradient-2 hover:bg-transparent- hover:text-tms-blue border`}
    >
      {children}
    </Link>
  );
};

export default BigButton;
