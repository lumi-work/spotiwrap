import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import Playlists from "@/components/ui/playlists";
import Leftbar from "@/components/dashboard/leftbar";

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }

  redirect("/dashboard/overview");

  return <div></div>;
}
