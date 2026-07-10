"use client";
import AllCustomers from "@/components/Share/Dashboard/AllCustomers";
import DashboardHeader from "@/components/Share/Dashboard/DashboardHeader";
import DashboardSidebar from "@/components/Share/Dashboard/Sidebar";
import React, { useState } from "react";

function CustomersPage() {
  const [showText, setShowText] = useState(true);
  return (
    <div className="w-full bg-stone-50 flex dark:bg-black">
      <div className={`${showText ? "w-70" : "w-fit"}`}>
        <DashboardSidebar showText={showText} />
      </div>
      <div className="w-full">
        <DashboardHeader setShowText={setShowText} showText={showText} />
        <div className="p-7 flex flex-col min-h-[92vh] gap-4">
          <AllCustomers />
        </div>
      </div>
    </div>
  );
}

export default CustomersPage;
