import React from "react";

const SectionTwo = () => {
  return (
    <section className="padding-vertical max-width">
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex-1">
          <div className="mb-4 bg-primary py-2 px-6 md:py-4 md:px-10">
            <h1 className="text-white h3-semibold">Our Aim</h1>
          </div>
          <p className="paragraph-work_sans leading-[28px]">
            At master’smark we believe that children learn from everything that
            happens around them. We know that they learn best when they are
            involved and interested, secure and confident in themselves and
            their abilities. For these reasons our aim is to provide a
            stimulating, safe, happy environment; an environment where all
            children learn and impart their generation.
          </p>
        </div>
        <div className="flex-1">
          <div className="mb-4 bg-primary py-2 px-6 md:py-4 md:px-10">
            <h1 className="text-white h3-semibold">Mission & Vision</h1>
          </div>

          <p className="paragraph-work_sans leading-[28px]">
            <span className="font-semibold">Our Mission:</span> To lay a solid
            foundation for each child by providing world class education and
            recreation services for their social, psychological and intellectual
            development, towards making positive changes in their generation.
          </p>
          <p className="paragraph-work_sans leading-[28px]">
            <span className="font-semibold">Our Vision:</span> Raising Upright
            and Excellent Generation of Leader
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex-1">
          <div className="mb-4 bg-primary py-2 px-6 md:py-4 md:px-10">
            <h1 className="text-white h3-semibold">Core Values</h1>
          </div>
          <ul className="ml-4 list-disc paragraph-work_sans leading-[28px]">
            <li>
              <span className="font-semibold">W</span>: Working together
            </li>
            <li>
              <span className="font-semibold">I</span>: Integrity
            </li>
            <li>
              <span className="font-semibold">R</span>: Respect
            </li>
            <li>
              <span className="font-semibold">E</span>: Exellence
            </li>
            <li>
              <span className="font-semibold">S</span>: Safety
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="mb-4 bg-primary py-2 px-6 md:py-4 md:px-10">
            <h1 className="text-white h3-semibold">Belief Statements</h1>
          </div>

          <ul className="ml-4 list-disc paragraph-work_sans leading-[28px]">
            <li className="">
              Education is the shared responsibility of the school, student,
              family, community, and government.
            </li>
            <li className="">
              Education works best when there is mutual respect among pupils,
              teachers, and parents.
            </li>
          </ul>
        </div>
      </div>

      <div className="">
        <h1 className="mb-2 h3-semibold">School Colours</h1>
        <p className="paragraph-work_sans leading-[28px]">
          Royal Blue, Red, Yellow and Sky blue
        </p>
      </div>
    </section>
  );
};

export default SectionTwo;
