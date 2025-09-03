import React from "react";

export type SectionHeadingPropsTypes = {
  main_title?: string;
};
const SectionHeading = ({ main_title }: SectionHeadingPropsTypes) => {
  return (
    <h3
      className="home-about-heading  main-heading text-tms-black font-bold leading-3 lg:leading-2 xl:leading-1 "
      dangerouslySetInnerHTML={{ __html: main_title ?? "" }}
    ></h3>
  );
};

export default SectionHeading;
