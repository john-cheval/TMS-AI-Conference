import React from "react";
import Logo from "@/assets/Logo/tms_logo.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="wrapper-nav">
      <Link href="/">
        <Image
          src={Logo}
          height={51}
          width={150}
          sizes="100vw"
          alt="TMS AI conference"
          className="w-full h-auto object-cover max-w-[150px]"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
