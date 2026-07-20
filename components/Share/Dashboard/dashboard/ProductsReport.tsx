"use client";
import { ArrowUpRight, ShoppingBasket } from "lucide-react";
import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";

function ProductsReport() {
  const [currentMonthProducts, setCurrentMonthProducts] = useState<{
    products: number;
  }>({ products: 0 });
  const [previousMonthProducts, setPreviousMonthProducts] = useState<{
    products: number;
  }>({ products: 0 });
  //   get token
  const token = Cookie.get("token");
  useEffect(() => {
    async function getCurrentMonthProducts() {
      const data = await fetch(
        "http://localhost:8000/api/dashboard/current-month-products",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      const response = await data.json();
      setCurrentMonthProducts(response);
    }
    async function getPreviousMonthProducts() {
      const data = await fetch(
        "http://localhost:8000/api/dashboard/previous-month-products",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      const response = await data.json();
      setPreviousMonthProducts(response);
    }
    getCurrentMonthProducts();
    getPreviousMonthProducts();
  }, []);
  return (
    <div className="flex justify-center flex-col items-center gap-3">
      <span className="flex gap-1 text-sm text-gray-500 dark:text-gray-50">
        <ShoppingBasket size={18} /> Total Products
      </span>
      <span className="text-xs text-gray-400 dark:text-gray-100">
        {previousMonthProducts.products} Previous Month
      </span>
      <span className="font-bold text-2xl">
        {currentMonthProducts.products}
      </span>
      <span className="flex gap-1 text-xs text-gray-500">
        <ArrowUpRight size={18} className="text-green-600" />
        28.5% vs Previous Month
      </span>
    </div>
  );
}

export default ProductsReport;
