import {
  ArrowUpRight,
  CircleDollarSignIcon,
  ShoppingBasket,
  Star,
  UserCheck2Icon,
} from "lucide-react";
import React from "react";

function OverAllReports() {
  return (
    <div className="w-full max-w-7xl">
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-2 p-4 rounded-2xl border bg-white dark:bg-gray-800/65">
        <div className="flex justify-center flex-col items-center gap-3 border-r border-gray-300">
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
        <div className="flex justify-center flex-col items-center gap-3 border-r border-gray-300">
          <span className="flex gap-1 text-sm text-gray-500 dark:text-gray-50">
            <Star size={18} /> Reviewed Products
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-100">
            400 Previous Month
          </span>
          <span className="font-bold text-2xl">800</span>
          <span className="flex gap-1 text-xs text-gray-500">
            <ArrowUpRight size={18} className="text-green-600" />
            55.5% vs Previous Month
          </span>
        </div>
        <div className="flex justify-center flex-col items-center space-y-3 border-r border-gray-300">
          <span className="flex gap-1 text-sm text-gray-500 dark:text-gray-50">
            <UserCheck2Icon size={18} /> New Customers
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-100">
            4000 Previous Month
          </span>
          <span className="font-bold text-2xl">5000</span>
          <span className="flex gap-1 text-xs text-gray-500">
            <ArrowUpRight size={18} className="text-green-600" />
            40.5% vs Previous Month
          </span>
        </div>
        <div className="flex justify-center flex-col items-center gap-3">
          <span className="flex gap-1 text-sm text-gray-500 dark:text-gray-50">
            <ShoppingBasket size={18} /> Total Products
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-100">
            4000 Previous Month
          </span>
          <span className="font-bold text-2xl">5500</span>
          <span className="flex gap-1 text-xs text-gray-500">
            <ArrowUpRight size={18} className="text-green-600" />
            28.5% vs Previous Month
          </span>
        </div>
      </div>
    </div>
  );
}

export default OverAllReports;
