"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import SpinCircleLoader from "../loaders/SpinCircleLoader";
import { Textarea } from "../ui/textarea";
import { ReviewSchema } from "@/lib/validations";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { createReview } from "@/lib/actions/review.actions";
import { sanitizeData } from "@/lib/utils";
import { ReviewCardLarge } from "@/app/(public)/reviews/components/Reviews";
import { IReview } from "@/lib/models/Review";

const ReviewForm = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [review, setReview] = useState("");

  const form = useForm<z.infer<typeof ReviewSchema>>({
    resolver: zodResolver(ReviewSchema),
    defaultValues: {
      name: "",
      rating: "",
      occupation: "",
      comment: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ReviewSchema>) {
    setIsSubmitting(true);

    const result = await createReview(values);
    const parsedResult = JSON.parse(result);
    if (parsedResult?.error) {
      toast.error(parsedResult.error);
      return;
    } else {
      toast.success("Review submitted successfully!");
      const data = parsedResult.review;
      setReview(data);
      router.push(`/reviews#${data._id}`);
      form.reset();
    }
    setIsSubmitting(false);
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full md:w-[700px] bg-tertiary-200 p-4 rounded flex-col gap-10"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold">
                  Name <span className="text-primary">*</span>
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
            name="occupation"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold">
                  Occupation <span className="text-primary">*</span>
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
            name="comment"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold">
                  Review <span className="text-primary">*</span>
                </FormLabel>
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

          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col text-black">
                <FormLabel className="paragraph-semibold">
                  Rating <span className="text-primary">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={isSubmitting}
                >
                  <FormControl className="mt-3.5">
                    <SelectTrigger className="no-focus paragraph-regular min-h-[36px] border">
                      <SelectValue placeholder="Select rating" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white text-black">
                    {[1, 2, 3, 4, 5].map((rating: any) => (
                      <SelectItem
                        className="cursor-pointer hover:bg-gray-400 capitalize"
                        key={rating}
                        value={rating}
                      >
                        {rating}/5
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
            {isSubmitting && <SpinCircleLoader />}
          </div>
        </form>
      </Form>
      <div className="mt-12">
        <h3 className="font-semibold text-[18px] mb-6">Reviews</h3>
        {review && <ReviewCardLarge review={review} />}
      </div>
    </>
  );
};

export default ReviewForm;
