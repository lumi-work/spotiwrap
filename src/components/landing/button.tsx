"use client";

import { createClient } from "@/utils/supabase/client";
import React from "react";
import { FaSpotify } from "react-icons/fa";

function LoginButton({ text, className }: { text: string; className: string }) {
  const supabase = createClient();

  async function signInWithSpotify() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "spotify",
      options: {
        scopes:
          "user-top-read playlist-read-private user-read-email user-read-recently-played user-library-read user-read-playback-position",
        redirectTo: `${window.location.origin}/auth/callback?next=/dashboard/overview`,
      },
    });

    if (error) {
      console.error("Auth error:", error);
    }
  }

  return (
    <button
      onClick={signInWithSpotify}
      className={`flex items-center gap-2 text-neutral-200 font-medium bg-green-600 h-10 px-3 rounded-xl text-sm transition-all hover:shadow-lg hover:scale-105 ${className}`}
    >
      {text}
      <FaSpotify className="text-xl" />
    </button>
  );
}

export default LoginButton;
