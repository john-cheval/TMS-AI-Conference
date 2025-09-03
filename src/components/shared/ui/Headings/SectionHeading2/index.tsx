import React from "react";

export type SectionHeadingpropsTypes = {
  title?: string;
};

const SectionHeadingTwo = ({ title }: SectionHeadingpropsTypes) => {
  return <h3 className="main-heading-2">{title}</h3>;
};

export default SectionHeadingTwo;
