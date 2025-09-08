import BecomeSponsorForm from "@/components/Forms/BecomeSponsor";
import HomeSectionTwo from "@/components/Home/Section2";
import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import SponsorBenifits from "@/components/Sponsors/SponsorBenifits";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import React from "react";

const WhySponsor = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=71`
  );
  return (
    <>
      <SharedTopSection
        {...pageContent?.data?.section_list?.page_top_banner}
        title={pageContent?.data?.name}
      />
      <HomeSectionTwo
        {...pageContent?.data?.section_list?.about_the_conference}
      />
      <SponsorBenifits
        {...pageContent?.data?.section_list?.key_sponsorship_benefits}
      />
      <BecomeSponsorForm
        {...pageContent?.data?.section_list?.become_a_sponsor_form}
      />

      <div className="section-wrapper pb-16 md:pb-20">
        <Sponsors
          data={pageContent?.data?.section_list?.sponsors}
          isSponsor={true}
        />
        <Sponsors
          data={pageContent?.data?.section_list?.supporting_associations}
        />
        <Sponsors data={pageContent?.data?.section_list?.media_partners} />
      </div>
    </>
  );
};

export default WhySponsor;
