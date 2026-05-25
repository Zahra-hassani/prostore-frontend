"use client";
import { getUser } from "@/actions/auth.action";
import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  phone_number: string;
};

function UserButton() {
  function handleLogOut() {
    localStorage.removeItem("token");
  }
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const token = localStorage.getItem("token") as string;
    async function getUsers(): Promise<User> {
      return await getUser(token);
    }
    async function setU() {
      setUser(await getUsers());
      console.log(getUsers());
    }
    setU();
  }, []);
  if (user) {
    return (
      <div className="flex space-x-2">
        <span className="text-white font-bold px-3 py-2 rounded-full bg-gray-300">
          {user.name}
        </span>
        <Button onClick={handleLogOut}>Sign Out</Button>
      </div>
    );
  } else {
    return (
      <Button asChild>
        <Link href="/sign-in">
          <CircleUserRound /> Sign In
        </Link>
      </Button>
    );
  }
}

export default UserButton;
