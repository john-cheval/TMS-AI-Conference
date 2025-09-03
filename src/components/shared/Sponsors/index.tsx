import Image from "next/image";
import React from "react";

export type SponsorsPropsType = {
  data?: any;
  isSponsor?: boolean;
};

const Sponsors = ({ data, isSponsor = false }: SponsorsPropsType) => {
  return (
    <div>
      <h6 className="sub_heading-1 mb-4 md:mb-6">{data?.heading}</h6>

      <div>
        {data?.data &&
          data?.data?.length > 0 &&
          data?.data?.map((item: any, index: number) => {
            return (
              <div key={index + 1} className="w-fit">
                <div
                  className={`border rounded-full border-light-grey p-8- flex items-center justify-center w-fit-  ${
                    isSponsor
                      ? "w-[90px] h-[90px] lg:w-[120px] lg:h-[120px] xl:w-[150px] xl:h-[150px]  2xl:w-[180px] 2xl:h-[180px]"
                      : "w-[75px] h-[75px] lg:w-[90px] lg:h-[90px] xl:w-[120px] xl:h-[120px]  2xl:w-[150px] 2xl:h-[150px]"
                  }`}
                >
                  <Image
                    src={item?.image_url}
                    alt={item?.name}
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
                <p className="mt-2.5 md:mt-5 text-black text-center text-sm md:text-base lg:text-lg font-bold leading-[18px] capitalize">
                  {item?.name}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Sponsors;
