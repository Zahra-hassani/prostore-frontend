"use client";
import { getUser } from "@/actions/auth.action";
import { User2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  phone_number: string;
};

function UserInfo({ showText }: { showText: boolean }) {
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
  return (
    <div className="flex items-center gap-2 p-1">
      <div className="flex justify-center items-center h-10 w-10 rounded-md bg-stone-50 dark:bg-gray-800/65 border">
        <User2Icon
          size={34}
          className="text-transparent fill-cyan-600/65 dark:fill-stone-300/65"
        />
      </div>
      <div
        className={`${showText ? "block" : "hidden"} flex flex-col space-y-0.5`}
      >
        <span className="font-bold dark:text-white">{user?.name}</span>
        <span className="text-xs text-muted-foreground">{user?.email}</span>
      </div>
    </div>
  );
}

export default UserInfo;
