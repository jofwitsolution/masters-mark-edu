"use client";

import { useState, useTransition } from "react";
import DialogWrapper from "../dialog/DialogWrapper";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { usePathname } from "next/navigation";
import { Trash2 } from "lucide-react";
import { ITeamMember } from "@/lib/models/TeamMember";
import LoaderOverlay from "../loaders/LoaderOverlay";
import { deleteMember } from "@/lib/actions/team.actions";

const MemberDeleteAction = ({ member }: { member: ITeamMember }) => {
  const pathname = usePathname();

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const HandleDelete = async () => {
    startTransition(() => {
      deleteMember(member._id, pathname).then((data) => {
        if (data?.error) {
          toast.error(data?.error);
        } else {
          setDialogOpen(false);
          toast.success("Member deleted successfully");
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
        title="Delete Member"
        dialogState={isDialogOpen}
        containerStyle="max-sm:w-[18.75rem] sm:max-w-[24.375rem]"
        handleDialogState={() => {
          setDialogOpen(!isDialogOpen);
        }}
      >
        <div className="space-y-4">
          <div className="paragraph-grey max-sm:text-[14px] max-sm:leading-[22px]">
            <p className="">
              Are you sure you want to delete this team member?
            </p>
            <p>Deleted members cannot be recovered.</p>
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

export default MemberDeleteAction;
