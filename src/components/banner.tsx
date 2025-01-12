import React from "react";
import { BiSolidTrafficBarrier } from "react-icons/bi";

function Banner() {
  return (
    <div className="w-full h-[100vh] rounded-md flex flex-col items-center justify-center">
      <p className="font-semibold text-xl text-white flex items-center gap-2">
        <BiSolidTrafficBarrier className="text-2xl text-yellow-500" />
        This app is still under development!
        <BiSolidTrafficBarrier className="text-2xl text-yellow-500" />
      </p>
    </div>
  );
}

export default Banner;
