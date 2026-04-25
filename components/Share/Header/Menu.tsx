import { Button } from "@/components/ui/button";
import React from "react";
import Theme from "./Theme";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CircleUserRound, EllipsisVertical, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";

function Menu() {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden lg:flex max-w-xs gap-1">
        <Input placeholder="Search here..." />
        <Theme />
        <Button variant="ghost">
          <Link href="/cart" className="flex gap-2 items-center">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button variant="default">
          <Link href="/sign-in" className="flex gap-2 items-center">
            <CircleUserRound /> Sign in
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start gap-1 pl-3">
            <SheetTitle>Menu</SheetTitle>
            <Input placeholder="Search here..." />
            <Theme />
            <Button variant="ghost">
              <Link href="/cart">Cart</Link>
            </Button>
            <Button variant="default">
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}

export default Menu;
