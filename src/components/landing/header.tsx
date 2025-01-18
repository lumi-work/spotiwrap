import React from "react";
import Image from "next/image";
import LoginButton from "@/components/landing/button";
import HeroImage from "@/assets/hero.svg";
import { AvatarCircle } from "@/components/landing/circle";

function Header() {
  return (
    <div className="flex items-start justify-between w-full h-full my-48">
      <div className="flex-col items-center justify-center text-neutral-100">
        <div className="flex items-center gap-2 border border-neutral-600 rounded-xl px-4 py-0.5 w-fit">
          <p className="font-normal text-sm text-neutral-200">
            Discover the tracks that defined your year! 🚀
          </p>
        </div>
        <div className="flex-col items-center text-start text-7xl font-bold pt-4">
          <h2>We made it</h2>
          <h2>
            just for <span className="text-green-500">you!</span>
          </h2>
        </div>
        <div className="pt-8">
          <p className="text-neutral-400">
            Discover the music that defined your year with a personalized <br />
            experience. Dive into your favorite tracks, artists, and genres, and{" "}
            <br />
            explore visuals that showcase your unique listening journey.
          </p>
        </div>
        <div className="pt-8 flex items-center justify-start gap-8">
          <LoginButton text="Get Started" />
          <div className="flex items-center text-neutral-200 font-medium h-10 px-3 text-sm transition-all hover:shadow-lg hover:text-neutral-400">
            <a href="#">Learn More!</a>
          </div>
        </div>
        <div className="pt-12">
          <AvatarCircle />
        </div>
      </div>
      <div className="relative border-4 border-green-500 rounded-xl">
        <div className="absolute inset-0 w-72 h-72 blur-[200px] bg-green-500 m-auto"></div>

        <Image
          src={HeroImage}
          alt="hero-image"
          height={650}
          width={650}
          className="relative rounded-xl z-10"
        />
      </div>
    </div>
  );
}

export default Header;
