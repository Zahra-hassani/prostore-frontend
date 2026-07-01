"use client";
import { fetchAllProducts } from "@/actions/product.action";
import { Badge } from "@/components/ui/badge";
import { LucideSquareChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

function RecentOrders() {
  const [products, setProducts] = useState<
    {
      id: number;
      name: string;
      price: number;
      man_date: Date;
      expire_date: Date;
    }[]
  >([]);
  useEffect(() => {
    async function getProducts() {
      const data = await fetchAllProducts();
      setProducts(data.products.data);
    }
    getProducts();
  }, []);
  if (!products) {
    return;
  }
  return (
    <div className="rounded-2xl flex flex-col border max-w-6xl w-full bg-white dark:bg-gray-800/65">
      <div className="p-4 flex w-full border-b">
        <span className="flex gap-1 text-gray-500">
          <LucideSquareChevronRight /> Recent Orders
        </span>
      </div>
      <div className="p-4 w-full overflow-auto">
        <table className="text-sm md:w-full overflow-x-scroll">
          <thead>
            <tr className="border-b-2 text-left">
              <th className="p-4">Product Name</th>
              <th className="p-4">Price</th>
              <th className="p-4">Manufacturer date</th>
              <th className="p-4">Expire date</th>
            </tr>
          </thead>
          <tbody>
            {products.map((x) => (
              <tr key={x.id} className="border-b">
                <td className="p-4">{x.name}</td>
                <td className="p-4">{x.price}</td>
                <td className="p-4">{x.man_date.toString()}</td>
                <td className="p-4">{x.expire_date.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrders;
