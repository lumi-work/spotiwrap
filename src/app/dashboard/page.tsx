import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import Playlists from "@/components/ui/playlists";

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }

  return (
    <div className="flex items-center justify-center h-full w-full text-white">
      <div className="flex-shrink-0 flex-grow-0 basis-[15%] max-w-[15%] h-screen border-r border-gray-300/20">
        1
      </div>
      <div className="flex-shrink-0 flex-grow-0 basis-[85%] max-w-[85%] h-screen">
        <Playlists />
      </div>
    </div>
  );
}
