import { signOut } from "next-auth/react";
import Link from "next/link";
import { MouseEvent } from "react";

export default function AuthLinks() {
  const status = "authenticated";


  const handleLogout = async (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    await signOut();
  };
  
  return (
    <>
      {status === "notAuthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className="cursor-pointer" onClick={handleLogout}>LogOut</span>
        </>
      )}
    </>
  );
}
