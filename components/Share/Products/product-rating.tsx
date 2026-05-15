"use client";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React, { useState } from "react";

function ProductRating() {
  const [rateNumber, setRateNumber] = useState(0);
  function createStar(i: number) {
    return setRateNumber(i);
  }
  return (
    <div className="flex-center gap-3 items-center">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index}>
          <input
            type="number"
            className="hidden"
            onChange={(e) => setRateNumber(Number(e.target.value))}
            value={index}
          />
          <Star
            size={36}
            onClick={() => createStar(index + 1)}
            className={cn(
              rateNumber <= index ? "" : "fill-yellow-500 text-yellow-500",
            )}
          />
        </span>
      ))}
    </div>
  );
}

export default ProductRating;
