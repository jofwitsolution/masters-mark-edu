"use client";

import React, { useState } from "react";
import * as z from "zod";
import { ContactSchema } from "@/lib/validations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SpinCircleLoader from "../loaders/SpinCircleLoader";
import { Textarea } from "../ui/textarea";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ContactSchema>) => {
    // setLoading(true);
    // try {
    //   const res = await fetch("/api/v1/events", {
    //     method: "POST",
    //     body: JSON.stringify(values),
    //   });
    //   const data = await res.json();
    //   if (res.ok) {
    //     toast.success(data.message);
    //     router.push(`/invitation/${data.event._id}?tag=${data.event.tag}`);
    //   } else {
    //     toast.error(data.message);
    //   }
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="w-full flex flex-col sm:flex-row gap-4 md:gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className=""
                      placeholder="Full name"
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email address"
                      disabled={loading}
                      {...field}
                      className=""
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Subject" disabled={loading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="phone" disabled={loading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message"
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-6 items-center">
            <Button
              disabled={loading}
              type="submit"
              className="flex gap-2 items-center justify-center bg-primary text-white hover:bg-primary-100 active:bg-primary-200 rounded-[40px]"
            >
              Send message{" "}
              <span>
                <ArrowRight />
              </span>
            </Button>
            {loading && <SpinCircleLoader />}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
