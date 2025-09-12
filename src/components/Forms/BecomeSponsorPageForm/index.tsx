import React from "react";
interface AboutYouData {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  contact: number;
  linkedinUrl: string;
  headshotFile: string;
  bio: string;
}

interface CompanyData {
  designation: string;
  company: string;
  natureOfCompany: string;
  ifOthers: string;
}

interface PresentationData {
  presentationTitle: string;
  abstract: string;
  takewayas: string;
  aboutPresentation: string;
  paperSubmit: string;
}

type FormData = {
  aboutYou: AboutYouData;
  aboutCompany: CompanyData;
  aboutPresentation: PresentationData;
};

const BecomeSponsorPageForm = () => {
  return (
    <form>
      <div className=" bg-tms-blue rounded-2xl">
        <h4 className="main-heading-2 !text-white px-[72px] pt-14 pb-20">
          About You
        </h4>
      </div>
    </form>
  );
};

export default BecomeSponsorPageForm;
