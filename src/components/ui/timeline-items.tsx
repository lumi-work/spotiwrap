"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans px-4 md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-10 md:py-20">
        <h2 className="text-2xl md:text-4xl mb-4 text-neutral-50">
          Spotiwrap Changelog
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-sm">
          Spotify Wrapped App has been evolving to provide the best personalized
          music insights. Here&apos;s a timeline of updates and improvements
          we&apos;ve made to enhance your experience.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 gap-4 md:gap-10"
          >
            {/* Timeline Circle and Title */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 w-8 md:h-10 md:w-10 absolute left-2 md:left-3 rounded-full bg-white flex items-center justify-center">
                <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-neutral-300">
                {item.title}
              </h3>
            </div>

            {/* Content */}
            <div className="relative pl-12 md:pl-20 pr-4 w-full">
              <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Timeline Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-4 md:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-secondary via-green-800 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
