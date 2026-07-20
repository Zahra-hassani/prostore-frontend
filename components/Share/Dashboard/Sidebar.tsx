import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { APP_NAME } from "@/constants";
import {
  LayoutDashboardIcon,
  Package,
  ScanEye,
  ShoppingCart,
  SquareUserRound,
  Users2,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import UserInfo from "./UserInfo";
import Link from "next/link";

function DashboardSidebar({ showText }: { showText: boolean }) {
  return (
    <Card className="py-1 w-full h-full hidden md:flex transition-all duration-500 bg-stone-50 dark:bg-black flex-col justify-between rounded-none">
      <div className="">
        <CardHeader className="px-2 py-2">
          <CardTitle className="flex gap-2 items-center w-fit">
            <Image src="/logo.svg" alt="Logo" height={30} width={30} />
            {/* <ShoppingBasket
                size={24}
                className="rounded-lg text-white bg-amber-400"
              /> */}
            <span
              className={`${showText ? "block" : "hidden"} text-xl font-bold`}
            >
              {APP_NAME}
            </span>
          </CardTitle>
        </CardHeader>
        <hr />
        <CardContent className="p-0 px-2">
          <div className="flex space-y-1x flex-col">
            <Link
              href="/dashboard"
              className="flex space-x-2 items-center w-full py-3 hover:bg-stone-200/30 dark:hover:bg-stone-50/25 cursor-pointer"
            >
              <LayoutDashboardIcon />
              <span className={`${showText ? "block" : "hidden"}`}>
                Dashboard
              </span>
            </Link>
            <Link
              href="/dashboard/insert-product"
              className="flex space-x-2 items-center w-full py-3 hover:bg-stone-200/30 dark:hover:bg-stone-50/25 cursor-pointer"
            >
              <Package />
              <span className={`${showText ? "block" : "hidden"}`}>
                Product
              </span>
            </Link>
            <Link
              href="/dashboard/customers"
              className="flex space-x-2 items-center w-full py-3 hover:bg-stone-200/30 dark:hover:bg-stone-50/25 cursor-pointer"
            >
              <SquareUserRound />
              <span className={`${showText ? "block" : "hidden"}`}>
                Customers
              </span>
            </Link>
            <Link
              href="/dashboard/cart"
              className="flex space-x-2 items-center w-full py-3 hover:bg-stone-200/30 dark:hover:bg-stone-50/25 cursor-pointer"
            >
              <ShoppingCart />
              <span className={`${showText ? "block" : "hidden"}`}>Cart</span>
            </Link>
            <Link
              href="/dashboard/reviews"
              className="flex space-x-2 items-center w-full py-3 hover:bg-stone-200/30 dark:hover:bg-stone-50/25 cursor-pointer"
            >
              <ScanEye />
              <span className={`${showText ? "block" : "hidden"}`}>
                Reviews
              </span>
            </Link>
          </div>
        </CardContent>
      </div>
      <div>
        <CardDescription>
          <UserInfo showText={showText} />
        </CardDescription>
        <CardFooter className="px-1 py-2">
          <span
            className={`${showText ? "block" : "hidden"} text-xs text-muted-foreground`}
          >
            {new Date().getFullYear()} @Sharifi Programming Academy
          </span>
        </CardFooter>
      </div>
    </Card>
  );
}

export default DashboardSidebar;
