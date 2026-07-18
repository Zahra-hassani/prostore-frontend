"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useActionState, useEffect, useState } from "react";
import ProductRating from "./product-rating";
import { addComment } from "@/actions/review.action";
import { getUser } from "@/actions/auth.action";
import { usePathname, useRouter } from "next/navigation";

type User = {
  id: number;
  name: string;
};

function ReviewForm({ productId }: { productId: string }) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const token = localStorage.getItem("token") as string;
    async function getUsers(): Promise<User> {
      return await getUser(token);
    }
    async function setU() {
      const foundUser = await getUsers();
      if (foundUser?.id) {
        setUser(foundUser);
      } else {
        setUser(null);
      }
    }
    setU();
  }, []);
  // get data from local storage and set as input value
  const router = useRouter();
  const [data, action, pending] = useActionState(addComment, {
    message: "",
    success: false,
  });
  if (data.success) {
    router.push(`/products/${productId}`);
  }
  return (
    <div className="border-accent-foreground p-4 w-full max-w-2xl mx-auto flex flex-col">
      <form action={action}>
        <div className="hidden">
          <Input type="text" readOnly name="user_id" value={user?.id} />
          <Input type="text" readOnly name="product_id" value={productId} />
        </div>
        <div className="space-y-2 w-full">
          <label htmlFor="rating">Rate Product:</label>
          <ProductRating />
        </div>
        <div className="space-y-2 w-full min-h-full">
          <label htmlFor="userName">Your comment</label>
          <textarea
            name="comment"
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
