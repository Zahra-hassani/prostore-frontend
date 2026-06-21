"use client";
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
    <div className="min-h-screen w-full">
      <div className="max-w-3xs w-full h-full">
        <Card className="px-2 py-1 min-h-screen flex flex-col justify-between rounded-none">
          <div className="">
            <CardHeader className="flex space-x-2 items-center p-0 w-fit">
              <ShoppingBasket
                size={24}
                className="rounded-lg text-white bg-amber-400"
              />
              <span
                className={`${showText ? "block" : "hidden"} text-xl font-bold`}
              >
                {APP_NAME}
              </span>
            </CardHeader>
            <CardContent className="p-0 mt-4">
              <div className="flex space-y-4 flex-col">
                <div className="flex space-x-2 items-center w-fit">
                  <LayoutDashboardIcon size={18} />
                  <span className={`${showText ? "block" : "hidden"}`}>
                    Dashboard
                  </span>
                </div>
                <div className="flex space-x-2 items-center w-fit">
                  <Package size={18} />
                  <span className={`${showText ? "block" : "hidden"}`}>
                    Product
                  </span>
                </div>
                <div className="flex space-x-2 items-center w-fit">
                  <Users2 size={18} />
                  <span className={`${showText ? "block" : "hidden"}`}>
                    Customers
                  </span>
                </div>
              </div>
            </CardContent>
          </div>
          <div>
            <CardDescription></CardDescription>
            <CardFooter>
              <span className="text-xs text-muted-foreground">
                Dashboard Build with shadcn
              </span>
            </CardFooter>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Page;
