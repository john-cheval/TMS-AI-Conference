import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(
    80,
    "delegate-booking-terms-and-conditions",
    false
  );
}

const DelegateBookingTermsAndCondtions = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=80`
  );

  const generalSettings = pageContent?.gernalsettings;
  const conferenceData =
    pageContent?.gernalsettings?.current_year_coneference[0];
  const { AWARD_YEAR } = generalSettings?.general_settings;
  const {
    page_top_banner,
    page_description,
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
      <div className="section-wrapper pt-5 md:pt-7 lg:pt-12 xl:pt-16 2xl:pt-20 pb-8 md:pb-10 lg:pb-14">
        <div
          className="sponsor-terms-description"
          dangerouslySetInnerHTML={{
            __html: page_description?.description,
          }}
        />
      </div>
      <div className="section-wrapper pb-16 md:pb-20  sponsor-wrapper">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} isAssosiation={true} />
        <Sponsors data={media_partners} />
      </div>
    </>
  );
};

export default DelegateBookingTermsAndCondtions;
