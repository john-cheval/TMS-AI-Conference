import SharedTopSection from "@/components/shared/Sections/TopSection";
import BecomeASpeakerSectionThree from "@/components/Speakers/BecomeASpeaker/BecomeASpeakerSection3";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import React from "react";

const BecomeASpeaker = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=82`
  );

  const generalSettings = pageContent?.gernalsettings;
  const conferenceData =
    pageContent?.gernalsettings?.current_year_coneference[0];
  const { AWARD_YEAR } = generalSettings?.general_settings;
  const { page_top_banner, become_a_speaker_page } =
    pageContent?.data?.section_list;
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
      <section className="section-wrapper">
        <div className="border-b border-b-light-grey-1 py-5 md:py-8 lg:py-10 xl:py-12 2xl:py-14 space-y-3 md:space-y-4 lg:space-y-5 ">
          <h3 className="main-heading text-tms-purple font-bold leading-3 lg:leading-2 xl:leading-1 text-left md:text-center">
            {become_a_speaker_page?.heading}
          </h3>
          <div
            className="description text-dark-alter leading-5 space-y-4 "
            dangerouslySetInnerHTML={{
              __html: become_a_speaker_page?.description,
            }}
          />
        </div>
      </section>

      <BecomeASpeakerSectionThree {...become_a_speaker_page} />
    </>
  );
};

export default BecomeASpeaker;
