import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import WhyAttendSectionOne from "@/components/why-attend/Section1";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(77, "why-attend", false);
}

const WhyAttend = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=77`
  );
  const generalSettings = pageContent?.gernalsettings;
  const conferenceData =
    pageContent?.gernalsettings?.current_year_coneference[0];
  const { AWARD_YEAR } = generalSettings?.general_settings;
  const {
    page_top_banner,
    why_attend_page,
    sponsors,
    supporting_associations,
    media_partners,
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
      <div
        className="section-wrapper pt-8 md:pt-10 lg:pt-12  xl:pt-14 description font-normal text-dark-alter pb-6 md:pb-0 text-center"
        dangerouslySetInnerHTML={{
          __html: why_attend_page?.description,
        }}
      />
      <WhyAttendSectionOne
        data={why_attend_page?.why_attend_list}
        buttonTitle={why_attend_page?.button_title}
        buttonLink={why_attend_page?.button_link}
      />
      <div className="section-wrapper pb-12 md:pb-20 sponsor-wrapper pt-6 md:pt-12 lg:pt-16 xl:pt-20">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} isAssosiation={true} />
        <Sponsors data={media_partners} />
      </div>
    </>
  );
};

export default WhyAttend;
