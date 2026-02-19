"use client";
import Image from "next/image";
import React, { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export type SponsorsPropsType = {
  data?: {
    data: any[];
    heading: string;
  };
  isReversed?: boolean;
  isSponsor?: boolean;
  isAssosiation?: boolean;
  isPartners?: boolean;
};

const Sponsors = ({
  data,
  isSponsor = false,
  isReversed = false,
  isAssosiation = false,
}: // isPartners = false,
SponsorsPropsType) => {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const BASE_ITEM_DURATION = 3;

  const listsData = useMemo(() => {
    if (isSponsor && data?.data) {
      const half = Math.ceil(data.data.length / 2);
      const firstList = data.data.slice(0, half);
      const secondList = data.data.slice(half);

      const clonedFirstList = [
        ...firstList,
        ...firstList,
        ...firstList,
        ...firstList,
        ...firstList,
        ...firstList,
      ];
      const clonedSecondList = [
        ...secondList,
        ...secondList,
        ...secondList,
        ...secondList,
        ...secondList,
        ...secondList,
      ];

      return { firstList: clonedFirstList, secondList: clonedSecondList };
    }

    const clonedData = data?.data
      ? [...data.data, ...data.data, ...data.data, ...data.data, ...data.data]
      : [];

    return {
      firstList: clonedData,
      secondList: [],
    };
  }, [data?.data, isSponsor]);

  // Check the number of items in the first list
  const shouldAnimateFirstList = listsData.firstList.length >= 5;

  // Check the number of items in the second list
  const shouldAnimateSecondList = isSponsor && listsData.secondList.length >= 5;

  // New One

  useGSAP(() => {
    if (containerRef1.current && shouldAnimateFirstList) {
      const duration = listsData.firstList.length * BASE_ITEM_DURATION;

      let xTarget = -50;
      let initialSet = {};
      if (isAssosiation) {
        xTarget = 0;
        initialSet = { xPercent: -50 };
      }

      if (Object.keys(initialSet).length > 0) {
        gsap.set(containerRef1.current, initialSet);
      }
      gsap.to(containerRef1.current, {
        xPercent: xTarget,
        repeat: -1,
        duration: duration,
        // duration: 570,
        ease: "none",
      });
    }
  }, [listsData.firstList, shouldAnimateFirstList, isAssosiation]);

  useGSAP(() => {
    if (containerRef2.current && shouldAnimateSecondList) {
      const duration = listsData.secondList.length * BASE_ITEM_DURATION;

      // gsap.set(containerRef2.current, { xPercent: -50 });
      gsap.to(containerRef2.current, {
        xPercent: isAssosiation ? 50 : -50,
        repeat: -1,
        duration: duration,
        // duration: 570,
        ease: "none",
      });
    }
  }, [isSponsor, listsData.secondList, shouldAnimateSecondList]);

  const renderSponsorList = (items: any[], isReversed: boolean) => (
    <div
      className={`relative w-full overflow-hidden ${
        isReversed ? "mt-8 xl:mt-10 2xl:mt-14" : ""
      }`}
    >
      <div
        className={`flex ${isReversed ? "justify-end" : "justify-start"} w-fit`}
        ref={isReversed ? containerRef2 : containerRef1}
      >
        {items?.map((item: any, index: number) => (
          <div
            key={index}
            className={`flex flex-col items-center flex-shrink-0 mx-5 md:mx-8 xl:mx-10- 2xl:mx-14- ${
              isSponsor
                ? "max-w-[90px]  lg:max-w-[120px]  xl:max-w-[150px]  2xl:max-w-[180px] "
                : "max-w-[75px] lg:max-w-[90px]  xl:max-w-[120px] 2xl:max-w-[150px] "
            }`}
          >
            <div
              className={`border rounded-full border-light-grey flex items-center justify-center w-fit- overflow-hidden ${
                isSponsor
                  ? "w-[90px] h-[90px] lg:w-[120px] lg:h-[120px] xl:w-[150px] xl:h-[150px] 2xl:w-[180px] 2xl:h-[180px]"
                  : "w-[75px] h-[75px] lg:w-[90px] lg:h-[90px] xl:w-[120px] xl:h-[120px] 2xl:w-[150px] 2xl:h-[150px]"
              }`}
            >
              <Image
                src={item?.image_url}
                alt={item?.image_alt_tag ?? ""}
                width={150}
                height={75}
                sizes="100vw"
                className={`w-full h-auto object-cover ${
                  isSponsor
                    ? "max-w-[70px] lg:max-w-[100px] xl:max-w-[120px] 2xl:max-w-[150px]"
                    : "max-w-[45px] lg:max-w-[65px] xl:max-w-[90px] 2xl:max-w-[120px]"
                }`}
              />
            </div>
            {isSponsor && (
              <p className="mt-2.5 md:mt-5 text-black text-center text-sm md:text-base lg:text-lg font-semibold leading-[18px]- capitalize max-w-[200px] whitespace-normal-   ">
                {item?.company_name}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>

      {isSponsor && listsData.firstList && listsData.firstList.length > 0 ? (
        <>
          <h6 className="test sub_heading-1 mb-4 md:mb-6">{data?.heading}</h6>
          {renderSponsorList(listsData.firstList, false)}
          {renderSponsorList(listsData.secondList, true)}
        </>
      ) : (
        listsData.firstList.length > 0 ?
        <>
          <h6 className="sub_heading-1 mb-4 md:mb-6">{data?.heading}</h6>
          {renderSponsorList(listsData.firstList, false)}
        </> 
        : ""
      )}
    </div>
  );
};

export default Sponsors;
