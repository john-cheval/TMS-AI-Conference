"use client";
import SmallTitle from "@/components/shared/ui/Headings/SmallTitle";
import React, { useState,useEffect } from "react";
import Packages from "../Packages/Packages";
import PackagesAccordion from "../PackagesAccordion";
import BecomeSponsorForm from "@/components/Forms/BecomeSponsor";

type Props = {
  heading?: string;
  description?: string;
  data?: any;
  formData?: any;
};

const SponsorShipOppSectionOne = ({
  heading,
  description,
  data,
  formData,
}: Props) => {
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const [selectedPackageCategoryId, setSelectedPackageCategoryId] =
    useState("");
  const [packageOption, setPackageOption] = useState([]);

  useEffect(() => {
        packageOptions();
    },[]);

    const packageOptions = () => {
        const result:any = [];

        data.forEach((category:any) => {
            const categoryTitle = `${category.title} ${category.small_title}`;

            category.sponsors.forEach((sponsor:any) => {
            result.push({
                label: `${sponsor.title} - ${categoryTitle}`,
                value: `${sponsor.id} - (${sponsor.title} - ${categoryTitle})`
            });
            });
        });

        setPackageOption(result)
    };

    // console.log("selected",selectedPackage,selectedPackageCategoryId)

  return (
    <>
      <section className="section-wrapper pt-6 md:pt-8 lg:pt-12 xl:pt-16 2xl:pt-20 pb-6 md:pb-8 lg:pb-12 ">
        <SmallTitle title={heading} />

        <div
          className="description sponsorship text-dark-alter mt-6 border-b border-b-light-grey-1 md:border-b-0 pb-5 md:pb-0"
          dangerouslySetInnerHTML={{ __html: description ?? "" }}
        />
        <div className="hidden md:block mt-7 lg:mt-9 xl:mt-11 ">
          <Packages
            getSelectedPackage={setSelectedPackage}
            getSelectedPackageCategoryId={setSelectedPackageCategoryId}
            packageData={data}
          />
        </div>
        <div className="md:hidden">
          <PackagesAccordion 
            packageData={data} 
            getSelectedPackage={setSelectedPackage}
            getSelectedPackageCategoryId={setSelectedPackageCategoryId} 
          />
        </div>
      </section>

      <BecomeSponsorForm
        {...formData}
        isOpppotunity={true}
        packageName={selectedPackage}
        packageId={selectedPackageCategoryId}
        packageOption={packageOption}
      />
    </>
  );
};

export default SponsorShipOppSectionOne;
