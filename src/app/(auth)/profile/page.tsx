"use client"
import React, { useEffect } from "react";
import { useSession } from 'next-auth/react'
import Image from "next/image";
import toast from "react-hot-toast";

const Profile = () => { 
  const { data: session, status } = useSession()
  useEffect(() => {
    if (status === 'unauthenticated') {
      toast.error("Access denied!")
    }
  }, [status])
  if (status === 'loading') {
    return (
      <>
        <div className="flex flex-col p-24 items-center gap-8">
          <p>Loading...</p>
        </div>
      </>
    )
  }

  if (status === 'unauthenticated') {
    return (<>
      <div className="flex flex-col p-24 items-center gap-8">
        <p>Access Denied</p>
      </div>
    </>)
  }

  return (
    <div className="flex flex-col p-24 items-center gap-8">
      <div className="flex items-center gap-4">
        <Image src={session?.user?.image!} alt="" width={60} height={60} className="rounded-full" />
        <h1>Welcome, {session?.user?.name}</h1>
      </div>
    </div>
  );
};

export default Profile;
