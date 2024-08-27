import React from "react";
import FacebookPage from "@/components/FacebookPage";
import Gallery from "@/components/Gallery";
import { Metadata } from "next";
import { getAllMedia } from "@/lib/actions/media.action";
import { sanitizeData } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Site Gallery | Master'sMark",
  description:
    "Our main goal is to provide a comprehensive education that fosters intellectual curiosity, emotional well-being, and moral strength in each child.",
  keywords: [
    "mastersmark",
    "master'smark",
    "education",
    "masters mark education",
    "child education",
    "masters mark child education",
    "gallery",
  ],
};

const page = async () => {
  const mediaResult = await getAllMedia();

  return (
    <div>
      <div className="max-width padding-vertical">
        <h1 className="mb-8 h1-gabriela text-center">SITE GALLERY</h1>

        <Gallery media={(await sanitizeData(mediaResult.media)) ?? []} />
      </div>

      <FacebookPage />
    </div>
  );
};

export default page;
