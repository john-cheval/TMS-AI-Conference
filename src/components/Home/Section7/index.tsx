import BigButton from "@/components/shared/ui/Button/BigButton";
import SectionHeadingTwo from "@/components/shared/ui/Headings/SectionHeading2";
import SmallTitle from "@/components/shared/ui/Headings/SmallTitle";
import { SectionOnePropsTyps } from "@/types/common";
import Image from "next/image";
import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

type Props = SectionOnePropsTyps & {
  all_benifits?: any;
};

const HomeSectionSeven = ({
  small_title,
  heading,
  description,
  image,
  button_link,
  button_text,
  all_benifits,
}: Props) => {
  return (
    <div className="section-container">
      <div>
        <section className="section-container-">
          <div className="w-full">
            <div className="grid grid-cols-12 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 relative bg-dark-alter">
              <article className="col-span-12 md:col-span-7 lg:col-span-6 py-8 md:py-12 lg:py-16 xl:py-20 space-y-5 md:space-y-7 px-5 sm:px-8 md:pl-10 lg:pl-16 order-1 md:order-0 flex flex-col justify-center">
                <SmallTitle
                  title={small_title}
                  isBorder={false}
                  isDark={true}
                />
                <SectionHeadingTwo title={heading} />
                {description && (
                  <div
                    className="description descriptionWithList2 text-light-grey"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                )}
                <div className="flex justify-center md:justify-start ">
                  <BigButton hrefs={button_link}>{button_text}</BigButton>
                </div>
              </article>
              <article className="col-span-12 md:col-span-5 lg:col-span-6 order-0 md:order-1">
                <Image
                  src={image ?? ""}
                  alt={heading ?? ""}
                  width={700}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </article>
            </div>
          </div>
        </section>
        <section className="section-wrapper pt-5 sm:pt-8 md:pt-12">
          <div className="pb-8 sm:pb-0 border-b sm:border-b-0 border-[#bdbdbd] ">
            <h4 className="sub_heading-1">{all_benifits?.heading}</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-6 md:gap-8 lg:grid-cols-4 gap-x-10 xl:gap-x-16 3xl:gap-x-20 mt-3 sm:mt-6 md:mt-8">
              {all_benifits?.all_benefits &&
                all_benifits?.all_benefits?.length > 0 &&
                all_benifits?.all_benefits?.map((item: any, index: number) => {
                  return (
                    <div
                      key={index + 1}
                      className="flex flex-row sm:flex-col gap-x-3 sm:gap-x-0 sm:gap-y-3"
                    >
                      <IoCheckmarkCircleOutline className="text-tms-blue text-xl mt-1 sm:mt-0 sm:text-2xl shrink-0 " />

                      <div>
                        <h6 className="text-dark-alter text-base md:text-lg font-normal leading-5 mb-2.5 md:mb-4">
                          {item?.title}
                        </h6>
                        <p className="text-dark-grey text-sm leading-6">
                          {item?.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeSectionSeven;
