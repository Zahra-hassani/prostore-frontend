"use client";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Bell,
  LayoutDashboardIcon,
  Menu,
  Package,
  PanelRightOpen,
  ScanEye,
  ShoppingCart,
  SquareUserRound,
  X,
} from "lucide-react";
import React, { useState } from "react";
import Theme from "../Header/Theme";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

function DashboardHeader({
  setShowText,
  showText,
}: {
  setShowText: any;
  showText: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-full">
      <div className="w-full flex md:py-1.75 py-3 justify-between">
        <div className="flex items-center space-x-2.5 px-1">
          <PanelRightOpen onClick={() => setShowText(!showText)} />
          <span>Ecommerce App</span>
        </div>
        <div className="md:flex hidden justify-between items-center gap-4 px-3">
          <Input type="search" placeholder="Search..." />
          <div className="p-2 relative rounded-md border">
            <Bell size={18} />
            <p
              //   variant={`destructive`}
              className="absolute -top-1/2 -right-1/2 -translate-x-1/2 translate-y-1/2 text-xs bg-destructive text-white rounded-full py-0.5 px-1.5"
            >
              2
            </p>
          </div>
          <Theme />
        </div>
        <div className="md:hidden">
          <Menu onClick={() => setMenuOpen(true)} />
        </div>
      </div>
      <div
        className={`min-h-screen w-full bg-white/60 backdrop-blur-md p-3 ${menuOpen ? "flex" : "hidden"} flex-col gap-2 absolute top-0 left-0 md:hidden`}
      >
        {/* logo */}
        <div className="w-full flex justify-between items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            height={80}
            width={80}
            className="w-12 h-12"
          />
          <div className="flex items-center gap-2">
            <Theme />
            <X onClick={() => setMenuOpen(false)} />
          </div>
        </div>
        <Link
          href=""
          className="flex space-x-2 items-center w-full py-3 hover:bg-stone-200/30 dark:hover:bg-stone-50/25 cursor-pointer"
        >
          <LayoutDashboardIcon />
          <span>Dashboard</span>
        </Link>
        <Link
          href=""
          className="flex space-x-2 items-center w-full py-3 hover:bg-stone-200/30 dark:hover:bg-stone-50/25 cursor-pointer"
        >
          <Package />
          <span>Product</span>
        </Link>
        <Link
          href=""
          className="flex space-x-2 items-center w-full py-3 hover:bg-stone-200/30 dark:hover:bg-stone-50/25 cursor-pointer"
        >
          <SquareUserRound />
          <span>Customers</span>
        </Link>
        <Link
          href=""
          className="flex space-x-2 items-center w-full py-3 hover:bg-stone-200/30 dark:hover:bg-stone-50/25 cursor-pointer"
        >
          <ShoppingCart />
          <span>Cart</span>
        </Link>
        <Link
          href=""
          className="flex space-x-2 items-center w-full py-3 hover:bg-stone-200/30 dark:hover:bg-stone-50/25 cursor-pointer"
        >
          <ScanEye />
          <span>Reviews</span>
        </Link>
      </div>
      <Separator />
    </div>
  );
}

export default DashboardHeader;
