"use client";

import React from "react";
import { PiSignOutBold } from "react-icons/pi";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

function SignOut() {
  async function signOutFunction() {
    const supabase = await createClient();
    await supabase.auth.signOut();

    redirect("/");
  }
  return (
    <div>
      <button onClick={signOutFunction}>
        <PiSignOutBold className="transition-all hover:text-secondary hover:cursor-pointer text-lg" />
      </button>
    </div>
  );
}

export default SignOut;
