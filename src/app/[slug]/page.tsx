import React from 'react';
import generateMetadDataDetails from '@/lib/generateMetaData';
import { fetchData } from '@/lib/fetchData';
import { baseUrl } from '@/lib/api';
import { notFound } from "next/navigation";
import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import CommonPageView from '@/components/CommonPage';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return await generateMetadDataDetails(slug, `/${slug}`, true);
}

async function CommonPage({params}:{params:{slug:string}}) {
    const { slug } = await params;

    // const pageContent = await fetchData(`${baseUrl}/getmasterdetails?master_name=cms&slug=${slug}`);
    const pageContent = await fetchData(`${baseUrl}/getmasterdetails?master_name=cms&id=38`);

    console.log("pageContent",pageContent)

    if (!pageContent.data) notFound();

     const generalSettings = pageContent?.gernalsettings;
        const conferenceData =
            pageContent?.gernalsettings?.current_year_coneference[0];
        const { AWARD_YEAR } = generalSettings?.general_settings;
        const {
            page_top_banner,
            sponsors,
            supporting_associations,
            media_partners,
            archive_section,
        } = pageContent?.data?.section_list;

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
            {/* <CommonPageView {...pageContent.data.section_list} /> */}
            <CommonPageView {...pageContent?.data?.section_list} />
            {
            (sponsors?.data?.length > 0 || supporting_associations?.data?.length > 0 || media_partners?.data?.length > 0) &&
                (
            <div className="section-wrapper pb-16 md:pb-20  sponsor-wrapper">
                <Sponsors data={sponsors} isSponsor={true} />
                <Sponsors data={supporting_associations} isAssosiation={true} />
                <Sponsors data={media_partners} />
            </div>
            ) 
            }

        </>
    );
}

export default CommonPage;