import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | MastersMark",
  description: "Create Mastersmark dashboard account",
};

export default function Page() {
  return <SignUp fallbackRedirectUrl={"/mastersmark-admin"} />;
}
