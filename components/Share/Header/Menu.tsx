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
import {
  CircleUserRound,
  EllipsisVertical,
  MenuIcon,
  ShoppingCart,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import SearchInput from "./SearchInput";

function Menu() {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-lg gap-1">
        <SearchInput />
        <Theme />
        <Button asChild variant="ghost">
          <Link href="/cart" className="flex gap-2 items-center">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild variant="default">
          <Link href="/sign-in" className="flex gap-2 items-center">
            <CircleUserRound /> Sign in
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start gap-8 pl-3">
            <SheetTitle>Menu</SheetTitle>
            <SearchInput />
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
