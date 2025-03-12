import { FileText } from "lucide-react";
import Link from "next/link";
import React from "react";
import NavLink from "./nav-link";
import { Button } from "../ui/button";

const Header = () => {
  const isLoggedIn = false;
  return (
    <nav className="flex container items-center justify-between py-4 px-2 lg:px-8 mx-auto">
      <div className="flex lg:flex-1">
        <NavLink
          href={"/"}
          className="flex gap-1 lg:gap-2 shrink-0 items-center justify-center text-rose-500"
        >
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-rose-500" />
          <span className="font-extrabold  lg:text-xl text-rose-500">
            Summarizer
          </span>
        </NavLink>
      </div>
      <div className="flex items-center justify-center gap-4 lg:gap-12">
        <NavLink href={"/#pricing"} className="">
          Pricing
        </NavLink>
        {isLoggedIn && <NavLink href={"/summaries"}>Your Summaries</NavLink>}
      </div>

      <div className="flex lg:justify-end items-center lg:flex-1">
        {isLoggedIn ? (
          <div className=" flex items-center gap-2">
            <NavLink href={"/upload"} className="">
              Upload PDF
            </NavLink>
            <div>Pro</div>
            <Button>User</Button>
          </div>
        ) : (
          <NavLink href={"/sign-in"} className="">
            Sign in
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
