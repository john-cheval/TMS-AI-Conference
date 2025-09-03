import React from "react";
import { SectionOnePropsTyps } from "@/types/common";
import ExpandableHtmlText from "@/components/shared/TruncatedHTMLText";
import BigButton from "@/components/shared/ui/Button/BigButton";
import SwiperHome from "@/components/shared/Swiper";
import { swiperTsAbout } from "@/constants/swiperData";
import SmallTitle from "@/components/shared/ui/Headings/SmallTitle";
import SectionHeading from "@/components/shared/ui/Headings/SectionHeading";

const HomeSectionTwo = ({
  heading,
  small_title,
  main_heading,
  description,
  button_heading,
  session_heading,
  button_link,
}: SectionOnePropsTyps) => {
  return (
    <section className="section-wrapper section-container">
      <div>
        <SmallTitle title={heading} />

        <div className="grid grid-cols-12 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 pt-4 md:pt-8 lg:pt-10 xl:pt-16">
          <article className="col-span-12 lg:col-span-6 xl:col-span-7-">
            <div className="flex flex-col gap-y-3 lg:gap-y-4">
              <h5 className="text-tms-black text-sm sm:text-base  md:text-lg lg:text-xl font-bold  leading-4 ">
                {small_title}
              </h5>
              {main_heading && <SectionHeading main_title={main_heading} />}
            </div>

            <div className=" pt-5 md:pt-6 lg:pt-8 md:pl-6 xl:pl-8 flex flex-col  gap-y-5 md:gap-y-6">
              {description && (
                <div className="description text-dark-grey  ">
                  <ExpandableHtmlText htmlContent={description} limit={750} />
                </div>
              )}
              <div className="mx-auto lg:mx-0 ">
                <BigButton hrefs={button_link}>{button_heading}</BigButton>
              </div>
            </div>
          </article>
          <article className="col-span-12 lg:col-span-6  mt-8 lg:mt-0">
            <p className="text-tms-black text-xl md:text-2xl font-bold  leading-3 ">
              {session_heading}
            </p>

            <div className="mt-6 lg:mt-8 ">
              <SwiperHome
                data={swiperTsAbout}
                slidesNumbers={2}
                initalGap={24}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionTwo;
