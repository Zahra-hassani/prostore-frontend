"use client";
import { deleteReview, getAllReviews } from "@/actions/review.action";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tz } from "@date-fns/tz";
import { format } from "date-fns";
import { ScanEyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useActionState, useEffect, useState } from "react";

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
  const [meta, setMeta] = useState<{
    current_page: number;
    links: {
      url: string;
      label: string;
      page: number | null;
      active: boolean;
    }[];
  } | null>(null);
  useEffect(() => {
    async function getReviews() {
      const data = await getAllReviews(url);
      setReviews(data.data);
      setMeta(data.meta);
    }
    getReviews();
  }, [url]);

  // delete review
  const [data, action] = useActionState(deleteReview, {
    message: "",
    success: false,
  });

  // refresh the path when delete
  const router = useRouter();
  if (data.message === "Review deleted successfully" && data.success) {
    router.push("/dashboard/reviews");
  }

  //   rendering before fetching data
  if (!reviews) {
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
        <div className="w-full flex justify-center items-center p-5">
          <Image src="/loader.gif" alt="loading..." height={50} width={50} />
        </div>
      </div>
    );
  }
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
              <TableHead className="font-semibold">Date</TableHead>
              <TableHead className="font-semibold">Delete</TableHead>
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
                <TableCell>
                  {format(review.created_at, "PPpp", {
                    in: tz("Asia/Kabul"),
                  })}
                </TableCell>
                <TableCell>
                  <AlertDialog>
                    <AlertDialogTrigger>Delete</AlertDialogTrigger>
                    <AlertDialogContent>
                      <form action={action}>
                        <Input
                          type="number"
                          defaultValue={review.id}
                          name="id"
                          className="hidden"
                        />
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Delete This comment
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete this comment?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction type="submit">
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </form>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* pagination */}
      {meta?.links && (
        <div className="w-full flex justify-center items-center gap-2 p-2">
          {meta.links.map((link) => (
            <Button
              onClick={() =>
                setUrl(
                  link.url
                    ? link.url
                    : `http://localhost:8000/api/dashboard/reviews?page=${meta.current_page}`,
                )
              }
              key={link.label}
              dangerouslySetInnerHTML={{ __html: link.label }}
              variant={link.active ? "default" : "outline"}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AllReviews;
