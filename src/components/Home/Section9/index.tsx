import Sponsors from "@/components/shared/Sponsors";
import React from "react";

export type SectionNinePropTypes = {
  sponsors: any;
  assosiations: any;
  mediaParteners?: any;
};

function HomeSectionNine({
  sponsors,
  assosiations,
  mediaParteners,
}: SectionNinePropTypes) {
  return (
    <section className="section-wrapper pt-8 sm:pt-14 lg:pt-16 pb-24">
      <div>
        <div className="grid grid-cols-12 md:gap-x-10 lg:gap-x-16 2xl:gap-x-20 3xl:gap-x-24">
          <h3 className="main-heading text-dark-alter font-bold leading-3 md:leading-2 lg:leading-1 col-span-12 md:col-span-6">
            Industry Leaders Backing the Future of Maritime Intelligence
          </h3>

          <div className="md:space-y-5 lg:space-y-7 col-span-12 md:col-span-6 mt-5 md:mt-0">
            <p className="text-dark-alter description font-bold uppercase hidden md:block">
              Sponsors
            </p>
            <p className="text-dark-alter description">
              Meet the pioneering companies supporting TMS AITech 2025 — each
              aligned with the mission to drive innovation, sustainability, and
              transformation across the global maritime and transport landscape.
            </p>
          </div>
        </div>
        <div className="space-y-10 pt-5 md:pt-8 lg:pt-10">
          <Sponsors data={sponsors} isSponsor={true} />
          <Sponsors data={assosiations} />
          <Sponsors data={mediaParteners} />
        </div>
      </div>
    </section>
  );
}

export default HomeSectionNine;
