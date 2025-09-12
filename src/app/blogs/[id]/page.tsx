import DetailsSectionone from "@/components/PreRelease/DetailsSectionone";
import RecentlyViewed from "@/components/PreRelease/RecentlyViewed";
import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import React from "react";
interface Props {
  params: {
    id: string;
  };
}
const BogsInnerPage = async ({ params }: Props) => {
  const { id } = await params;
  const [pageContent, pageGallery] = await Promise.all([
    fetchData(`${baseUrl}/getmasterdetails?master_name=cms&id=17`),
    fetchData(`${baseUrl}/getmasterdetails?master_name=photogallery&id=${id}`),
  ]);
  const generalSettings = pageContent?.gernalsettings;
  const conferenceData =
    pageContent?.gernalsettings?.current_year_coneference[0];
  const { AWARD_YEAR } = generalSettings?.general_settings;

  const {
    page_top_banner,
    press_release,
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
      <DetailsSectionone isBlog={true} />
      <RecentlyViewed data={press_release?.data} />
      <div className="section-wrapper pb-16 md:pb-20  space-y-5">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} />
        <Sponsors data={media_partners} />
      </div>
    </>
  );
};

export default BogsInnerPage;
