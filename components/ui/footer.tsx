import { APP_NAME } from "@/constants";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="flex-center border-t">
        <div className="text-lg p-5 text-black/60">
          {currentYear} &copy;{APP_NAME} All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
