"use client";

import { topItemsStore } from "@/stores/userTopItems";
import React, { useEffect } from "react";
import Skeleton from "@/components/dashboard/skeleton";
import toast from "react-hot-toast";
import Image from "next/image";

const userTopItems = () => {
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
    <div>
      {data?.items ? (
        <>
          <h2 className="font-semibold text-xl text-neutral-50 pb-12">
            Most Listened (Last 4 Weeks)
          </h2>
          {data.items.map((item: any, index: number) => (
            <div key={item.name} className="flex items-center gap-4 py-2">
              <Image
                src={item.album.images[0].url}
                width={120}
                height={120}
                alt="album-image"
                className="w-auto h-auto rounded-xl"
              />
              <p className="text-lg font-medium text-neutral-200">
                {index + 1} - {item.name.slice(0, 20) || "Unkown Name"}
              </p>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default userTopItems;
