"use client";

import React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: string[];
}

const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <Image
          key={index}
          className="h-11 w-11 rounded-full border-2 border-green-500 hover:scale-105 transition-all hover:cursor-pointer"
          src={url ? url : "https://dummyimage.com/150x150"}
          width={60}
          height={60}
          alt="supporter-images"
          priority
        />
      ))}
      <a
        className="flex h-11 w-11 items-center justify-center rounded-full border-2 text-center text-xs font-medium text-white border-green-500 bg-background"
        href=""
      >
        +{numPeople}
      </a>
    </div>
  );
};

export { AvatarCircles };
