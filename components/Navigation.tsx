"use client";

import { Code, Folder, GraduationCap, Home, Mail, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Data = [
  {
    label: "Home",
    value: "Home",
    icon: Home,
    desc: "Home",
    src: "/",
  },
  {
    label: "About",
    value: "About",
    icon: User,
    desc: "About",
    src: "/about",
  },
  {
    label: "Skills",
    value: "Skills",
    icon: Code,
    desc: "Skills",
    src: "/skills",
  },
  {
    label: "Projects",
    value: "Projects",
    icon: Folder,
    desc: "Projects",
    src: "/projects",
  },
  {
    label: "Experience",
    value: "Experience",
    icon: GraduationCap,
    desc: "Experience",
    src: "/experience",
  },
  {
    label: "Contact",
    value: "Contact",
    icon: Mail,
    desc: "Contact",
    src: "/contact",
  },
];

export default function Navigation() {
  const pathName = usePathname();
  return (
    <section className="fixed backdrop-blur-md bottom-0 w-full xl:bottom-5 lg:flex justify-center items-center z-50">
      <div className="md:rounded-full border  py-3 flex justify-center z-50 md:gap-1 shadow-xl">
        {Data.map(({ label, value, icon, src }) => (
          <Link href={src} key={value}>
            <div className="group relative px-3 cursor-pointer">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500 transition-all",
                  pathName === src ? "text-blue-500 bg-slate-300" : ""
                )}
              >
                {React.createElement(icon, { className: "text-2xl" })}
              </div>
              <span className="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border  px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                {label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
