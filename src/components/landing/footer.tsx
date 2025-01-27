import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.svg";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full pt-12 md:pt-24">
      <div className="flex flex-col items-center justify-center pt-6 md:pt-12">
        <div className="flex flex-col md:flex-row items-center justify-around w-full px-4 md:px-0">
          <div className="flex flex-col items-center md:items-start w-full md:w-64 mb-8 md:mb-0">
            <div className="flex items-center">
              <Image src={Logo} alt="logo" width={70} height={70} />
              <h2 className="text-white font-semibold text-xl ml-5">
                Spotiwrap
              </h2>
            </div>
            <p className="text-neutral-400 pt-5 text-center md:text-left">
              Discover the music that defined your year with a personalized
              experience created just for you.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <ul className="text-neutral-300 text-center md:text-left">
              <li className="font-semibold text-neutral-100 pb-2">
                Quick Links
              </li>
              <li className="hover:text-neutral-400">
                <Link href="/">Documentation</Link>
              </li>
              <li className="hover:text-neutral-400">
                <Link href="/privacy-policy">Privacy & Policy</Link>
              </li>
              <li className="hover:text-neutral-400">
                <Link href="/terms-of-service">Terms of Service</Link>
              </li>
              <li className="hover:text-neutral-400">
                <Link href="/">Support</Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="flex flex-col items-center md:items-start">
            <ul className="text-neutral-300 text-center md:text-left">
              <li className="font-semibold text-neutral-100 pb-2">Explore</li>
              <li className="hover:text-neutral-400">
                <Link href="https://github.com/lumi-work">lumi.work</Link>
              </li>
              <li className="hover:text-neutral-400">
                <Link href="/team">Team</Link>
              </li>
              <li className="hover:text-neutral-400">
                <Link href="https://github.com/lumi-work/spotiwrap">
                  Github
                </Link>
              </li>
              <li className="hover:text-neutral-400">
                <Link href="https://x.com/works_lumi">Twitter</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full flex mt-12 md:mt-24 items-center justify-center">
          <h1 className="text-center text-3xl md:text-5xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 select-none">
            lumi.work
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
