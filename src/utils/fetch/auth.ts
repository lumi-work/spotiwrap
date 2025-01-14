// utils/fetch/auth.ts
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export const fetchAccessToken = async (): Promise<string | null> => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error || !session?.provider_token) {
    console.error("Error fetching session:", error);
    return null;
  }

  return session?.provider_token || null;
};
