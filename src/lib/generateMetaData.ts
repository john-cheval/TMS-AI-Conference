import { toast } from "sonner";
import { baseUrl } from "./api";

async function generateMetadDataDetails(
  id: number | string,
  path: string,
  slug = false,
  innerUrl = "cms"
) {
  try {
    const res = await fetch(
      `${baseUrl}/getmasterdetails?master_name=${innerUrl}&${
        slug ? "slug" : "id"
      }=${id}`
    );
    // console.log("baseURL",`${baseUrl}/getmasterdetails?master_name=${innerUrl}&${
    //     slug ? "slug" : "id"
    //   }=${id}`)
    const data = await res.json();
    // console.log("data",data)

    const title = data?.data?.meta_title || "TMS AI Conference";
    const description = data?.data?.meta_description || "TMS AI Conference";
    const image =
      data?.data?.meta_image ||
      "";

    return {
      title,
      description,
      alternates: {
        canonical: `https://tmsaitechconference.com/${path}`,
      },
      openGraph: {
        title,
        description,

        url: `https://tmsaitechconference.com/${path}`,
        type: "website",
        images: [{ url: image, width: 1200, height: 630, alt: title }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
    };
  } catch (error) {
    toast.error("Metadata fetch error:");
    return {
      title: "TMS AI Conference",
      description: "TMS AI Conference",
      openGraph: {
        title: "TMS AI Conference",
        description: "TMS AI Conference",
        images: [
          {
            url: "",
            width: 1200,
            height: 630,
            alt: "TMS AI Conference",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        images: [
          "",
        ],
      },
    };
  }
}

export default generateMetadDataDetails;
