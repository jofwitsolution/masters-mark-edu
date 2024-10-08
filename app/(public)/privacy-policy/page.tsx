import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy & Policy | Master'sMark",
  description:
    "Master'sMark Education Creche, preschool/nursery, primary, and afterschool club Privacy Policy",
  keywords: [
    "mastersmark",
    "master'smark",
    "education",
    "masters mark education",
    "child education",
    "masters mark child education",
    "management",
    "master'smark management team",
    "master'smark reviews",
    "reviews",
    "privacy policy",
    "privacy and policy",
    "master'smark courses",
    "master'smark course",
    "masters mark schools",
    "mastersmark schools",
    "mastersmark creche",
    "mastersmark preschool nursery",
    "mastersmark primary school",
    "mastersmark afterschool club",
  ],
};

const Page = async () => {
  return (
    <div>
      <section className="bg-tertiary-200 py-4 md:py-10">
        <div className="max-width">
          <h1 className="h1-gabriela">Privacy Policy</h1>
        </div>
      </section>
      <section className="max-width padding-vertical leading-[28px]">
        <h2 className="text-[24px] font-inter">
          What personal data we collect and why we collect it
        </h2>
        <br />
        <h3 className="text-[20px]">Comments</h3>

        <p>
          When visitors leave comments on the site we collect the data shown in
          the comments form, and also the visitor’s IP address and browser user
          agent string to help spam detection.
        </p>
        <p>
          An anonymized string created from your email address (also called a
          hash) may be provided to the Gravatar service to see if you are using
          it. The Gravatar service privacy policy is available here:
          https://automattic.com/privacy/. After approval of your comment, your
          profile picture is visible to the public in the context of your
          comment.
        </p>

        <h3 className="text-[20px]">Media</h3>
        <p>
          If you upload images to the website, you should avoid uploading images
          with embedded location data (EXIF GPS) included. Visitors to the
          website can download and extract any location data from images on the
          website.
        </p>
        <br />
        <h3 className="text-[20px]">Media</h3>
        <br />
        <h3 className="text-[20px]">Cookies</h3>

        <p>
          If you leave a comment on our site you may opt-in to saving your name,
          email address and website in cookies. These are for your convenience
          so that you do not have to fill in your details again when you leave
          another comment. These cookies will last for one year.
        </p>

        <p>
          If you visit our login page, we will set a temporary cookie to
          determine if your browser accepts cookies. This cookie contains no
          personal data and is discarded when you close your browser.
        </p>

        <p>
          When you log in, we will also set up several cookies to save your
          login information and your screen display choices. Login cookies last
          for two days, and screen options cookies last for a year. If you
          select Remember Me, your login will persist for two weeks. If you log
          out of your account, the login cookies will be removed.
        </p>

        <p>
          If you edit or publish an article, an additional cookie will be saved
          in your browser. This cookie includes no personal data and simply
          indicates the post ID of the article you just edited. It expires after
          1 day.
        </p>

        <br />
        <h3 className="text-[20px]">Embedded content from other websites</h3>

        <p>
          Articles on this site may include embedded content (e.g. videos,
          images, articles, etc.). Embedded content from other websites behaves
          in the exact same way as if the visitor has visited the other website.
        </p>

        <p>
          These websites may collect data about you, use cookies, embed
          additional third-party tracking, and monitor your interaction with
          that embedded content, including tracking your interaction with the
          embedded content if you have an account and are logged in to that
          website.
        </p>

        <br />
        <h3 className="text-[20px]">How long we retain your data</h3>

        <p>
          If you leave a comment, the comment and its metadata are retained
          indefinitely. This is so we can recognize and approve any follow-up
          comments automatically instead of holding them in a moderation queue.
        </p>

        <p>
          For users that register on our website (if any), we also store the
          personal information they provide in their user profile. All users can
          see, edit, or delete their personal information at any time (except
          they cannot change their username). Website administrators can also
          see and edit that information.
        </p>
      </section>
    </div>
  );
};

export default Page;
