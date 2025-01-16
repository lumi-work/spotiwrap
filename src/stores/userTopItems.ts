import { storeState } from "@/types/storeState";
import { fetchAccessToken } from "@/utils/fetch/auth";
import { create } from "zustand";

export const topItemsStore = create<storeState>((set) => ({
  data: [],
  loading: false,
  error: null,

  fetchData: async (param: string) => {
    set({ loading: true, error: null });
    try {
      const token = await fetchAccessToken();
      if (!token) throw new Error("No access token available");
      const response = await fetch(
        `https://api.spotify.com/v1/me/top/${param}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, 
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch user top items: ${response.statusText}`);
      }

      const data = await response.json();
      set({ data, loading: false }); 
      console.log("usertopitems", data)
    } catch (error: any) {
      set({ error: error.message, loading: false }); 
    }
  },
}));