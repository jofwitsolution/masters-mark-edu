"use client";

import { useState, useTransition } from "react";
import DialogWrapper from "../dialog/DialogWrapper";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { usePathname } from "next/navigation";
import { IReview } from "@/lib/models/Review";
import LoaderOverlay from "../loaders/LoaderOverlay";
import { approveReview } from "@/lib/actions/review.actions";

const ReviewApproveAction = ({ review }: { review: IReview }) => {
  const pathname = usePathname();

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const HandleDelete = async () => {
    startTransition(() => {
      approveReview({
        reviewId: review._id,
        isApproved: !review.isApproved,
        path: pathname,
      }).then((data) => {
        if (data?.error) {
          toast.error(data?.error);
        } else {
          setDialogOpen(false);
          if (review.isApproved) {
            toast.success("Review approval reversed");
          } else {
            toast.success("Review approved");
          }
        }
      });
    });
  };

  return (
    <div className="">
      <span onClick={() => setDialogOpen(true)} className="cursor-pointer">
        {review.isApproved ? (
          <span className="text-green-500 font-semibold">Approved</span>
        ) : (
          <span className="text-yellow-500 font-semibold">Approve</span>
        )}
      </span>
      <DialogWrapper
        title={review.isApproved ? "Reverse Approval" : "Approve Review"}
        dialogState={isDialogOpen}
        containerStyle="max-sm:w-[18.75rem] sm:max-w-[24.375rem]"
        handleDialogState={() => {
          setDialogOpen(!isDialogOpen);
        }}
      >
        <div className="space-y-4">
          <div className="paragraph-grey max-sm:text-[14px] max-sm:leading-[22px]">
            {review.isApproved ? (
              <p className="">
                Are you sure you want to change this review from approved to
                unapproved?
              </p>
            ) : (
              <p className="">Are you sure you want to approve this review?</p>
            )}
          </div>

          <div className="flex justify-center gap-5 mt-6">
            <Button
              disabled={isPending}
              onClick={HandleDelete}
              className="rounded bg-green-500 font-medium text-white hover:bg-green-400"
            >
              Confirm
            </Button>
            <Button
              disabled={isPending}
              onClick={() => setDialogOpen(false)}
              className="rounded bg-red-500 font-medium text-white hover:bg-red-400"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogWrapper>

      {isPending && <LoaderOverlay text="Please Wait..." />}
    </div>
  );
};

export default ReviewApproveAction;
