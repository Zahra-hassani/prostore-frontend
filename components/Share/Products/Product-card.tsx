import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductCard({ product }: { product: any }) {
  return (
    <Card>
      <CardHeader>
        <Link href={`products/${product.id}`}>
          <Image
            src={`/public/storage/${product.images[0].img_url}`}
            alt={product.name}
            height={300}
            width={300}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-2">
        <span className="text-xs font-normal">{product.brand}</span>
        <span className="text-sm font-medium">{product.name}</span>
        <div className="flex-between">
          <span>${product.price}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
