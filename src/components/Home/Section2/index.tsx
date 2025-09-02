import React from "react";
import ai from "@/assets/shared/ai_small_24.svg";
import Image from "next/image";
import { SectionTwoPropsTyps } from "@/types/common";
import ExpandableHtmlText from "@/components/shared/TruncatedHTMLText";
import BigButton from "@/components/shared/ui/Button/BigButton";
import SwiperHome from "@/components/shared/Swiper";
import { swiperTsAbout } from "@/constants/swiperData";

const HomeSectionTwo = ({
  heading,
  small_title,
  main_heading,
  description,
  button_heading,
  session_heading,
  button_link,
}: SectionTwoPropsTyps) => {
  return (
    <section className="section-wrapper pt-6 sm:pt-8 md:pt-12 lg:pt-20 md:h-[100vh]">
      <p className="flex items-center gap-x-2.5 text-tms-black text-base font-bold leading-5 border-b border-light-grey pb-4 md:pb-5 lg:pb-6">
        <Image
          src={ai}
          alt="TMS AI"
          width={24}
          height={24}
          className="w-full h-auto object-cover max-w-[24px]"
        />
        {heading}
      </p>

      <div className="grid grid-cols-12 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 pt-4 md:pt-8 lg:pt-10 xl:pt-16">
        <article className="col-span-12 md:col-span-6 xl:col-span-7">
          <div className="flex flex-col gap-y-3 lg:gap-y-4">
            <h5 className="text-tms-black text-sm sm:text-base  md:text-lg lg:text-xl font-bold  leading-4 ">
              {small_title}
            </h5>
            {main_heading && (
              <h3
                className="home-about-heading  main-heading text-tms-black font-bold leading-3 lg:leading-2 xl:leading-1 "
                dangerouslySetInnerHTML={{ __html: main_heading }}
              ></h3>
            )}
          </div>

          <div className=" mt-5 md:mt-6 lg:mt-8 md:pl-6 xl:pl-8 flex flex-col  gap-y-5 md:gap-y-6">
            {description && (
              <div className="description text-dark-grey  ">
                <ExpandableHtmlText htmlContent={description} limit={750} />
              </div>
            )}
            <div className="mx-auto md:mx-0">
              <BigButton
                hrefs={button_link}
                isGradient={true}
                isIcon={true}
                isLink={true}
                isBig={true}
                gradient={
                  "linear-gradient(249deg, #4D1592 13.95%, #0078BB 80.04%)"
                }
              >
                {button_heading}
              </BigButton>
            </div>
          </div>
        </article>
        <article className="col-span-12 md:col-span-6 xl:col-span-5 mt-8 md:mt-0">
          <p className="text-tms-black text-xl md:text-2xl font-bold  leading-3 ">
            {session_heading}
          </p>

          <div className="mt-6 lg:mt-8 ">
            <SwiperHome data={swiperTsAbout} slidesNumbers={2} initalGap={24} />
          </div>
        </article>
      </div>
    </section>
  );
};

export default HomeSectionTwo;
