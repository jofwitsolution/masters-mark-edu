import React from "react";
import SpinCircleLoader from "./SpinCircleLoader";

interface Props {
  text?: string;
}

const LoaderOverlay = ({ text = "Loading..." }: Props) => {
  return (
    <div className="fixed inset-0 z-[9500] h-screen w-full">
      <div className="flex size-full flex-col items-center justify-center gap-6 bg-[rgba(0,0,0,0.7)]">
        <SpinCircleLoader />
        <span className="text-[1.2rem] font-[600] text-white">{text}</span>
      </div>
    </div>
  );
};

export default LoaderOverlay;
