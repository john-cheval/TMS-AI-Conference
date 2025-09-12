import Image from "next/image";
import Link from "next/link";
import React from "react";
import ai from "@/assets/shared/ai_small_24.svg";
import ContactForm from "@/components/Forms/ContactForm";

const ContactSectionOne = () => {
  return (
    <section className="section-wrapper  pt-8 m lg:pt-10 xl:pt-16 pb-8 md:pb-12 lg:pb-16 xl:pb-20">
      <div className="px-5 md:px-8 lg:px-11 pt-8 md:pt-10 lg:pt-14 xl:pt-16 2xl:pt-24 pb-6 md:pb-12 bg-[#F4F4F4] rounded-2xl gap-x-12 lg:gap-x-16 xl:gap-x-24 grid grid-cols-1  md:grid-cols-2">
        <div>
          <h3 className="main-heading-2  !text-dark-alter pb-4 border-b border-b-tms-blue">
            The Maritime Standard Tanker Conference Team.
          </h3>

          <div className="py-5 lg:py-8 border-b border-b-tms-blue">
            <h5 className="gradient-text w-fit text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-3">
              Trevor Pereira
            </h5>
            <p className="description text-black font-bold mt-2">
              Managing Director
            </p>

            <div className="flex gap-2 md:gap-3 flex-wrap lg:flex-nowrap lg:gap-x-5 mt-3 md:mt-4">
              <Link
                href={"tel: +971 50 6255963"}
                className="description text-dark-alter leading-3"
              >
                M: +971 50 6255963
              </Link>
              <Link
                href={"mailto: trevor@flagshipme.com"}
                className="description text-dark-alter leading-3"
              >
                E: trevor@flagshipme.com
              </Link>
            </div>
          </div>

          <div className="py-5 lg:py-8 ">
            <h5 className="gradient-text w-fit text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-3">
              Ammaar Murtaza
            </h5>
            <p className="description text-black font-bold mt-2">
              Sales Manager
            </p>

            <div className="mt-3 md:mt-4">
              <div className="flex gap-2 md:gap-3 flex-wrap lg:flex-nowrap lg:gap-x-5 mb-2 md:mb-3  lg:mb-3">
                <Link
                  href={"tel: 971 55 245 4466"}
                  className="description text-dark-alter leading-3"
                >
                  M: 971 55 245 4466
                </Link>
                <Link
                  href={"tel: +971 4 380 5556"}
                  className="description text-dark-alter leading-3"
                >
                  T: +971 4 380 5556
                </Link>
              </div>
              <Link
                href={"mailto: ammaar@flagshipme.com"}
                className="description text-dark-alter leading-3 "
              >
                E: ammaar@flagshipme.com
              </Link>
            </div>
          </div>
        </div>

        <div>
          <p className="flex  gap-x-2.5 text-xl mt-6 md:mt-0 md:text-2xl font-bold leading-3 text-dark-alter ">
            <Image
              src={ai}
              alt="TMS AI"
              width={24}
              height={24}
              className="w-full h-fit object-contain max-w-[24px] mt-1"
            />
            Use the form below to send us an enquiry
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSectionOne;
