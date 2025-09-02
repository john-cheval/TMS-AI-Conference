import HomeSectionOne from "@/components/Home/Section1";
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

  // console.log(
  //   homePageContent?.gernalsettings?.current_year_coneference[0]
  //     ?.Early_Bird_date,
  //   "gghhfjhdfhjkfhuizh"
  // );

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
    </>
    // https://tmsai.girishandco.com/public/api/getmenu
  );
};

export default Home;
