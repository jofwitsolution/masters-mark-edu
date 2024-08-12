"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { adminNavLinks } from "@/constants/nav-links";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex flex-col gap-5 font-montserrat">
      {adminNavLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        return (
          <SheetClose asChild key={item.label}>
            <Link key={item.label} href={item.route} className="">
              <Button
                className={`${
                  isActive ? "bg-primary" : "bg-primary-100"
                } flex w-[10rem] justify-start gap-[0.63rem] text-slate-800 rounded-[5px] pb-[0.5625rem] pl-[0.6875rem] pt-[0.6875rem] hover:bg-primary-400 hover:text-light-900 xs:w-[13.125rem]`}
              >
                <Image
                  src={item.icon}
                  width={20}
                  height={20}
                  alt="icon"
                  className="invert"
                />
                <span className="">{item.label}</span>
              </Button>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const DBMobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="md:hidden invert"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="z-[1000] overflow-y-auto bg-slate-600"
      >
        <Link href="/" className="mt-[-0.5rem] flex items-center gap-1">
          <Image
            src="/images/mmlogo.png"
            width={90}
            height={40}
            alt="Mastersmark"
          />
        </Link>

        <div className="pt-10">
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default DBMobileNav;
