import React from "react";
import { SectionOnePropsTyps, sectionTwoCardProps, SpeakersDataProps } from "@/types/common";
import ExpandableHtmlText from "@/components/shared/TruncatedHTMLText";
import BigButton from "@/components/shared/ui/Button/BigButton";
import SwiperHome from "@/components/shared/Swiper";
import SmallTitle from "@/components/shared/ui/Headings/SmallTitle";
import SectionHeading from "@/components/shared/ui/Headings/SectionHeading";
import Image from "next/image";

type Props = SectionOnePropsTyps & {
  isSponsor?: boolean;
};

const HomeSectionTwo = ({
  heading,
  small_title,
  main_heading,
  description,
  button_heading,
  session_heading,
  button_link,
  data,
  isSponsor = false,
  image_gallery,
}: Props) => {
  console.log("data",data)
  return (
    <section className="section-wrapper section-container">
      <div>
        <SmallTitle title={heading} />

        <div className="grid grid-cols-12 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 pt-4 md:pt-8 lg:pt-10 xl:pt-14">
          <article className="col-span-12 lg:col-span-6 xl:col-span-7- flex flex-col justify-center">
            <div className="flex flex-col gap-y-3 lg:gap-y-4">
              {small_title && (
                <h5 className="text-tms-black text-sm sm:text-base  md:text-lg lg:text-xl font-bold  leading-4 ">
                  {small_title}
                </h5>
              )}

              {main_heading && <SectionHeading main_title={main_heading} />}
            </div>

            <div
              className={`pt-5 md:pt-6 lg:pt-8 ${
                isSponsor ? "" : "md:pl-6 xl:pl-8"
              }  flex flex-col  gap-y-5 md:gap-y-6`}
            >
              {description && (
                <div className="description  text-dark-grey  ">
                  <ExpandableHtmlText htmlContent={description} limit={500} />
                </div>
              )}
              <div className="mx-auto lg:mx-0 ">
                <BigButton hrefs={button_link}>{button_heading}</BigButton>
              </div>
            </div>
          </article>
          <article className="col-span-12 lg:col-span-6  mt-8 lg:mt-0">
            {session_heading && (
              <p className="text-tms-black text-xl md:text-2xl font-bold  leading-3 ">
                {session_heading}
              </p>
            )}

            {data && !isSponsor && (
              <div className="mt-6 lg:mt-8 ">
                {data?.length <= 2 ? (
                  data?.length === 1 ?
                  // 1 === 1 ?
                  (
                  <div className="grid grid-cols-1">
                    {data?.slice(0,1).map((item:SpeakersDataProps, index) => (
                      <div className="relative flex" key={index}>
                        <Image
                          src={item?.image_url ?? ""}
                          // src={item?.image_url ?? ""}
                          alt={item?.home_title ?? ""}
                          width={285}
                          height={400}
                          className="w-full h-[400px] object-cover responsive-radius  shrink-0"
                        />

                        {item?.home_title && (
                          <p className="absolute bottom-3 lg:bottom-6 left-3 lg:left-6 right-3 lg:right-6 text-white font-bold text-sm md:text-base lg:text-lg xl:text-xl leading-5 md:leading-4">
                            {item?.home_title}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                  ) 
                  :
                  (
                  <div className="grid grid-cols-2 gap-x-2.5 md:gap-x-4 lg:gap-x-6">
                    {data?.map((item:SpeakersDataProps, index) => (
                      <div className="relative flex" key={index}>
                        <Image
                          src={item?.image_url ?? ""}
                          // src={item?.image_url ?? ""}
                          alt={item?.home_title ?? ""}
                          width={285}
                          height={400}
                          className="w-full h-full max-w-[280px]- object-cover responsive-radius  shrink-0"
                        />

                        {item?.home_title && (
                          <p className="absolute bottom-3 lg:bottom-6 left-3 lg:left-6 right-3 lg:right-6 text-white font-bold text-sm md:text-base lg:text-lg xl:text-xl leading-5 md:leading-4">
                            {item?.home_title}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                  )
                ) : (
                  <SwiperHome datas={data} slidesNumbers={2} initalGap={24} />
                )}
              </div>
            )}

            {image_gallery && isSponsor && (
              <div className="">
                {image_gallery?.length <= 2 ? (
                  <div className="grid grid-cols-2 gap-x-2.5 md:gap-x-4 lg:gap-x-6">
                    {data?.map((item:SpeakersDataProps, index) => (
                      <div className="relative flex" key={index}>
                        <Image
                          src={item?.image_url ?? ""}
                          alt={item?.home_title ?? ""}
                          width={285}
                          height={400}
                          className="w-full h-full max-w-[280px]- object-cover responsive-radius  shrink-0"
                        />

                        {item?.home_title && (
                          <p className="absolute bottom-3 lg:bottom-6 left-3 lg:left-6 right-3 lg:right-6 text-white font-bold text-sm md:text-base lg:text-lg xl:text-xl leading-5 md:leading-4">
                            {item?.home_title}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <SwiperHome datas={data} slidesNumbers={2} initalGap={24} />
                )}
              </div>
            )}

            {/* <div className="mt-6 lg:mt-8 ">
              {data && data?.length <= 2 ? (
                <div>hello</div>
              ) : (
                <SwiperHome datas={data} slidesNumbers={2} initalGap={24} />
              )}
            </div> */}
          </article>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionTwo;
