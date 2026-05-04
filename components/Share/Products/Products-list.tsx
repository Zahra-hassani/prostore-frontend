import React from "react";
import ProductCard from "./Product-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ProductsList({
  limit,
  products,
  title,
  page,
}: {
  limit?: number;
  products: any;
  title?: string;
  page?: string;
}) {
  const totalpage = products.meta.links;
  return (
    <div className="flex wrapper flex-col gap-4 p-4">
      <h1 className="text-xl font-semibold">
        {title ? title : "Our New Arrivals"}
      </h1>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
        {products.data.length > 0 &&
          products.data
            .slice(0, limit)
            .map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
      <div className="w-full flex-center">
        {products.meta.links
          .slice(1, products.meta.links.length - 1) // Slice to remove 'Previous'/'Next'
          .map((page: any, index: number) => (
            <Link
              key={page.label || index}
              href={`/products?page=${page.label}`}
            >
              <Button>{page.label}</Button>
            </Link>
          ))}
      </div>
      <div className="w-full flex-center">
        <Button>View All Products</Button>
      </div>
    </div>
  );
}

export default ProductsList;
