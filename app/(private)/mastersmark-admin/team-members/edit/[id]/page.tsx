import React from "react";
import type { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import MemberForm from "@/components/forms/MemberForm";
import { getMemberById } from "@/lib/actions/team.actions";

export const metadata: Metadata = {
  title: "Edit Member | Master'sMark",
  description: "Master'sMark Education Member",
};

const Page = async ({ params }: { params: { id: string } }) => {
  const { userId } = auth();

  if (!userId) redirect("/mastersmark-admin/sign-in");

  const member = await getMemberById(params.id);

  return (
    <>
      <div className="flex justify-between">
        <h1 className="h1-medium">Edit Member</h1>
      </div>
      <div className="mt-9">
        <MemberForm type="edit" memberDetails={JSON.stringify(member)} />
      </div>
    </>
  );
};

export default Page;
