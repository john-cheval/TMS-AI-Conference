import image1 from "./images/1.png";
import image2 from "./images/h.png";
import image3 from "./images/2.png";
import image4 from "./images/3.png";
import image5 from "./images/4.png";

export const conferenceData = [
  [
    {
      id: 1,
      time: "9:00",
      title: "Registration and refreshments",
      isSponsor: true,
      sponsorHeading: "Sponsor",
      sponsorImageUrl: image1,
      isSession: false,
      speakers: null,
      sessionId: null,
      sessionDescription: null,
      moderator: null,
    },
    {
      id: 2,
      time: "9:30",
      title: "Welcome Address",
      isSponsor: false,
      sponsorHeading: "",
      sponsorImageUrl: null,
      isSession: false,
      sessionId: null,
      sessionDescription: null,
      moderator: null,
      speakers: [
        {
          id: 1,
          imageUrl: image2,
          name: "Capt. Mohamed Al Ali",
          description:
            "Senior Vice President Offshore Logistics, ADNOC Logistics & Services",
        },
      ],
    },
  ],
  [
    {
      id: 1,
      time: "9:30",
      title: "Inaugural Address by ",
      isSponsor: false,
      sponsorHeading: "",
      sponsorImageUrl: null,
      isSession: false,
      sessionId: null,
      sessionDescription: null,
      moderator: null,
      speakers: [
        {
          id: 1,
          imageUrl: image2,
          name: "Capt. Mohamed Al Ali",
          description:
            "Senior Vice President Offshore Logistics, ADNOC Logistics & Services",
        },
      ],
    },
    {
      id: 2,
      time: "9:30",
      title: "Welcome Address",
      isSponsor: false,
      sponsorHeading: "",
      sponsorImageUrl: null,
      isSession: false,
      sessionId: null,
      sessionDescription: null,
      moderator: null,
      speakers: [
        {
          id: 1,
          imageUrl: image2,
          name: "Capt. Mohamed Al Ali",
          description:
            "Senior Vice President Offshore Logistics, ADNOC Logistics & Services",
        },
        {
          id: 2,
          imageUrl: image3,
          name: "Capt. Mohamed Al Ali",
          description:
            "Senior Vice President Offshore Logistics, ADNOC Logistics & Services",
        },
        {
          id: 3,
          imageUrl: image4,
          name: "Capt. Mohamed Al Ali",
          description:
            "Senior Vice President Offshore Logistics, ADNOC Logistics & Services",
        },
      ],
    },
  ],
  [
    {
      id: 1,
      time: "10:00",
      title:
        "Technology in Motion – AI-Driven Transformation of Transport and Trade “Where Intelligence Meets Operations”  ",
      isSponsor: true,
      sponsorHeading: "Sponsor",
      sponsorImageUrl: image5,
      isSession: true,
      sessionId: "Session 1",
      sessionDescription:
        "This session explores the integration of AI and emerging technologies in reshaping the entire transport and logistics value chain, including ports, shipping, and logistics. It will address the operational and strategic impact of digitalisation, automation, and data intelligence on efficiency, safety, and competitiveness. ",
      moderator: [
        {
          id: 1,
          imageUrl: image2,
          name: "Clive Woodbridge",
          description: "Conference Chairman & Editor, The Maritime Standard",
        },
      ],
      speakers: [
        {
          id: 1,
          imageUrl: image2,
          name: "Capt. Mohamed Al Ali",
          description:
            "Senior Vice President Offshore Logistics, ADNOC Logistics & Services",
        },
        {
          id: 2,
          imageUrl: image3,
          name: "Capt. Mohamed Al Ali",
          description:
            "Senior Vice President Offshore Logistics, ADNOC Logistics & Services",
        },
        {
          id: 3,
          imageUrl: image4,
          name: "Capt. Mohamed Al Ali",
          description:
            "Senior Vice President Offshore Logistics, ADNOC Logistics & Services",
        },
        {
          id: 1,
          imageUrl: image2,
          name: "Capt. Mohamed Al Ali",
          description:
            "Senior Vice President Offshore Logistics, ADNOC Logistics & Services",
        },
        {
          id: 2,
          imageUrl: image3,
          name: "Capt. Mohamed Al Ali",
          description:
            "Senior Vice President Offshore Logistics, ADNOC Logistics & Services",
        },
        {
          id: 3,
          imageUrl: image4,
          name: "Capt. Mohamed Al Ali",
          description:
            "Senior Vice President Offshore Logistics, ADNOC Logistics & Services",
        },
      ],
    },
  ],
  [
    {
      id: 1,
      time: "9:00",
      title: "Q&A Session",
      isSponsor: false,
      sponsorHeading: "",
      sponsorImageUrl: null,
      isSession: false,
      speakers: null,
      sessionId: null,
      sessionDescription: null,
      moderator: null,
    },
    {
      id: 2,
      time: "13:00",
      title: "Lunch",
      isSponsor: true,
      sponsorHeading: "Sponsor",
      sponsorImageUrl: image1,
      isSession: false,
      speakers: null,
      sessionId: null,
      sessionDescription: null,
      moderator: null,
    },
    {
      id: 3,
      time: "9:00",
      title: "Q&A Session",
      isSponsor: false,
      sponsorHeading: "",
      sponsorImageUrl: null,
      isSession: false,
      speakers: null,
      sessionId: null,
      sessionDescription: null,
      moderator: null,
    },
  ],
  [
    {
      id: 1,
      time: "9:00",
      title: "Registration and refreshments",
      isSponsor: true,
      sponsorHeading: "Sponsor",
      sponsorImageUrl: image1,
      isSession: false,
      speakers: null,
      sessionId: null,
      sessionDescription: null,
      moderator: null,
    },

    {
      id: 2,
      time: "9:00",
      title: "Registration and refreshments",
      isSponsor: false,
      sponsorHeading: "",
      sponsorImageUrl: null,
      isSession: false,
      speakers: null,
      sessionId: null,
      sessionDescription: null,
      moderator: null,
    },
  ],
  [
    {
      id: 1,
      time: "10:00",
      title:
        "Technology in Motion – AI-Driven Transformation of Transport and Trade “Where Intelligence Meets Operations”  ",
      isSponsor: true,
      sponsorHeading: "Sponsor",
      sponsorImageUrl: image5,
      isSession: true,
      sessionId: "Session 1",
      sessionDescription:
        "This session explores the integration of AI and emerging technologies in reshaping the entire transport and logistics value chain, including ports, shipping, and logistics. It will address the operational and strategic impact of digitalisation, automation, and data intelligence on efficiency, safety, and competitiveness. ",
      moderator: [
        {
          id: 1,
          imageUrl: image2,
          name: "Clive Woodbridge",
          description: "Conference Chairman & Editor, The Maritime Standard",
        },
      ],
      speakers: [
        {
          id: 1,
          imageUrl: image2,
          name: "Capt. Mohamed Al Ali",
          description:
            "Senior Vice President Offshore Logistics, ADNOC Logistics & Services",
        },
        {
          id: 2,
          imageUrl: image3,
          name: "Capt. Mohamed Al Ali",
          description:
            "Senior Vice President Offshore Logistics, ADNOC Logistics & Services",
        },
        {
          id: 3,
          imageUrl: image4,
          name: "Capt. Mohamed Al Ali",
          description:
            "Senior Vice President Offshore Logistics, ADNOC Logistics & Services",
        },
        {
          id: 1,
          imageUrl: image2,
          name: "Capt. Mohamed Al Ali",
          description:
            "Senior Vice President Offshore Logistics, ADNOC Logistics & Services",
        },
        {
          id: 2,
          imageUrl: image3,
          name: "Capt. Mohamed Al Ali",
          description:
            "Senior Vice President Offshore Logistics, ADNOC Logistics & Services",
        },
        {
          id: 3,
          imageUrl: image4,
          name: "Capt. Mohamed Al Ali",
          description:
            "Senior Vice President Offshore Logistics, ADNOC Logistics & Services",
        },
      ],
    },
  ],
  [
    {
      id: 1,
      time: "9:00",
      title: "Q&A Session",
      isSponsor: false,
      sponsorHeading: "",
      sponsorImageUrl: null,
      isSession: false,
      speakers: null,
      sessionId: null,
      sessionDescription: null,
      moderator: null,
    },
    {
      id: 2,
      time: "13:00",
      title: "Lunch",
      isSponsor: true,
      sponsorHeading: "Sponsor",
      sponsorImageUrl: image1,
      isSession: false,
      speakers: null,
      sessionId: null,
      sessionDescription: null,
      moderator: null,
    },
    {
      id: 3,
      time: "9:00",
      title: "Q&A Session",
      isSponsor: false,
      sponsorHeading: "",
      sponsorImageUrl: null,
      isSession: false,
      speakers: null,
      sessionId: null,
      sessionDescription: null,
      moderator: null,
    },
  ],
  [
    {
      id: 1,
      time: "9:00",
      title: "Registration and refreshments",
      isSponsor: true,
      sponsorHeading: "Sponsor",
      sponsorImageUrl: image1,
      isSession: false,
      speakers: null,
      sessionId: null,
      sessionDescription: null,
      moderator: null,
    },
    {
      id: 2,
      time: "9:30",
      title: "Welcome Address",
      isSponsor: false,
      sponsorHeading: "",
      sponsorImageUrl: null,
      isSession: false,
      speakers: null,
      sessionId: null,
      sessionDescription: null,
      moderator: null,
    },
  ],
  [
    {
      id: 1,
      time: "9:00",
      title: "Dinner",
      isSponsor: true,
      sponsorHeading: "Sponsor",
      sponsorImageUrl: image1,
      isSession: false,
      speakers: null,
      sessionId: null,
      sessionDescription: null,
      moderator: null,
    },
  ],
];
