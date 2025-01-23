"use client";

import { topItemsStore } from "@/stores/userTopItems";
import React, { useEffect } from "react";
import Skeleton from "@/components/dashboard/skeleton";
import toast from "react-hot-toast";
import Image from "next/image";

const UserTopItems = () => {
  const { data, loading, error, fetchData } = topItemsStore();

  useEffect(() => {
    const fetchUserPlaylists = async () => {
      await fetchData();
    };

    fetchUserPlaylists();
  }, [fetchData]);

  if (loading) {
    return <Skeleton className="w-full h-full" />;
  }

  if (error) {
    toast.error(error);
  }

  return (
    <div className="ml-3 bg-neutral-900 p-6 rounded-lg shadow-md">
      {data?.items ? (
        <>
          <h2 className="font-semibold text-2xl text-white pb-4 border-b border-neutral-700 mb-4">
            🎧 Most Listened
          </h2>
          <div className="space-y-4">
            {data.items.map((item: any, index: number) => (
              <div
                key={item.name}
                className="flex items-center gap-4 p-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-all duration-200"
              >
                <Image
                  src={item.album.images[0].url}
                  width={60}
                  height={60}
                  alt="album-image"
                  className="rounded-lg shadow-md"
                />
                <div className="flex-1">
                  <p className="text-lg font-medium text-white truncate">
                    {index + 1}. {item.name.slice(0, 15) || "Unknown Name"}
                  </p>
                  <p className="text-sm text-neutral-400">
                    {item.artists?.[0]?.name || "Unknown Artist"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-neutral-400">No data available</p>
      )}
    </div>
  );
};

export default UserTopItems;
