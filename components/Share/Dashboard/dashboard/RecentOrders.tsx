"use client";
import { fetchAllProducts } from "@/actions/product.action";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LucideSquareChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function RecentOrders() {
  const [url, setUrl] = useState<any>(
    "http://localhost:8000/api/dashboard/all-products?page=1",
  );
  const [products, setProducts] = useState<any>();
  useEffect(() => {
    async function getProducts() {
      const data = await fetchAllProducts(url);
      setProducts(data.products);
      setUrl(data.products.links);
    }
    getProducts();
  }, [url]);
  if (!products) {
    return (
      <div className="rounded-2xl flex flex-col justify-center items-center border max-w-6xl w-full bg-white dark:bg-gray-800/65">
        <div className="p-4 flex w-full border-b">
          <span className="flex gap-1 text-gray-500">
            <LucideSquareChevronRight /> Recent Orders
          </span>
        </div>
        <div className="p-6 w-full flex justify-center items-center">
          <Image src="/loader.gif" alt="Loading..." height={80} width={80} />
        </div>
      </div>
    );
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
            {products.data.map((x: any) => (
              <tr key={x.id} className="border-b">
                <td className="p-4">{x.name}</td>
                <td className="p-4">{x.price}</td>
                <td className="p-4">{x.man_date.toString()}</td>
                <td className="p-4">{x.expire_date.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full flex justify-center items-center gap-2 p-2">
          {url.map((link: any) => (
            <Button
              onClick={() =>
                setUrl(
                  link.url
                    ? link.url
                    : `http://localhost:8000/api/dashboard/all-products?page=${products.current_page}`,
                )
              }
              key={link.label}
              variant={link.active ? "default" : "outline"}
              dangerouslySetInnerHTML={{ __html: link.label }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentOrders;
