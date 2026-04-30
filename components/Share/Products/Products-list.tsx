import React from "react";
import ProductCard from "./Product-card";

function ProductsList({ products, title }: { products: any; title?: string }) {
  return (
    <div className="flex wrapper flex-col gap-4 p-4">
      <h1 className="text-xl font-semibold">
        {title ? title : "Our New Arrivals"}
      </h1>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
        {products.data.length > 0 &&
          products.data.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default ProductsList;
