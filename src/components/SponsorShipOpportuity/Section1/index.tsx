import SmallTitle from "@/components/shared/ui/Headings/SmallTitle";
import React from "react";
import Packages from "../Packages/Packages";

const heading = "Why Sponsor TMS AI Tech 2025";
const SponsorShipOppSectionOne = () => {
  return (
    <section className="section-wrapper pt-6 md:pt-8 lg:pt-12 xl:pt-16 2xl:pt-20 pb-6 md:pb-8 lg:pb-12 ">
      <SmallTitle title={heading} />

      <div className="description text-dark-alter mt-6 border-b border-b-light-grey-1 md:border-b-0 pb-5 md:pb-0">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like
        </p>
      </div>
      <div className="hidden md:block mt-8 lg:mt-10 xl:mt-12 ">
        <Packages />
      </div>
      <div className="md:hidden"></div>
    </section>
  );
};

export default SponsorShipOppSectionOne;
