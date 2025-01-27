import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.svg";
import LoginButton from "@/components/landing/button";
import { NavigationMenuItems } from "@/components/landing/navbar-menu";

function Navbar() {
  return (
    <div className="z-50 w-full flex items-center justify-between h-20 md:h-36 px-4 md:px-8 max-2xl:max-w-[1200px] max-xl:max-w-[1000px] max-lg:max-w-[900px] mx-auto">
      <div>
        <Link href={"/"} className="flex items-center gap-2 md:gap-4">
          <Image
            src={Logo}
            alt="logo"
            width={40}
            height={40}
            className="w-8 h-8 md:w-12 md:h-12"
            priority
          />
          <h2 className="text-white font-semibold text-lg md:text-xl">
            Spotiwrap
          </h2>
        </Link>
      </div>

      <div className="hidden md:block">
        <NavigationMenuItems />
      </div>

      <div>
        <LoginButton
          text="Login with Spotify"
          className="text-sm md:text-base"
        />
      </div>
    </div>
  );
}

export default Navbar;
