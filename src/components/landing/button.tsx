"use client";

import { createClient } from "@/utils/supabase/client";
import React from "react";
import { FaSpotify } from "react-icons/fa";

function LoginButton() {
  const supabase = createClient();

  async function signInWithSpotify() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "spotify",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
      },
    });

    if (error) {
      console.error("Auth error:", error);
    }
  }

  return (
    <button
      onClick={signInWithSpotify}
      className="flex items-center gap-2 text-black font-medium bg-secondary h-10 px-3 rounded-xl text-sm transition-all hover:shadow-lg hover:scale-105"
    >
      Login with Spotify
      <FaSpotify className="text-xl" />
    </button>
  );
}

export default LoginButton;
