"use client";

import { getUserTopTracks } from "@/stores/getUserTopTracks";
import React, { useEffect } from "react";
import Skeleton from "@/components/dashboard/skeleton";
import toast from "react-hot-toast";
import Image from "next/image";

function Tables() {
  const { data, loading, error, fetchData } = getUserTopTracks();

  useEffect(() => {
    const fetchUserTopTracks = async () => {
      await fetchData();
    };

    fetchUserTopTracks();
  }, [fetchData]);

  if (loading) {
    <Skeleton className="w-full h-full" />;
  }

  if (error) {
    toast.error(error);
  }

  return (
    <div>
      {data && data?.items ? (
        <div className="overflow-x-auto p-4">
          <h2 className="font-semibold text-lg pb-6 pt-1">
            Your Top Tracks (50)
          </h2>
          <table className="table-auto w-full text-left border-collapse rounded-xl overflow-hidden">
            <thead className="bg-green-600">
              <tr>
                <th className="px-4 py-2 text-gray-200">Artists Picture</th>
                <th className="px-4 py-2 text-gray-200">Artists</th>
                <th className="px-4 py-2 text-gray-200">Name</th>
                <th className="px-4 py-2 text-gray-200">Duration</th>
              </tr>
            </thead>
            <tbody>
              {data?.items?.map((row: any, index: number) => (
                <tr key={row.id} className="hover:bg-gray-800">
                  <td className="px-4 py-2 text-gray-300 flex items-center gap-4">
                    <p className="text-lg text-secondary">{index + 1}.</p>
                    <Image
                      src={row?.album?.images[0]?.url}
                      alt="artists-image"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2 text-gray-300">
                    {row.artists[0].name}
                  </td>
                  <td className="px-4 py-2 text-gray-300">{row.name}</td>
                  <td className="px-4 py-2 text-gray-300">
                    {(row.duration_ms / 1000 / 60).toFixed(1)} min
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}

export default Tables;
