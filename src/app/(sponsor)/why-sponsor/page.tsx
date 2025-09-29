import BecomeSponsorForm from "@/components/Forms/BecomeSponsor";
import HomeSectionTwo from "@/components/Home/Section2";
import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import SponsorBenifits from "@/components/Sponsors/SponsorBenifits";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(71, "why-sponsor", false);
}

const WhySponsor = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=71`
  );
  const generalSettings = pageContent?.gernalsettings;
  const conferenceData =
    pageContent?.gernalsettings?.current_year_coneference[0];
  const { AWARD_YEAR } = generalSettings?.general_settings;

  const {
    page_top_banner,
    about_the_conference,
    key_sponsorship_benefits,
    become_a_sponsor_form,
    sponsors,
  } = pageContent?.data?.section_list;
  return (
    <>
      <SharedTopSection
        {...page_top_banner}
        title={pageContent?.data?.name}
        awardTitle={AWARD_YEAR?.title}
        conferenceTitle={conferenceData?.Coneference_title}
        conferenceLocation={conferenceData.location}
        conferenceDate={conferenceData.end_date}
      />
      <HomeSectionTwo {...about_the_conference} isSponsor={true} />
      <SponsorBenifits {...key_sponsorship_benefits} />
      <BecomeSponsorForm {...become_a_sponsor_form} whySponsorPage={true} />

      <div className="section-wrapper pb-16 md:pb-20">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors
          data={pageContent?.data?.section_list?.supporting_associations}
        />
        <Sponsors data={pageContent?.data?.section_list?.media_partners} />
      </div>
    </>
  );
};

export default WhySponsor;
