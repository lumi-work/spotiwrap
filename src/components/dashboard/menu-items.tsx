"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

function MenuItems() {
  const router = useRouter();
  const pathName = usePathname();

  function routerPages(path: any) {
    router.push(`/dashboard${path}`);
  }

  function isActive(path: any) {
    return pathName === `/dashboard${path}`;
  }

  return (
    <div>
      <ul>
        <li
          className={`hover:cursor-pointer ${
            isActive("/overview") ? "text-green-500 font-bold" : "text-gray-700"
          }`}
          onClick={() => routerPages("/overview")}
        >
          Overview
        </li>
        <li
          className={`hover:cursor-pointer ${
            isActive("/page2") ? "text-green-500 font-bold" : "text-gray-700"
          }`}
          onClick={() => routerPages("/page2")}
        >
          home 2
        </li>
        <li
          className={`hover:cursor-pointer ${
            isActive("/page3") ? "text-green-500 font-bold" : "text-gray-700"
          }`}
          onClick={() => routerPages("/page3")}
        >
          home 3
        </li>
        <li
          className={`hover:cursor-pointer ${
            isActive("/page4") ? "text-green-500 font-bold" : "text-gray-700"
          }`}
          onClick={() => routerPages("/page4")}
        >
          home 4
        </li>
      </ul>
    </div>
  );
}

export default MenuItems;
