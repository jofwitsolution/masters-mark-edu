import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Programs = () => {
  return (
    <>
      <div className="flex gap-1 flex-wrap">
        <Link
          href={"/schools/creche"}
          className="w-full sm:w-[300px] group flex items-center justify-center gap-3 h-[160px] bg-primary-100 hover:bg-primary-foreground rounded text-white"
        >
          <h3 className="h3-semibold">Creche</h3>
          <span className="inline-block transform rotate-[-45deg] transition-transform duration-300 group-hover:rotate-0">
            <ArrowRight />
          </span>
        </Link>
        <Link
          href={"/schools/preschool"}
          className="w-full sm:w-[300px] group flex items-center justify-center gap-3 h-[160px] bg-primary-100 hover:bg-primary-foreground rounded text-white"
        >
          <h3 className="h3-semibold">Preschool/Nursery</h3>
          <span className="inline-block transform rotate-[-45deg] transition-transform duration-300 group-hover:rotate-0">
            <ArrowRight />
          </span>
        </Link>

        <Link
          href={"/schools/primary"}
          className="w-full sm:w-[300px] group flex items-center justify-center gap-3 h-[160px] bg-primary-100 hover:bg-primary-foreground rounded text-white"
        >
          <h3 className="h3-semibold">Primary School</h3>
          <span className="inline-block transform rotate-[-45deg] transition-transform duration-300 group-hover:rotate-0">
            <ArrowRight />
          </span>
        </Link>
        <Link
          href={"/schools/after-school-club"}
          className="w-full sm:w-[300px] group flex items-center justify-center gap-3 h-[160px] bg-primary-100 hover:bg-primary-foreground rounded text-white"
        >
          <h3 className="h3-semibold">The Afterschool club</h3>
          <span className="inline-block transform rotate-[-45deg] transition-transform duration-300 group-hover:rotate-0">
            <ArrowRight />
          </span>
        </Link>
      </div>
    </>
  );
};

export default Programs;
