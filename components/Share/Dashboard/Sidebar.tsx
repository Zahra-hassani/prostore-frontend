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

function DashboardSidebar({ showText }: { showText: boolean }) {
  return (
    <Card className="py-1 w-fit min-h-screen flex flex-col justify-between rounded-none">
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
            <div className="flex space-x-2 items-center w-full py-3 hover:bg-stone-50 cursor-pointer">
              <LayoutDashboardIcon />
              <span className={`${showText ? "block" : "hidden"}`}>
                Dashboard
              </span>
            </div>
            <div className="flex space-x-2 items-center w-full py-3 hover:bg-stone-50 cursor-pointer">
              <Package />
              <span className={`${showText ? "block" : "hidden"}`}>
                Product
              </span>
            </div>
            <div className="flex space-x-2 items-center w-full py-3 hover:bg-stone-50 cursor-pointer">
              <SquareUserRound />
              <span className={`${showText ? "block" : "hidden"}`}>
                Customers
              </span>
            </div>
            <div className="flex space-x-2 items-center w-full py-3 hover:bg-stone-50 cursor-pointer">
              <ShoppingCart />
              <span className={`${showText ? "block" : "hidden"}`}>Cart</span>
            </div>
            <div className="flex space-x-2 items-center w-full py-3 hover:bg-stone-50 cursor-pointer">
              <ScanEye />
              <span className={`${showText ? "block" : "hidden"}`}>
                Reviews
              </span>
            </div>
          </div>
        </CardContent>
      </div>
      <div>
        <CardDescription></CardDescription>
        <CardFooter className="px-1 py-2">
          <span
            className={`${showText ? "block" : "hidden"} text-xs text-muted-foreground`}
          >
            {new Date().getFullYear()} &copy; Sharifi Programming Academy
          </span>
        </CardFooter>
      </div>
    </Card>
  );
}

export default DashboardSidebar;
