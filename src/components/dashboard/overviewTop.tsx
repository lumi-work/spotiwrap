"use client";

import { getUserProfile } from "@/stores/getUserProfile";
import Image from "next/image";
import React, { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import Skeleton from "@/components/dashboard/skeleton";
import toast from "react-hot-toast";
import Link from "next/link";
import { playlistStore } from "@/stores/playlistSlice";

function OverviewTop() {
  const { data, loading, error, fetchData } = getUserProfile();
  const {
    data: playlistData,
    loading: playlistLoading,
    error: playlistError,
    fetchData: playlistFetchdata,
  } = playlistStore();

  useEffect(() => {
    const fetchUserProfile = async () => {
      await fetchData();
    };

    const fetchUserPlaylists = async () => {
      await playlistFetchdata();
    };

    fetchUserProfile();
    fetchUserPlaylists();
  }, [fetchData, playlistFetchdata]);

  if (loading || playlistLoading) {
    return <Skeleton className="w-full h-full" />;
  }

  if (error || playlistError) {
    toast.error(error);
  }

  console.log(data);

  return (
    <div className="w-full">
      {data && playlistData ? (
        <div className="flex items-center justify-between w-full px-24">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex items-center justify-start w-full gap-4">
              <Image
                src={
                  data?.images?.[0]?.url
                    ? data.images[0].url
                    : "https://dummyimage.com/150x150"
                }
                width={65}
                height={65}
                alt="user-image"
                priority
                className="w-auto h-auto rounded-full border-2 border-secondary"
              />

              <div className="flex-col">
                <Link
                  href={data?.external_urls?.spotify || "/"}
                  target="_blank"
                >
                  <p className="font-semibold text-lg flex items-center gap-1 group hover:text-secondary hover:cursor-pointer">
                    @{data?.display_name}{" "}
                    <MdArrowOutward className="text-2xl hidden group-hover:block" />
                  </p>
                </Link>
                <p className="text-sm text-neutral-400">Id : {data?.id}</p>
                <h3 className="text-neutral-300 mt-2">
                  Followers: {data?.followers?.total}
                </h3>
              </div>
            </div>
            <div className="flex items-center justify-start w-full pt-16 gap-24">
              <div className="flex flex-col items-center justify-center">
                <div className="text-lg font-semibold">Music Playing</div>
                <div className="text-secondary pt-2">+1.548 h/s</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-lg font-semibold">Weekly</div>
                <div className="text-secondary pt-2">+8 hours</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-lg font-semibold">Liked Playlist</div>
                <div className="text-secondary pt-2">+25 liked</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div>
              <h2 className="font-semibold text-lg flex items-start justify-start mt-2">
                Playlists ({playlistData?.items?.length})
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-x-10 gap-y-6 mt-3 mb-5">
              {playlistData && playlistData?.items?.length > 0 ? (
                playlistData.items.slice(0, 5).map((item: any) => (
                  <div key={item.id} className="hover:opacity-55">
                    <div className="w-24 h-24 rounded-xl overflow-hidden flex items-center justify-center">
                      <Image
                        src={
                          item?.images?.[0]?.url
                            ? item.images[0].url
                            : "https://dummyimage.com/150x150"
                        }
                        width={120}
                        height={120}
                        alt="playlist-picture"
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div>You don't have any playlists.</div>
              )}
              <Link href={"/dashboard/playlists"}>
                <div className="hover:opacity-55 w-24 h-24 rounded-xl flex items-center justify-center text-3xl bg-background opacity-50">
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
