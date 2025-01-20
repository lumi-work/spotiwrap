import React from "react";

function Skeleton({ className = "" }: { className: string }) {
  return (
    <div
      className={`animate-pulse bg-neutral-800 rounded-lg ${className}`}
    ></div>
  );
}

export default Skeleton;
