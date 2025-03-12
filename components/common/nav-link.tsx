"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const pathName = usePathname();
  const isActive =
    pathName === href || (href !== "/" && pathName.startsWith(href));
  return (
    <Link
      href={href}
      className={cn(
        "transition-colors text-gray-500 hover:text-rose-600 text-sm duration-200",
        className,
        isActive && "text-rose-900"
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
