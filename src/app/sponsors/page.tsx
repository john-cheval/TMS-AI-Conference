import SharedTopSection from "@/components/shared/Sections/TopSection";
import SponsorsList from "@/components/Sponsors/SponsorsList";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import React from "react";

const Sponsors = async () => {
  const sponsorPageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=70`
  );
  const SponsorsData = sponsorPageContent?.data?.section_list?.sponsors?.data;
  return (
    <>
      <SharedTopSection />
      <SponsorsList sponsors={SponsorsData} />
    </>
  );
};

export default Sponsors;
