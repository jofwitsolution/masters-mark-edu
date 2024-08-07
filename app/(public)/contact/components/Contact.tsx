import ContactForm from "@/components/forms/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className="max-width padding-vertical">
      <section>
        <h1 className="mb-8 max-w-[872px] mx-auto font-semibold font-work_sans text-center text-[32px] leading-[40px] md:text-[54px] md:leading-[60px]">
          Master&apos;sMark: A quintessential educational facility
        </h1>

        <p className="text-center max-w-[599px] mx-auto text-[20px] font-work_sans">
          We believe in the power of play to shape minds, build character, and
          create joyful learners for life
        </p>

        <div className="flex flex-col md:flex-row mt-10">
          <div className="md:w-[40%] bg-[#562D22] text-white py-8 md:py-16 px-4 sm:px-8 lg:px-16 max-md:rounded-t-[24px] md:rounded-s-[24px]">
            <h2 className="mb-5 font-[700] text-[26px] md:text-[32px] font-inter">
              Get in touch
            </h2>
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="flex gap-3">
                <span className="rounded-full max-sm:text-[24px] h-[48px] w-[48px] sm:h-[64px] sm:w-[64px] bg-[rgba(255,255,255,0.08)] flex justify-center items-center">
                  <Mail />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] font-inter font-medium text-[rgba(255,255,255,0.3)]">
                    EMAIL US
                  </span>
                  <span className="font-inter md:text-[20px]">
                    admin@mastersmarkedu.com
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="rounded-full max-sm:text-[24px] h-[48px] w-[48px] sm:h-[64px] sm:w-[64px] bg-[rgba(255,255,255,0.08)] flex justify-center items-center">
                  <Phone />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] font-inter font-medium text-[rgba(255,255,255,0.3)]">
                    PHONE NUMBER
                  </span>
                  <span className="font-inter text-[16px]">
                    +234 7046145189
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="rounded-full max-sm:text-[24px] h-[48px] w-[48px] sm:h-[64px] sm:w-[64px] bg-[rgba(255,255,255,0.08)] flex justify-center items-center">
                  <MapPin />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-inter text-[14px]">
                    19, Fatai Animashaun Street,
                  </span>
                  <span className="font-inter text-[14px]">
                    Magodo, Kosofe, Lagos, Nigeria.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[60%] bg-white px-4 sm:px-8 lg:px-16 py-8 md:py-16 max-md:rounded-b-[24px] md:rounded-e-[24px] shadow">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
