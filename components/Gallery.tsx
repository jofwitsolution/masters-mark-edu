"use client";

// import { galleryImages } from "@/constants/gallery-images";
import { IMedia } from "@/lib/models/Media";
import React from "react";
import ImageGallery from "react-image-gallery";

const Gallery = ({ media }: { media: IMedia[] }) => {
  console.log(media);

  const images = media.map((media) => ({ original: media.url }));
  return (
    <div>
      <ImageGallery items={images} />
    </div>
  );
};

export default Gallery;
