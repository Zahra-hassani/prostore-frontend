import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/constants";
import { House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex-center flex-col gap-4 p-4 rounded border w-fit">
        <Image src="/logo.svg" alt={APP_NAME} height={100} width={100} />
        <p className="text-base">The page you are looking for is not found.</p>
        <Button variant="default">
          <Link href="/" className="flex items-center gap-2">
            <House /> Go to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
