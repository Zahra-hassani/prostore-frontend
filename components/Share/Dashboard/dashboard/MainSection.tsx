import React from "react";
import DashboardHeader from "../DashboardHeader";
import OverAllReports from "./OverAllReports";
import RecentOrders from "./RecentOrders";

function MainSection({
  setShowText,
  showText,
}: {
  setShowText: any;
  showText: boolean;
}) {
  return (
    <div className="w-full">
      <DashboardHeader setShowText={setShowText} showText={showText} />
      <div className="p-7 flex flex-col gap-4">
        <OverAllReports />
        <RecentOrders />
      </div>
    </div>
  );
}

export default MainSection;
