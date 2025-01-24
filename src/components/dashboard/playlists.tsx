"use client";

import { playlistStore } from "@/stores/playlistSlice";
import React, { useEffect } from "react";
import Skeleton from "@/components/dashboard/skeleton";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";

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
      <div className="grid grid-cols-2 gap-6 2xl:grid-cols-3">
        {data && data?.items
          ? data?.items?.slice(0, 28).map((item: any) => (
              <div
                key={item.id}
                className="relative flex items-center gap-6 bg-neutral-800/20 rounded-xl p-4"
              >
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
                <div className="flex flex-col justify-between">
                  <h2 className="font-semibold text-lg">
                    {item?.name.slice(0, 30)}
                  </h2>
                  <div className="text-neutral-400">
                    {item?.description.length > 80 ? (
                      <p>
                        {item?.description.slice(0, 80) || "No Description"}...
                      </p>
                    ) : (
                      item?.description.slice(0, 80) || "No Description"
                    )}
                  </div>
                  <p className="text-secondary font-medium">
                    Songs {item?.tracks?.total}
                  </p>
                </div>
                <Link
                  href={item?.external_urls?.spotify}
                  className="absolute top-6 right-6"
                >
                  <FaSpotify className="text-secondary text-3xl hover:opacity-80" />
                </Link>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Playlists;
