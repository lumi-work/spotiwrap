import React from "react";
import Topgenres from "@/assets/topgenres.svg";
import Image from "next/image";

function Header() {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="flex-col items-center justify-center text-center">
        <div>
          <h2 className="text-7xl text-white font-semibold">
            We made it personal <br />
            <span className="text-secondary">just for you</span>
          </h2>
        </div>
        <div className="pt-6">
          <p className="text-gray-400 px-80">
            Discover the music that defined your year with a personalized
            experience created just for you. Dive into your favorite tracks,
            artists, and genres, and explore dynamic visuals and insights that
            showcase your unique listening journey. Your music, your story, all
            in one place.
          </p>
        </div>
        <div className="flex items-center justify-center pt-24">
          <Image
            src={Topgenres}
            alt="topgenres"
            width={400}
            height={400}
            priority
            className="w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
