import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/constants";
import { Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./Menu";

function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start gap-1">
          <Link href="/" className="flex-start">
            <Image
              src="/logo.svg"
              height={49}
              width={49}
              priority={true}
              className="h-12 w-12 rounded-md"
              alt={`${APP_NAME}`}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
}

export default Header;
