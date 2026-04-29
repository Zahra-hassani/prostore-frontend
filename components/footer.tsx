import { APP_NAME } from "@/constants";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="w-full border-t">
        <div className="text-lg flex justify-center items-center wrapper p-5 text-black/60">
          @{currentYear} {APP_NAME} &copy;All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
