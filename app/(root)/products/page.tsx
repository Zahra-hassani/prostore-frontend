import { getProducts } from "@/actions/product.action";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { productInfo } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function page() {
  const data = await getProducts();
  const products: productInfo[] = data.data;
  //   console.log(data.data[0].images[0]);
  return (
    <div>
      <h1>All Products</h1>
      <div className="grid grid-cols-1 w-full md:grid-cols-4 gap-4 p-4">
        {products.map((product, index) => (
          <Card key={index}>
            <CardHeader className="h-64 w-full">
              <Link href={`products/${product.id}`}>
                <Image
                  src={`http://localhost:8000/storage/${product.images[0].img_url}`}
                  alt="Product image"
                  height={300}
                  width={300}
                  className="w-full h-full object-cover rounded"
                  unoptimized
                />
              </Link>
            </CardHeader>
            <CardContent>
              <p>{product.brand}</p>
              <h1 className="font-bold">{product.name}</h1>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default page;
