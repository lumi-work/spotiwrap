import { storeState } from "@/types/storeState";
import { fetchAccessToken } from "@/utils/fetch/auth";
import { create } from "zustand";

export const getUserTopTracks = create<storeState>((set) => ({
  data: [],
  loading: true,
  error: null,

  fetchData: async (type: string = "tracks", term: string = "long_term", limit: number = 50) => {
    set({ loading: true, error: null });
    try {
      const token = await fetchAccessToken();
      if (!token) throw new Error("No access token available");
      const response = await fetch(
        `https://api.spotify.com/v1/me/top/${type}?time_range=${term}&limit=${limit}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, 
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch user top items: ${response.status}`);
      }

      const data = await response.json();
      set({ data, loading: false }); 
    } catch (error: any) {
      set({ error: error.message, loading: false }); 
    }
  },
}));