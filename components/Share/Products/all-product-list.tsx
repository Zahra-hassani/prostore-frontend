"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./Product-card";
import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/actions/product.action";

function AllProductsList({ title }: { title?: string }) {
  const [link, setLink] = useState("http://localhost:8000/api/products?page=1");
  const [list, setList] = useState<any>([]);
  useEffect(() => {
    async function getData() {
      const products = await getAllProducts(link);
      setList(products);
    }
    getData();
  }, [link]);
  if (list.length === 0) {
    return null;
  }
  return (
    <div className="flex wrapper flex-col gap-4 p-4">
      <h1 className="text-xl font-semibold">
        {title ? title : "Our New Arrivals"}
      </h1>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
        {list?.data.length > 0 &&
          list.data.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <div className="w-fit p-3">
        <span className="font-light text-base">
          Page {list?.meta.current_page} of {list?.meta.last_page}
        </span>
      </div>
      <div className="w-full max-w-sm mx-auto flex-between">
        {list.meta.links.map((link: any) => (
          <Button
            onClick={() =>
              setLink(
                link.url
                  ? link.url
                  : `http://localhost:8000/api/products?page=${list.meta.current_page}`,
              )
            }
            key={link.label}
            variant={link.active ? "default" : "outline"}
            dangerouslySetInnerHTML={{ __html: link.label }}
          />
        ))}
      </div>
      {/* <div className="w-full flex-center">
        <Button>View All Products</Button>
      </div> */}
    </div>
  );
}

export default AllProductsList;
