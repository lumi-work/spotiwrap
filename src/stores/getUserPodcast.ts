import { storeState } from "@/types/storeState";
import { fetchAccessToken } from "@/utils/fetch/auth";
import { create } from "zustand";

export const getUserPodcast = create<storeState>((set) => ({
  data: [],
  loading: true,
  error: null,

  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const token = await fetchAccessToken();
      if (!token) throw new Error("No access token available");
      const response = await fetch(
        `https://api.spotify.com/v1/me/shows`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, 
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch recently played: ${response.status}`);
      }

      const data = await response.json();
      set({ data, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false }); 
    }
  },
}));