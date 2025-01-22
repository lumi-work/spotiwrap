import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.svg";

function Footer() {
  return (
    <div className="w-full pt-24">
      <div className="flex-col items-center justify-center pt-12">
        <div className="flex items-center justify-around">
          <div className="flex-col items-center w-64">
            <div
              className="
            flex items-center"
            >
              <Image src={Logo} alt="logo" width={70} height={70} />
              <h2 className="text-white font-semibold text-xl ml-5">
                Spotiwrap
              </h2>
            </div>
            <p className="text-neutral-400 pt-5">
              Discover the music that defined your year with a personalized
              experience created just for you.
            </p>
          </div>
          <div className="flex-col items-center">
            <ul className="text-neutral-300">
              <li className="font-semibold text-neutral-100 pb-2">
                Quick Links
              </li>
              <li className="hover:text-neutral-400">
                <a href="/">Documentation</a>
              </li>
              <li className="hover:text-neutral-400">
                <a href="/">Privacy & Policy</a>
              </li>
              <li className="hover:text-neutral-400">
                <a href="/">Terms of Service</a>
              </li>
              <li className="hover:text-neutral-400">
                <a href="/">Support</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-neutral-300">
              <li className="font-semibold text-neutral-100 pb-2">Explore</li>
              <li className="hover:text-neutral-400">
                <a href="/">lumi.work</a>
              </li>
              <li className="hover:text-neutral-400">
                <a href="/">Team</a>
              </li>
              <li className="hover:text-neutral-400">
                <a href="/">Github</a>
              </li>
              <li className="hover:text-neutral-400">
                <a href="/">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" w-full flex mt-24 items-center justify-center">
          <h1 className="text-center text-3xl md:text-5xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 select-none">
            lumi.work
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
