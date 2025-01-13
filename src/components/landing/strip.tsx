import React from "react";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

function Strip() {
  return (
    <div className="fixed bottom-0 w-full h-6 bg-green-500 flex items-center justify-between">
      <div></div>
      <div className="flex items-center gap-2 font-medium text-black text-sm pr-24">
        <HiOutlineSpeakerWave className="" />
        <p>Listening on your playlists.</p>
      </div>
      <div className="absolute right-36 top-[-10px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-green-500"></div>
    </div>
  );
}

export default Strip;
