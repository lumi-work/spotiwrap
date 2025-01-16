import React from "react";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

async function UserInformation() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();

  return (
    <div className="flex items-center gap-2">
      <Image
        src={data.user?.user_metadata.picture}
        width={30}
        height={30}
        alt="user-image"
        priority
        className="w-auto h-auto rounded-full border-2 border-secondary"
      />
      <p className="font-semibold">{data.user?.user_metadata.full_name}</p>
    </div>
  );
}

export default UserInformation;
