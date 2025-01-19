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
    return <Skeleton width={200} height={200} />;
  }

  if (error) {
    toast.error(error);
  }

  return (
    <div>
      last 4 weeks
      {data?.items?.map((item: any, index: number) => (
        <div key={item.name}>
          <Image
            src={item.album.images[0].url}
            width={100}
            height={100}
            alt="album-image"
            className="w-auto h-auto rounded-xl"
          />
          {index + 1} - {item.name}
        </div>
      ))}
    </div>
  );
};

export default userTopItems;
