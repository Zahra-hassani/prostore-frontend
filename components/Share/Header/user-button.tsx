"use client";
import { getUser } from "@/actions/auth.action";
import { Button } from "@/components/ui/button";
import { CircleUserIcon, CircleUserRound } from "lucide-react";
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
    setUser(null);
  }
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const token = localStorage.getItem("token") as string;
    async function getUsers(): Promise<User> {
      return await getUser(token);
    }
    async function setU() {
      const foundUser = await getUsers();
      if (foundUser?.id) {
        setUser(foundUser);
      } else {
        setUser(null);
      }
    }
    setU();
  }, []);
  if (user) {
    return (
      <div className="flex space-x-2">
        <span className="text-white font-bold px-3.5 py-2 rounded-full bg-gray-300">
          {user.name.slice(0, 1).toUpperCase()}
        </span>
        <Button onClick={handleLogOut}>Sign Out</Button>
      </div>
    );
  } else {
    return (
      <div className="flex space-x-2">
        <Button asChild>
          <Link href="/sign-in">
            <CircleUserRound /> Sign In
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-up">
            <CircleUserIcon /> Sign Up
          </Link>
        </Button>
      </div>
    );
  }
}

export default UserButton;
