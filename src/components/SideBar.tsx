"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import { routeType } from "@/interfaces/route";
import SideBarItem from "./SideBarItem";
import Library from "./Library";
import { Song } from "@/types";

interface SideBarProps {
  children: React.ReactNode;
  songs: Song[]
}

const SideBar: React.FC<SideBarProps> = ({ children, songs }) => {
  const pathName = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        href: "/",
        active: pathName !== "/search",
      },
      {
        icon: BiSearch,
        label: "Search",
        href: "/search",
        active: pathName === "/search",
      },
    ],
    [pathName]
  );

  return (
    <div className="flex h-full bg-neutral-300">
      {/* side bar */}
      <div className="hidden md:flex flex-col gap-y-2 h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5">
            {routes.map((item: routeType) => {
              return (
                <SideBarItem key={`side-bar-item-${item.label}`} {...item} />
              );
            })}
          </div>
        </Box>

        <Box className="overflow-y-auto h-full">
          <Library songs={songs}/>
          Song library
        </Box>
      </div>

      {/* main body */}
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default SideBar;
