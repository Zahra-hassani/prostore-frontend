"use client";
import { getAllReviews } from "@/actions/review.action";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScanEyeIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function AllReviews() {
  const [url, setUrl] = useState(
    "http://localhost:8000/api/dashboard/reviews?page=1",
  );
  const [reviews, setReviews] = useState<
    | {
        id: number;
        product_name: string;
        rating: number;
        user_name: string;
        user_email: string;
        comment: string;
        created_at: Date;
      }[]
    | null
  >(null);
  useEffect(() => {
    async function getReviews() {
      const data = await getAllReviews(url);
      setReviews(data.data);
    }
    getReviews();
  }, [url]);
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col rounded-lg border">
      <div className="w-full flex justify-between items-center border-b p-3">
        <span className="flex text-muted-foreground gap-1 items-center">
          <ScanEyeIcon /> All Reviews
        </span>
        <Link href={"/dashboard"}>
          <Button variant="outline">Dashboard</Button>
        </Link>
      </div>
      {/* reviews table */}
      <div className="w-full p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">User Name</TableHead>
              <TableHead className="font-semibold">User Email</TableHead>
              <TableHead className="font-semibold">Product</TableHead>
              <TableHead className="font-semibold">Rating</TableHead>
              <TableHead className="font-semibold">Comment</TableHead>
              {/* <TableHead>Delete</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviews?.map((review, index) => (
              <TableRow key={index}>
                <TableCell>{review.user_name}</TableCell>
                <TableCell>{review.user_email}</TableCell>
                <TableCell>{review.product_name}</TableCell>
                <TableCell>{review.rating}</TableCell>
                <TableCell>{review.comment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default AllReviews;
