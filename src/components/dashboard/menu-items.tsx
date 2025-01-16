"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { RiHome6Line } from "react-icons/ri";
import { MdLibraryMusic } from "react-icons/md";
import { BsMusicNoteList } from "react-icons/bs";
import { TbTableSpark } from "react-icons/tb";
import { FaChartBar, FaFire } from "react-icons/fa";
import { LuCircleUser } from "react-icons/lu";
import { IoIosSettings } from "react-icons/io";

const menuItems = [
  {
    section: "DASHBOARD",
    items: [
      {
        path: "/overview",
        label: "Overview",
        icon: <RiHome6Line className="text-xl" />,
        isPremium: false,
      },
      {
        path: "/playlists",
        label: "Playlists",
        icon: <MdLibraryMusic className="text-xl" />,
        isPremium: false,
      },
      {
        path: "/tracks",
        label: "Tracks",
        icon: <BsMusicNoteList className="text-xl" />,
        isPremium: false,
      },
    ],
  },
  {
    section: "STATISTICS",
    items: [
      {
        path: "/chart",
        label: "Chart",
        icon: <FaChartBar className="text-xl" />,
        isPremium: false,
      },
      {
        path: "/tables",
        label: "Tables",
        icon: <TbTableSpark className="text-xl" />,
        isPremium: false,
      },
      {
        path: "/series",
        label: "Series",
        icon: <FaFire className="text-xl" />,
        isPremium: true,
      },
    ],
  },
  {
    section: "ACCOUNT",
    items: [
      {
        path: "/profile",
        label: "Profile",
        icon: <LuCircleUser className="text-xl" />,
        isPremium: false,
      },
      {
        path: "/settings",
        label: "Settings",
        icon: <IoIosSettings className="text-xl" />,
        isPremium: false,
      },
    ],
  },
];

function MenuItems() {
  const router = useRouter();
  const pathName = usePathname();

  const routerPages = (path: string) => {
    router.push(`/dashboard${path}`);
  };

  const isActive = (path: string) => pathName === `/dashboard${path}`;

  return (
    <div>
      <ul className="text-start">
        {menuItems.map((section, index) => (
          <div key={index} className="py-7">
            <p className="font-bold text-gray-400 text-xs">{section.section}</p>
            {section.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className={`font-medium text-md flex items-center gap-2 pt-3 ${
                  isActive(item.path)
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                } ${
                  item.isPremium
                    ? "hover:cursor-not-allowed"
                    : "hover:cursor-pointer"
                }`}
                onClick={() =>
                  !item.isPremium ? routerPages(item.path) : null
                }
              >
                {item.icon}
                {item.label}
                {item.isPremium && (
                  <span className="ml-2 px-2 py-1 text-xs text-white bg-green-600 rounded">
                    Premium
                  </span>
                )}
              </li>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default MenuItems;
