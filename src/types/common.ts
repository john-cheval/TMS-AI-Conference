import React from "react";

export type NavLinkType = {
  id: number;
  title: string;
  url: string;
};

export type ButtonPropsType = {
  children: React.ReactNode;
  hrefs?: string;
  isGradient?: boolean;
  isIcon?: boolean;
  isLink?: boolean;
};

export type sideBarPropsType = {
  id: number | string;
  title: string;
  url: string;
  children: boolean | NavLinkType[];
};

export type SideBarComponentProps = {
  sideBarLinksData: sideBarPropsType[];
};
