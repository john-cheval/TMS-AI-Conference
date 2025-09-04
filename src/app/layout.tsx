import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import ServerNavbar from "@/components/shared/Navbar/ServerNavbar";
import Footer from "@/components/shared/Footer";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";

export const metadata: Metadata = {
  title:
    "TMS AI Conference 2025: AI in Materials & Manufacturing | TMS Specialty Congress",
  description:
    "Join the TMS AI Conference (AIM 2025), a key event within the TMS Specialty Congress in Anaheim, CA. Explore the latest in AI, machine learning, and manufacturing processes with global experts in materials science.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuLinks, generalSettingsData] = await Promise.all([
    fetchData(`${baseUrl}/getmenu`),
    fetchData(`${baseUrl}/getmasterdetails?master_name=cms&id=70`),
  ]);

  const { INSTAGRAM, TWITTER, FACEBOOK, LINKEDIN, YOUTUBE } =
    generalSettingsData?.gernalsettings?.general_settings;
  const socialMediaLinks = [
    INSTAGRAM,
    TWITTER,
    FACEBOOK,
    LINKEDIN,
    YOUTUBE,
  ].filter(Boolean);
  return (
    <html lang="en" className="h-full " suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased flex flex-col min-h-full `}
      >
        <ServerNavbar />
        <main className="flex-grow pt-[106px]">{children}</main>
        <Footer
          footerMainLinks={menuLinks[2]}
          footerBottom={menuLinks[3]}
          socialLinks={socialMediaLinks}
        />
      </body>
    </html>
  );
}
