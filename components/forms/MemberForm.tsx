"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { TeamMemberSchema } from "@/lib/validations";
import { toast } from "sonner";
import SpinCircleLoader from "../loaders/SpinCircleLoader";
import { usePathname, useRouter } from "next/navigation";
import ImageInput from "./ImageInput";
import { Textarea } from "../ui/textarea";
import { createTeamMember, editTeamMember } from "@/lib/actions/team.actions";

interface Props {
  type?: "edit" | "add";
  memberDetails?: string;
}

const MemberForm = ({ type, memberDetails }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [image, setImage] = useState("");
  const [imageError, setImageError] = useState(false);

  const parsedMemberDetails = memberDetails && JSON.parse(memberDetails || "");

  const form = useForm<z.infer<typeof TeamMemberSchema>>({
    resolver: zodResolver(TeamMemberSchema),
    defaultValues: {
      name: parsedMemberDetails?.name || "",
      role: parsedMemberDetails?.role || "",
      bio: parsedMemberDetails?.bio || "",
      rank: parsedMemberDetails?.rank || "",
    },
  });

  async function onSubmit(values: z.infer<typeof TeamMemberSchema>) {
    setIsSubmitting(true);

    if (type === "edit") {
      // Edit Action Here
      const result = await editTeamMember({
        memberId: parsedMemberDetails._id,
        name: values.name,
        role: values.role,
        bio: values.bio as string,
        rank: values.rank as string,
        image,
        path: pathname,
      });
      if (result?.error) {
        toast.error(result.error);
        setIsSubmitting(false);
      } else {
        toast.success("Member updated successfully");
        router.push(`/management`);
      }
    } else {
      // Create New Event

      if (!image) {
        setImageError(true);
        toast.error("Member image is required", {
          position: "bottom-center",
        });
        return;
      }

      const result = await createTeamMember({
        name: values.name,
        role: values.role,
        bio: values.bio as string,
        rank: values.rank as string,
        image,
        path: pathname,
      });
      if (result?.error) {
        toast.error(result.error);
        setIsSubmitting(false);
      } else {
        toast.success("Member added successfully");
        router.push("/mastersmark-admin/team-members");
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-10"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold">
                Member Name <span className="text-primary">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  disabled={isSubmitting}
                  className="no-focus paragraph-regular min-h-[30px] border"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold">
                Member Role <span className="text-primary">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  disabled={isSubmitting}
                  className="no-focus paragraph-regular min-h-[30px] border"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold">Bio</FormLabel>
              <FormControl className="mt-3.5">
                <Textarea
                  disabled={isSubmitting}
                  className="no-focus paragraph-regular min-h-[90px] border"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <div className="flex w-full flex-col">
          <FormLabel className="paragraph-semibold">
            Profile Image{" "}
            <span className="text-primary">
              {type === "edit"
                ? "(Profile image is not required, upload only if you wish to change the existing one.)"
                : "*"}
            </span>
          </FormLabel>
          <div className="mt-3.5 border">
            <ImageInput
              isDisabled={isSubmitting}
              handleFileData={(data) => {
                setImage(data);
                setImageError(false);
              }}
              maxSize={3000}
              maxSizeLabel="3MB"
            />
          </div>
          {imageError && (
            <div className="text-red-500 mt-2">Profile image is required</div>
          )}
        </div>

        <FormField
          control={form.control}
          name="rank"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold">
                Rank <span className="text-primary">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  type="number"
                  disabled={isSubmitting}
                  className="no-focus paragraph-regular min-h-[30px] border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5">
                The rank is a number that determines the postioning of the
                members as they will be displayed on the browser. E.g The number
                1 and 2 should be reserved for the highest ranked members.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <div className="flex items-center gap-6">
          <Button
            type="submit"
            className="w-fit text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>{type === "edit" ? "Editing..." : "Publishing..."}</>
            ) : (
              <>{type === "edit" ? "Edit Event" : "Publish"}</>
            )}
          </Button>
          {isSubmitting && <SpinCircleLoader />}
        </div>
      </form>
    </Form>
  );
};

export default MemberForm;
