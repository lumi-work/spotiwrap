import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.svg";
import MenuItems from "@/components/dashboard/menu-items";
import UserInfortmation from "@/components/dashboard/user-information";
import SignOut from "@/components/dashboard/sign-out";

function Leftbar() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center justify-center h-screen text-center py-6">
        <div>
          <Image
            src={Logo}
            alt="logo"
            width={180}
            height={180}
            priority
            className="w-auto h-auto"
          />
        </div>
        <div className="flex items-center justify-center h-screen">
          <MenuItems />
        </div>
        <div className="flex items-end justify-between h-screen w-full px-6">
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
