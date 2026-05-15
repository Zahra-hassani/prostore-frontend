import React from "react";
import ReviewCard from "./review-card";

function ProductReviews({ reviews, limit }: { reviews: any[]; limit: number }) {
  return (
    <div className="h-fit w-full space-y-1.5">
      {/* <h1>Reviews section</h1> */}
      {reviews.slice(0, limit).map((review: any, index: number) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
}

export default ProductReviews;
