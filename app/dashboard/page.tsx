"use client";
import MainContent from "@/components/Share/Dashboard/MainContent";
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
    <div className="min-h-screen w-full flex">
      <div className={`${showText ? "w-70" : "w-fit"}`}>
        <DashboardSidebar showText={showText} />
      </div>
      <MainContent setShowText={setShowText} showText={showText} />
    </div>
  );
}

export default Page;
