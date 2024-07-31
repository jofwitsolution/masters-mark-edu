"use client";

import React from "react";

const FacebookPage = () => {
  return (
    <section className="padding-vertical bg-tertiary-200">
      <div className="max-width flex justify-center">
        <div className="w-full md:w-[550px] h-[650px]">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fweb.facebook.com%2Freel%2F2151998205173221%2F&show_text=true&t=0"
            width="100%"
            height="100%"
            className="border-none overflow-hidden"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </div>
        {/* <iframe
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fweb.facebook.com%2Freel%2F2151998205173221%2F&show_text=true&width=267&t=0"
          //   width="267"
          //   height="591"
          className="border-none overflow-hidden w-full md:w-[500px] h-[591px]"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe> */}
      </div>
    </section>
  );
};

export default FacebookPage;
