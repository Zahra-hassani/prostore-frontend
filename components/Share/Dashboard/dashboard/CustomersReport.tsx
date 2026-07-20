"use client";
import { ArrowUpRight, UserCheck2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";

function CustomersReport() {
  const [currentMonthCustomers, setCurrentMonthCustomers] = useState<{
    users: number;
  }>({ users: 0 });
  const [previousMonthCustomers, setPreviousMonthCustomers] = useState<{
    users: number;
  }>({ users: 0 });
  const token = Cookie.get("token");
  useEffect(() => {
    async function getCurrentMonthCustomers() {
      const data = await fetch(
        "http://localhost:8000/api/dashboard/current-month-users",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      const response = await data.json();
      setCurrentMonthCustomers(response);
    }
    async function getPreviousMonthCustomers() {
      const data = await fetch(
        "http://localhost:8000/api/dashboard/previous-month-users",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      const response = await data.json();
      setPreviousMonthCustomers(response);
    }
    getCurrentMonthCustomers();
    getPreviousMonthCustomers();
  }, []);
  return (
    <div className="flex justify-center flex-col items-center p-1 space-y-3 md:border-r border-b md:border-b-0 border-gray-300">
      <span className="flex gap-1 text-sm text-gray-500 dark:text-gray-50">
        <UserCheck2Icon size={18} /> New Customers
      </span>
      <span className="text-xs text-gray-400 dark:text-gray-100">
        {previousMonthCustomers.users} Previous Month
      </span>
      <span className="font-bold text-2xl">{currentMonthCustomers.users}</span>
      <span className="flex gap-1 text-xs text-gray-500">
        <ArrowUpRight size={18} className="text-green-600" />
        40.5% vs Previous Month
      </span>
    </div>
  );
}

export default CustomersReport;
