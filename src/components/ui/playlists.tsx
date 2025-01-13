"use client";

import React, { useEffect } from "react";
import { playlistStore } from "@/stores/playlistSlice";

const Playlists = () => {
  const { data, loading, error, fetchData } = playlistStore();

  useEffect(() => {
    const fetchUserPlaylists = async () => {
      await fetchData();
    };

    fetchUserPlaylists();
  }, [fetchData]);

  if (loading) {
    return <p>Loading playlists...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="text-white">
      <h1>Your Playlists</h1>
      <ul>
        {data.items && data.items.length > 0
          ? data?.items.map((playlist: any) => (
              <li key={playlist.id}>
                <strong>{playlist.name}</strong> -{" "}
                {playlist.description || "no description"}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Playlists;
