import React from "react";
import DashboardHeader from "./DashboardHeader";

function MainContent({
  setShowText,
  showText,
}: {
  setShowText: any;
  showText: boolean;
}) {
  return (
    <div className="w-full">
      <DashboardHeader setShowText={setShowText} showText={showText} />
    </div>
  );
}

export default MainContent;
