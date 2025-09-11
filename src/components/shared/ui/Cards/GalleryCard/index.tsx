import { PhotoGalleryType } from "@/components/Gallery/GalleryAlbums";
import Image from "next/image";
import React from "react";

const GalleryCard = ({ image_url, title, slug }: PhotoGalleryType) => {
  console.log();
  return (
    <div className="responsive-radius overflow-hidden relative cursor-pointer">
      <Image
        src={image_url}
        alt={title || slug || "image"}
        width={400}
        height={300}
        sizes="100vw"
        className="w-full h-auto object-cover"
      />
      {title && (
        <>
          <div className="CardGraient absolute bottom-0 left-0 w-full h-full max-h-[190px]" />
          <p className="description text-white font-bold absolute z-50 bottom-5 lg:bottom-8 left-4 md:left-6 lg:left-10">
            {title}
          </p>
        </>
      )}
    </div>
  );
};

export default GalleryCard;
