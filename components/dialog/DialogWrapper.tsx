"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Props {
  dialogState: boolean;
  handleDialogState: () => void;
  children: React.ReactNode;
  title: string;
  containerStyle: string;
  dialogClose?: boolean;
  customClose?: boolean;
}

const DialogWrapper = ({
  dialogState,
  dialogClose = false,
  customClose = true,
  handleDialogState,
  children,
  title,
  containerStyle,
}: Props) => {
  return (
    <Dialog open={dialogState}>
      <DialogOverlay className="z-[1300]">
        <DialogContent
          dialogClose={dialogClose}
          aria-describedby={undefined}
          className={`${containerStyle} z-[1500] rounded-[8px] bg-white pb-8 pt-4 sm:rounded-xl`}
        >
          <DialogHeader className="pb-2">
            <DialogTitle className="flex w-full justify-between text-[0.88rem] font-medium">
              <span className="font-inter md:text-[18px]">{title}</span>
              {customClose && (
                <Button
                  onClick={() => {
                    handleDialogState();
                  }}
                  type="button"
                  className="size-max p-0 bg-white"
                >
                  <Image
                    src="/icons/cancel.svg"
                    width={14}
                    height={14}
                    alt="cancel"
                  />
                </Button>
              )}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription />
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default DialogWrapper;
