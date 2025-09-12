import SmallTitle from "@/components/shared/ui/Headings/SmallTitle";
import React from "react";
import Packages from "../Packages/Packages";
import PackagesAccordion from "../PackagesAccordion";

type Props = {
  heading?: string;
  description?: string;
  data?: any;
};

const SponsorShipOppSectionOne = ({ heading, description, data }: Props) => {
  return (
    <section className="section-wrapper pt-6 md:pt-8 lg:pt-12 xl:pt-16 2xl:pt-20 pb-6 md:pb-8 lg:pb-12 ">
      <SmallTitle title={heading} />

      <div
        className="description text-dark-alter mt-6 border-b border-b-light-grey-1 md:border-b-0 pb-5 md:pb-0"
        dangerouslySetInnerHTML={{ __html: description ?? "" }}
      />
      <div className="hidden md:block mt-8 lg:mt-10 xl:mt-12 ">
        <Packages packageData={data} />
      </div>
      <div className="md:hidden">
        <PackagesAccordion packageData={data} />
      </div>
    </section>
  );
};

export default SponsorShipOppSectionOne;
