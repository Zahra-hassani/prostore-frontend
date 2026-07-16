"use client";
import DashboardHeader from "@/components/Share/Dashboard/DashboardHeader";
import InsertProductForm from "@/components/Share/Dashboard/Product/Insert-product-form";
import DashboardSidebar from "@/components/Share/Dashboard/Sidebar";
import React, { useState } from "react";

function page() {
  const [showText, setShowText] = useState(true);
  return (
    <div className="w-full bg-stone-50 flex dark:bg-black">
      <div className={`${showText ? "w-70" : "w-fit"}`}>
        <DashboardSidebar showText={showText} />
      </div>
      <div className="w-full">
        <DashboardHeader setShowText={setShowText} showText={showText} />
        <div className="p-7 flex flex-col min-h-[92vh] gap-4">
          <InsertProductForm />
        </div>
      </div>
    </div>
  );
}

export default page;
