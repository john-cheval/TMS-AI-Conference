import Image, { StaticImageData } from "next/image";
import React from "react";

export type AgendacardPropsType = {
  imageUrl: string | StaticImageData;
  name: string;
};

const AgendaCard = ({ imageUrl, name }: AgendacardPropsType) => {
  return (
    <div className="relative h-full rounded-sm overflow-hidden">
      {" "}
      <Image
        src={imageUrl}
        alt={name}
        width={650}
        height={190}
        className="w-full h-auto object-cover "
      />
      <div className="CardGraient  absolute bottom-0 left-0 w-full h-full max-h-[120px] z-10" />
      <p className="overlay-description">{name}</p>
    </div>
  );
};

export default AgendaCard;
