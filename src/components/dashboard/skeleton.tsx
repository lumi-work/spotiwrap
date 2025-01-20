import React from "react";

function Skeleton({ width, height }: { width: number; height: number }) {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className="animate-pulse bg-neutral-800 rounded-lg"
    ></div>
  );
}

export default Skeleton;
