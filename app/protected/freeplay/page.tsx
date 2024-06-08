import React from 'react'
import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";


const page = () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("user", user);

  if (!user) {
    return redirect("/login");
  }
  return (
    <div>page</div>
  )
}

export default page
