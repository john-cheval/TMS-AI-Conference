import React from 'react';
import SpeakersCard from "@/components/shared/ui/Cards/SpeakerCard";

type SpeakersCardData = {
  name: string;
  slug: string;
  post: string;
  company: string;
  image_url: string;
  presentation_pdf_url:string;
};

type Props = {
  data: SpeakersCardData[];
};

function SpeakerPresentation({data}:Props) {
    return (
        <section className="section-wrapper pt-3 md:pt-6 lg:pt-11 pb-7 md:pb-8 lg:pb-12 xl:pb-14">
            <div className="mt-3  md:mt-8  lg:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-3 lg:gap-4   ">
                {data &&
                data?.map((speaker, index) => {
                    return <SpeakersCard key={index} {...speaker} downloadEnable={true} />;
                })}
            </div>
        </section>
    );
}

export default SpeakerPresentation;