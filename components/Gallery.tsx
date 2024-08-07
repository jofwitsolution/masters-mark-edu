"use client";

import { galleryImages } from "@/constants/gallery-images";
import React from "react";
import ImageGallery from "react-image-gallery";

const Gallery = () => {
  return (
    <div>
      <ImageGallery items={galleryImages} />
    </div>
  );
};

export default Gallery;
