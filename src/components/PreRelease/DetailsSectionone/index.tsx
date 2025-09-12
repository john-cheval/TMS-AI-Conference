import React from "react";
import image1 from "@/assets/press-release/1.jpg";
import image2 from "@/assets/press-release/2.png";
// import dayjs from "dayjs";
import Image from "next/image";
type Props = {
  isBlog?: boolean;
};

const DetailsSectionone = ({ isBlog = false }: Props) => {
  return (
    <section className="section-wrapper pt-6 md:pt-8 lg:pt-12 xl:pt-16 pb-8 md:pb-10 lg:pb-14 xl:pb-16">
      {!isBlog && (
        <>
          <h3 className="main-heading-2 !text-dark-alter">
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          </h3>
          <p className="description text-tms-purple font-medium !leading-3 mt-0.5 md:mt-1">
            {/* {dayjs(data[0]?.date).format("MMMM YYYY")} */}
            October 2025
          </p>
        </>
      )}

      <Image
        src={image1}
        alt={"jjj"}
        width={700}
        height={350}
        className={`responsive-radius overflow-hidden w-full h-auto object-cover ${
          isBlog ? "mb-3 md:mb-5 lg:mb-7" : "mt-2 md:mt-3"
        } `}
      />

      {isBlog && (
        <>
          <p className="description text-tms-purple font-medium !leading-3 mt-0.5 mb-1 flex justify-between md:justify-start gap-x-2">
            {/* {dayjs(data[0]?.date).format("MMMM YYYY")} */}
            October 2025 <span className="text-[#B3ABB9]">11:00 PM</span>
          </p>
          <h3 className="main-heading-2 !text-dark-alter">
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          </h3>
        </>
      )}

      <div className="mt-4 md:mt-7 lg:mt-8 xl:mt-12 grid grid-cols-12 gap-y-4 md:gap-y-0 md:gap-x-4 xl:gap-x-6 ">
        <Image
          src={image2}
          alt={"jjj"}
          width={700}
          height={350}
          className="responsive-radius  overflow-hidden w-full h-full object-cover col-span-12  md:col-span-5  2xl:col-span-4 shrink-0"
        />

        <div
          className="2xl:col-span-8 col-span-12  md:col-span-7 description text-dark-alter space-y-3 flex flex-col justify-center
        "
        >
          <p>
            The Maritime Standard Tanker Conference will take place on October
            30th 2025 at The Atlantis, The Palm, Dubai, UAE. The Maritime
            Standard Tanker Conference has been designed specifically for top
            executives involved in the tanker shipping market, and those
            companies which provide products and services to tanker shipping
            specialists.The Maritime Standard Tanker Conference will take place
            on October 30th 2025 at The Atlantis, The Palm, Dubai, UAE. The
            Maritime Standard Tanker Conference has been designed specifically
            for top executives involved in the tanker shipping market, and those
            companies which provide products and services to tanker shipping
            specialists.
          </p>
          <p>
            The Maritime Standard Tanker Conference will take place on October
            30th 2025 at The Atlantis, The Palm, Dubai, UAE. The Maritime
            Standard Tanker Conference has been designed specifically for top
            executives involved in the tanker shipping market
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailsSectionone;
