"use client";

import { getUserProfile } from "@/stores/getUserProfile";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import Skeleton from "@/components/dashboard/skeleton";
import toast from "react-hot-toast";
import Link from "next/link";
import { playlistStore } from "@/stores/playlistSlice";
import { getRecentlyPlayed } from "@/stores/getRecentlyPlayed";

function OverviewTop() {
  const { data, loading, error, fetchData } = getUserProfile();
  const {
    data: playlistData,
    loading: playlistLoading,
    error: playlistError,
    fetchData: playlistFetchdata,
  } = playlistStore();

  const {
    data: recentlyData,
    loading: recentlyLoading,
    error: recentlyError,
    fetchData: recentlyFetchData,
  } = getRecentlyPlayed();

  useEffect(() => {
    const fetchUserProfile = async () => {
      await fetchData();
    };

    const fetchUserPlaylists = async () => {
      await playlistFetchdata();
    };

    const fetchRecentlyPlayed = async () => {
      await recentlyFetchData();
    };
    fetchUserProfile();
    fetchUserPlaylists();
    fetchRecentlyPlayed();
  }, [fetchData, playlistFetchdata, recentlyFetchData]);

  if (loading || playlistLoading || recentlyLoading) {
    <Skeleton className="w-full h-full" />;
  }

  if (error || playlistError || recentlyError) {
    toast.error(error);
  }

  const [totalDurationMinutes, setTotalDurationMinutes] = useState(0);

  const calculateDurationMinutes = (recentlyItems: any[]) => {
    if (!recentlyItems || recentlyItems.length === 0) {
      return 0;
    }

    const totalMinutes = recentlyItems.reduce(
      (total, item) => total + (item.track?.duration_ms || 0) / 1000 / 60,
      0
    );

    return Math.floor(totalMinutes);
  };

  useEffect(() => {
    if (recentlyData?.items) {
      const totalMinutes = calculateDurationMinutes(recentlyData.items);
      setTotalDurationMinutes(totalMinutes);
    }
  }, [recentlyData]);

  return (
    <div className="w-full text-white p-4 rounded-lg">
      {data && playlistData && recentlyData ? (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="flex flex-col items-center md:items-start gap-4 ml-10">
            <div className="flex items-center gap-4">
              <Image
                src={
                  data?.images?.[0]?.url
                    ? data.images[0].url
                    : "https://dummyimage.com/150x150"
                }
                width={75}
                height={75}
                alt="user-image"
                className="rounded-full border-2 border-secondary shadow-md"
              />
              <div className="flex flex-col">
                <Link
                  href={data?.external_urls?.spotify || "/"}
                  target="_blank"
                  className="group"
                >
                  <p className="text-xl font-semibold flex items-center gap-2">
                    @{data?.display_name}
                    <MdArrowOutward className="text-lg group-hover:scale-125 transition-transform duration-200" />
                  </p>
                </Link>
                <p className="text-sm text-neutral-400">ID: {data?.id}</p>
                <p className="text-sm text-neutral-400 mt-1">
                  Followers: {data?.followers?.total}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="px-12 h-20 flex flex-col items-center justify-center bg-neutral-800/20 rounded-xl">
                <p className="text-sm text-neutral-400">Listening Time</p>
                <div className="text-lg font-semibold text-secondary mt-2">
                  {totalDurationMinutes !== 0 ? (
                    <p>+{totalDurationMinutes} Minute</p>
                  ) : (
                    0
                  )}
                </div>
              </div>
              <div className="px-12 h-20 flex flex-col items-center justify-center bg-neutral-800/20 rounded-xl">
                <p className="text-sm text-neutral-400">Last Track</p>
                <p className="text-lg font-semibold text-secondary mt-2">
                  {recentlyData.items
                    ? recentlyData?.items[0]?.track?.name?.slice(0, 20)
                    : "Null"}
                </p>
              </div>
              <div className="px-12 h-20 flex flex-col items-center justify-center bg-neutral-800/20 rounded-xl">
                <p className="text-sm text-neutral-400">Playlist</p>
                <p className="text-lg font-semibold text-secondary mt-2">
                  {playlistData && playlistData?.items?.length > 0
                    ? playlistData?.items?.length
                    : 0}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-0 mr-5">
            <h2 className="text-lg font-semibold">
              Playlists ({playlistData?.items?.length})
            </h2>
            <div className="grid grid-cols-3 gap-6 mt-4">
              {playlistData && playlistData?.items?.length > 0 ? (
                playlistData.items.slice(0, 5).map((item: any) => (
                  <div
                    key={item.id}
                    className="w-24 h-24 bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-200"
                  >
                    <Image
                      src={
                        item?.images?.[0]?.url
                          ? item.images[0].url
                          : "https://dummyimage.com/150x150"
                      }
                      width={96}
                      height={96}
                      alt="playlist-picture"
                      className="object-cover"
                    />
                  </div>
                ))
              ) : (
                <p className="text-sm text-neutral-400">
                  You don't have any playlists.
                </p>
              )}
              <Link href={"/dashboard/playlists"}>
                <div className="w-24 h-24 bg-neutral-800 rounded-xl flex items-center justify-center text-3xl text-neutral-400 hover:bg-neutral-700 transition-colors">
                  +
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default OverviewTop;
