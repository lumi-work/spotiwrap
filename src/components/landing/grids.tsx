import React from "react";
import Image from "next/image";
import Grid1 from "@/assets/Grid1.png";
import Grid2 from "@/assets/Grid2.png";
import Grid3 from "@/assets/Grid3.png";
import Grid4 from "@/assets/Grid4.png";

function Grids() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center my-16 md:my-32 px-4 md:px-24">
      <h2 className="font-semibold text-2xl md:text-3xl text-neutral-50 text-center">
        Spotiwrap Overview
      </h2>
      <p className="text-neutral-500 w-full md:w-[65%] text-center pb-8 md:pb-16 pt-4">
        Explore your music journey with Spotiwrap. Discover your listening
        habits, favorite genres, top tracks, and more. Dive into your
        personalized music stats and see how your year sounded!
      </p>
      <div className="grid grid-cols-1 w-full h-full text-secondary gap-4 md:gap-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between bg-neutral-800/20 w-full md:w-2/3 h-auto md:h-96 rounded-xl p-6 md:p-8">
            <div className="flex flex-col justify-center w-full md:w-1/2 mb-4 md:mb-0">
              <h3 className="font-semibold text-xl text-secondary mb-4">
                Your Top 5 Items
              </h3>
              <p className="text-neutral-400 text-sm mb-8">
                Your ultimate favorites! Explore your top 5 tracks, artists, or
                playlists.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-48 md:h-full flex items-center justify-center rounded-lg overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src={Grid1}
                  alt="Hourly Listening Time"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between bg-neutral-800/20 w-full md:w-1/3 h-auto md:h-96 rounded-xl p-6 md:p-8">
            <div className="flex flex-col justify-center w-full md:w-1/2 mb-4 md:mb-0">
              <h3 className="font-semibold text-xl text-secondary mb-4">
                Your Top Genres
              </h3>
              <p className="text-neutral-400 text-sm">
                Explore the genres that define your music taste. From pop to
                rock, find out what you love the most.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-48 md:h-full flex items-center justify-center rounded-lg overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src={Grid2}
                  alt="Your Top Genres"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full">
          <div className="relative bg-neutral-800/20 w-full rounded-xl p-6 md:p-8">
            <h3 className="font-semibold text-xl text-secondary mb-4">
              Hourly Listening Time
            </h3>
            <p className="text-neutral-400 text-sm">
              Discover your listening habits throughout the day. See which hours
              you're most active and explore your favorite tracks.
            </p>
            <div className="w-full h-48 md:h-64 flex items-center justify-center rounded-lg overflow-hidden mt-4">
              <div className="relative w-full h-full">
                <Image
                  src={Grid3}
                  alt="Top 15 Popularity"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="relative bg-neutral-800/20 w-full rounded-xl p-6 md:p-8">
            <h3 className="font-semibold text-xl text-secondary mb-4">
              Top 15 Popularity
            </h3>
            <p className="text-neutral-400 text-sm mb-8">
              Check out your top 15 most popular tracks. See which songs you
              can't stop listening to.
            </p>
            <div className="w-full h-48 md:h-64 flex items-center justify-center rounded-lg overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src={Grid4}
                  alt="Your Top 5 Items"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grids;
