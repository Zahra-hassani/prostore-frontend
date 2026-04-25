import { getProducts } from "@/actions/product.action";
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
          <Link
            key={index}
            href={`products/${product.id}`}
            className="border p-3 rounded-xl"
          >
            {/* <Image
              src={`storage/${product.images[0].img_url}`}
              alt="Product image"
              height={900}
              width={900}
              className="w-full rounded-xl"
            /> */}
            <h1 className="font-bold">{product.name}</h1>
            <p>{product.brand}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
