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
import ImageUploader from "./ImageUploader";
import { deleteFile } from "@/lib/actions/image.actions";
import {
  eventContentStyle,
  eventStyleFormats,
  eventToolbar,
  plugins,
} from "./tinymce";

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
      media: parsedEventDetails?.media || [],
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
        content: values.content!,
        organizer: values.organizer as string,
        venue: values.venue as string,
        startDate: values.startDate as Date,
        endDate: values.endDate as Date,
        media: values.media,
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
        toast.error("Event cover image is required", {
          position: "bottom-center",
        });
        setIsSubmitting(false);
        return;
      }

      const result = await createEvent({
        title: values.title,
        content: values.content!,
        organizer: values.organizer as string,
        venue: values.venue as string,
        startDate: values.startDate as Date,
        endDate: values.endDate as Date,
        media: values.media,
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

  const handleImageChange = (image: any, field: any) => {
    field.onChange([
      ...field.value,
      { url: image.url, publicId: image.publicId },
    ]);
  };

  const [loadingRemove, setLoadingRemove] = useState(false);
  const handleRemoveImage = async (currentImage: any, field: any) => {
    setLoadingRemove(true);
    const result = await deleteFile({
      publicId: currentImage.publicId!,
    });
    if (result.success) {
      field.onChange([
        ...field.value.filter((image: any) => image.url !== currentImage.url),
      ]);
    }
    setLoadingRemove(false);
  };

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
            Event Cover Image{" "}
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
              maxSize={3000}
              maxSizeLabel="3MB"
            />
          </div>
          <div className="body-regular mt-2.5">
            Provide a reasonable event cover image
          </div>
          {postImageError && (
            <div className="text-red-500 mt-2">
              Event cover image is required
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
                    height: 400,
                    plugins: plugins,
                    toolbar: eventToolbar,
                    style_formats: eventStyleFormats,
                    content_style: eventContentStyle,
                  }}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5">
                Enter event description if any
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="media"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold">
                Event Images <span className="text-primary">*</span> (upload all
                images)
              </FormLabel>
              <FormControl className="mt-3.5">
                <ImageUploader
                  value={field.value}
                  onChange={(image) => handleImageChange(image, field)}
                  onRemove={async (currentImage) =>
                    await handleRemoveImage(currentImage, field)
                  }
                  loadingRemove={loadingRemove}
                />
              </FormControl>
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
