"use client";

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navbarLinks } from "@/constants/nav-links";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex flex-col gap-6">
      {navbarLinks.map((item) => {
        const isActive = pathname === item.route;
        return (
          <SheetClose asChild key={item.label}>
            <Link
              key={item.label}
              href={item.route}
              className={`${
                isActive ? "font-[600] text-secondary" : "text-white"
              } leading-[1.41rem]`}
            >
              {item.label}
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/menu.svg"
          width={36}
          height={36}
          alt="Menu"
          className="md:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="z-[1000] bg-primary">
        <Link href="/" className="mt-[-0.5rem] flex items-center gap-1">
          <Image
            src="/images/mmlogo.png"
            width={120}
            height={50}
            alt="MasterMark"
            className=""
          />
        </Link>

        <div className="pt-16">
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
