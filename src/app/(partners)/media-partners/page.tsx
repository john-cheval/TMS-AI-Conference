import BecomeSponsorForm from "@/components/Forms/BecomeSponsor";
import SharedTopSection from "@/components/shared/Sections/TopSection";
import SponsorsList from "@/components/Sponsors/SponsorsList";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import React from "react";

const MediaPartners = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=75`
  );
  const generalSettings = pageContent?.gernalsettings;
  const conferenceData =
    pageContent?.gernalsettings?.current_year_coneference[0];
  const { AWARD_YEAR } = generalSettings?.general_settings;
  const SponsorsData = pageContent?.data?.section_list?.media_partners?.data;
  return (
    <>
      {" "}
      <SharedTopSection
        {...pageContent?.data?.section_list?.page_top_banner}
        title={pageContent?.data?.name}
        awardTitle={AWARD_YEAR?.title}
        conferenceTitle={conferenceData?.Coneference_title}
        conferenceLocation={conferenceData.location}
        conferenceDate={conferenceData.end_date}
      />
      <SponsorsList sponsors={SponsorsData} isButton={false} />
      <div className="pb-5 md:pb-10">
        <BecomeSponsorForm
          {...pageContent?.data?.section_list?.become_a_sponsor_form}
        />
      </div>
    </>
  );
};

export default MediaPartners;
