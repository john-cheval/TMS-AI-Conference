import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import WhoShouldAttendSectionOne from "@/components/WhoShouldAttend/Section1";
import WhyAttendSection from "@/components/WhoShouldAttend/Section2/WhyAttendSection";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(78, "who-should-attend", false);
}

const WhoShouldAttend = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=78`
  );
  const generalSettings = pageContent?.gernalsettings;
  const conferenceData =
    pageContent?.gernalsettings?.current_year_coneference[0];
  const { AWARD_YEAR } = generalSettings?.general_settings;

  const {
    page_top_banner,
    who_should_attend,
    why_attend,
    sponsors,
    supporting_associations,
    media_partners,
  } = pageContent?.data?.section_list;
  console.log("conferenceData",conferenceData)
  return (
    <>
      <SharedTopSection
        {...page_top_banner}
        title={pageContent?.data?.name}
        awardTitle={AWARD_YEAR?.title}
        conferenceTitle={conferenceData?.Coneference_title}
        conferenceLocation={conferenceData?.location}
        conferenceDate={conferenceData?.end_date}
      />
      <WhoShouldAttendSectionOne {...who_should_attend} />
      <WhyAttendSection {...why_attend} />
      {
        (sponsors.data.length > 0 || supporting_associations.data.length > 0 || media_partners.data.length > 0) &&
          (
          <div className="section-wrapper pb-12 md:pb-20 sponsor-wrapper ">
            <Sponsors data={sponsors} isSponsor={true} />
            <Sponsors data={supporting_associations} isAssosiation={true} />
            <Sponsors data={media_partners} />
          </div>
          ) 
      }
    </>
  );
};

export default WhoShouldAttend;
