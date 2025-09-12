import { navLinks } from "@/constants/linksdata";
import React from "react";
import Navbar from "@/components/shared/Navbar";

const ServerNavbar = () => {
  return (
    <>
      {/* Static HTML for SEO */}
      <nav
        aria-hidden="true"
        style={{ display: "none", visibility: "hidden" }}
        className="seo-nav hidden lg:flex items-center text-sm font-medium space-x-6 md:space-x-8 lg:space-x-10 uppercase"
      >
        {navLinks?.map(({ title, url }, index) => (
          <a
            key={index}
            /* title={attr_title} */ href={url}
            className="seo-nav-link"
          >
            {title}
          </a>
        ))}
      </nav>

      {/* Client-side enhanced navbar */}
      <Navbar navLinksData={navLinks} />
    </>
  );
};

export default ServerNavbar;
