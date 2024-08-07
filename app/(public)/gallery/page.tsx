import React from "react";
import FacebookPage from "@/components/FacebookPage";
import Gallery from "@/components/Gallery";

const page = () => {
  return (
    <div>
      <div className="max-width padding-vertical">
        <h1 className="mb-8 h1-gabriela text-center">SITE GALLERY</h1>

        <Gallery />
      </div>

      <FacebookPage />
    </div>
  );
};

export default page;
