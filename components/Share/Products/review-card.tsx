import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import { Star, UserCircle2 } from "lucide-react";
import React from "react";

function ReviewCard({ review }: { review: any }) {
  return (
    <div className="w-full flex justify-between border rounded-lg p-1.5">
      <div>
        <div className="w-fit grid grid-cols-2 gap-0 p-2">
          <span className="py-2 px-3.5 rounded-full flex justify-center text-yellow-500 w-fit items-center font-bold bg-stone-100">
            {review.user_name.slice(0, 1).toUpperCase()}
          </span>
          <div>
            <p className="">{review.user_name}</p>
            <p className="text-xs text-muted-foreground">{review.user_email}</p>
          </div>
        </div>
        <div className="bg-stone-50 border-l-2 w-full p-5 border-yellow-500 rounded-r-lg">
          {review.comment}
        </div>
      </div>
      <div className="flex justify-between flex-col items-end">
        <div className="flex">
          {Array.from({ length: 5 }, (_, index) => {
            let fill =
              Math.max(Math.min((review.rating - index * 2) / 2, 1), 0) * 100;
            return (
              <div key={index} className="relative">
                <span className="w-6 h-6">
                  <Star className="text-yellow-500" />
                </span>
                <span
                  className="w-6 h-6 absolute top-0 left-0 overflow-hidden"
                  style={{ width: `${fill}%` }}
                >
                  <Star className="text-yellow-500 fill-yellow-500" />
                </span>
              </div>
            );
          })}
        </div>
        {/* <span className="text-muted-foreground mt-auto text-xs">
          {formatDistanceToNow(review.created_at)} ago
        </span> */}
      </div>
    </div>
  );
}

export default ReviewCard;
