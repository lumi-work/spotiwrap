"use client";

import React from "react";
import Error from "@/assets/error.svg";
import Image from "next/image";
import { redirect } from "next/navigation";

function NotFound() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center justify-center">
        <div>
          <h2 className="text-6xl text-white font-bold">Oops!</h2>
        </div>
        <div className="pt-24">
          <Image
            src={Error}
            width={400}
            height={400}
            alt="error-image"
            priority
            className="w-auto h-auto"
          />
        </div>
        <div className="pt-24">
          <button
            className="text-white font-semibold text-2xl transition-all hover:scale-125 hover:text-gray-300"
            onClick={() => redirect("/")}
          >
            Go Home!
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
