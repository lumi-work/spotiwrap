import { redirect } from "next/navigation";

import { createClient } from "@/utils/server";
import Playlists from "@/components/ui/playlists";

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }

  return (
    <div>
      <Playlists />
    </div>
  );
}
