export const fetchSpotifyUserId = async (accessToken: any): Promise<string | null> => {
    const response = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    if (!response.ok) {
      console.error("Failed to fetch Spotify user profile:", response.statusText);
      return null;
    }
  
    const data = await response.json();
    console.log("user", data)
    return data.id || null; 
  };
  