import HomeSectionOne from "@/components/Home/Section1";
import HomeSectionTwo from "@/components/Home/Section2";
import HomeSectionThree from "@/components/Home/Section3";
import HomeSectionFour from "@/components/Home/Section4";
import HomeSectionFive from "@/components/Home/Section5";
import HomeSectionSix from "@/components/Home/Section6";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(70, "", false);
}

const Home = async () => {
  const homePageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=70`
  );

  const conferenceYear =
    homePageContent?.gernalsettings?.current_year_coneference[0];

  return (
    <>
      <HomeSectionOne
        callForPaperDate={conferenceYear?.Call_for_papers_date}
        earlyBirdsDate={conferenceYear?.Early_Bird_date}
        eventDate={conferenceYear?.end_date}
        {...homePageContent?.data?.section_list?.home_banner}
      />
      <HomeSectionTwo
        {...homePageContent?.data?.section_list?.about_the_conference}
      />
      <HomeSectionThree
        {...homePageContent?.data?.section_list?.highlights_from_past_edition}
      />
      <HomeSectionFour
        {...homePageContent?.data?.section_list?.agenda_featured_speakers}
      />
      <HomeSectionFive
        {...homePageContent?.data?.section_list?.conference_speakers}
      />
      <HomeSectionSix
        {...homePageContent?.data?.section_list?.agenda_featured_speakers_2}
      />
    </>
  );
};

export default Home;
