"use client";

import React, { useEffect } from "react";
import Skeleton from "@/components/dashboard/skeleton";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { getUserPodcast } from "@/stores/getUserPodcast";

function Episode() {
  const { data, loading, error, fetchData } = getUserPodcast();

  useEffect(() => {
    const fetchUserPodcast = async () => {
      await fetchData();
    };

    fetchUserPodcast();
  }, [fetchData]);

  if (loading) {
    <Skeleton className="w-full h-full" />;
  }

  if (error) {
    toast.error(error);
  }

  return (
    <div className="p-8">
      {data && data?.items ? (
        <h2 className="text-lg font-semibold ml-2 mb-4">
          Your Episodes (
          {data?.items.filter(
            (item: any) =>
              item?.episode?.id &&
              item?.episode?.images?.[0]?.url &&
              item?.episode?.name &&
              item?.episode?.description
          ).length || 0}
          )
        </h2>
      ) : null}
      <div className="grid grid-cols-2 gap-6 2xl:grid-cols-3">
        {data && data?.items
          ? data?.items
              .filter(
                (item: any) =>
                  item?.episode?.id &&
                  item?.episode?.images?.[0]?.url &&
                  item?.episode?.name &&
                  item?.episode?.description
              )
              .slice(0, 28)
              .map((item: any, index: number) => (
                <div
                  key={item?.episode?.id || index}
                  className="relative flex items-center gap-6 bg-neutral-800/20 rounded-xl p-4"
                >
                  <Image
                    src={item?.episode?.images?.[0]?.url}
                    width={200}
                    height={200}
                    alt="episode-picture"
                    className="object-cover rounded-xl"
                  />
                  <div className="flex flex-col justify-between">
                    <h2 className="font-semibold text-lg">
                      {item?.episode?.name?.slice(0, 20)}
                    </h2>
                    <div className="text-neutral-400">
                      {item?.episode?.description?.length > 80 ? (
                        <p>{item?.episode?.description?.slice(0, 80)}...</p>
                      ) : (
                        item?.episode?.description?.slice(0, 80)
                      )}
                    </div>
                    <p className="text-secondary font-medium">
                      Release Date:{" "}
                      {item?.episode?.release_date
                        ? item.episode.release_date
                            .split("-")
                            .reverse()
                            .join(".")
                        : "Unknown"}
                    </p>
                  </div>
                  <Link
                    href={item?.episode?.external_urls?.spotify}
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

export default Episode;
