import { redirect } from "next/navigation";

import { createClient } from "@/utils/server";

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }

  console.log(data);

  return <p className="text-white">Hello {data.user.user_metadata.name}!</p>;
}
