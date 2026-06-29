import { ArrowUpRight, CircleDollarSignIcon } from "lucide-react";
import React from "react";
import ReviewsReport from "./ReviewsReport";
import CustomersReport from "./CustomersReport";
import ProductsReport from "./ProductsReport";

function OverAllReports() {
  return (
    <div className="w-full max-w-7xl">
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-2 p-4 rounded-2xl border bg-white dark:bg-gray-800/65">
        <div className="flex justify-center flex-col items-center gap-3 p-1 md:border-r border-b md:border-b-0 border-gray-300">
          <span className="flex gap-1 text-sm text-gray-500 dark:text-gray-50">
            <CircleDollarSignIcon size={18} /> Monthly Revenue
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-100">
            4000 Previous Month
          </span>
          <span className="font-bold text-2xl">8000</span>
          <span className="flex gap-1 text-xs text-gray-500">
            <ArrowUpRight size={18} className="text-green-600" />
            45.5% vs Previous Month
          </span>
        </div>
        <ReviewsReport />
        <CustomersReport />
        <ProductsReport />
      </div>
    </div>
  );
}

export default OverAllReports;
