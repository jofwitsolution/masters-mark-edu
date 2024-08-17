"use client";

import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
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
import { EventSchema } from "@/lib/validations";
import { toast } from "sonner";
import SpinCircleLoader from "../loaders/SpinCircleLoader";
import { usePathname, useRouter } from "next/navigation";
import DateInput from "../ui/date-input";
import { createEvent, editEvent } from "@/lib/actions/event.actions";
import ImageInput from "./ImageInput";

interface Props {
  type?: "edit" | "add";
  eventDetails?: string;
}

const EventForm = ({ type, eventDetails }: Props) => {
  const router = useRouter();
  const editorRef = useRef(null);
  const pathname = usePathname();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [image, setImage] = useState("");
  const [postImageError, setPostImageError] = useState(false);

  const parsedEventDetails = eventDetails && JSON.parse(eventDetails || "");

  const form = useForm<z.infer<typeof EventSchema>>({
    resolver: zodResolver(EventSchema),
    defaultValues: {
      title: parsedEventDetails?.title || "",
      content: parsedEventDetails?.content || "",
      organizer: parsedEventDetails?.organizer || "",
      venue: parsedEventDetails?.venue || "",
      startDate: new Date(),
      endDate: new Date(),
    },
  });

  async function onSubmit(values: z.infer<typeof EventSchema>) {
    setIsSubmitting(true);

    if (type === "edit") {
      // Edit Action Here
      const result = await editEvent({
        eventId: parsedEventDetails._id,
        title: values.title,
        content: values.content,
        organizer: values.organizer as string,
        venue: values.venue as string,
        startDate: values.startDate as Date,
        endDate: values.endDate as Date,
        image,
      });
      if (result?.error) {
        toast.error(result.error);
        setIsSubmitting(false);
      } else {
        const event = JSON.parse(result.event as any);
        toast.success("Event edited successfully");
        router.push(`/events/${event.slug}`);
      }
    } else {
      // Create New Event

      if (!image) {
        setPostImageError(true);
        toast.error("Post image is required", {
          position: "bottom-center",
        });
        return;
      }

      const result = await createEvent({
        title: values.title,
        content: values.content,
        organizer: values.organizer as string,
        venue: values.venue as string,
        startDate: values.startDate as Date,
        endDate: values.endDate as Date,
        image,
        path: pathname,
      });
      if (result?.error) {
        toast.error(result.error);
        setIsSubmitting(false);
      } else {
        toast.success("Event published successfully");
        router.push("/mastersmark-admin/events");
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
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold">
                Event Title <span className="text-primary">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  disabled={isSubmitting}
                  className="no-focus paragraph-regular min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5">
                Be specific with the title of your event
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <div className="flex w-full flex-col">
          <FormLabel className="paragraph-semibold">
            Event Label Image{" "}
            <span className="text-primary">
              {type === "edit"
                ? "(Event label image is not required, upload only if you wish to change the existing one.)"
                : "*"}
            </span>
          </FormLabel>
          <div className="mt-3.5 border">
            <ImageInput
              isDisabled={isSubmitting}
              handleFileData={(data) => {
                setImage(data);
                setPostImageError(false);
              }}
            />
          </div>
          <div className="body-regular mt-2.5">
            Provide a reasonable event label image
          </div>
          {postImageError && (
            <div className="text-red-500 mt-2">
              Event label image is required
            </div>
          )}
        </div>

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="paragraph-semibold">
                Detailed description of your Event{" "}
                <span className="text-primary">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                  onInit={(evt, editor) => {
                    // @ts-ignore
                    editorRef.current = editor;
                  }}
                  onBlur={field.onBlur}
                  onEditorChange={(content) => field.onChange(content)}
                  initialValue={parsedEventDetails?.content || ""}
                  init={{
                    height: 650,
                    menubar: true,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "codesample",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                    ],
                    toolbar: [
                      "undo redo | styles | bold italic lineheight | alignleft aligncenter alignright| bullist numlist indent outdent | link image",
                    ],
                  }}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5">
                Copy & paste or drag & drop the event images in the editor area.
                Adjust the size and position of your images after dropping for
                better appearance.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="organizer"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold">Organizer</FormLabel>
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
          name="venue"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold">Venue</FormLabel>
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
          name="startDate"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold">Start Date</FormLabel>
              <FormControl className="mt-3.5">
                <DateInput disabled={isSubmitting} field={field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold">End Date</FormLabel>
              <FormControl className="mt-3.5">
                <DateInput disabled={isSubmitting} field={field} />
              </FormControl>
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

export default EventForm;
