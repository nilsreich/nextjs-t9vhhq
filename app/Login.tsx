"use client";

import { useSupabase } from "./supabase-provider";

export const Login = () => {
  const { supabase } = useSupabase();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email: "jon@supabase.com",
      password: "sup3rs3cur3",
    });
  };

  const handleLogin = async () => {
    await supabase.auth.signInWithPassword({
      email: "jon@supabase.com",
      password: "sup3rs3cur3",
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  

  return (
    <div className="flex gap-2">
      <button className='border px-2' onClick={handleSignUp}>Sign Up</button>
      <button className='border px-2' onClick={handleLogin}>Login</button>
      <button className='border px-2' onClick={handleLogout}>Logout</button>
    </div>
  );
};
