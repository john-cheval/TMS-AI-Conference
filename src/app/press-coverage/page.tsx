import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";
import PressCoverage from "@/components/PressCoverage";

export async function generateMetadata() {
  return await generateMetadDataDetails(93, "press-coverage", false);
}

const PressCoveragePage = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=93`
  );

  const generalSettings = pageContent?.gernalsettings;
  const conferenceData =
    pageContent?.gernalsettings?.current_year_coneference[0];
  const { AWARD_YEAR } = generalSettings?.general_settings;
  const {
    page_top_banner,
    sponsors,
    supporting_associations,
    media_partners,
    press_coverage,
  } = pageContent?.data?.section_list;
  return (
    <>
      <SharedTopSection
        {...page_top_banner}
        title={pageContent?.data?.name}
        awardTitle={AWARD_YEAR?.title}
        conferenceTitle={conferenceData?.Coneference_title}
        conferenceLocation={conferenceData?.location}
        conferenceDate={conferenceData?.award_date}
      />
      {
        press_coverage?.data.length > 0 ? (
          <PressCoverage data={press_coverage?.data} />
        ) : (
          <section className="section-wrapper py-[50px]">
            <p>No press coverage found.</p>
          </section>
        )
      }
      {
      (sponsors.data.length > 0 || supporting_associations.data.length > 0 || media_partners.data.length > 0) &&
        (
      <div className="section-wrapper pb-16 md:pb-20  space-y-5">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} />
        <Sponsors data={media_partners} />
      </div>
        )}
    </>
  );
};

export default PressCoveragePage;
