import { storeState } from "@/types/storeState";
import { fetchAccessToken } from "@/utils/fetch/auth";
import { fetchSpotifyUserId } from "@/utils/fetch/user";
import { create } from "zustand";

export const playlistStore = create<storeState>((set) => ({
  data: [],
  loading: false,
  error: null,

  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const token = await fetchAccessToken();
      const user_id = await fetchSpotifyUserId(token)
      if (!token) throw new Error("No access token available");
      if (!user_id) throw new Error("No access userId available")
      const response = await fetch(
        `https://api.spotify.com/v1/users/${user_id}/playlists`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, 
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch playlist: ${response.statusText}`);
      }

      const data = await response.json();
      set({ data, loading: false }); 
      console.log("playlists", data)
    } catch (error: any) {
      set({ error: error.message, loading: false }); 
    }
  },
}));
