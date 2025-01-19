"use client";

import { topItemsStore } from "@/stores/userTopItems";
import React, { useEffect } from "react";
import Skeleton from "@/components/dashboard/skeleton";
import toast from "react-hot-toast";

const Playlists = () => {
  const { data, loading, error, fetchData } = topItemsStore();

  useEffect(() => {
    const fetchUserPlaylists = async () => {
      await fetchData("tracks");
    };

    fetchUserPlaylists();
  }, [fetchData]);

  if (loading) {
    return <Skeleton width={200} height={200} />;
  }

  if (error) {
    toast.error(error);
  }

  console.log(error);

  return (
    <div>
      {data?.items?.map((item: any, index: number) => (
        <div key={item.name}>
          {index + 1} - {item.name}
        </div>
      ))}
    </div>
  );
};

export default Playlists;
