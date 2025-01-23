"use client";

import { getUserTopArtists } from "@/stores/getUserTopArtists";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import Skeleton from "@/components/dashboard/skeleton";
import Image from "next/image";

function OverviewMiddle() {
  const { data, loading, error, fetchData } = getUserTopArtists();

  useEffect(() => {
    const fetchTopItems = async () => {
      await fetchData();
    };

    fetchTopItems();
  }, [fetchData]);

  if (loading) {
    return <Skeleton className="w-full h-full" />;
  }

  if (error) {
    toast.error(error);
  }

  console.log(data);

  return (
    <div>
      {data && data?.items ? (
        <h2 className="font-semibold text-lg ml-6">Your Top Artists</h2>
      ) : null}
      <div className="grid grid-cols-6 gap-6 p-4">
        {data && data?.items
          ? data.items
              .sort((a: any, b: any) => a.popularity - b.popularity)
              .map((item: any) => (
                <div
                  key={item.id}
                  className="bg-neutral-800/20 flex flex-col rounded-xl overflow-hidden hover:scale-105 transition-all border-2 border-neutral-800"
                >
                  <div className="w-full h-40">
                    <Image
                      src={item?.images[0]?.url}
                      alt="artists-image"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-secondary font-medium text-xs text-center pt-4">
                    Top #{item?.popularity}
                  </p>
                  <h2 className="font-semibold text-center text-sm p-4 text-white">
                    {item?.name}
                  </h2>
                </div>
              ))
          : null}
      </div>
    </div>
  );
}

export default OverviewMiddle;
