"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React, { useActionState } from "react";
import ProductRating from "./product-rating";
import { addComment } from "@/actions/review.action";

function ReviewForm() {
  // get data from local storage and set as input value
  const [data, action, pending] = useActionState(addComment, {
    message: "",
    success: false,
  });
  return (
    <div className="border-accent-foreground p-4 w-full max-w-2xl mx-auto flex flex-col">
      <form action={action}>
        <div className="hidden">
          <Input type="text" />
        </div>
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
          <Button type="submit" variant="default">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
