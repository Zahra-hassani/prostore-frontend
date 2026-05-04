import { getProducts } from "@/actions/product.action";
import ProductPrice from "@/components/Share/Products/product-price";
import ProductsList from "@/components/Share/Products/Products-list";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { productInfo } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function page({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;
  const data = await getProducts();
  const products: productInfo[] = data.data;
  const totalPage = data.meta.links;
  //   console.log(data.data[0].images[0]);
  return (
    <div>
      {/* <div className="grid grid-cols-1 w-full md:grid-cols-4 gap-4 p-4"> */}
      {/* {products.map((product) => (
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
              <div className="flex-between">
                <span>4/5 Stars</span>
                <ProductPrice price={product.price.toString()} />
              </div>
            </CardContent>
          </Card>
        ))} */}
      <ProductsList products={data} page={page} />
      {/* </div> */}
    </div>
  );
}

export default page;
