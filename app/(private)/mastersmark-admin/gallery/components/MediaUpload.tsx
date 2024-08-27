"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ImageUploader from "@/components/forms/ImageUploader";
import { Button } from "@/components/ui/button";
import SpinCircleLoader from "@/components/loaders/SpinCircleLoader";
import { useForm } from "react-hook-form";
import { MediaSchema } from "@/lib/validations";
import { deleteFile } from "@/lib/actions/image.actions";
import { uploadMedia } from "@/lib/actions/media.action";
import { toast } from "sonner";

const MediaUpload = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof MediaSchema>>({
    resolver: zodResolver(MediaSchema),
    defaultValues: {
      media: [],
    },
  });

  async function onSubmit(values: z.infer<typeof MediaSchema>) {
    setIsSubmitting(true);

    const result = await uploadMedia(values);
    if (result?.error) {
      toast.error("Failed to save media");
    } else {
      toast.success("Media saved successfully");
      form.reset();
    }
    setIsSubmitting(false);
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
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-10"
        >
          <FormField
            control={form.control}
            name="media"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold">
                  Upload Images to Gallery
                  <span className="text-primary">*</span> (Click save after
                  upload)
                </FormLabel>
                <FormControl className="mt-3.5">
                  <ImageUploader
                    value={field.value}
                    onChange={(image) => handleImageChange(image, field)}
                    onRemove={async (currentImage) =>
                      await handleRemoveImage(currentImage, field)
                    }
                    loadingRemove={loadingRemove}
                    uploadPreset={
                      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET_GALLERY!
                    }
                    uploadFolder="/gallery-images"
                  />
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
              {isSubmitting ? "Saving..." : "Save"}
            </Button>
            {isSubmitting && <SpinCircleLoader />}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default MediaUpload;
