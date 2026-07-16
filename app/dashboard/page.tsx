"use client";
import MainSection from "@/components/Share/Dashboard/dashboard/MainSection";
import DashboardSidebar from "@/components/Share/Dashboard/Sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { APP_NAME } from "@/constants";
import {
  LayoutDashboardIcon,
  Package,
  ShoppingBasket,
  Users2,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function Page() {
  const [showText, setShowText] = useState(true);
  return (
    <div className=" w-full flex bg-stone-50 dark:bg-black">
      <div className={`${showText ? "w-70" : "w-fit"}`}>
        <DashboardSidebar showText={showText} />
      </div>
      <MainSection setShowText={setShowText} showText={showText} />
    </div>
  );
}

export default Page;
