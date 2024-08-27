import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | MastersMark",
  description: "Sign in to Mastersmark dashboard",
};

export default function Page() {
  return (
    <SignIn fallbackRedirectUrl={"/mastersmark-admin"} afterSignOutUrl={"/"} />
  );
}
