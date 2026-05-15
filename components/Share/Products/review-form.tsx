import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React from "react";
import ProductRating from "./product-rating";

function ReviewForm() {
  return (
    <div className="border-accent-foreground p-4 w-full max-w-2xl mx-auto flex flex-col">
      <form action="" method="post">
        <div className="space-y-2 w-full">
          <label htmlFor="rating">Rate Product:</label>
          <ProductRating />
        </div>
        <div className="space-y-2 w-full min-h-full">
          <label htmlFor="userName">Your comment</label>
          <textarea
            className="w-full h-36 rounded-xl resize-none focus:outline-0 p-2 border"
            placeholder="Enter your comment..."
          ></textarea>
        </div>
        <div>
          <Button variant="default">Send</Button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
