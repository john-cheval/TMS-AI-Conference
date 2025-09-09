import isVideo from "@/lib/CheckIsVideo";
import { WhyAttendListType } from "@/types/common";
import Image from "next/image";
import React from "react";

type Props = {
  data?: WhyAttendListType[];
};

const colors = [
  { bgColor: "#662D91", headingColor: "#fff", textcolor: "#fff" },
  { bgColor: "#0078BB", headingColor: "#fff", textcolor: "#fff" },
  { bgColor: "#0C1E23", headingColor: "#fff", textcolor: "#fff" },
  {
    bgColor: "#EDF9FF",
    headingColor: "linear-gradient(249deg, #4D1592 13.95%, #0078BB 80.04%)",
    textcolor: "#000",
  },
];

const isLastColor = {
  bgColor: "linear-gradient(249deg, #4D1592 13.95%, #0078BB 80.04%)",
  headingColor: "#fff",
  textcolor: "#fff",
};

const WhyAttendSectionOne = ({ data }: Props) => {
  return (
    <div className=" mt-11 section-wrapper space-y-5">
      {data &&
        data?.length > 0 &&
        data?.map((item, index) => {
          const isOdd = index % 2 === 0 || index === 0;

          let currentColor;
          if (index === data.length - 1) {
            currentColor = isLastColor;
          } else {
            const colorIndex = index % colors.length;
            currentColor = colors[colorIndex];
          }

          return (
            <div key={index + 1} className={`grid grid-cols-12 gap-x-5`}>
              {isOdd ? (
                <>
                  <div className="col-span-4 rounded-2xl overflow-hidden">
                    {!isVideo(item?.image_url ?? "") ? (
                      <Image
                        src={item?.image_url ?? ""}
                        width={500}
                        height={400}
                        alt="title"
                        className="w-full h-auto object-cover  min-h-[400px]- md:min-h-full-"
                      />
                    ) : (
                      <video
                        src={item?.image_url || "/banner_video.mp4"}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover z-[5]  min-h-[400px]- md:min-h-full-"
                      />
                    )}
                  </div>
                  <div
                    className="col-span-8 p-14 rounded-2xl flex flex-col gap-y-2 justify-center"
                    style={{ background: currentColor.bgColor }}
                  >
                    {item?.title && (
                      <h4
                        className="main-heading-2"
                        style={{
                          background: currentColor.headingColor,
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {item?.title}
                      </h4>
                    )}

                    <p
                      className="description"
                      style={{
                        color: currentColor.textcolor,
                      }}
                    >
                      {item?.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="col-span-8 p-14 rounded-2xl flex flex-col gap-y-2 justify-center"
                    style={{ background: currentColor.bgColor }}
                  >
                    <h4
                      className="main-heading-2"
                      style={{
                        color: currentColor.headingColor,
                      }}
                    >
                      {item?.title}
                    </h4>
                    <p
                      className="description"
                      style={{
                        background: currentColor.headingColor,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {item?.description}
                    </p>
                  </div>
                  <div className="col-span-4 rounded-2xl overflow-hidden">
                    {!isVideo(item?.image_url ?? "") ? (
                      <Image
                        src={item?.image_url ?? ""}
                        width={500}
                        height={400}
                        alt="title"
                        className="w-full h-auto object-cover  min-h-[400px]- md:min-h-full-"
                      />
                    ) : (
                      <video
                        src={item?.image_url || "/banner_video.mp4"}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover z-[5]  min-h-[400px]- md:min-h-full-"
                      />
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default WhyAttendSectionOne;
