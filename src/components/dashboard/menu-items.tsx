"use client";

import { useRouter } from "next/navigation";
import React from "react";

function MenuItems() {
  const router = useRouter();

  function routerPages(path: string) {
    router.push(`/dashboard${path}`);
  }
  return (
    <div>
      <ul>
        <li
          className="hover:cursor-pointer"
          onClick={() => routerPages("/overview")}
        >
          home 1
        </li>
        <li
          className="hover:cursor-pointer"
          onClick={() => routerPages("/home2")}
        >
          home 2
        </li>
        <li
          className="hover:cursor-pointer"
          onClick={() => routerPages("/home3")}
        >
          home 3
        </li>
        <li
          className="hover:cursor-pointer"
          onClick={() => routerPages("/home4")}
        >
          home 4
        </li>
        <li
          className="hover:cursor-pointer"
          onClick={() => routerPages("/home5")}
        >
          home 5
        </li>
      </ul>
    </div>
  );
}

export default MenuItems;
