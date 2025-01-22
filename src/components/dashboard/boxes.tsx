import React from "react";

function Boxes({
  width,
  height,
  className = "",
  children,
}: {
  width?: number;
  height?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        ...(width ? { width: `${width}px` } : {}),
        ...(height ? { height: `${height}px` } : {}),
      }}
      className={`bg-boxes rounded-xl flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}

export default Boxes;
