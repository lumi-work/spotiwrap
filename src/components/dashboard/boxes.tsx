import React from "react";

function Boxes({
  width,
  height,
  children,
}: {
  width: number;
  height: number;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className="border-2 border-neutral-800 rounded-xl flex items-center justify-center"
    >
      {children}
    </div>
  );
}

export default Boxes;
