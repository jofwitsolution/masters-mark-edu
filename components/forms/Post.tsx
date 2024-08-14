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
import { PostSchema } from "@/lib/validations";
import ImageInput from "./ImageInput";
import { toast } from "sonner";
import SpinCircleLoader from "../loaders/SpinCircleLoader";
import { createPost } from "@/lib/actions/post.actions";
import { useRouter } from "next/navigation";

const Post = () => {
  const router = useRouter();
  const editorRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [image, setImage] = useState("");
  const [postImageError, setPostImageError] = useState(false);

  const form = useForm<z.infer<typeof PostSchema>>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof PostSchema>) {
    setIsSubmitting(true);

    if (!image) {
      setPostImageError(true);
      toast.error("Post image is required", {
        position: "bottom-center",
      });
      return;
    }

    const result = await createPost({
      title: values.title,
      content: values.content,
      image,
    });
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Post created successfully");
      router.push("/mastersmark-admin/posts");
    }
    setIsSubmitting(false);
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
                Post Title <span className="text-primary">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  disabled={isSubmitting}
                  className="no-focus paragraph-regular min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5">
                Be specific with the title of your post
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <div className="flex w-full flex-col">
          <FormLabel className="paragraph-semibold">
            Post Image <span className="text-primary">*</span>
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
            Provide a reasonable post image
          </div>
          {postImageError && (
            <div className="text-red-500 mt-2">Post image is required</div>
          )}
        </div>

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="paragraph-semibold">
                Detailed description of your title{" "}
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
                  initialValue={""}
                  init={{
                    height: 400,
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
                    content_style: "body { font-family:Inter; font-size:16px }",
                  }}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5">
                Introduce the topic and expand on what you put in the title.
                Minimum 100 characters.
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
            Publish
          </Button>
          {isSubmitting && <SpinCircleLoader />}
        </div>
      </form>
    </Form>
  );
};

export default Post;
