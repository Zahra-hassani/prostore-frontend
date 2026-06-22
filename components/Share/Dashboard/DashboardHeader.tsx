import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Bell, PanelRightOpen } from "lucide-react";
import React from "react";

function DashboardHeader({
  setShowText,
  showText,
}: {
  setShowText: any;
  showText: boolean;
}) {
  return (
    <div className="w-full">
      <div className="w-full flex py-1.75 justify-between">
        <div className="flex items-center space-x-2.5 px-1">
          <PanelRightOpen onClick={() => setShowText(!showText)} />
          <span>Ecommerce App</span>
        </div>
        <div className="flex justify-between items-center gap-4 px-3">
          <Input type="search" placeholder="Search..." />
          <div className="p-2 relative bg-white rounded-md border">
            <Bell size={18} />
            <p
              //   variant={`destructive`}
              className="absolute -top-1/2 -right-1/2 -translate-x-1/2 translate-y-1/2 text-xs bg-destructive text-white rounded-full py-0.5 px-1.5"
            >
              2
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default DashboardHeader;
