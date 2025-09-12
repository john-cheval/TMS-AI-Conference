import { conferenceData } from "@/constants/congerenceData";
import Image from "next/image";
import React from "react";
import { MdAccessAlarms } from "react-icons/md";

const ConferenceProgrammeSectionTwo = () => {
  return (
    <section className="section-wrapper mt-12 pb-8 md:pb-12 lg:pb-16 xl:pb-20">
      <div className="flex flex-col gap-y-4">
        {conferenceData?.map((row, rowIndex) => {
          const isAnyItemASession = row.some((item) => item.isSession);
          let gridColsClass = "";
          if (isAnyItemASession) {
            gridColsClass = "grid-cols-1";
          } else if (row.length === 3) {
            gridColsClass = "grid-cols-1 md:grid-cols-3";
          } else if (row.length === 2) {
            gridColsClass = "grid-cols-1 md:grid-cols-2";
          } else {
            gridColsClass = "grid-cols-1";
          }

          return (
            <div
              key={rowIndex}
              className={`grid ${gridColsClass} gap-3 md:gap-4`}
            >
              {row.map((item) => (
                <div
                  key={item.id}
                  className={`conference-card flex   ${
                    isAnyItemASession
                      ? "flex-row pt-6 pb-8  md:pb-12 lg:pb-16 xl:pb-20"
                      : "flex-col justify-between py-6"
                  }`}
                >
                  {!isAnyItemASession && (
                    <>
                      {" "}
                      <p className=" bg-tms-blue rounded-r-md w-fit py-2 md:py-3 px-4 md:px-6 flex items-center gap-x-1.5 md:gap-x-2.5 text-base md:text-lg lg:text-2xl text-white leading-3 font-bold conference-time relative">
                        <MdAccessAlarms />
                        {item.time}
                      </p>
                      {/* Main content container */}
                      <div className="px-5  mt-3 md:mt-5  flex flex-col flex-grow">
                        <h3 className="text-lg md:text-xl text-tms-blue font-medium leading-3">
                          {item?.title}
                        </h3>

                        {item?.isSponsor && (
                          <div className="mt-auto- mt-5 md:mt-8 lg:mt-14">
                            <p className="description text-dark-alter mb-5">
                              {item?.sponsorHeading}
                            </p>
                            <Image
                              src={item?.sponsorImageUrl ?? ""}
                              alt={item?.sponsorHeading}
                              width={360}
                              height={80}
                              className="w-fit object-contain max-w-[200px] md:max-w-full"
                            />
                          </div>
                        )}

                        {!item?.isSponsor &&
                          item?.speakers &&
                          item?.speakers?.length > 0 && (
                            <div className="pt-3 md:pt-7 mt-auto space-y-4 md:space-y-6">
                              {item?.speakers?.map((speaker, speakerindex) => {
                                return (
                                  <div
                                    key={speakerindex + 1}
                                    className="flex gap-x-3"
                                  >
                                    <Image
                                      src={speaker?.imageUrl}
                                      alt={speaker?.name}
                                      width={63}
                                      height={63}
                                      className="rounded-md w-[65px] h-[65px]"
                                    />

                                    <div>
                                      <p className="text-base md:text-lg lg:text-xl text-[#2a2a2a] font-medium leading-[28px]">
                                        {speaker?.name}
                                      </p>
                                      <p className="description text-[#2a2a2a] leading-5 mt-1">
                                        {speaker?.description}
                                      </p>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                      </div>
                    </>
                  )}

                  {isAnyItemASession && (
                    <div className=" flex flex-col md:flex-row  md:gap-x-6 lg:gap-x-12 xl:gap-x-16">
                      <div>
                        <p className=" bg-tms-blue rounded-r-md w-fit py-2 md:py-3 px-4 md:px-6 flex items-center gap-x-1.5 md:gap-x-2.5 text-base md:text-lg lg:text-2xl text-white leading-3 font-bold conference-time relative">
                          <MdAccessAlarms />
                          {item.time}
                        </p>
                        <div className="px-5 w-fit ">
                          {item?.isSponsor && (
                            <div className="mt-auto- mt-7">
                              <p className="text-sm md:text-base lg:text-2xl font-semibold text-dark-alter mb-3">
                                {item?.sponsorHeading}
                              </p>
                              <Image
                                src={item?.sponsorImageUrl ?? ""}
                                alt={item?.sponsorHeading}
                                width={360}
                                height={80}
                                className="w-fit object-contain"
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="px-5 sm:px-8 md:pr-8 lg:pr-10 mt-7 md:mt-0 ">
                        <h6 className="text-tms-blue text-xl leading-3 font-medium">
                          {item?.sessionId}
                        </h6>
                        <span
                          className="block w-[50px] h-[2px] mt-3"
                          style={{
                            background:
                              "linear-gradient(90deg, #1C75BC 0%, #4D1592 100%)",
                          }}
                        />

                        <h4 className="text-lg md:text-xl lg:text-2xl gradient-text w-fit font-bold leading-4 md:leading-3 lg:leading-2 mt-3 mb-2">
                          {item?.title}
                        </h4>

                        <div className="space-y-4">
                          <p className="description text-dark-alter">
                            This session explores the integration of AI and
                            emerging technologies in reshaping the entire
                            transport and logistics value chain, including
                            ports, shipping, and logistics. It will address the
                            operational and strategic impact of digitalisation,
                            automation, and data intelligence on efficiency,
                            safety, and competitiveness. 
                          </p>
                          <p className="description text-dark-alter">
                            Topics will include: 
                          </p>

                          <div className="space-y-1">
                            <h4 className="description  font-bold text-dark-alter">
                              AI in Maritime and Port Operations: From
                              Automation to Autonomy
                            </h4>
                            <p className="description text-dark-alter">
                              How AI is enabling autonomous vessels, smart
                              scheduling, port optimization, andreal-time
                              decision-making.
                            </p>
                          </div>
                          <div className="space-y-1">
                            <h4 className="description  font-bold text-dark-alter">
                              AI in Maritime and Port Operations: From
                              Automation to Autonomy
                            </h4>
                            <p className="description text-dark-alter">
                              How AI is enabling autonomous vessels, smart
                              scheduling, port optimization, andreal-time
                              decision-making.
                            </p>
                          </div>
                          <div className="space-y-1">
                            <h4 className="description  font-bold text-dark-alter">
                              AI in Maritime and Port Operations: From
                              Automation to Autonomy
                            </h4>
                            <p className="description text-dark-alter">
                              How AI is enabling autonomous vessels, smart
                              scheduling, port optimization, andreal-time
                              decision-making.
                            </p>
                          </div>
                          <div className="space-y-1">
                            <h4 className="description  font-bold text-dark-alter">
                              AI in Maritime and Port Operations: From
                              Automation to Autonomy
                            </h4>
                            <p className="description text-dark-alter">
                              How AI is enabling autonomous vessels, smart
                              scheduling, port optimization, andreal-time
                              decision-making.
                            </p>
                          </div>
                        </div>

                        {item?.moderator && (
                          <div className="mt-4 md:mt-6">
                            <p className="text-dark text-base md:text-lg lg:text-2xl font-semibold leding-5">
                              Moderator
                            </p>

                            <div className="mt-3 space-y-4">
                              {item?.moderator?.map(
                                (moderatorItem, moderatorIndex) => {
                                  return (
                                    <div
                                      className="flex gap-x-3"
                                      key={moderatorIndex + 1}
                                    >
                                      <Image
                                        src={moderatorItem?.imageUrl}
                                        alt={moderatorItem?.name}
                                        width={63}
                                        height={63}
                                        className="rounded-md w-[65px] h-[65px]"
                                      />
                                      <div>
                                        <p className="text-base md:text-lg lg:text-xl text-[#2a2a2a] font-medium leading-[28px]">
                                          {moderatorItem?.name}
                                        </p>
                                        <p className="description text-[#2a2a2a] leading-5 md:mt-1">
                                          {moderatorItem?.description}
                                        </p>
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        )}

                        {item?.speakers && (
                          <div className="mt-5  lg:mt-8">
                            <p className="text-dark text-base md:text-lg lg:text-2xl font-semibold leding-5">
                              Speakers
                            </p>

                            <div className="mt-3  grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                              {item?.speakers?.map(
                                (moderatorItem, moderatorIndex) => {
                                  return (
                                    <div
                                      className="flex gap-x-3"
                                      key={moderatorIndex + 1}
                                    >
                                      <Image
                                        src={moderatorItem?.imageUrl}
                                        alt={moderatorItem?.name}
                                        width={63}
                                        height={63}
                                        className="rounded-md shrink-0  w-[65px] h-[65px]"
                                      />
                                      <div>
                                        <p className="text-base md:text-lg lg:text-xl text-[#2a2a2a] font-medium leading-[28px]">
                                          {moderatorItem?.name}
                                        </p>
                                        <p className="description text-[#2a2a2a] leading-5 md:mt-1">
                                          {moderatorItem?.description}
                                        </p>
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ConferenceProgrammeSectionTwo;
