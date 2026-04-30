import { getSingleProduct } from "@/actions/product.action";
import Image from "next/image";
import React from "react";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response = await fetch(`http://localhost:8000/api/products/${id}`);
  const data = await response.json();
  const product = data.data;
  console.log(data);
  return (
    <div className="h-screen w-full p-4 flex justify-center items-center">
      <div className="grid w-3/4 grid-cols-1 md:grid-cols-2">
        <div className="h-72 w-full overflow-hidden">
          <Image
            src={`http://localhost:8000/storage/${product.images[0].img_url}`}
            alt={product.name}
            height={500}
            width={500}
            unoptimized
            className="h-full w-full rounded"
          />
        </div>
        <div className="space-y-3 p-3">
          {/* <h1>{id}</h1> */}
          <h1>
            Product name:{" "}
            <span className="font-semibold text-xl">{product.name}</span>
          </h1>
          <p>Price: {product.price}</p>
          <p>Brand: {product.brand}</p>
          <p>category: {product.category}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default page;
