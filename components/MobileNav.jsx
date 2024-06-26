"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { Button } from "./ui/button";
import ThemeSelectorMobile from "./ThemeSelectorMobile";

const links = [
  {
    name: "about",
    path: "/about",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "projects",
    path: "/projects",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuBurger className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col overflow-y-auto max-h-screen">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">Home</h1>
          </Link>
        </div>
        {/* navigation */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                }
                text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
          <ThemeSelectorMobile />
          {/* Contact me button */}
          <Link href="mailto:jaytat132@gmail.com">
            <Button>Contact me</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
