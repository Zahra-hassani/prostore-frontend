import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductPrice from "./product-price";

function ProductCard({ product }: { product: any }) {
  return (
    <Card>
      <CardHeader className="h-72 w-full p-0">
        <Link href={`products/${product.id}`}>
          <Image
            src={`http://localhost:8000/storage/${product.images[0].img_url}`}
            alt={product.name}
            height={300}
            width={300}
            className="h-full w-full object-cover rounded"
            unoptimized
          />
        </Link>
        {/* laravel filament */}
      </CardHeader>
      <CardContent className="p-4 grid gap-2">
        <span className="text-xs font-normal">{product.brand}</span>
        <span className="text-sm font-medium">{product.name}</span>
        <div className="flex-between">
          <span>4/5 Stars</span>
          <ProductPrice price={product.price.toString()} />
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
