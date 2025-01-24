"use client";

import { playlistStore } from "@/stores/playlistSlice";
import React, { useEffect } from "react";
import Skeleton from "@/components/dashboard/skeleton";
import toast from "react-hot-toast";
import Image from "next/image";

function Playlists() {
  const { data, loading, error, fetchData } = playlistStore();

  useEffect(() => {
    const fetchUserPlaylist = async () => {
      await fetchData();
    };

    fetchUserPlaylist();
  }, [fetchData]);

  if (loading) {
    <Skeleton className="w-full h-full" />;
  }

  if (error) {
    toast.error(error);
  }

  console.log(data);

  return (
    <div className="p-8">
      {data && data?.items ? (
        <h2 className="text-lg font-semibold ml-2 mb-4">
          Your Playlists ({data?.items?.length})
        </h2>
      ) : null}
      <div className="grid grid-cols-6 gap-6 2xl:grid-cols-10">
        {data && data?.items
          ? data?.items?.slice(0, 28).map((item: any) => (
              <div key={item.id} className="flex justify-center">
                <Image
                  src={
                    item?.images?.[0]?.url
                      ? item.images[0].url
                      : "https://dummyimage.com/150x150"
                  }
                  width={200}
                  height={200}
                  alt="playlist-picture"
                  className="object-cover rounded-xl"
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Playlists;
