import { getSingleProduct } from "@/actions/product.action";
import ProductImage from "@/components/Share/Products/Product-image";
import ProductPrice from "@/components/Share/Products/product-price";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response = await fetch(`http://localhost:8000/api/products/${id}`);
  const data = await response.json();
  const product = data.data;
  // console.log(data);
  return (
    <div className="h-screen w-full p-4">
      <div className="w-full grid grid-cols-1 md:grid-cols-5">
        <div className="h-80 w-full col-span-2">
          <ProductImage img={product.images} />
        </div>
        <div className="space-y-3 col-span-2 p-3">
          {/* <h1>{id}</h1> */}
          <h1 className="flex gap-3 items-center">
            Product name:
            <span className="font-semibold text-xl">{product.name}</span>
          </h1>
          <div className="flex itemce gap-2">
            <p>Price:</p>
            <ProductPrice price={product.price.toString()} />
          </div>
          <p>Brand: {product.brand}</p>
          <p>category: {product.category}</p>
          <p>{product.description}</p>
        </div>
        {/* order */}
        <Card className="px-4 h-fit">
          <CardContent className="flex w-full flex-col gap-3">
            <div className="flex justify-between">
              <div>Price:</div>
              <ProductPrice price={product.price.toString()} />
            </div>
            <div className="flex justify-between">
              <div>Status:</div>
              {product.stock > 0 ? (
                <Badge variant="outline">Available</Badge>
              ) : (
                <Badge variant="destructive">Unavailable</Badge>
              )}
            </div>
            {product.stock > 0 ? <Button>Add To Cart</Button> : ""}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default page;
