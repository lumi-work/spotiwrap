import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.svg";
import MenuItems from "@/components/dashboard/menu-items";
import UserInfortmation from "@/components/dashboard/user-information";
import SignOut from "@/components/dashboard/sign-out";

function Leftbar() {
  return (
    <div className="w-full h-full p-4">
      <div className="flex flex-col items-center justify-center h-full text-center bg-boxes rounded-xl">
        <div className="flex items-center w-full justify-center gap-4 mt-5">
          <Image src={Logo} alt="logo" width={50} height={50} priority />
          <h2 className="text-white font-semibold text-xl">Spotiwrap</h2>
        </div>
        <div className="flex items-center justify-center h-full">
          <MenuItems />
        </div>
        <div className="flex items-end justify-between h-full w-full px-6 mb-4">
          <div>
            <UserInfortmation />
          </div>
          <div>
            <SignOut />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
