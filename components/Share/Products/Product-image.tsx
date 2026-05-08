"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

function ProductImage({ img }: { img: any[] }) {
  console.log(img);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="w-full space-y-4">
      <div className="w-fit mx-auto h-94">
        <Image
          className="h-full"
          src={`http://localhost:8000/storage/${img[currentIndex].img_url}`}
          alt="Product image"
          height={1000}
          width={1000}
          unoptimized
        />
      </div>
      <div className="flex w-full gap-2">
        {img.map((image, index) => (
          <div
            key={image.id}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "border rounded-md h-28 w-28 cursor-pointer hover:border-orange-700",
              currentIndex === index && "border-orange-400",
            )}
          >
            <Image
              src={`http://localhost:8000/storage/${image.img_url}`}
              alt={`product ${index}`}
              height={100}
              width={100}
              unoptimized
              className="h-full w-full rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImage;
