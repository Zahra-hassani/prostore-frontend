"use client";
import { ArrowUpRight, Star } from "lucide-react";
import React, { useEffect, useState } from "react";

function ReviewsReport() {
  const [currentMonthReviews, setCurrentMonthReviews] = useState<{
    reviews: number;
  }>({ reviews: 0 });
  const [previousMonthReviews, setPreviousMonthReviews] = useState<{
    reviews: number;
  }>({ reviews: 0 });
  // get token
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function getCurrentMonthReviews() {
      const data = await fetch(
        "http://localhost:8000/api/dashboard/current-reviews",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      const response = await data.json();
      setCurrentMonthReviews(response);
    }
    async function getPreviousMonthReviews() {
      const data = await fetch(
        "http://localhost:8000/api/dashboard/previous-month-reviews",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      const response = await data.json();
      //   console.log(response);
      setPreviousMonthReviews(response);
    }
    getCurrentMonthReviews();
    getPreviousMonthReviews();
  }, []);
  return (
    <div className="flex justify-center flex-col items-center gap-3 border-r border-gray-300">
      <span className="flex gap-1 text-sm text-gray-500 dark:text-gray-50">
        <Star size={18} /> Reviewed Products
      </span>
      <span className="text-xs text-gray-400 dark:text-gray-100">
        {previousMonthReviews.reviews} Previous Month
      </span>
      <span className="font-bold text-2xl">{currentMonthReviews.reviews}</span>
      <span className="flex gap-1 text-xs text-gray-500">
        <ArrowUpRight size={18} className="text-green-600" />
        55.5% vs Previous Month
      </span>
    </div>
  );
}

export default ReviewsReport;
