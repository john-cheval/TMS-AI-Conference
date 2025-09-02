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

export type SectionOnePropsTyps = {
  small_title?: string;
  small_title_2?: string;
  main_heading?: string;
  location_heading?: string;
  call_for_papers_heading?: string;
  eirly_bird_offer_heading?: string;
  banner_image?: string | null;
  callForPaperDate?: string;
  earlyBirdsDate?: string;
  eventDate?: string;
  event_date_heading?: string;
};
