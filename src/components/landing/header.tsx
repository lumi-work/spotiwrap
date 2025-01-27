import React from "react";
import Image from "next/image";
import LoginButton from "@/components/landing/button";
import HeroImage from "@/assets/hero.svg";
import { AvatarCircle } from "@/components/landing/circle";

function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around w-full h-full my-16 md:my-32 px-4 md:px-0">
      <div className="flex flex-col items-center md:items-start text-center md:text-start justify-center text-neutral-100 w-full md:w-auto">
        <div className="flex items-center gap-2 border border-green-600 rounded-xl px-3 py-0.5 w-fit shadow-xl">
          <p className="font-normal text-sm text-neutral-200">
            Discover the tracks that defined your year! 🚀
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-start text-4xl md:text-5xl lg:text-8xl font-bold pt-4">
          <h2>We made it</h2>
          <h2>
            just for <span className="text-green-500">you!</span>
          </h2>
        </div>
        <div className="pt-8">
          <p className="text-neutral-400 text-sm md:text-base">
            Discover the music that defined your year with a personalized <br />
            experience. Dive into your favorite tracks, artists, and genres, and{" "}
            <br />
            explore visuals that showcase your unique listening journey.
          </p>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-8">
          <LoginButton text="Get Started" />
          <div className="flex items-center text-neutral-200 font-medium h-10 px-3 text-sm transition-all hover:shadow-lg hover:text-neutral-400">
            <a href="#">Learn More!</a>
          </div>
        </div>
        <div className="pt-12">
          <AvatarCircle />
        </div>
      </div>
      <div className="relative border-4 border-green-500 rounded-xl mt-8 md:mt-0">
        <div className="absolute inset-0 w-48 h-48 md:w-72 md:h-72 blur-[100px] md:blur-[200px] bg-green-500 m-auto"></div>

        <Image
          src={HeroImage}
          alt="hero-image"
          height={600}
          width={600}
          className="relative rounded-xl z-10 w-full h-auto md:w-[600px] md:h-[600px]"
        />
      </div>
    </div>
  );
}

export default Header;
