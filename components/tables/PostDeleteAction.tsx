"use client";

import { useState, useTransition } from "react";
import DialogWrapper from "../dialog/DialogWrapper";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { usePathname } from "next/navigation";
import { Trash2 } from "lucide-react";
import { IPost } from "@/lib/models/Post";
import LoaderOverlay from "../loaders/LoaderOverlay";
import { deletePost } from "@/lib/actions/post.actions";

const PostDeleteAction = ({ post }: { post: IPost }) => {
  const pathname = usePathname();

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const HandleDelete = async () => {
    startTransition(() => {
      deletePost(post._id, pathname).then((data) => {
        if (data?.error) {
          toast.error(data?.error);
        } else {
          setDialogOpen(false);
          toast.success("Post deleted successfully");
        }
      });
    });
  };

  return (
    <div className="">
      <span onClick={() => setDialogOpen(true)} className="cursor-pointer">
        <Trash2 size={14} />
      </span>
      <DialogWrapper
        title="Delete Post"
        dialogState={isDialogOpen}
        containerStyle="max-sm:w-[18.75rem] sm:max-w-[24.375rem]"
        handleDialogState={() => {
          setDialogOpen(!isDialogOpen);
        }}
      >
        <div className="space-y-4">
          <div className="paragraph-grey max-sm:text-[14px] max-sm:leading-[22px]">
            <p className="">Are you sure you want to delete the post?</p>
            <p>Deleted posts cannot be recovered.</p>
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

      {isPending && <LoaderOverlay text="Deleting..." />}
    </div>
  );
};

export default PostDeleteAction;
