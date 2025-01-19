import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.svg";
import LoginButton from "./button";
import { NavigationMenuItems } from "@/components/landing/navbar-menu";

function Navbar() {
  return (
    <div className="z-50 w-full flex items-center justify-between h-36 max-2xl:max-w-[1200px] max-xl:max-w-[1000px] max-lg:max-w-[900px]">
      <div>
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="logo"
            width={200}
            height={200}
            priority
            className="w-auto h-auto"
          />
        </Link>
      </div>
      <div>
        <NavigationMenuItems />
      </div>
      <div>
        <LoginButton text="Login with Spotify" />
      </div>
    </div>
  );
}

export default Navbar;
