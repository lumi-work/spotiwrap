import React from "react";

function Grids() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center my-32 px-24">
      <h2 className="font-semibold text-3xl text-neutral-50">
        Spotiwrap Overview
      </h2>
      <p className="text-neutral-500 w-[65%] text-center pb-16 pt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        ullam velit a rerum architecto illo obcaecati mollitia libero quo quidem
        quaerat beatae soluta ab recusandae sint doloribus, inventore
        dignissimos quam.
      </p>
      <div className="grid grid-cols-1 w-full h-full text-secondary">
        <div className="flex items-center justify-center gap-8 w-full">
          <div className="flex items-center justify-center bg-neutral-800/20 w-2/3 h-80 rounded-xl">
            1
          </div>
          <div className="flex items-center justify-center bg-neutral-800/20 w-1/3 h-80 rounded-xl">
            2
          </div>
        </div>
        <div className="flex items-center justify-between gap-8 w-full h-64 pt-24">
          <div className="bg-neutral-800/20 w-full h-72 rounded-xl flex items-center justify-center">
            3
          </div>
          <div className="bg-neutral-800/20 w-full h-72 rounded-xl flex items-center justify-center">
            4
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grids;
