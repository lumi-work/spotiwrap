"use client";

import { topItemsStore } from "@/stores/userTopItems";
import React, { useEffect } from "react";

const Playlists = () => {
  const { data, loading, error, fetchData } = topItemsStore();

  useEffect(() => {
    const fetchUserPlaylists = async () => {
      await fetchData("tracks");
    };

    fetchUserPlaylists();
  }, [fetchData]);

  if (loading) {
    return <p>Loading playlists...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return <div>fetch</div>;
};

export default Playlists;
