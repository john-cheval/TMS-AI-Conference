"use client";
import { PhotoGalleryType } from "@/components/Gallery/GalleryAlbums";
import GalleryModal from "@/components/Gallery/GalleryModal";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Update the props interface to include the id and a boolean prop
interface GalleryCardProps extends PhotoGalleryType {
  isAlbumPage?: boolean;
  index?: number;
  gallery?: any;
  image_alt_tag?:string;
}

const GalleryCard = ({
  id,
  image_url,
  title,
  slug,
  isAlbumPage = false,
  index,
  gallery,
  image_alt_tag
  
}: GalleryCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(index);

  const handleOpenModal = (index: any) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  if (isAlbumPage) {
    return (
      <Link href={`/photo-gallery/${id}`}>
        <div className="responsive-radius overflow-hidden relative cursor-pointer">
          <Image
            src={image_url}
            alt={image_alt_tag ?? ""}
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
      </Link>
    );
  }

  return (
    <>
      <div
        onClick={() => handleOpenModal(index)}
        className="responsive-radius overflow-hidden relative cursor-pointer"
      >
        <Image
          src={image_url}
          // alt={title || slug || "image"}
          alt={image_alt_tag ?? ""}
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

      <AnimatePresence>
        {isModalOpen && (
          <GalleryModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            data={gallery}
            initialIndex={currentIndex}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryCard;
