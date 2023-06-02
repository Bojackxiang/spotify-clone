'use client';

import React from "react";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  // const router = useRouter();

  const handleLogout = () => {};

  return (
    <div
      className={twMerge(
        "h-fit bg-gradient-to-b from-emerald-800 p-6",
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        {/*  desktop:  left side button group*/}
        {/*  md above display, otherwise hide*/}
        <div className="hidden md:flex gap-x-2 items-center">
          <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
            <RxCaretLeft size={35} />
          </button>
          <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
            <RxCaretRight size={35} />
          </button>
        </div>

        {/* mobile:  left side button group*/}
        {/* md: below display otherwise hidden */}
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HiHome className="text-black" size={20} />
          </button>
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <BiSearch className="text-black" size={20} />
          </button>
        </div>

        {/* desktop: right side button  */}
        <div className="flex justify-between items-center gap-x-4">
          <>
          <div>
            <Button className="bg-transparent text-neutral-300 font-medium" onClick={() => {}}>Sign up</Button>
          </div>
          <div>
            <Button className="bg-transparent bg-white text-neutral-800 font-medium" onClick={() => {}}>Log in</Button>
          </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;