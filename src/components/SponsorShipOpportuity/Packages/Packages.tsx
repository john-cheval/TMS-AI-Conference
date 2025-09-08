"use client";
import { titleData, titleLengthDAta } from "@/constants/WhySponsors";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import arrowDown from "@/assets/shared/chevron-right.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Packages = () => {
  const [activeTitle, setActiveTitle] = useState(titleData[0]);
  const handleTitleClick = (item: string) => {
    setActiveTitle(item);
  };
  const splittedTitle = activeTitle.split(" ");
  return (
    <div>
      <div className="border-b border-b-light-grey-1 mb-9">
        <div className="flex  gap-x-2.5 mb-7 lg:mb-10 xl:mb-14 overflow-x-auto whitespace-nowrap no-scrollbar">
          {titleData?.map((item, index) => {
            const isActive = item === activeTitle;
            return (
              <button
                className={`text-center text-base border  font-bold leding-6 px-4 py-3 rounded-sm  cursor-pointer transition-all duration-300 ease-in-out ${
                  isActive
                    ? "buttonGradient-3 text-white"
                    : "bg-transparent text-black border-[#dbdbdb] hover:bg-tms-blue hover:text-white hover:border-tms-blue"
                }`}
                key={index + 1}
                onClick={() => handleTitleClick(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
        <h3 className="main-heading text-black leading-1 font-bold pb-5 xl:pb-8">
          <span className="main-heading text-tms-purple leading-1 font-bold">
            {splittedTitle[0]}
          </span>{" "}
          {splittedTitle?.slice(1).join(" ")}
        </h3>
      </div>

      <div>
        <div className="grid grid-cols-12">
          <div className="col-span-8 bg-[#f5f5f5] border-t border-l border-[#cecece] rounded-tl-sm  py-12 pl-16 pr-3 h-fit  mt-auto">
            <h5 className="main-heading-2 gradient-text w-fit">
              {" "}
              {titleLengthDAta[0]?.title}
            </h5>
            <p className="text-base text-[#2A2A2A] font-medium leading-5 mt-[2px]">
              {" "}
              {titleLengthDAta[0]?.small_title}
            </p>
          </div>
          <div className="col-span-4">
            <Image
              src={titleLengthDAta[0]?.image_url}
              alt={titleLengthDAta[0]?.title}
              width={430}
              height={430}
              className="w-full h-auto object-cover rounded-t-sm rounded-br-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-12">
          <button className="col-span-8 bg-[#ECECEC] w-full flex justify-center items-center gap-x-2.5 py-6 text-lg font-bold leading-5 text-tms-purple">
            Read More{" "}
            <Image
              src={arrowDown}
              alt="arrowdown"
              width={16}
              height={16}
              sizes="100vw"
              className="w-full h-auto max-w-4 object-cover"
            />
          </button>
          <div className="col-span-2">
            <Link
              href={"#"}
              className="py-6 buttonGradient-2 rounded-br-sm block- flex items-center justify-center text-white text-lg font-bold leading-5 group"
            >
              Send Enquiry{" "}
              <MdOutlineKeyboardArrowRight className="text-2xl  group-hover:translate-x-1 group-hover:text-tms-blue- transition-all duration-300 ease-in-out" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
